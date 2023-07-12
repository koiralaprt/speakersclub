import React from 'react'

export default function Day(props) {
    const { day } = props.data;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <h1 >Word of the Day</h1>
            <h2 style={{ fontSize: '3em' ,color:'green'}}>{day.word}</h2>
            <h3 style={{ width: '50%', left: '25%' }}>{day.meaning}</h3>
            <br/>
            <br/>
        </div>
    )
}
