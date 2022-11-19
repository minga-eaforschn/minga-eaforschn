import 'package:flutter/material.dart';

import '../../core/async_value.dart';
import 'display_error.dart';
import 'display_loading.dart';

class AsyncValueBuilder<T> extends StatelessWidget {
  const AsyncValueBuilder(
    this.value, {
    Key? key,
    required this.builder,
    this.errorBuilder,
    this.loadingBuilder,
  }) : super(key: key);

  final AsyncValue<T> value;

  final WidgetBuilder? loadingBuilder;
  final Widget Function(BuildContext context, Object error)? errorBuilder;
  final Widget Function(BuildContext context, T value) builder;

  @override
  Widget build(BuildContext context) => value.when(
        loading: () {
          if (loadingBuilder != null) {
            return loadingBuilder!(context);
          }
          return const DisplayLoading();
        },
        data: (data) => builder(
          context,
          data,
        ),
        error: (error, stackTrace) {
          if (errorBuilder != null) {
            return errorBuilder!(context, error);
          }
          return DisplayError(error);
        },
      );
}
