import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';
export default function Filter(props: any) {
    const {setRows, countries} = props;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')
    let newRows: any = [];
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value);
        const url = e.target.value !== '' ? '/api?country='+e.target.value : '/api';
        axios.get(url).then((resp) => {
            newRows = resp.data;
            setRows(newRows)
        })
    }
    return(
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <FormControl sx={{width: '140px'}}>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Country"
                        onChange={handleChange}
                    >
                        <MenuItem value=''>All</MenuItem>
                        {countries.map((country: string, i: number) => {
                            return(
                                <MenuItem key={i} value={country}>{country.split(', ')[1]}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Box>
                    <IconButton onClick={() => {
                        setOpen(true)
                        setTimeout( function () {
                            setOpen(false)
                        }, 1200 )
                    }}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}