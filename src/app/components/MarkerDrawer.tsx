import React from 'react';
import {Boss, Hideout, MedicPoint, Shop} from "@/pojos/data";
import {Style} from "@/pojos/style";
import {isBoss, isFurniture, isHideout, isShop} from "@/pojos/Helpers";
import HideoutDrawer from "@/app/components/HideoutDrawer";
import ShopDrawer from "@/app/components/ShopDrawer";
import BossDrawer from "@/app/components/BossDrawer";

interface Props {
    chosenObj: null | Shop | Hideout | Boss | MedicPoint,
    searchedItems: string[],
}

function MarkerDrawer(props: Props) {
    return (
        <div style={{...container, width: props.chosenObj ? '20%' : '0'}}>
            <div style={{...opacityAnim, opacity: props.chosenObj ? 1 : 0}}>
                {props.chosenObj && (
                    <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                        <h2>{props.chosenObj.name}</h2>
                        <h5 style={{color: 'rgba(255,255,255,0.2)', letterSpacing: 2}}>{props.chosenObj.area}</h5>
                        <div style={{marginTop: 6}}>
                            {isHideout(props.chosenObj) && <HideoutDrawer obj={props.chosenObj}/>}
                            {isBoss(props.chosenObj) && <BossDrawer obj={props.chosenObj}/>}
                            {isShop(props.chosenObj) && <ShopDrawer obj={props.chosenObj} searchedItems={props.searchedItems}/>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const container: React.CSSProperties = {
    top: 0,
    left: 0,
    maxHeight: '100vh',
    textAlign: 'center',
    paddingTop: 12,
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    backgroundColor: Style.bgPrimary,
    transition: 'width 0.3s ease-in-out',
}

const opacityAnim: React.CSSProperties = {
    transition: 'opacity 0.5s ease-in-out',
}

export default MarkerDrawer;
