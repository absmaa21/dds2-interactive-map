"use client"
import React from 'react';
import {MapContainer, ImageOverlay, Marker} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import DraggableMarker from "@/app/components/DraggableMarker";
import data, {Item} from "@/pojos/data";
import {MarkerType} from "@/pojos/enums";
import shopImg from "../../assets/store-marker.png"
import hideoutImg from "../../assets/hideout-marker.png"
import pawnshopImg from "../../assets/pawn-shop-marker.png"
import medicImg from "../../assets/medic-marker.png"
import anchorImg from "../../assets/anchor-marker.png"
import heartImg from "../../assets/heart-marker.png"
import restaurantImg from "../../assets/restaurant-marker.png"
import clothImg from "../../assets/shirt-marker.png"
import furnitureImg from "../../assets/furniture-marker.png"
import dealerImg from "../../assets/dealer-marker.png"

const size = 0.3

const shopIcon = new L.Icon({
    iconUrl: shopImg.src,
    iconSize: [shopImg.width * size, shopImg.height * size],
    iconAnchor: [shopImg.width * (size / 2), shopImg.height * size],
})

const hideoutIcon = new L.Icon({
    iconUrl: hideoutImg.src,
    iconSize: [hideoutImg.width * size, hideoutImg.height * size],
    iconAnchor: [hideoutImg.width * (size / 2), hideoutImg.height * size],
})

const pawnshopIcon = new L.Icon({
    iconUrl: pawnshopImg.src,
    iconSize: [pawnshopImg.width * size, pawnshopImg.height * size],
    iconAnchor: [pawnshopImg.width * (size / 2), pawnshopImg.height * size],
})

const medicIcon = new L.Icon({
    iconUrl: medicImg.src,
    iconSize: [medicImg.width * size, medicImg.height * size],
    iconAnchor: [medicImg.width * (size / 2), medicImg.height * size],
})

const anchorIcon = new L.Icon({
    iconUrl: anchorImg.src,
    iconSize: [anchorImg.width * size, anchorImg.height * size],
    iconAnchor: [anchorImg.width * (size / 2), anchorImg.height * size],
})

const heartIcon = new L.Icon({
    iconUrl: heartImg.src,
    iconSize: [heartImg.width * size, heartImg.height * size],
    iconAnchor: [heartImg.width * (size / 2), heartImg.height * size],
})

const restaurantIcon = new L.Icon({
    iconUrl: restaurantImg.src,
    iconSize: [restaurantImg.width * size, restaurantImg.height * size],
    iconAnchor: [restaurantImg.width * (size / 2), restaurantImg.height * size],
})

const clothIcon = new L.Icon({
    iconUrl: clothImg.src,
    iconSize: [clothImg.width * size, clothImg.height * size],
    iconAnchor: [clothImg.width * (size / 2), clothImg.height * size],
})

const furnitureIcon = new L.Icon({
    iconUrl: furnitureImg.src,
    iconSize: [furnitureImg.width * size, furnitureImg.height * size],
    iconAnchor: [furnitureImg.width * (size / 2), furnitureImg.height * size],
})

const dealerIcon = new L.Icon({
    iconUrl: dealerImg.src,
    iconSize: [dealerImg.width * size, dealerImg.height * size],
    iconAnchor: [dealerImg.width * (size / 2), dealerImg.height * size],
})

interface Leaflet {
    visibleTypes: string[],
    itemSearch: string,
}

function Leaflet(props: Leaflet) {
    const mapBounds = L.latLngBounds([1, 0], [0, 1])

    function hasItem(array: Item[]) {
        return array.some(item => item.name.toLowerCase().includes(props.itemSearch.toLowerCase()))
    }

    return (
        <MapContainer
            center={[0.5, 0.5]}
            zoom={11}
            minZoom={10}
            maxZoom={13}
            style={{height: '100vh', width: '80%'}}
            maxBounds={mapBounds}
            maxBoundsViscosity={0.2}
        >
            <ImageOverlay
                url='https://images2.imgbox.com/05/da/HR6pvX8T_o.jpg'
                bounds={mapBounds}
            />
            <DraggableMarker/>
            {(props.visibleTypes.includes(MarkerType.SHOP) || props.itemSearch.length > 0) &&
                data.shops.map((m, i) => {
                    if (hasItem(m.items) || props.itemSearch.length <= 0) {
                        return (
                            <Marker key={i} position={L.latLng(m.location.x, m.location.y)} icon={shopIcon}/>
                        )
                    }
                    return null
                })
            }

            {props.visibleTypes.includes(MarkerType.HIDEOUT) && props.itemSearch.length <= 0 &&
                data.hideouts.map((m, i) => (
                    <Marker key={i+100} position={L.latLng(m.location.x, m.location.y)} icon={hideoutIcon}/>
                ))
            }

            {(props.visibleTypes.includes(MarkerType.PAWN_SHOP) || props.itemSearch.length > 0) &&
                data["pawn-shops"].map((m, i) => {
                    if (hasItem(m.items) || props.itemSearch.length <= 0) {
                        return (
                            <Marker key={i+200} position={L.latLng(m.location.x, m.location.y)} icon={pawnshopIcon}/>
                        )
                    }
                    return null
                })
            }

            {props.visibleTypes.includes(MarkerType.BOAT_DOCK) && props.itemSearch.length <= 0 &&
                data["anchor-spots"].map((m, i) => (
                    <Marker key={i+300} position={L.latLng(m.location.x, m.location.y)} icon={anchorIcon}/>
                ))
            }

            {props.visibleTypes.includes(MarkerType.BOSS) && props.itemSearch.length <= 0 &&
                data["bosses"].map((m, i) => (
                    <Marker key={i+400} position={L.latLng(m.location.x, m.location.y)} icon={heartIcon}/>
                ))
            }

            {(props.visibleTypes.includes(MarkerType.RESTAURANT) || props.itemSearch.length > 0) &&
                data["restaurants"].map((m, i) => {
                    if (hasItem(m.items) || props.itemSearch.length <= 0) {
                        return (
                            <Marker key={i+500} position={L.latLng(m.location.x, m.location.y)} icon={restaurantIcon}/>
                        )
                    }
                    return null
                })
            }

            {(props.visibleTypes.includes(MarkerType.CLOTH_SHOP) || props.itemSearch.length > 0) &&
                data["cloth-shops"].map((m, i) => {
                    if (hasItem(m.items) || props.itemSearch.length <= 0) {
                        return (
                            <Marker key={i+600} position={L.latLng(m.location.x, m.location.y)} icon={clothIcon}/>
                        )
                    }
                    return null
                })
            }

            {props.visibleTypes.includes(MarkerType.DEALER_SPOT) && props.itemSearch.length <= 0 &&
                data["dealer-spots"].map((m, i) => (
                    <Marker key={i+700} position={L.latLng(m.location.x, m.location.y)} icon={dealerIcon}/>
                ))
            }
        </MapContainer>
    );
}

export default Leaflet;
