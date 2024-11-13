import React, {  useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,Button, IconButton, Input, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
// import addc from '../pages/candidate/addCandidate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Label } from '@mui/icons-material';
import { isBuffer } from 'lodash';

export default function menu({ sttus, Onchange1, Onchange2, date1, date2, status, setStatuspop, statuspop, width, submit }) {
  const [anchorEl, setAnchorEl] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setAnchorEl(true);
  };

  useMemo(() => {
    //console.log("bhjbjhbhjbk", status);
    if (status === "true") {
      handleMenuClick();
    } else {
      setAnchorEl(false);
    }
  }, [statuspop]);

  const handleClose = () => {
    setAnchorEl(false);
  };

  const dd = (e) => {
    if (e.key === 'Enter') {
      setAnchorEl(false);
      setStatuspop({ ...statuspop, [index]: "false" });
    }
  };

  const [approv, setApprove] = useState('false');
  const approve = () => {
    setApprove('true');
  };

  const fun1 = () => {
    submit();
    // setApprove('false');
  };

  return (
  
      <Menu
        onClick={(e) => {
          dd(e);
        }}
        open={anchorEl}
        onClose={handleClose}
        style={{
          boxShadow: 'none',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            width: width,
            height: '38%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          },
        }}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {approv === 'true' ? (
          <div style={{ padding: 20 }}>
            <Typography>
              Confirm your submission the data will be added permanently to the <span style={{ fontWeight: 'bold' }}>Blockchain</span>?
            </Typography>
          </div>
        ) : 
          <div>
            <MenuItem
              onClick={(e) => {
                dd(e);
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack spacing={1} marginTop={0.5}>
                <Typography style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Applica Status Date</Typography>
                <TextField sx={{ width: 250 }} type="date" value={moment(date1).format('YYYY-MM-DD')} onChange={Onchange1} />
              </Stack>
            </MenuItem>
            {sttus === 'OfferLetterSent' && (
              <MenuItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Stack spacing={1} marginTop={0.5}>
                  <Typography style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Due Date</Typography>
                  <TextField sx={{ width: 250 }} size={'300px'} type="date" value={moment(date2).format('YYYY-MM-DD')} onChange={Onchange2} />
                </Stack>
              </MenuItem>
            )}
         </div>
        }

        {approv === 'true' ? (
          <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: 10 }}>
            <Button onClick={fun1} style={{ marginTop: '1rem' }}> Confirm</Button>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={approve} style={{ marginTop: '1rem' }}>update</Button>
          </div>
        )}
      </Menu>
    
  );
}

