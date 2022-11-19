import 'package:injectable/injectable.dart';

import '../../../../graphql/query/pet/PetFragment.graphql.dart';
import '../../../core/graphql/graphql_mapper.dart';
import '../domain/pet.dart';

@lazySingleton
class PetMapper extends GraphQLMapper<Pet, Fragment$Pet> {
  @override
  Pet parse(Fragment$Pet fragment) => Pet(
        id: fragment.id,
        name: fragment.name,
      );
}
