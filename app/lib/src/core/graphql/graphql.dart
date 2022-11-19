import 'package:graphql/client.dart';

import '../env.dart';
import '../logger.dart';

class _LoggingLink extends Link with LoggerProvider {
  @override
  Stream<Response> request(final Request request, [final NextLink? forward]) {
    logger.i(
      'Sending request to hasura:\nHeaders: ${request.context.entry<HttpLinkHeaders>()?.headers}\nquery: ${const RequestSerializer().serializeRequest(
        request,
      )}',
    );
    return forward!(request);
  }
}

GraphQLClient getGraphQLClient(final Env env) {
  final loggingLink = _LoggingLink();

  final httpLink = HttpLink(
    env.graphQLEndpoint,
    defaultHeaders: {
      'x-hasura-admin-secret': env.hasuraAdminSecret,
      'Expected-Role': 'user',
    },
  );

  final authLink = AuthLink(
    getToken: () async => 'Bearer <token>',
  );

  Link link = authLink.concat(loggingLink).concat(httpLink);

  final wsLink = WebSocketLink(
    env.graphQLSubscriptionEndpoint,
    config: SocketClientConfig(
      initialPayload: Map<String, dynamic>.from({
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      }),
      headers: {
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      },
    ),
  );
  link = Link.split(
    (request) => request.isSubscription,
    wsLink,
    link,
  );

  final GraphQLClient client = GraphQLClient(
    /// **NOTE** The default store is the InMemoryStore, which does NOT persist to disk
    cache: GraphQLCache(),
    link: link,
    defaultPolicies: DefaultPolicies().copyWith(
      query: Policies(
        fetch: FetchPolicy.cacheAndNetwork,
      ),
      mutate: Policies(
        fetch: FetchPolicy.noCache,
      ),
      subscribe: Policies(
        fetch: FetchPolicy.noCache,
      ),
    ),
  );
  return client;
}
