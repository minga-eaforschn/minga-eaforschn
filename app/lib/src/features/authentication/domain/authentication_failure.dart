import 'package:freezed_annotation/freezed_annotation.dart';

part 'authentication_failure.freezed.dart';

@freezed
class SignInFailure with _$SignInFailure {
  const factory SignInFailure.cancelledByUser() = _CancelledByUser;
  const factory SignInFailure.unexpected() = _SignInUnexpected;
  const factory SignInFailure.serverError() = _SignInServerError;

}

@freezed
class SignOutFailure with _$SignOutFailure {
  const factory SignOutFailure.unexpected() = _SignOutUnexpected;
  const factory SignOutFailure.serverError() = _SignOutServerError;
}
