import React from 'react';
import {Style} from "@/pojos/style";
import IconButton from "@/app/components/IconButton";
import crossImg from "@/assets/close.png"

interface Props {
    children: React.ReactNode,
    toggle: () => void,
    title?: string,
}

function Modal(props: Props) {
    return (
        <div style={modalBg} onClick={props.toggle}>
            <div style={modal} onClick={e => e.stopPropagation()}>
                <div style={header}>
                    <div/>
                    <h2>{props.title}</h2>
                    <IconButton src={crossImg.src} onClick={props.toggle} size={0.6} opacity={.5}/>
                </div>
                {props.children}
            </div>
        </div>
    );
}

const modalBg: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    zIndex: 9999999,
    padding: 64,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
}

const modal: React.CSSProperties = {
    width: 480,
    padding: 16,
    overflowY: 'auto',
    backgroundColor: Style.bgPrimary,
}

const header: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
}

export default Modal;
