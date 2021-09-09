import React, {useEffect} from 'react'
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ProfileMap = ({coordinates, restaurants}) => {
    
    
    return (
            <div>
                {
                    !coordinates
                    ? 
                    <MapContainer center={[42.3503173, -71.1012273]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                            <Marker position={[42.350317, -71.1012273]}>
                                <Popup>
                                    Boston University
                                </Popup>
                            </Marker>
                    </MapContainer>  
                    : 
                    <MapContainer center={[42.3503173, -71.101227]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {coordinates.map(coordinate => {
                            return (
                                <Marker position={[coordinate.latitude, coordinate.longitude]} key={coordinate._id}>
                                    <Popup>
                                        {coordinate.name}
                                    </Popup>
                                </Marker>
                            )
                        })}     
                    </MapContainer>  
                }
                
            </div>
    )
}

export default ProfileMap
