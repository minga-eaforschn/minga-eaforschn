import 'package:flutter/material.dart';

class DisplayError extends StatelessWidget {
  const DisplayError(this.error, {Key? key}) : super(key: key);
  final Object error;

  @override
  Widget build(BuildContext context) => Center(
        child: Text(
          error.toString(),
        ),
      );
}
