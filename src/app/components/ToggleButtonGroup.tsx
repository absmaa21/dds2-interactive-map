import React from 'react';
import {Style} from "@/pojos/style";

interface Props {
    text: string,
    isStart?: boolean,
    isEnd?: boolean,
    isSelected?: boolean,
    onClick: () => void,
}

function ToggleButtonGroup(props: Props) {
    const radiusLeft = props.isStart ? 10 : 0
    const radiusRight = props.isEnd ? 10 : 0

    const btnStyle: React.CSSProperties = {
        border: 0,
        padding: 8,
        marginRight: props.isEnd ? 0 : 2,
        borderTopLeftRadius: radiusLeft,
        borderBottomLeftRadius: radiusLeft,
        borderTopRightRadius: radiusRight,
        borderBottomRightRadius: radiusRight,
        backgroundColor: props.isSelected ? Style.btnSelected : Style.btnBg,
        cursor: 'pointer',
    }

    return (
        <button style={btnStyle} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default ToggleButtonGroup;
