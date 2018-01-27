import React from 'react';

function DailyItem(props) {
    const day = props.day;
    return (
        <div>
            <span>{day.weekday}</span>
            <span><img src={day.icon} /></span>
            <span>{day.high}</span>
            <span>{day.low}</span>
        </div>    
    );
}

export default function Forecast(props){
return props.forecast.map ((day, i) => <DailyItem key={i} day={day} />)               
}