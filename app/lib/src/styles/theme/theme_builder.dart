import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'theme.dart';
import 'theme_cubit.dart';

class ThemeBuilder extends StatelessWidget {
  const ThemeBuilder({
    Key? key,
    required this.builder,
  }) : super(key: key);

  final Widget Function(BuildContext context, AppTheme theme) builder;

  @override
  Widget build(BuildContext context) => BlocBuilder<ThemeCubit, AppTheme>(
        builder: builder,
      );
}
