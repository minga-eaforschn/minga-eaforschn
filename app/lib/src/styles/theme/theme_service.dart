import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';

@lazySingleton
class ThemeService {
  const ThemeService(this._preferences);

  static const _themeKey = 'theme';

  final SharedPreferences _preferences;

  String? getCurrentThemeKey() => _preferences.getString(_themeKey);

  Future<void> setCurrentThemeKey(String themeKey) =>
      _preferences.setString(_themeKey, themeKey);
}
