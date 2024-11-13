import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeader from  './tableheader';

import BasicMenu from './Menu';


export default function CustomTable({ headers,data,page,onclick, onclick1,meta,user,menu}) {
  if (!data || !Array.isArray(data)) {
    return <div>No data available.</div>;
  }

  return (
    <div style={{ position: 'relative' }}>
       <TableHeader />
       <TableContainer
    component={Paper}
    sx={{
      // width: width,
      overflowX: 'scroll',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}
  >
   
      <Table sx={{marginTop:'20px'}}>
        <TableHead  sx={{minWidth:'150px',marginRight:10}}>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody style={{ width: '100px', height: '10px' }}>
          {data.length != 0 ?
          <>
          {data.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, index) => (
                [0].includes(index) ? null :// here 0 index pass all data if you don't want pass 0 //
                <TableCell key={index} sx={{minWidth:'150px',marginRight:10}}>{value}</TableCell>
              ))}
              { menu === '1' ?
              <TableCell row={row} key={index}>
                  <BasicMenu userdata={row}/>
                {/* {//console.log("guyg",row)}  */}
              </TableCell>
              :null
}
            </TableRow>
          ))}
          </>
          :
          null
          }
    
  </TableBody>

      </Table>

    </TableContainer>

    </div>
    
   
   
  );
}
