import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:gap/gap.dart';

import '../core/router/app_router.dart';
import '../styles/theme/theme_cubit.dart';
import 'loading_indicator.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              const SizedBox(),
              Column(
                children: const [
                  LoadingIndicator(),
                  Gap(10),
                  Text('Loading...'),
                ],
              ),
              Text(
                'HackaTUM 2022',
                style: Theme.of(context).textTheme.headline3,
              ),
              ElevatedButton(
                onPressed: () {
                  context.read<ThemeCubit>().nextTheme();
                },
                child: const Text('Change Theme'),
              ),
              ElevatedButton(
                onPressed: () async {
                  context.router.replace(const PetViewRoute());
                },
                child: const Text('View pets'),
              ),
            ],
          ),
        ),
      );
}
