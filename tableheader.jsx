import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function Tableheader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      // Added property to center vertically in the viewport
    }}>
      <Card
        sx={{
          width: '95%',
          backgroundColor: '#2C9CEA',
          marginBottom: '-30px',
          position: 'relative',
          height: 50,
     
           }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20, textAlign: 'justify' }} color="white" gutterBottom>
            Candidate Application
          </Typography>
        </CardContent>
      </Card>
    </div>
    
  );
}