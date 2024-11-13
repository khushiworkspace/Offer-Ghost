import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Paginationbutton({value,onclick,disable,width}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" style={{borderRadius:'40px',width:width}} onClick={onclick} disabled={disable}>{value}</Button>
    </Stack>
  );
}