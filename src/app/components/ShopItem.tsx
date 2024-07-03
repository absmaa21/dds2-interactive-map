import React from 'react';
import {Item} from "@/pojos/data";
import {Unit} from "@/pojos/enums";
import {Style} from "@/pojos/style";

interface Props {
    item: Item,
    level: number,
    searched?: boolean,
}

function getAvailableLevel(item: Item) {
    let lvl = 0;
    for (let i = 0; i < item.quantity.length; i++) {
        lvl = i
        if (item.quantity[i] > 0) return lvl
    }
    return lvl;
}

function ShopItem(props: Props) {
    const neededLvl = getAvailableLevel(props.item)

    return (
        <div style={{...container, backgroundColor: props.searched ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,.5)'}}>
            <div style={{...row, fontSize: 12}}>
                <h4>{props.item.name}</h4>
                <p>{props.level >= neededLvl ? ' x' + props.item.quantity[props.level]?.toLocaleString() : ''}</p>
            </div>
            <div style={{...row, fontWeight: 200}}>
                <p>B {props.item.price?.toLocaleString()}</p>
                <p>{props.item.unit !== Unit.ITEM ? props.item.amount?.toLocaleString() + " " + props.item.unit : ''}</p>
            </div>
            {neededLvl > props.level && <div style={overlay}>Level<span style={bold}>{neededLvl}</span>needed!</div>}
        </div>
    );
}

const container: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    overflowY: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    fontSize: 14,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,.5)',
}

const row: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
}

const overlay: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1,
}

const bold: React.CSSProperties = {
    fontWeight: 'bolder',
    marginLeft: 4,
    marginRight: 4,
}

export default ShopItem;
