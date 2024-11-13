import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

export default function ErrorMsg({ msg, error, onclicks,}) {
  const navigate = useNavigate();
  return (
    <Collapse in={error}>
      <Alert
        severity="error"
        action={
          <>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={onclicks}
                sx={{ border: "1px", borderRadius: "5px", padding: "5px" }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
           
          </>
        }
        sx={{ mb: 1 }}
      >
        {/* <p style={{color:'red',fontWeight:'bold'}}>Error  Message</p> */}
        <p style={{ color: "red" }}>{msg} </p>
      </Alert>
    </Collapse>
  );
}
