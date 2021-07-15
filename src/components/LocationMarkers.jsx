import { gql, useQuery } from '@apollo/client'
import LocationMarker from './LocationMarker'

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
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  return (
    <div>
      <p>location: {data.locations}</p>
      {data.locations.map((location) =>
        <LocationMarker location={location} />
      )}
    </div>
  )
}

export default LocationMarkers