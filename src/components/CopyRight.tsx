'use client';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function CopyRight(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                All rights reserved Beshoy D, This dashboard for Nexus testing purposes only
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}