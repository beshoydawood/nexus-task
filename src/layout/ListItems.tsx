'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
export const MainListItems = () => {
    const router = useRouter()
    return (
        <React.Fragment>
            <ListItemButton onClick={() => router.push('/')}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
            <ListItemButton onClick={() => router.push('/units')}>
                <ListItemIcon>
                    <SolarPowerIcon/>
                </ListItemIcon>
                <ListItemText primary="PV Units"/>
            </ListItemButton>
        </React.Fragment>
    );
}