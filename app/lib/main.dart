import 'dart:async';

import 'package:flutter/material.dart';

import 'src/core/bloc_providers.dart';
import 'src/core/error_handling/report_error.dart';
import 'src/core/get_it/get_it.dart';
import 'src/core/router/app_router.dart';
import 'src/styles/theme/theme_builder.dart';

void main() async {
  await runZonedGuarded(
    () async {
      WidgetsFlutterBinding.ensureInitialized();
      await injectDependencies();
      runApp(const HackaTum());
    },
    (error, stack) {
      reportError(
        message: 'Unhandled error',
        error: error,
        stackTrace: stack,
      );
    },
  );
}

class HackaTum extends StatelessWidget {
  const HackaTum({Key? key}) : super(key: key);

  AppRouter get _router => getIt<AppRouter>();

  @override
  Widget build(BuildContext context) => BlocProviders(
        child: ThemeBuilder(
          builder: (context, theme) => MaterialApp.router(
            theme: theme.data.toThemeData(),
            routerDelegate: _router.delegate(),
            routeInformationParser: _router.defaultRouteParser(),
            debugShowCheckedModeBanner: false,
            title: 'HackaTUM',
          ),
        ),
      );
}
