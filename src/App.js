import {
  HttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './pages';

const httpLinkUri = process.env.REACT_APP_HTTPLINK_URI;

const httpLink = new HttpLink({
  uri: `${httpLinkUri}`,
  cache: new InMemoryCache(),
  name: 'ZERDA_FUR',
  version: '0.0.1',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Index />
      </Provider>
    </ApolloProvider>
  );
}

export default App;