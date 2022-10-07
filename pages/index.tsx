import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import type { NextPage } from 'next';
import { Box } from '@mui/material';

import axios from 'axios'
import useSWR from 'swr'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 400 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
];


type rawData = {
  firstName: string
  id: string
  lastName: string 
}

function DataTable(props: {data: rawData[]}) {
  
  const rows = props.data.map((i) => {
    return {id : i.id, firstName: i.firstName, lastName: i.lastName}
  })

  return (
    <Box sx={{ height: 400}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}

//const url = 'https://dummyapi.io/data/v1/user?page=1&limit=20'
const url = 'http://localhost:3000/api/people'
const fetcher = () => axios.get(url).then(res => res.data)

const Home: NextPage = () => {

  const {data, error} = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Box sx={{width: '100%'}}>
      <h1 style={{textAlign: 'center'}}>HomePage</h1>
      <DataTable data={data}/>
    </Box>
  )
}

export default Home

