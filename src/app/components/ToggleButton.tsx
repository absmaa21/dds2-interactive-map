import React from 'react';

interface ToggleButton {
    text: string,
    selected: boolean,
    onClick: () => void,
}

const style = {
    backgroundColor: '#333',
    border: 'none',
    color: '#aaa',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
};

const selectedStyle = {
    backgroundColor: '#555',
    color: '#fff'
};

function ToggleButton(props: ToggleButton) {
    return (
        <div style={props.selected ? {...style, ...selectedStyle} : style} onClick={props.onClick}>
            {props.text}
        </div>
    );
}

export default ToggleButton;
