import { gql, useQuery } from '@apollo/client'

const GETLOCATIONS = gql`
{
    locations {
        id
        title
        label
        lat
        lng
        info_title
        info
        type
    }
}`

function LocationMarkers() {
  const { loading, error, data } = useQuery(GETLOCATIONS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>
  // else add home location to array 

  return (
    data.locations.map((location) => 
      <LocationMarker location={location} />
    )
  )
}

export default LocationMarkers