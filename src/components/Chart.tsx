'use client';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Paper from "@mui/material/Paper";

interface Props {
    online: number;
    offline: number
}
export default function Chart(props: Props) {
    const data = [
        {value: props.online, color: "#4caf50", label: "Online"},
        {value: props.offline, color: "#ff1744", label: "Offline"}
    ];
    const size = {
        width: 400,
        height: 200,
    };
    return(
        <Paper
            sx={(theme) => ({
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
                [theme.breakpoints.down("md")]: {
                    overflow: 'scroll',
                }
            })}
        >
        <PieChart
            series={[
                {
                    arcLabel: (item) => `${item.label} (${item.value})`,
                    arcLabelMinAngle: 45,
                    data,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                },
            }}
            {...size}
        />
        </Paper>
    )
}