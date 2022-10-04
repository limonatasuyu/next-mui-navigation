import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import type { NextPage } from 'next';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { 
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Dilek', firstName: 'Emre', age: 35 },
  { id: 2, lastName: 'Yılmaz', firstName: 'Mehmet', age: 42 },
  { id: 3, lastName: 'Başaran', firstName: 'Mustafa', age: 45 },
  { id: 4, lastName: 'someOne', firstName: 'someOne', age: 16 },
  { id: 5, lastName: 'BirininOğlu', firstName: 'Neslihan', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DataTable() {
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


const Home: NextPage = () => {

  return (
    <Box sx={{width: '100%'}}>
      <h1 style={{textAlign: 'center'}}>HomePage</h1>
      <DataTable />
    </Box>
  )
}

export default Home

