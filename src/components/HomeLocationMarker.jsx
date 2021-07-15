import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from '../images/icon-location.svg'

function HomeLocationMarker() {
  const [position, setPosition] = useState(null)
  const L = require('leaflet')
  const customIcon = L.icon({
    iconUrl: icon,
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
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      })
  }, [map])

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default HomeLocationMarker