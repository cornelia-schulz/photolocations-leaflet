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
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  return (
      data.locations.map((location, index) =>
        <LocationMarker
          id={location.id}
          info={location.info} 
          info_title={location.info_title}
          key={index}
          label={location.label}
          lat={location.lat}
          lng={location.lng}
          title={location.title}
          type={location.type}
        />
      )
  )
}

export default LocationMarkers