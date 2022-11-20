import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

function loadHeaders() {
  return { "x-hasura-admin-secret": "myadminsecretkey" };
}

const httpUri = `https://api.stephan.vm.selectcode.io/v1/graphql`;

const httpLink = new HttpLink({
  uri: httpUri,
});

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(({ data, errors }) => {
    if (errors) {
      errors.forEach((error: any) => {
        if (!error) return;
        console.log(error);
        //TODO handle GraphQl errors here
      });
    }
    return { data, errors };
  });
});

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}, concat(errorLink, httpLink));

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: loadHeaders(),
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, splitLink),
  cache: new InMemoryCache(),
});
