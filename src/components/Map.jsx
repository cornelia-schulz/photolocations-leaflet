import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarkers from './LocationMarkers'

function Map() {

    return (
      <MapContainer
        center={{ lat: -41.27056663303353,
        lng: 174.65973605607988 }}
        zoom={11} scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarkers />
        {/* <LocationMarker /> */}
      </MapContainer>
    )
 }

 export default Map