import React from 'react';
import {Equipment, Furniture} from "@/pojos/data";
import {getAvailableLevel} from "@/pojos/Helpers";

interface Props {
    item: Equipment,
    level: number,
    searched?: boolean,
}

function EquipItem(props: Props) {
    const neededLvl = getAvailableLevel(props.item)

    return (
        <div style={{...container, backgroundColor: props.searched ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,.5)'}}>
            <div style={{...row, fontSize: 12}}>
                <h4>{props.item.name}</h4>
                <h5>T{props.item.tier}</h5>
            </div>
            <div style={{...row, fontWeight: 200}}>
                <p>B {props.item.price?.toLocaleString()}</p>
                <p>{props.level >= neededLvl ? ' x' + props.item.quantity[props.level]?.toLocaleString() : ''}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 6}}>
                {props.item["blocks-grenades"] && <p style={detail}>Blocks grenades</p>}
                {props.item["substance-storage"] &&
                    <p style={detail}>Substance storage: <span>{props.item["substance-storage"]}g</span></p>}
                {props.item["hideout-stash"] &&
                    <p style={detail}>Hideout stash: <span>{props.item["hideout-stash"]}</span></p>}
                {props.item.visibility &&
                    <p style={detail}>Visibility: <span>{props.item.visibility}</span></p>}
                {props.item.comfort &&
                    <p style={detail}>Comfort: <span>{props.item.comfort}</span></p>}
                {props.item.security &&
                    <p style={detail}>Security: <span>{props.item.security}</span></p>}
                <div style={{marginTop: 4}}/>
                {props.item["crafting-speed"] &&
                    <p style={detail}>Crafting speed multiplier: <span>{props.item["crafting-speed"]}</span></p>}
                {props.item["production-cost"] &&
                    <p style={detail}>Production cost multiplier: <span>{props.item["production-cost"]}</span></p>}
                {props.item["waste-amount"] &&
                    <p style={detail}>Waste amount multiplier: <span>{props.item["waste-amount"]}</span></p>}
                {props.item["energy-usage"] &&
                    <p style={detail}>Energy usage: <span>{props.item["energy-usage"]?.toLocaleString()}W</span></p>}
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

const detail: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 300,
    fontSize: 12,
}

export default EquipItem;
