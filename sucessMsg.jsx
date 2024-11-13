import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEffect } from 'react';
import { Backdrop, Typography } from '@mui/material';

export default function SucessMsg({msg,sucess}) {
    const [showSuccess, setShowSuccess] = useState(false);
    console.log("msg,sucess",msg,sucess);
    useEffect(() => {
        if(sucess === true){
            setShowSuccess(sucess);
        }else{
            setShowSuccess(false)
        }
     
      }, [sucess]);

  return (
    //   <Collapse in={showSuccess}>
    //     <Alert
    //       action={
    //         <IconButton
    //           aria-label="close"
    //           color="inherit"
    //           size="small"
             
    //         >
    //           <CloseIcon fontSize="inherit" />
    //         </IconButton>
    //       }
    //       sx={{ mb: 2 }}
    //     >
    //     <p style={{color:'green',fontWeight:'bold'}}>Sucess Message</p>
    //     <p style={{color:'green'}}>{msg}</p>
    //     </Alert>
    //   </Collapse>
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={showSuccess}
    // onClick={handleClose}
  >
    <Alert severity={`${msg==='Candidate can not report ghosting incidents yet.'?'info':'success'}`}>
      {/* <p style={{padding:'0px', color:`${msg==='Candidate can not report ghosting incidents yet.'?'blue':'green'}`}}>{msg}</p> */}
      <Typography
      style={{padding:'0px', color:`${msg==='Candidate can not report ghosting incidents yet.'?'blue':'green'}`}}
      >
{msg}
      </Typography>
    </Alert>
       

    
  </Backdrop>
      
      
  );
}
