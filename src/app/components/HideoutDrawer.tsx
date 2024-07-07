import React from 'react';
import {Hideout} from "@/pojos/data";
import {Style} from "@/pojos/style";
import gardenIcon from "@/assets/garden.png"
import parkingIcon from "@/assets/parking.png"
import phoneIcon from "@/assets/old-typical-phone.png"
import vaultIcon from "@/assets/vault.png"
import waterIcon from "@/assets/water-tap.png"
import houseIcon from "@/assets/house.png"
import "@/app/css/HideoutDrawer.css"

interface Props {
    obj: Hideout,
}

function HideoutDrawer(props: Props) {
    return (
        <div style={{color: Style.textPrimary}}>
            <h3 className={"price-tag"}>B {props.obj.price.toLocaleString()}</h3>
            <div className={"badge-container"}>
                {props.obj.phoneline &&
                    <img src={phoneIcon.src} alt={"Phoneline"} title={"Phoneline"} className={"icon-badge"}/>}
                {props.obj["running-water"] &&
                    <img src={waterIcon.src} alt={"Water"} title={"Running-water"} className={"icon-badge"}/>}
                {props.obj.garden && <img src={gardenIcon.src} alt={"Garden"} title={"Garden"} className={"icon-badge"}/>}
                {props.obj["parking-spot"] &&
                    <img src={parkingIcon.src} alt={"Parking"} title={"Parking Spot"} className={"icon-badge"}/>}
                {props.obj.vault && <img src={vaultIcon.src} alt={"Vault"} title={"Vault"} className={"icon-badge"}/>}
                {props.obj.is_apartment &&
                    <img src={houseIcon.src} alt={"House"} title={"Is apartment"} className={"icon-badge"}/>}
            </div>
        </div>
    );
}

export default HideoutDrawer;
