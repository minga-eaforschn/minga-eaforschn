import 'package:fpdart/fpdart.dart';
import 'package:graphql/client.dart';
import 'package:injectable/injectable.dart';

import '../../../../graphql/query/pet/GetPets.graphql.dart';
import '../../../core/error_handling/data/error_report_service.dart';
import '../domain/pet.dart';
import '../domain/pet_failure.dart';
import 'pet_mapper.dart';

@lazySingleton
class PetRepository {
  const PetRepository(
    this._graphQLClient,
    this._petMapper,
    this._errorReportService,
  );

  final GraphQLClient _graphQLClient;
  final PetMapper _petMapper;
  final ErrorReportService _errorReportService;

  TaskEither<GetPetFailure, List<Pet>> getPets() => TaskEither(
        () async {
          try {
            final result = await _graphQLClient.query(Options$Query$GetPets());
            return right(_petMapper.parseMany(result.parsedData!.pet));
          } on GraphQLError catch (e, str) {
            await _errorReportService.reportGraphQLError(
              e,
              stackTrace: str,
            );
            return left(const GetPetFailure.network());
          } catch (e, str) {
            await _errorReportService.reportError(
              message: 'Could not get pets',
              error: e,
              stackTrace: str,
            );
            return left(const GetPetFailure.unexpected());
          }
        },
      );
}
