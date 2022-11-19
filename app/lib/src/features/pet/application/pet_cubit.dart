import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

import '../../../core/async_value.dart';
import '../data/pet_repository.dart';
import '../domain/pet.dart';

part 'pet_cubit.freezed.dart';
part 'pet_state.dart';

@lazySingleton
class PetCubit extends Cubit<PetState> {
  PetCubit(this._petRepository)
      : super(
          const PetState(
            pets: AsyncValue.loading(),
          ),
        );

  final PetRepository _petRepository;

  Future<void> load() async {
    emit(
      state.copyWith(
        pets: const AsyncValue.loading(),
      ),
    );
    final result = await _petRepository.getPets().run();

    result.fold(
      (failure) => emit(
        PetState(
          pets: AsyncValue.error(failure),
        ),
      ),
      (pets) => emit(
        PetState(
          pets: AsyncValue.data(pets),
        ),
      ),
    );
  }
}
