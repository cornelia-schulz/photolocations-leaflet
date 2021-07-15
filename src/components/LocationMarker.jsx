import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
// import currentLocationIcon from '../images/icon-location.svg'
import cameraIcon from '../images/photo-camera.png'

function LocationMarker({location}) {
  const [position, setPosition] = useState(null)
  const L = require('leaflet')
  // const currentPositionIcon = L.icon({
  //   iconUrl: currentLocationIcon,
  //   iconSize: [32,42],
  //   iconAnchor: [0, 0],
  //   popupAnchor: [16, 0],
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null
  // })
  const cameraImageIcon = L.icon({
    iconUrl: cameraIcon,
    iconSize: [32,42],
    iconAnchor: [0, 0],
    popupAnchor: [16, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  })
  const map = useMap()

  useEffect(() => {
    console.log(location)
    map.locate().on('locationfound', function (e) {
      // console.log(e.latlng)
      console.log('marker', location)
      // const latlng = {
      //   lat: location.lat,
      //   lng: location.lng
      // }
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    })
  }, [location, map])

  return position === null ? null : (
    <Marker position={position} icon={cameraImageIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarker