import 'package:flutter/material.dart';

import '../loading_indicator.dart';

class DisplayLoading extends StatelessWidget {
  const DisplayLoading({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => const Center(
        child: LoadingIndicator(),
      );
}
