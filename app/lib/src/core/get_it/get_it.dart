import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';

import '../dio/presets.dart';
import '../env.dart';
import 'get_it.config.dart';

final GetIt getIt = GetIt.instance;

@InjectableInit()
Future<void> injectDependencies({
  String environment = Environment.dev,
}) async {
  await $initGetIt(
    getIt,
    environment: environment,
  );
  registerPresets(getIt<Env>());
}
