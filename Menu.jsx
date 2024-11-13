import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import addc from '../pages/candidate/addCandidate';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { blockServer } from "../API/server";

export default function menu({ userdata, onclickprofile, setProfile }) {
  //console.log("userdata",localStorage.getItem("userType"));
  const userType = localStorage.getItem("userType");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const userType = localStorage.getItem('userType')
  // const docType = userType==='candidate'? "emp" : "app";
  const sessionId = userdata?._id;
  const { companyId, ghostedId } = userdata;

  // const mainId = userType==='candidate'? ghostedId : companyId;
  
  // console.log('usrdata',userType,mainId,sessionId, companyId,ghostedId);
  const link = userType==='candidate'? 
  `${blockServer}/api/queryy/${ghostedId}/emp/${sessionId}`
  : `${blockServer}/api/query/${companyId}/app/${sessionId}`;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getprofileData = () => {
    setProfile(userdata);
  };

  return (
    <>
      <Box sx={{ marginLeft: "auto" }}>
        <IconButton onClick={handleMenuClick}>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ boxShadow: "none" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: "31ch",
          },
        }}
      >
        <a
          style={{ textDecoration: "none" }}
          // href="https://blockchain.abhosting.co.in/api/history"
          // onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {userType === "candidate" ? 
          null
          :
          <MenuItem
            onClick={() => {
              onclickprofile();
              setAnchorEl(null);
              getprofileData();
            }}
          >
            <Stack flexDirection="row" gap={2}>
              <div style={{ marginLeft: 4 }}>
              <VisibilityIcon style={{ color: "gray" }} />
              </div>
              <div>
                <Typography variant="h5" style={{ color: "black" }}>
                  View More Details
                </Typography>
              </div>
            </Stack>
          </MenuItem>
}
          <MenuItem>
            <Stack flexDirection="row" gap={2}>
              <div style={{ marginLeft: 4 }}>
                <VisibilityIcon style={{ color: "gray" }} />
              </div>
              <div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    // onClick={handleClick}
                    variant="h5"
                    style={{ color: "black" }}
                  >
                    View on Blockchain
                  </Typography>
                </a>
              </div>
            </Stack>
          </MenuItem>
          {/* </Link> */}
        </a>

        {/* <Link to='/AddCandidate' style={{ textDecoration: 'none' }}> */}
        {/* <MenuItem onClick={pass}>
          <Stack flexDirection="row" gap={2}>
            <div style={{ marginLeft: 4 }}>
              <EditIcon style={{ color: "gray" }} />
            </div>
            <div>
              <Typography variant="h5" style={{ color: "black" }}>
                Edit Job Application
              </Typography>
            </div>
          </Stack>
        </MenuItem> */}

        {/* <MenuItem onClick={handleClose}>
          <Stack flexDirection="row" gap={2}>
            <div style={{ marginLeft: 4 }}>
              <DeleteIcon style={{ color: "grey" }} />
            </div>
            <div>
              <Typography variant="h5" style={{ color: "black" }}>
                Close Job Application
              </Typography>
            </div>
          </Stack>
        </MenuItem> */}
      </Menu>
    </>
  );
}
