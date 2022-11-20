import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function loadHeaders() {
  return { "x-hasura-admin-secret": "myadminsecretkey" };
}

const httpUri = `https://api.stephan.vm.selectcode.io/v1/graphql`;

const httpLink = new HttpLink({
  uri: httpUri,
  headers: loadHeaders(),
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

export const client = new ApolloClient({
  link: concat(errorLink, httpLink),
  cache: new InMemoryCache(),
});
