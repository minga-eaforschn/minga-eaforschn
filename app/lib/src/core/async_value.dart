import 'package:freezed_annotation/freezed_annotation.dart';

part 'async_value.freezed.dart';

@freezed
class AsyncValue<T> with _$AsyncValue<T> {
  const factory AsyncValue.loading() = _Loading<T>;

  const factory AsyncValue.data(T data) = _Data<T>;

  const factory AsyncValue.error(Object error, [StackTrace? stackTrace]) =
      _Error<T>;
}
