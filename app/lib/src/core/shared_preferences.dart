import 'package:shared_preferences/shared_preferences.dart';

Future<SharedPreferences> getSharedPreferences() async =>
    SharedPreferences.getInstance();
