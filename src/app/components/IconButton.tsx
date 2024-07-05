import React from 'react';

interface Props {
    src: string,
    onClick: () => void,
    opacity?: number,
    size?: number,
}

const baseWidth = 32

function IconButton(props: Props) {
    const btnStyle: React.CSSProperties = {
        ...button,
        width: baseWidth * (props.size ?? 1),
        opacity: props.opacity ?? 1,
    }

    const imgStyle: React.CSSProperties = {
        ...img,
        width: baseWidth * (props.size ?? 1) - 4,
    }

    return (
        <button style={btnStyle} onClick={props.onClick}>
            <img style={imgStyle} src={props.src} alt={"icon"} />
        </button>
    );
}

const button: React.CSSProperties = {
    aspectRatio: 1,
    width: 32,
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: 16,
    border: 0,
    backgroundColor: '#0000',
}

const img: React.CSSProperties = {
    aspectRatio: 1,
    width: 28,
}

export default IconButton;
