import 'package:flutter_test/flutter_test.dart';
import 'package:fpdart/fpdart.dart';
import 'package:graphql/client.dart';
import 'package:hackatum/graphql/query/pet/GetPets.graphql.dart';
import 'package:hackatum/src/core/get_it/get_it.dart';
import 'package:hackatum/src/features/pet/data/pet_repository.dart';
import 'package:hackatum/src/features/pet/domain/pet.dart';
import 'package:injectable/injectable.dart' as inj;

class FakeGraphQLClient extends Fake implements GraphQLClient {
  static const getPetJson = {
    '__typename': 'pet',
    'pet': [
      {
        'id': 1,
        'name': 'name',
        '__typename': 'pet',
      }
    ]
  };

  static const getPetParsed = [
    Pet(
      id: 1,
      name: 'name',
    ),
  ];

  @override
  Future<QueryResult<TParsed>> query<TParsed>(
    QueryOptions<TParsed> options,
  ) async {
    if (options is Options$Query$GetPets) {
      return QueryResult(
        options: options,
        source: QueryResultSource.network,
        data: getPetJson,
      );
    }
    throw UnimplementedError();
  }
}

void main() {
  group('PetRepository', () {
    late PetRepository sut;

    group('Get pets', () {
      setUp(() async {
        await injectDependencies(
          environment: inj.Environment.test,
        );
        getIt.allowReassignment = true;
        getIt.registerSingleton<GraphQLClient>(FakeGraphQLClient());
        sut = getIt<PetRepository>();
      });
      test('should return a list of pets', () async {
        final result = await sut.getPets().run();
        expect(result, isA<Right>());
        final pets = result.getOrElse((l) => []);
        expect(pets.length, 1);
        expect(
          pets,
          FakeGraphQLClient.getPetParsed,
        );
      });
    });
  });
}
