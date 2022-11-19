import 'package:bloc/bloc.dart';
import 'package:injectable/injectable.dart';

import 'theme.dart';
import 'theme_service.dart';

/// A [Cubit] which manages the current [AppTheme].
@lazySingleton
class ThemeCubit extends Cubit<AppTheme> {
  ThemeCubit(this._themeService) : super(AppTheme.hackaTum) {
    _loadTheme();
  }

  final ThemeService _themeService;

  /// Loads the current theme.
  void _loadTheme() {
    final themeKey = _themeService.getCurrentThemeKey();
    for (final theme in AppTheme.values) {
      if (theme.key == themeKey) {
        emit(theme);
        return;
      }
    }
  }

  /// Sets the current [AppTheme].
  void setTheme(AppTheme theme) {
    emit(theme);
  }

  void nextTheme() {
    final index = AppTheme.values.indexOf(state);
    final nextIndex = (index + 1) % AppTheme.values.length;
    emit(AppTheme.values[nextIndex]);
  }
}
