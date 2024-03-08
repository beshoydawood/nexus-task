'use client'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const BoxStyled = styled(Box)({
    "@keyframes blink": {
        "100%": {
            transform: 'scale(2, 2)',
            opacity: 0
        }
    }
})

interface Props {
    status: string
}
export default function Indicator(props: Props) {
    const className = props.status === 'Online' ? 'online indicator' : 'offline indicator';
    return(
        <BoxStyled sx={{
            display: 'flex',
            alignItems: 'center',

            '.indicator': {
                display: 'inline-block',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
            },
            '.indicator.online': {
                background: '#4caf50'
            },
            '.indicator.offline': {
                background: '#ff1744'
            },
            '.indicator.offline .blink': {
                display: 'none'
            },
            '.blink': {
                opacity: '0.7',
                width: '15px',
                height: '15px',
                background: 'inherit',
                animation: 'blink 1s linear infinite',
                display: 'block',
                borderRadius: '50%'
            },

        }}>
            <Box className={className}>
                <span className="blink"></span>
            </Box>
            <Typography sx={{
                fontSize: '12px',
                marginLeft: '8px;'
            }}>{props.status}</Typography>
        </BoxStyled>
    )
}