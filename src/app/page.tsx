'use client'

import React, {useMemo, useState} from "react";
import {MarkerType} from "@/pojos/enums";
import ToggleButton from "@/app/components/ToggleButton";
import dynamic from "next/dynamic";
import MarkerDrawer from "@/app/components/MarkerDrawer";
import data, {Boss, Hideout, MedicPoint, Shop} from "@/pojos/data";
import {Style} from "@/pojos/style";
import IconButton from "@/app/components/IconButton";
import settingImg from "@/assets/setting.png"
import discordImg from "@/assets/discord.png"
import Modal from "@/app/components/Modal";
import Settings from "@/app/components/Settings";
import {discordLink} from "@/pojos/faq"

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
    const [chosenMarker, setChosenMarker] = useState<null | Shop | Hideout | Boss | MedicPoint>(null)
    const [showModal, setShowModal] = useState(false)

    function toggleModal() { setShowModal(!showModal) }

    return (
        <div style={{display: "flex", flexDirection: 'row', backgroundColor: '#000'}}>
            <MarkerDrawer chosenObj={chosenMarker} itemSearch={itemSearch}/>
            <Map visibleTypes={visibleTypes} itemSearch={itemSearch} setChosenMarker={setChosenMarker}/>
            <div style={drawer}>
                <div style={buttonContainer}>
                    <h1 style={{textAlign: 'center', fontSize: 26}}>DDS2 Interactive Map</h1>
                    <h3>Search item</h3>
                    <input style={inputStyle} type={"search"} value={itemSearch}
                           onChange={e => setItemSearch(e.target.value)}/>
                    <h3>Filter markers</h3>
                    <ToggleButton text={'Hideouts'} selected={visibleTypes.includes(MarkerType.HIDEOUT)}
                                  onClick={() => toggleType(MarkerType.HIDEOUT)} amount={data.hideouts.length}/>
                    <ToggleButton text={'Pawn shops'} selected={visibleTypes.includes(MarkerType.PAWN_SHOP)}
                                  onClick={() => toggleType(MarkerType.PAWN_SHOP)} amount={data["pawn-shops"].length}/>
                    <ToggleButton text={'Shops'} selected={visibleTypes.includes(MarkerType.SHOP)}
                                  onClick={() => toggleType(MarkerType.SHOP)} amount={data.shops.length}/>
                    <ToggleButton text={'Cloth shops'} selected={visibleTypes.includes(MarkerType.CLOTH_SHOP)}
                                  onClick={() => toggleType(MarkerType.CLOTH_SHOP)}
                                  amount={data["cloth-shops"].length}/>
                    <ToggleButton text={'Furniture shops'} selected={visibleTypes.includes(MarkerType.EQUIP_SHOP)}
                                  onClick={() => toggleType(MarkerType.EQUIP_SHOP)}
                                  amount={data["equip-shops"].length}/>
                    <ToggleButton text={'Boat docks'} selected={visibleTypes.includes(MarkerType.BOAT_DOCK)}
                                  onClick={() => toggleType(MarkerType.BOAT_DOCK)}
                                  amount={data["anchor-spots"].length}/>
                    <ToggleButton text={'Bosses'} selected={visibleTypes.includes(MarkerType.BOSS)}
                                  onClick={() => toggleType(MarkerType.BOSS)} amount={data.bosses.length}/>
                    <ToggleButton text={'Dealer spots'} selected={visibleTypes.includes(MarkerType.DEALER_SPOT)}
                                  onClick={() => toggleType(MarkerType.DEALER_SPOT)}
                                  amount={data["dealer-spots"].length}/>
                    <ToggleButton text={'Restaurants'} selected={visibleTypes.includes(MarkerType.RESTAURANT)}
                                  onClick={() => toggleType(MarkerType.RESTAURANT)} amount={data.restaurants.length}/>
                    <ToggleButton text={'Medic points'} selected={visibleTypes.includes(MarkerType.MEDIC_POINT)}
                                  onClick={() => toggleType(MarkerType.MEDIC_POINT)}
                                  amount={data["medic-points"].length}/>
                </div>
                <div style={{display: 'flex', gap: 8}}>
                    <IconButton opacity={.33} src={settingImg.src} onClick={toggleModal}/>
                    <IconButton opacity={.33} src={discordImg.src} onClick={() => window.open(discordLink, "_blank")}/>
                </div>
            </div>

            {showModal && (
                <Modal toggle={toggleModal} title={'Settings & FAQ'}><Settings/></Modal>
            )}
        </div>
    );
}

const drawer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '20%',
    padding: 8,
    backgroundColor: Style.bgPrimary,
}

const buttonContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
}

const inputStyle: React.CSSProperties = {
    fontSize: 16,
    lineHeight: 2,
    marginBottom: 4,
    borderWidth: 0,
    borderRadius: 8,
    paddingInline: 4,
    backgroundColor: Style.btnBg,
}
