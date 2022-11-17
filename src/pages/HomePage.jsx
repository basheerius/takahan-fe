import React from "react";
import {GameCard} from "../components/card";

const matches = [
    {
        homeTeam: {name: 'Qatar', flag: 'qatar.svg'},
        visitorTeam: {name: 'Ecuador', flag: 'ecuador.svg'},
        time: 1668960000000
    },
    {
        homeTeam: {name: 'England', flag: 'england.svg'},
        visitorTeam: {name: 'Iran', flag: 'iran.svg'},
        time: 1669035600000
    }]

const HomePage = () => {

    return (<div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        padding: '3vw',
        boxSizing: 'border-box',
        overflowY: 'scroll',
        gap: '2vw'
    }}>
        {matches.map(match => <GameCard match={match}/>)}
    </div>)
}

export default HomePage;
