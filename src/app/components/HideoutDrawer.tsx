import React from 'react';
import {Hideout} from "@/pojos/data";
import {Style} from "@/pojos/style";
import TextIconBoolean from "@/app/components/TextIconBoolean";

interface Props {
    obj: Hideout,
}

function HideoutDrawer(props: Props) {
    return (
        <div style={{color: Style.textPrimary}}>
            <h3>B {props.obj.price.toLocaleString()}</h3><br/>
            <TextIconBoolean text={'Phoneline'} bool={props.obj.phoneline}/>
            <TextIconBoolean text={'Running-water'} bool={props.obj["running-water"]}/>
            <TextIconBoolean text={'Garden'} bool={props.obj.garden}/>
        </div>
    );
}

export default HideoutDrawer;
