import React, { useState, useEffect } from "react"
import Map, { Marker, NavigationControl, Popup, GeolocateControl } from "react-map-gl"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import RestaurantIcon from '@mui/icons-material/Restaurant'
import StarIcon from '@mui/icons-material/Star'

const TravelMap = () => {
    const [ title, setTitle ] = useState(null)
    const [ desc, setDesc ] = useState(null)
    const [ rating, setRating ] = useState(0)
    const [ pins, setPins ] = useState(null)
    const [ currentId, setCurrentId ] = useState(null)
    const [ newLocation, setNewLocation ] = useState(null)
    const [ startPosition, setStartPosition ] = (useState({ "latitude": 48, "longitude": 34, "zoom": 3 }))

    const fetchPins = async() => {
        try{
            const response = await fetch("/api/pins")
            const allPins = await response.json()

            if(response.ok) { setPins(allPins) }
        } catch (error) { console.log(error) }
    }

    //Called whenever component rendered
    /*  useEffect(() => { fetchPins() }, [])    */

    const handlePinClick = ( id, latitude, longitude ) => { setCurrentId(id) }

    const handleAddNewPin = ( e ) => {
        const [ long, lat ] = e.lnglat.toArray()
        //setNewLocation({ long, lat })
        console.log(long, lat)
    }
    const handleMapClick = ( id, lat, long, title, desc, rating ) => { }
    const handleSubmit = () => { }

    return (  
        <div className="map">
            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: 16,
                    latitude: 49,
                    zoom: 5
                }}
                style={{width: "100%", height: " calc(100vh - 77px)"}}
                mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=mjFguyPeYUvxPY99EAPH"
                //onDblClick={ handleAddNewPin() }
            >
                <NavigationControl position='top-left' />
                {pins && pins.map((pin) => (
                    //Shorthand for React.Fragment
                    //Allows component to return multiple elements
                    //Without it, pin._id check can't find "pin"
                    <>
                    <Marker key={ pin._id } longitude={pin.longitude} latitude={pin.latitude} color="red" onClick={ handlePinClick() } />
                    {pin._id === currentId && (
                        <Popup
                            latitude={pin.latitude}
                            longitude={pin.longitude}
                            closeButton={true}
                            closeOnClick={false}
                            onClose={() => setCurrentId(null)}
                            key={ pin._id }
                        >
                            <div className="card" key={pin._id}>
                                <label>Place</label>
                                <h4 className="place">{pin.title}</h4>
                                <label>Review</label>
                                <p className="desc">{pin.desc}</p>
                                <label>Rating</label>
                                <div className="stars">
                                    {Array(pin.rating).fill(<StarIcon className="star" />)}
                                </div>
                                <label>Information</label>
                                <span className="username">
                                    Created by <b>{pin.username}</b>
                                </span>
                            </div>
                        </Popup>
                    )}
                    </>
                ))}
                {newLocation && (
                    //If map clicked, create new pin
                    <Popup
                        latitude={ newLocation.lat }
                        longitude={ newLocation.long }
                    >
                        <div>
                            <form onSubmit={ handleSubmit }>
                                <label>Title</label>
                                <input
                                    placeholder="Give your post a title"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </form>
                        </div>
                    </Popup>
                )}
                <Marker longitude={16} latitude={49} color="blue" onClick={ handleMapClick() }/>
            </Map>
        </div>
    );
}
 
export default TravelMap;