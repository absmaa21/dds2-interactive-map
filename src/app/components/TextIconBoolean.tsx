import React from 'react';
import CheckedIcon from "@/assets/checked.png";
import xIcon from "@/assets/remove.png";

interface Props {
    text: string,
    bool: boolean,
}

function TextIconBoolean(props: Props) {
    return (
        <p style={{marginBottom: 8}}>
            {props.text}
            <img style={{aspectRatio: 1, width: 13, marginLeft: 6}}
                 src={props.bool ? CheckedIcon.src : xIcon.src}
                 alt={props.bool ? 'YES' : 'NO'}/>
        </p>
    );
}

export default TextIconBoolean;
