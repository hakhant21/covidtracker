import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
           <Grid container spacing={3} jutify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" gutterBottom>Confirmed Cases</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        
                        <Typography variant="body2">Number of Active Case of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" gutterBottom>Recovered Cases</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                         
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" gutterBottom>Deaths Cases</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                         
                        <Typography variant="body2">Number of deaths cause by Covid-19</Typography>
                    </CardContent>
                </Grid>
           </Grid>
        </div>
    )
}

export default Cards;
