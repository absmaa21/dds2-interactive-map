import React from 'react';
import {Furniture} from "@/pojos/data";
import {getAvailableLevel} from "@/pojos/Helpers";

interface Props {
    item: Furniture,
    level: number,
    searched?: boolean,
}

function FurnitureItem(props: Props) {
    const neededLvl = getAvailableLevel(props.item)

    return (
        <div style={{...container, backgroundColor: props.searched ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,.5)'}}>
            <div style={{...row, fontSize: 12}}>
                <h4>{props.item.name}</h4>
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

export default FurnitureItem;
