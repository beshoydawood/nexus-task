'use client'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import {Icon} from 'leaflet';
import "leaflet/dist/leaflet.css"

export default function Map(props: any) {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setReady(true)
    }, []);
    const icon = new Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
        iconSize : [40,65],
        iconAnchor : [22,94],
        popupAnchor : [-3, -76]
    });
    return(<>
        {ready && <Container maxWidth="md" sx={(theme) => ({
            maxWidth: '780px',
            height: '400px',
            overflow: 'hidden',
            [theme.breakpoints.down("md")]: {
                maxWidth: '300px',
            },
            '.leaflet-container': {
                width: '780px',
                height: '400px',
                [theme.breakpoints.down("md")]: {
                    width: '300px',
                },
            }
        })}>
            <MapContainer center={props.location} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={props.location}>
                    <Popup>
                        {props.name}
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>}</>
    )
}