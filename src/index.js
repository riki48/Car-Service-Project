import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import { Provider } from 'react-redux';
import { store } from './store';

const client = new ApolloClient({
  uri: "https://zencar-backend-dev.dev.zen.car/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Provider store={store}>
  <ApolloProvider client={client}> 
    <App/>
  </ApolloProvider>
  </Provider>,   
  document.getElementById('root')
);