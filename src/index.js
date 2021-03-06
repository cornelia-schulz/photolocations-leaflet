import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import './styles/react-leaflet-geosearch.css'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
