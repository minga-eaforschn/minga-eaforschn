part of 'pet_cubit.dart';

@freezed
class PetState with _$PetState {
  const factory PetState({
    required AsyncValue<List<Pet>> pets,
  }) = _PetState;
}
