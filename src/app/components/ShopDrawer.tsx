import React, {useState} from 'react';
import {Shop} from "@/pojos/data";
import TextIconBoolean from "@/app/components/TextIconBoolean";
import ToggleButtonGroup from './ToggleButtonGroup';
import ShopItem from "@/app/components/ShopItem";

interface Props {
    obj: Shop,
    itemSearch: string,
}

function ShopDrawer(props: Props) {
    const [level, setLevel] = useState<number>(0)

    return (
        <div>
            <TextIconBoolean text={'Check possible'} bool={props.obj["check-possible"]}/>
            {props.obj.discounts.map((discount, i) => (
                <ToggleButtonGroup
                    text={'Level ' + i}
                    isSelected={level === i}
                    onClick={() => setLevel(i)}
                    isStart={i === 0}
                    isEnd={i === props.obj.discounts.length - 1}
                    key={i}
                />
            ))}

            {props.obj.items.map((item, i) => (
                <ShopItem item={item} key={i} level={level}
                          searched={item.name.toLowerCase().includes(props.itemSearch.toLowerCase()) && props.itemSearch.length > 0}/>
            ))}
        </div>
    );
}

export default ShopDrawer;
