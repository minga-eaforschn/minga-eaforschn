import 'package:dio/dio.dart';
import 'package:graphql/client.dart';
import 'package:injectable/injectable.dart';
import 'package:logger/logger.dart';
import 'package:logto_dart_sdk/logto_dart_sdk.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../dio/dio.dart';
import '../env.dart';
import '../graphql/graphql.dart';
import '../logger.dart';
import '../logto.dart';
import '../shared_preferences.dart';
import 'get_it.dart';

@module
abstract class GetItModules {
  const GetItModules();

  Env get _env => getIt<Env>();

  @LazySingleton(
    env: [
      Environment.dev,
      Environment.prod,
    ],
  )
  GraphQLClient get graphQLClient => getGraphQLClient(_env);

  @lazySingleton
  Logger get logger => getLogger();

  @lazySingleton
  LogtoClient get logtoClient => getLogtoClient(_env);

  @lazySingleton
  Dio get dio => getDio();

  @preResolve
  @LazySingleton(
    env: [
      Environment.dev,
      Environment.prod,
    ],
  )
  Future<SharedPreferences> get prefs => getSharedPreferences();
}
