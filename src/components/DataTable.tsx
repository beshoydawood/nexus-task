'use client'
import { DataGrid, GridColDef, GridActionsCellItem, GridRenderCellParams, GridRowParams } from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import TimeFormat from "./TimeAgo";
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from "next/link";
import Indicator from "./Indicator";
import Filter from "./Filter";
import {useState} from "react";
interface Props {
    rows: any[],
    countires: any[]
}
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 100 },
    { field: 'name', headerName: 'Name', minWidth: 180 },
    { field: 'location', headerName: 'Location', minWidth: 200 },
    { field: 'status',
        headerName: 'Status',
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => {
            return <Indicator status={params.row.status} />
        }
    },
    { field: 'power_output', headerName: 'Power Output', minWidth: 150 },
    {
        field: 'last_update_time',
        headerName: 'Last Updated',
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <>
                    <TimeFormat date={params.row.last_update_time} />
                </>
            )
        }
    },
    {
        field: '',
        headerName: 'View',
        minWidth: 100,
        renderCell: (params: GridRenderCellParams) => {
            return(
                <Box sx={{
                    'a': {
                        color: 'rgba(0, 0, 0, 0.67)'
                    }
                }}>
                    <Link href={`/units/${params.row.id}`}>
                        <VisibilityIcon />
                    </Link>
                </Box>

            )
        }

    }
];
export default function DataTable(props: Props) {
    const [rows, setRows] = useState(props.rows)
    return(
        <>
            <Filter setRows={setRows} countries={props.countires} />
            <Paper>
            <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
            />
        </Paper>
            </>
    )
}