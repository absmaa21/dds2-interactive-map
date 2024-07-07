import React from 'react';
import {Boss} from "@/pojos/data";

interface Props {
    obj: Boss,
}

function BossDrawer(props: Props) {
    return (
        <div>
            {props.obj.demands.map(demand => (
                <div style={{marginTop: 16}}>
                    <h3>{demand.name}</h3>
                    <p>{demand["price-per-g"]} B/g</p>
                    <p style={amount}>{demand.amount} g</p>
                </div>
            ))}
        </div>
    );
}

const amount: React.CSSProperties = {
    opacity: 0.4,
}

export default BossDrawer;
