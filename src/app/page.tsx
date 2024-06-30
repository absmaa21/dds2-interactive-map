'use client'

import Leaflet from "@/app/components/Leaflet";
import React, {useMemo, useState} from "react";
import {MarkerType} from "@/pojos/enums";
import ToggleButton from "@/app/components/ToggleButton";
import dynamic from "next/dynamic";

const defaultVisibleMarkers = [
    MarkerType.PAWN_SHOP,
    MarkerType.HIDEOUT,
    MarkerType.BOAT_DOCK,
    MarkerType.DEAD_DROP,
    MarkerType.DEALER_SPOT,
    MarkerType.EQUIP_SHOP,
    MarkerType.RESTAURANT,
    MarkerType.ZONES,
    MarkerType.SHOP,
    MarkerType.MEDIC_POINT,
    MarkerType.BOSS,
    MarkerType.CLOTH_SHOP,
]

export default function Home() {
    const Map = useMemo(() => dynamic(
        () => import('../app/components/Leaflet'), {
            loading: () => <p>Loading...</p>,
            ssr: false,
        }
    ), [])

    const [visibleTypes, setVisibleTypes] = useState(defaultVisibleMarkers);
    const toggleType = (type: MarkerType) => {
        setVisibleTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const [itemSearch, setItemSearch] = useState('')

    return (
        <div style={{display: "flex", flexDirection: 'row'}}>
            <Map visibleTypes={visibleTypes} itemSearch={itemSearch} />
            <div style={{width: '20%'}}>
                <input type={"search"} value={itemSearch} onChange={e => setItemSearch(e.target.value)} />
                <hr/>
                <ToggleButton text={'Hideouts'} selected={visibleTypes.includes(MarkerType.HIDEOUT)} onClick={() => toggleType(MarkerType.HIDEOUT)}/>
                <ToggleButton text={'Pawn shops'} selected={visibleTypes.includes(MarkerType.PAWN_SHOP)} onClick={() => toggleType(MarkerType.PAWN_SHOP)}/>
                <ToggleButton text={'Shops'} selected={visibleTypes.includes(MarkerType.SHOP)} onClick={() => toggleType(MarkerType.SHOP)}/>
                <ToggleButton text={'Cloth shops'} selected={visibleTypes.includes(MarkerType.CLOTH_SHOP)} onClick={() => toggleType(MarkerType.CLOTH_SHOP)}/>
                <ToggleButton text={'Furniture shops'} selected={visibleTypes.includes(MarkerType.EQUIP_SHOP)} onClick={() => toggleType(MarkerType.EQUIP_SHOP)}/>
                <ToggleButton text={'Boat docks'} selected={visibleTypes.includes(MarkerType.BOAT_DOCK)} onClick={() => toggleType(MarkerType.BOAT_DOCK)}/>
                <ToggleButton text={'Bosses'} selected={visibleTypes.includes(MarkerType.BOSS)} onClick={() => toggleType(MarkerType.BOSS)}/>
            </div>
        </div>
    );
}
