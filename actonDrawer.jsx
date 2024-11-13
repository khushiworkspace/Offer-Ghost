import React, { useMemo,useState} from 'react';
import { Drawer, Box, Typography, Card,useMediaQuery,Button, Grid, Stack, Tabs, Tab, TextField, TextareaAutosize, Tooltip, Avatar, CardContent} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import '../css/But.css';
import Textarea from '@mui/joy/Textarea';
import '../css/Grid.css';
import '../css/ActionDrawer.css';
import { useSelector } from 'react-redux';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export default function ActionDrawer({ open, onClose,data,type,click,trustClick,score }) {
    const length = data?.applicationStatus?.length-1;
 
  const isLargeScreen = useMediaQuery('(min-width: 1011px)');
  const isMedium = useMediaQuery('(min-width: 750px)');
  const issm = useMediaQuery('(min-width: 500px)');
  const drawerWidth = isLargeScreen ? 950 : isMedium ? 700 :issm? 400 : 250; // Change the values according to your requirements
  const [tabIndex, setTabIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const user = useSelector((state) => state.user);
  // //console.log(data);
 
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  }
  const styles = {
    wrapperDiv: {
      // height: '500px',

      overflowY: 'scroll'
    }
  };
  const toggleOffcanvas = () => {
    onClose();
  };

  return (
    <>
  
  <Drawer anchor="right" open={open} onClose={toggleOffcanvas} sx={{ zIndex: 1400, backgroundColor: 'rgba(0, 0, 0, 0.04)', overflow: 'scroll', borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", height: "100 %" }}>
  <Box sx={{ width: 450,    margin: '10px'  , borderRadius: '10px' }}>
   

    
    <Card elevation={3} sx={{ backgroundColor: '#ffffff', padding: '20px', marginTop: '20px', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)' }}>
    <Tooltip title="Close" followCursor>
      <Button variant="contained"  onClick={toggleOffcanvas} >
              <ArrowBackIosNewOutlinedIcon fontSize="extra-small"  sx={{ marginRight: 1  , cursor: 'pointer'}} />
              close 
            </Button>
    </Tooltip>
      <CardContent>
        <Grid container spacing={3}>
        <Grid item xs={12} display="flex" alignItems="center">
            <Avatar sx={{ width: 50, height: 50, backgroundColor: '#1976d2', marginRight: '15px' }}>
              <AccountBoxIcon style={{ fontSize: "40px", color: '#fff' }} />
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '15px', fontWeight: 'bold' }}>{data?.candidateName || 'N/A'}</Typography>
              <Typography variant="subtitle1" color="textSecondary" sx={{ fontSize: '15px' }}>{data?.candidateEmail || 'N/A'}</Typography>
              <Typography variant="subtitle1" color="textSecondary" sx={{ fontSize: '15px' }}>Phone No: {data?.candidatePhone || 'N/A'}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #1976d2', paddingBottom: '5px' }} gutterBottom>
            Employee  Details
            </Typography>
            {/* <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Apply Date:</strong> {data?.applyDate || "N/A"}</Typography> */}
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Employee Type:</strong> {data?.employmentType || "N/A"}</Typography>
            {/* <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Department:</strong> {data?.department || 'N/A'}</Typography> */}
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Employee Designation:</strong> {data?.jobRole || 'N/A'}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Skill:</strong> {data?.jobSkills?.join(", ") || "N/A"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Reason for Ghosted:</strong> {data?.ghostedReasonByCompany || "N/A"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}>
                    <strong>Date:</strong>   {data?.ghostedDateByCompany  || "N/A"}
                  </Typography> 
                  <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Ghosted By Company:</strong> {data?.ghostedByCompany ? "Yes" : "No"}</Typography>
 
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #1976d2', paddingBottom: '5px' }} gutterBottom>
            Organization Details
            </Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong> Name:</strong> {data?.companyName || "N/A"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong> Email:</strong> {data?.companyEmail || 'N/A'}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Location:</strong> {data?.location || 'N/A'}</Typography>

            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Application Status:</strong> {data?.alldata?.applicationStatus[length]?.job_application_status || "N/A"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Application Status Date:</strong> {data?.alldata?.applicationStatus[length]?.job_application_status_date || "N/A"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Offer Status Date:</strong> {data?.alldata?.offerLetterTimeLimitPeriod || "N/A"}</Typography>
                      
                  
                  
                  
                   </Grid>

          {/* <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '2px solid #1976d2', paddingBottom: '5px' }} gutterBottom>
              Candidate Details
            </Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Ghosted By Candidate:</strong> {data?.ghostedByCandidate ? "Yes" : "No"}</Typography>
            <Typography sx={{ fontSize: '1rem', margin: '10px 0' }}><strong>Reason for Ghosted:</strong> {data?.ghostedReasonByCandidate || "N/A"}</Typography>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  </Box>
</Drawer>




    </>
  );
}

