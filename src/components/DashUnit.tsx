import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Box from '@mui/material/Box';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
interface Props {
    title: string;
    count: number,
    children?: React.ReactNode;
}
export default function DashUnit(props: Props) {
    return(
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
            }}
        >
            <Box sx={{
                marginBottom: '15px',
                border: '1px solid #efefef',
                width: '48px',
                height: '48px',
                lineHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                'svg': {
                    width: '30px',
                    height: '30px'
                }
            }}>
                {props.children}
            </Box>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {props.title}
            </Typography>
            <Typography component="p" variant="h4">
                {props.count}
            </Typography>
        </Paper>
    )
}