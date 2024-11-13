import { Typography } from '@mui/material';
import React from 'react';


const FilterTab = ({ label, value, total, isActive, onTabClick,minwidth}) => {
  return (
    <Typography
      style={{
        borderBottom: isActive ? "1.3px solid #333F5D" : null,
        color: isActive ? "#333F5D" : "#606060",
        fontSize: "16px",
        padding: "7px 0px",
        cursor: "pointer",
        fontWeight: 500,
        minWidth:minwidth ? minwidth : '',
      
      }}
      
      onClick={() => {
        onTabClick(value);
      }}
    >
      {label}
      <span
        style={{
          backgroundColor: isActive ? "#333F5D" : "#FFFF",
          paddingLeft: "8px",
          paddingRight: "8px",
          borderRadius: "4px",
          marginLeft: "30px",
          color: isActive ? "#FFFFFF" : "#606060",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        {total ? total : "0"}
      </span>
    </Typography>
  );
};

export default FilterTab;
