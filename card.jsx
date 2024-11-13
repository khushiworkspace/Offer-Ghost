import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Scroll.css';

const BasicCard = ({ children, cardWidth, height, justifyContent,alignItems,elevation }) => {
  return (
    <div style={{ display: 'flex', justifyContent: justifyContent,alignItems:alignItems,  }}>
      <Card sx={{ width: cardWidth ? cardWidth : 'fit-content', height: height ? height :'fit-content', overflow: 'hidden', paddingTop: '1px', paddingBottom: '1px',paddingRight:'2px',paddingLeft:'2px' }} elevation={elevation}>
        <div className="card-content-wrapper" >
          <CardContent className="your-content-class" >
            {children}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BasicCard;
