import React, {useEffect, useState} from 'react';
import {Shop} from "@/pojos/data";
import TextIconBoolean from "@/app/components/TextIconBoolean";
import ToggleButtonGroup from './ToggleButtonGroup';
import ShopItem from "@/app/components/ShopItem";
import FurnitureItem from "@/app/components/FurnitureItem";
import EquipItem from "@/app/components/EquipItem";

interface Props {
    obj: Shop,
    searchedItems: string[],
}

function ShopDrawer(props: Props) {
    const [level, setLevel] = useState<number>(0)

    function isSearched(itemName: string) {
        if (props.searchedItems === undefined) return false
        const lastIndex = props.searchedItems.length-1
        return props.searchedItems.includes(itemName)
        || (itemName.toLowerCase().includes(props.searchedItems[lastIndex].toLowerCase()) && props.searchedItems[lastIndex].length > 0)
    }

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

            {props.obj.items && props.obj.items.map((item, i) => (
                <ShopItem item={item} key={i} level={level} searched={isSearched(item.name)}/>
            ))}

            {props.obj.furnitures && props.obj.furnitures.map((item, i) => (
                <FurnitureItem item={item} key={i} level={level} searched={isSearched(item.name)}/>
            ))}

            {props.obj.equipments && props.obj.equipments.map((item, i) => (
                <EquipItem item={item} key={i} level={level} searched={isSearched(item.name)}/>
            ))}
        </div>
    );
}

export default ShopDrawer;
