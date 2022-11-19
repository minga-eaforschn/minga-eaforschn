import 'package:flutter/services.dart';
import 'package:fpdart/fpdart.dart';
import 'package:injectable/injectable.dart';
import 'package:logto_dart_sdk/logto_client.dart';

// ignore: implementation_imports
import 'package:logto_dart_sdk/src/exceptions/logto_auth_exceptions.dart';

import '../../../core/env.dart';
import '../domain/authentication_failure.dart';

@lazySingleton
class AuthenticationService {
  const AuthenticationService(this._logtoClient, this.env);

  final LogtoClient _logtoClient;

  final Env env;

  /// Opens a browser window to authenticate the user.
  /// Returns the user's ID if the authentication was successful.
  TaskEither<SignInFailure, String> signIn() => TaskEither(
        () async {
          try {
            await _logtoClient.signIn(env.authRedirectUri);
          } on PlatformException catch (e) {
            return left(const SignInFailure.cancelledByUser());
          } on LogtoAuthException catch (e) {
            return left(const SignInFailure.serverError());
          } catch (e) {
            return left(const SignInFailure.unexpected());
          }
          final userLogtoId = (await _logtoClient.idTokenClaims)?.subject;
          if (userLogtoId == null) {
            return left(const SignInFailure.serverError());
          }
          return right(userLogtoId);
        },
      );

  /// Signs out the user.
  TaskEither<SignOutFailure, Unit> signOut() => TaskEither(
        () async {
          try {
            await _logtoClient.signOut();
          } on LogtoAuthException catch (e) {
            return left(const SignOutFailure.serverError());
          } catch (e) {
            return left(const SignOutFailure.unexpected());
          }
          return right(unit);
        },
      );

  /// Returns the user's ID if the user is authenticated.
  TaskEither<Unit, String> getAuthenticatedUserId() => TaskEither(
        () async {
          final userLogtoId = (await _logtoClient.idTokenClaims)?.subject;
          if (userLogtoId == null) {
            return left(unit);
          }
          return right(userLogtoId);
        },
      );
}
