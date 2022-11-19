import 'package:dio/dio.dart';

import '../env.dart';
import '../get_it/get_it.dart';
import 'interceptors.dart';

void registerPresets(Env env) {
  for (final preset in DioPreset.values) {
    getIt.registerLazySingleton<Dio>(
      () => preset.factory.configure(
        Dio(
          preset.factory.getOptions(env).toDioOptions(),
        ),
        env,
      ),
      instanceName: preset.name,
    );
  }
}

class DioPresetFactory {
  const DioPresetFactory();

  PresetOptions getOptions(final Env env) => PresetOptions(
        name: runtimeType.toString(),
      );

  Dio configure(final Dio dio, final Env env) => dio;
}

class BackendDioPresetFactory extends DioPresetFactory {
  const BackendDioPresetFactory();

  @override
  PresetOptions getOptions(final Env env) => PresetOptions(
        name: 'backend',
        url: env.backendUrl,
      );

  @override
  Dio configure(Dio dio, Env env) {
    dio.interceptors
      ..add(LoggingInterceptor())
      ..add(
        BackendAuthHeaderInterceptor(),
      );
    return dio;
  }
}

enum DioPreset {
  backend(
    BackendDioPresetFactory(),
  ),
  ;

  const DioPreset(this.factory);

  final DioPresetFactory factory;
}

class PresetOptions {
  const PresetOptions({
    this.url,
    required this.name,
  });

  final String? url;
  final String name;

  BaseOptions toDioOptions() => BaseOptions(
        baseUrl: url ?? '',
      );
}
