
import  React,{useEffect} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Modal from '@mui/material/Modal';
import FormPropsTextFields from './input';
import { Textarea } from '@mui/joy';
import { Button, Typography ,useTheme, useMediaQuery, Grid,TextField} from '@mui/material';
import axios from "axios";
import {server} from '../API/server';
import { updateRating } from '../API/businessApi';
import { useNavigate } from 'react-router';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


export default function HoverRating() {
  const [value, setValue] = React.useState(0); // set initial state to 0
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [step1,setStep1] = React.useState(false);
  const [error,setError]= React.useState(false);
  const [feedback,setFeedback]=React.useState({
    rate:'',
    desc:''
  });
  const navigate=useNavigate()

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true); // function to open modal
  const handleClose = () => {
    setOpen(false);
    setStep1(false);
    setFeedback({
      desc:''
    });
    navigate("/dashboard")
  }; // function to close modal

  //---------------------API---------------------//

  const handleFeedbackChange = (e) => {
    handleOpen();
    setError('');
    setFeedback({ ...feedback,[e.target.name]: e.target.value, });
  };
  useEffect(()=>{
    handleOpen();
  })

  const updateRatings=async()=>{
    if(feedback.desc == '' ){
      setError('Please enter your feedback.')
    }
    else if(feedback.rate == ''){
      setError('Please Rate Your Experience.')
    }
    else{
    const feedbacks={
        feedback:[ { des: feedback.desc }],
        feedbackRating:  Number(feedback.rate),
      }
      const result = await updateRating(feedbacks);
      //console.log(result,"hhh");
     if(result?.data?.message === "Updated Successfully"){
      setStep1(true);
      setTimeout(handleClose, 3000);
      // setTimeout(navigate("/dashboard"), 9000);

     }
    }

  }



  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width:  isMobileOrTablet ?"95%":450 ,outline:"none", }}>
          {step1 === false ?
          <>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

        <h4>Give feedback</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>


      <Rating
        name="rate"
        value={feedback.rate}
        precision={0.5}
         getLabelText={getLabelText}
        onChange={handleFeedbackChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}

        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{
          "& .MuiRating-iconFilled": {
            color: "orange",
          },
        }}
      />
      <Typography>{labels[0]}{getLabelText}</Typography>
      </div>
         </div>
         
         <Grid container>
         <Grid item md={12} lg={12} sm={12} xs={12}>

         {/* <textarea name='desc'  style={{width:'100%',height:'50px',marginTop:'10px'}}
          onChange={handleFeedbackChange}
          value={feedback.desc}
          multline

          /> */}
            <TextField
                name="desc"
                minRows={3}
                multiline
               fullWidth
               variant='outlined'
               sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
            
                 //  value={candidate?.comments}
                
                 
                  onChange={handleFeedbackChange}
                        width={feedback.desc}
                      />

          </Grid>

         </Grid>
         
          
           
      
          {error ?
          <p style={{marginTop:'5px',color:'red'}}>{error}</p>
        :
        null
        }
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Button onClick={updateRatings} style={{backgroundColor:'#faaf00',color:'white',fontWeight:'bold'}}>Submit</Button>
          </div>
          </>
          :
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <p style={{fontWeight:'bold'}}>Thanks for your Feedback.</p>
         </div>
}
        </Box>
      </Modal>
    </Box>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};
