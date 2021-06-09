import './App.css'
// import Home from './pages/Home'
import { gql, useQuery } from '@apollo/client'

const HELLO = gql`
  {
    locations {
      id
      title
      label
      lat
      lng
      info_title
      info
    }
  }
`

function LambdaDemo() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    data.locations.map((location) => 
    <p>title: {location.info}</p>
    )
  );
}

function App() {
  return (
    <div className="App">
      <LambdaDemo />
      {/* <Home /> */}
    </div>
  )
}

export default App
