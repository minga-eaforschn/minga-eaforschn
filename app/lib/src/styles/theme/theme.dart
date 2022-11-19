import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'theme_cubit.dart';

/// Represents a theme of the application.
///
/// Add new themes here.
enum AppTheme {
  light(_LightAppThemeData()),
  hackaTum(_HackaTUMThemeData());

  const AppTheme(this.data);

  final AppThemeData data;

  String get key => data.key;

  static AppThemeData of(BuildContext context) =>
      context.read<ThemeCubit>().state.data;
}

abstract class AppThemeData {
  const AppThemeData();

  /// The key of the theme.
  ///
  /// It is used to uniquely identify the theme.
  /// Do not change it after the theme has been created.
  String get key;

  Color get backgroundColor;

  Color get primaryColor;

  Color get surfaceColor;

  Brightness get brightness;

  Color get errorColor => Colors.red;

  ColorScheme get _colorScheme => ColorScheme.fromSeed(
        seedColor: primaryColor,
        primary: primaryColor,
        background: backgroundColor,
        surface: surfaceColor,
        brightness: brightness,
        error: errorColor,
      );

  InputDecorationTheme get inputDecorationTheme => InputDecorationTheme(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
        ),
      );

  ThemeData toThemeData() => ThemeData(
        useMaterial3: true,
        colorScheme: _colorScheme,
        scaffoldBackgroundColor: backgroundColor,
        cardColor: surfaceColor,
        textTheme: const TextTheme(
          bodyText2: TextStyle(
            fontSize: 17,
          ),
        ).apply(
          bodyColor: _colorScheme.onSurface,
          displayColor: _colorScheme.onSurface,
        ),
        inputDecorationTheme: inputDecorationTheme,
      );
}

class _HackaTUMThemeData extends AppThemeData {
  const _HackaTUMThemeData();

  @override
  String get key => 'hackatum';

  @override
  Color get backgroundColor => const Color(0xFF030b21);

  @override
  Color get primaryColor => const Color(0xFF677E93);

  @override
  Color get surfaceColor => const Color(0xFF07142C);

  @override
  Brightness get brightness => Brightness.dark;
}

class _LightAppThemeData extends AppThemeData {
  const _LightAppThemeData();

  @override
  String get key => 'light';

  @override
  Color get backgroundColor => Colors.white;

  @override
  Color get primaryColor => Colors.blue;

  @override
  Color get surfaceColor => Colors.white70;

  @override
  Brightness get brightness => Brightness.light;
}
