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

  const handleClose = () => {
    setAnchorEl(null);
  };

  // function MyComponent() {
  //   return <div dangerouslySetInnerHTML={createMarkup()} />;
  // }
  // const pass = () => {
  //   //console.log("userdata", userdata);
  //   navigate('/EditCandidate', { state: { userdata: userdata} });
  // };
  const docType = "app";
  const sessionId = userdata?._id;
  const { companyId } = userdata;
  const link = `${blockServer}/api/query/${companyId}/${docType}/${sessionId}`;
  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     //console.log("userdata", userdata.alldata);
  //     const docType = "application-session";
  //     const sessionId = userdata.alldata._id;
  //     const { mCanId, companyId } = userdata.alldata;
  //     //console.log( "data", docType, "sessionId", sessionId, "mcanid", mCanId, "companyId", companyId);
  //     fetch(
  //       `http://13.127.22.87/api/query/${companyId}/${docType}/${sessionId}`,        
  //       {
  //         method: "GET",
  //         // headers: {
  //         //   "Content-Type": "application/json",
  //         // },
  //         // // body: JSON.stringify({
  //         // //   canId: userdata.alldata._id,
  //         // // }),
  //         // mode: "no-cors",
  //       }
  //     )
  //       .then((response) => response.text())
  //       .then((data) => {
  //         const newTab = window.open();
  //         newTab.document.write(data);
  //       })
  //       .catch((error) => {
  //         //console.log("error", error);
  //       });
  //   } catch (error) {
  //     //console.log(error.message);
  //   }
  // };

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
