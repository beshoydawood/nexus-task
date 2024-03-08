'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Link from "next/link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TimeFormat from "./TimeAgo";
import Indicator from "./Indicator";
import Paper from '@mui/material/Paper';

interface Props {
    rows: any[]
}
export default function Units(props: Props) {
    let {rows} = props;
    rows = rows.slice(0, 5);
    return(
        <>
            <Paper sx={(theme) => ({
                p: 2, display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.down("md")]: {
                    overflow: 'scroll',
                }
            })}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Recent PV Units
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Power Output</TableCell>
                        <TableCell align="right">Last Updated</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell><Indicator status={row.status} /></TableCell>
                            <TableCell>{row.power_output}</TableCell>
                            <TableCell align="right"><TimeFormat date={row.last_update_time} /> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={{ mt: 3 }}>
                <Link color="primary" href="/units">
                    See more pv units
                </Link>
            </Box>
            </Paper>
        </>
    )
}