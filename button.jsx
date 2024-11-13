// import Button from '@mui/material/Button';

// export default function BasicButtons(width) {
//   return (
//       <Button variant="contained" style={{width:width}}>Contained</Button>
//   );
// //   BasicButtons.prototype = {

// //   }
// }
import React from "react";
import Button from "@mui/material/Button";

const BasicButtons = ({ width, onClick, value, color, disabled }) => {
  return (
    <Button
      variant="contained"
      style={{
        width: width,
        backgroundColor: color,
        fontSize: "12px",
        fontWeight: "normal",
        lineHeight: "25px",
        textTransform: "uppercase",
        marginRight:'3px'
      }}
      onClick={onClick}
      disabled={disabled}
      sx={{
        filter: disabled ? 'blur(1px)' : 'none',
      }}
    >
      {value}
    </Button>
  );
};

export default BasicButtons;
