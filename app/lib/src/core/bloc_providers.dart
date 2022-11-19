import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../features/pet/application/pet_cubit.dart';
import '../styles/theme/theme_cubit.dart';
import 'get_it/get_it.dart';

class BlocProviders extends StatelessWidget {
  const BlocProviders({Key? key, required this.child}) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context) => MultiBlocProvider(
        providers: [
          BlocProvider.value(value: getIt<ThemeCubit>()),
          BlocProvider.value(value: getIt<PetCubit>()),
        ],
        child: child,
      );
}
