abstract class GraphQLMapper<Entity, GraphQLFragment> {
  Entity parse(GraphQLFragment fragment);

  List<Entity> parseMany(List<GraphQLFragment> fragments) =>
      fragments.map(parse).toList();
}
