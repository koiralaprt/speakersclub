import React from 'react'

export default function Hosts(props) {
    const { hosts } = props.data;
    return (
        <div>
            <h1 style={{ fontSize: '3em' }}>Todays Hosts</h1>
            {hosts.map((item, idx) =>
                <h2 key={idx}>For <b style={{ color: 'red' }}>
                    {item.role}
                </b>, we have <b style={{ color: 'green' }}>
                        {(item.name).toUpperCase()}
                    </b>
                </h2>
            )}
        </div>
    )
}
