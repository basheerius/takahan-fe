import React from "react";
import {Card} from "@mui/material";
import {Flag, Team, Teams, Time} from "./styles";
import moment from "moment";

const GameCard = props => {
    const {match} = props;

    return (<Card sx={{
        width: '100%',
        padding: '5vw',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1vw'
    }}>
        <Teams>
            <Team>
                <Flag src={`flags/${match.homeTeam.flag}`}/>
                <span>{match.homeTeam.name}</span>
            </Team>
            <span>vs.</span>
            <Team>
                <span>{match.visitorTeam.name}</span>
                <Flag src={`flags/${match.visitorTeam.flag}`}/>
            </Team>
        </Teams>
        <Time>{moment(match.time).format('dd MMM, DD - HH:mm')}</Time>
    </Card>)
}

export default GameCard;
