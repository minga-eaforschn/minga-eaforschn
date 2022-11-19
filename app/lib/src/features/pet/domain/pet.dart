import 'package:freezed_annotation/freezed_annotation.dart';

part 'pet.freezed.dart';

@freezed
class Pet with _$Pet {
  const factory Pet({
    required int id,
    required String name,
  }) = _Pet;
}
