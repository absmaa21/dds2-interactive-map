import {useMemo, useRef, useState} from "react";
import {Marker, Popup, Rectangle} from "react-leaflet";
import {Marker as LeafletMarker} from 'leaflet';
import L from "leaflet";

function DraggableMarker() {
    const [position, setPosition] = useState(L.latLng(0.5, 0.5))
    const markerRef = useRef<LeafletMarker>(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )

    return (
        <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            icon={L.icon({
                iconUrl: "https://imgs.search.brave.com/TrzX892nasmwb_A06pm6wiVcTsEnhxYNXn0MmtMKEM8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9NYXAtTWFya2Vy/LVBORy1IRC5wbmc",
                iconSize: [48, 48],
                iconAnchor: [24, 48],
                popupAnchor: [0, -48],
            })}>
            <Popup minWidth={90}>
                <span>
                    {position.toString()}
                </span>
            </Popup>
            {!markerRef &&
                <Rectangle
                    bounds={L.latLngBounds(L.latLng(position.lat-.001, position.lng-.001), L.latLng(position.lat+.001, position.lng+.001))}
                    pathOptions={{color: '#f0f'}}
                />}
        </Marker>
    )
}

export default DraggableMarker
