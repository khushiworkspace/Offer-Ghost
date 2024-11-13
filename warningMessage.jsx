import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export default function WarningMessage({msg,error,onClose,closeMsg, severity}) {
    

  return (
    <Collapse in={error}>
    <Alert
      severity={severity}
      action={
        <>
            <Button
              aria-label="close"
              // color="inherit"
              // onClick={onclose}
              onClick={onClose}
              sx={{ border: "1px solid orange", borderRadius: "5px" }}
            >
              <Typography color={"black"}>{closeMsg}</Typography>
            </Button>
            {/* <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onclicks}
              sx={{ border: "1px", borderRadius: "5px", padding: "5px" }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton> */}
        
        </>
      }
      sx={{ mb: 1 }}
    >
      {/* <p style={{color:'red',fontWeight:'bold'}}>Error  Message</p> */}
      <p >{msg} </p>
    </Alert>
  </Collapse>
      
  );
}
