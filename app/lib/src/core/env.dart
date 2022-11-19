import 'package:envied/envied.dart';
import 'package:injectable/injectable.dart';

part 'env.g.dart';

const _envFilePath = '.env';

@Envied(path: _envFilePath, obfuscate: true, requireEnvFile: true)
@LazySingleton(as: Env)
class DotEnv implements Env {
  @override
  @EnviedField(varName: 'HASURA_ADMIN_SECRET')
  final hasuraAdminSecret = _DotEnv.hasuraAdminSecret;

  @override
  @EnviedField(varName: 'LOGTO_APP_ID')
  final logtoAppId = _DotEnv.logtoAppId;

  @override
  @EnviedField(varName: 'AUTH_ENDPOINT')
  final authEndpoint = _DotEnv.authEndpoint;

  @override
  @EnviedField(varName: 'AUTH_REDIRECT_URI')
  final authRedirectUri = _DotEnv.authRedirectUri;

  @override
  @EnviedField(varName: 'HASURA_URL')
  final hasuraUrl = _DotEnv.hasuraUrl;

  @override
  @EnviedField(varName: 'BACKEND_URL')
  final backendUrl = _DotEnv.backendUrl;

  @override
  @EnviedField(varName: 'GRAPHQL_ENDPOINT')
  final graphQLEndpoint = _DotEnv.graphQLEndpoint;

  @override
  @EnviedField(varName: 'GRAPHQL_SUBSCRIPTION_ENDPOINT')
  final graphQLSubscriptionEndpoint = _DotEnv.graphQLSubscriptionEndpoint;
}

abstract class Env {
  String get hasuraAdminSecret;

  String get hasuraUrl;

  String get graphQLEndpoint;

  String get logtoAppId;

  String get authEndpoint;

  String get authRedirectUri;

  String get backendUrl;

  String get graphQLSubscriptionEndpoint;
}
