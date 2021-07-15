import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
// import currentLocationIcon from '../images/icon-location.svg'
import cameraIcon from '../images/photo-camera.png'

function LocationMarker({
  id,
  info,
  info_title,
  label,
  lat,
  lng,
  title,
  type
}) {
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
    map.locate().on('locationfound', function (e) {
      const latlng = {
        lat: lat,
        lng: lng
      }
      setPosition(latlng)
      if (type === 'home') {
        map.flyTo(e.latlng, map.getZoom())
      }
    })
  }, [lat, lng, map])

  return position === null ? null : (
    <Marker position={position} icon={cameraImageIcon}>
      <Popup>
        <h2>{title}</h2>
      </Popup>
    </Marker>
  )
}

export default LocationMarker