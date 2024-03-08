import * as React from 'react';
import Grid from '@mui/material/Grid';
import Main from '../layout/Main';
import DashUnit from "../components/DashUnit";
import Chart from "../components/Chart";
import Units from "../components/Units";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SolarPowerIcon from "@mui/icons-material/SolarPower";
async function getData() {
    const uri = process.env.API_URI;
    const count = await fetch(uri+'/api/count');
    const data = await fetch(uri+'/api');
    return {
        count: await count.json(),
        data: await data.json()
    }
}
export default async function Dashboard() {
    const data = await getData();

    return (
        <Main title="Dashboard">
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={3}>
                    <DashUnit title='Total PV Units' count={data.count.total}>
                        <SolarPowerIcon color="primary" />
                    </DashUnit>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <DashUnit title='Total Countries' count={data.count.countries}>
                        <AddLocationIcon color="primary" />
                    </DashUnit>
                </Grid>
                <Grid item xs={12} md={1} lg={1}></Grid>
                <Grid item xs={12} md={5} lg={5}>
                    <Chart offline={data.count.offline} online={data.count.online} />
                </Grid>

                <Grid item xs={12}>
                    <Units rows={data.data} />
                </Grid>
            </Grid>
        </Main>
    );
}