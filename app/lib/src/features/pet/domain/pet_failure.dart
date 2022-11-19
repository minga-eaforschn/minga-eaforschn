import 'package:freezed_annotation/freezed_annotation.dart';

part 'pet_failure.freezed.dart';

@freezed
class GetPetFailure with _$GetPetFailure {
  const factory GetPetFailure.unexpected() = _GetPetFailureUnexpected;
  const factory GetPetFailure.network() = _GetPetFailureNetwork;
}
