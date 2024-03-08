'use client'
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {LatLngExpression} from "leaflet";
import dynamic from 'next/dynamic'
import Indicator from "./Indicator";
import * as React from "react";
import TimeFormat from "./TimeAgo";

const DynamicMap = dynamic(() => import('./Map'), {
    loading: () => <p>Loading...</p>,
})


export default function UnitData(props: any) {
    const { unit } = props;
    const location: LatLngExpression = [unit.latitude, unit.longitude];
    return(
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>

        <Paper
            sx={(theme) => ({
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.down("md")]: {
                    overflow: 'scroll',
                }
            })}>
            <Typography component="h2" sx={{mb: 2, fontSize: '22px'}}>
                Unit Info:
            </Typography>
            <Grid container spacing={2} sx={{mb: 3, paddingLeft: '15px', paddingRight: '15px'}}>
                <Grid item xs={6} lg={6} md={6}>
                    Name: {unit.name}
                </Grid>
                <Grid item xs={6} lg={6} md={6}>
                    <Box sx={{display: 'flex',
                            alignItems: 'center',
                    }}>
                        <Box sx={{marginRight: '5px'}}>Status:</Box>
                        <Indicator status={unit.status} />
                    </Box>
                </Grid>
                <Grid item xs={6} lg={6} md={6}>
                    Power Output: {unit.power_output}
                </Grid>
                <Grid item xs={6} lg={6} md={6}>
                    Updated:
                    <TimeFormat date={unit.last_update_time} />
                </Grid>
            </Grid>
            <Typography component="h2" sx={{mb: 2, fontSize: '22px'}}>
                Unit Location:
            </Typography>
            <DynamicMap location={location} name={unit.name} />
        </Paper>
        </Container>
    )
}