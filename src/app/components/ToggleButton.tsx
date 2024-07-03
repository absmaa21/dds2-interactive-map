import React from 'react';
import {Style} from "@/pojos/style";

interface Props {
    text: string,
    selected: boolean,
    onClick: () => void,
    amount?: number,
}

function ToggleButton(props: Props) {
    return (
        <div style={props.selected ? {...style, ...selectedStyle} : style} onClick={props.onClick}>
            <p>{props.text}</p>
            {props.amount && <span style={badge}>{props.amount}</span>}
        </div>
    );
}

const style: React.CSSProperties = {
    backgroundColor: Style.btnSelected,
    opacity: 0.33,
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: 8,
    textAlign: 'center',
    userSelect: 'none',
    transition: '0.3s, transform 0.3s',
};

const selectedStyle: React.CSSProperties = {
    opacity: 1,
};

const badge: React.CSSProperties = {
    position: 'absolute',
    aspectRatio: 1,
    width: 20,
    transform: 'translateY(-12px)',
    right: 8,
    fontSize: 12,
    padding: 4,
    color: Style.textSecondary,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Style.bgPrimary,
}

export default ToggleButton;
