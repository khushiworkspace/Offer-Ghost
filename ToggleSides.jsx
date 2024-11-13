import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

// Function to generate dynamic styles based on the selected item and side
const getSideStyle = (selectedItem, side) => ({
  borderBottom: selectedItem === side? "1px solid #333F5D" : "1px solid #E8E8E8",
  color: selectedItem === side? "#333F5D" : "#6C6C6C",
  fontSize: "16px",
  padding: "10px 15px",
  borderRadius: "5px 5px 0px 0px",

  cursor: "pointer",
  fontWeight: "500",
});

const ToggleSidesGlobalComponent = ({ componentName, totalCurrent, totalPast, handleClick, selectedItem }) => {
  const ceStyle = getSideStyle(selectedItem, 'ce');
  const peStyle = getSideStyle(selectedItem, 'pe');

  return (
    <Stack direction={"row"}>
      <Box>
        <Typography 
          style={{...ceStyle, fontFamily: "" }}
          onClick={() => handleClick('ce')}
        >
          {componentName} <span 
            style={{
              color: selectedItem === "ce"? "white" : "#333F5D", 
              backgroundColor: selectedItem === 'ce'? "#333F5D" : "white", 
              marginLeft: "40px",  

              fontSize: "16px",
              paddingInline: "5px",
              
              borderRadius: "5px"
            }}
          >
            {totalCurrent? totalCurrent : 0}
          </span>
        </Typography>
      </Box>
      <Typography 
        style={{...peStyle, fontFamily: "" }} // Apply dynamic styles and set fontFamily if needed
        onClick={() => handleClick('pe')}
      >
        Past Employee's  <span 
          style={{
            color: selectedItem === "pe"? "white" : "#333F5D", 
            backgroundColor: selectedItem === 'pe'? "#333F5D" : "white", 
            marginLeft: "40px", 
            borderRadius: "5px",
            paddingInline: "5px"
          }}
        >
          {totalPast? totalPast : 0}
        </span>
      </Typography>
    </Stack>
  );
};

export default ToggleSidesGlobalComponent;