import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';

import '../../features/pet/presentation/pet_view.dart';
import '../../widgets/splash_screen.dart';

part 'app_router.gr.dart';

@lazySingleton
@MaterialAutoRouter(
  replaceInRouteName: 'Page,Screen,Route,View',
  preferRelativeImports: true,
  routes: <AutoRoute>[
    CustomRoute(
      path: '/splash',
      page: SplashScreen,
      initial: true,
    ),
    CustomRoute(
      page: PetView,
      path: '/pets/view',
    ),
  ],
)
class AppRouter extends _$AppRouter {}
