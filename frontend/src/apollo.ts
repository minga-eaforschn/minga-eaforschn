import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, split} from '@apollo/client'
import {WebSocketLink} from '@apollo/client/link/ws'
import {getMainDefinition} from '@apollo/client/utilities'

function loadHeaders() {
  if (process.env.REACT_APP_ADMIN_SECRET != undefined) {
    return {'X-Hasura-Admin-Secret': process.env.REACT_APP_ADMIN_SECRET}
  }
}

const httpUri = process.env.REACT_APP_GRAPHQL_ENDPOINT ? `${process.env.REACT_APP_GRAPHQL_ENDPOINT}` : `http://localhost:8080/v1/graphql`
const wsUri = process.env.REACT_APP_GRAPHQL_WS_ENDPOINT ? `${process.env.REACT_APP_GRAPHQL_WS_ENDPOINT.replace('http', 'ws')}` : `ws://localhost:8080/v1/graphql`

const httpLink = new HttpLink({
  uri: httpUri,
})
const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      headers: loadHeaders()
    }
  }
})

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(({data, errors}) => {
    if (errors) {
      errors.forEach((error: any) => {
        if (!error) return
        console.log(error)
        //TODO handle GraphQl errors here
      })
    }
    return {data, errors}
  })
})

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  concat(errorLink, httpLink),
)

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: loadHeaders()
  })
  return forward(operation)
})


export const client = new ApolloClient({
  link: concat(authMiddleware, splitLink),
  cache: new InMemoryCache()
})
