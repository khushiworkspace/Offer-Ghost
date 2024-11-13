        import React, { useEffect, useMemo, useRef, useState } from 'react';
        import { Card, CardHeader, CardContent, TextField,Button, Typography, FormControlLabel, Checkbox, FormGroup, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
        import CloseIcon from '@mui/icons-material/Close';
        import '../css/Dropdown.css';
        import axios from 'axios';
        import { server } from '../API/server';
import { el } from 'date-fns/locale';

        const CountryDropdown = ({skelled,loc,cmp,onDataReceived,onDataReceived1,prevedata,width,carwidth,height,type}) => {
          const [toast, setToast] = useState(false);
          const [options, setOptions] = useState([]);
          const [filteredOptions, setFilteredOptions] = useState([]);
          const [skills,setSkills]=useState([]);
          const [tabIndex, setTabIndex] = useState(0); 

          
        


          const skell =[
            { name: 'Agra' },
            { name: 'Ahmedabad' },
            { name: 'Aligarh' },
            { name: 'Allahabad' },
            { name: 'Amritsar' },
            { name: 'Amroha' },
            { name: 'Bangalore' },
            { name: 'Bhopal' },
            { name: 'Chandigarh' },
            { name: 'Chennai' },
            { name: 'Coimbatore' },
            { name: 'Delhi' },
            { name: 'Dhanbad' },
            { name: 'Faridabad' },
            { name: 'Firozabad' },
            { name: 'Gurgaon' },
            { name: 'Guwahati' },
            { name: 'Gwalior' },
            { name: 'Hubli-Dharwad' },
            { name: 'Hyderabad' },
            { name: 'Indore' },
            { name: 'Jabalpur' },
            { name: 'Jaipur' },
            { name: 'Jodhpur' },
            { name: 'Kalyan-Dombivli' },
            { name: 'Kanpur' },
            { name: 'Kolkata' },
            { name: 'Lucknow' },
            { name: 'Ludhiana' },
            { name: 'Madurai' },
            { name: 'Meerut' },
            { name: 'Moradabad' },
            { name: 'Mumbai' },
            { name: 'Nagpur' },
            { name: 'Nashik' },
            { name: 'Patiala' },
            { name: 'Patna' },
            { name: 'Pune' },
            { name: 'Raipur' },
            { name: 'Rajkot' },
            { name: 'Siliguri' },
            { name: 'Solapur' },
            { name: 'Srinagar' },
            { name: 'Surat' },
            { name: 'Thane' },
            { name: 'Vadodara' },
            { name: 'Varanasi' },
            { name: 'Vasai-Virar' },
            { name: 'Vijayawada' },
            { name: 'Visakhapatnam' }
          ];

          const Department =[ 
            { name: 'Business Intelligence and Analytics' },
            { name: 'Cloud Computing' },
            { name: 'Cybersecurity' },
            { name: 'Database Management' },
            { name: 'Hardware Engineering' },
            { name: 'IT Support/Helpdesk' },
            { name: 'Mobile App Development' },
            { name: 'Network Infrastructure' },
            { name: 'Project Management' },
            { name: 'Quality Assurance/Testing' },
            { name: 'Software Development' },
            { name: 'Web Development' }
        ]

       const role= [
          { name: 'Back-end Developer' },
          { name: 'Business Analyst (IT)' },
          { name: 'Cloud Solutions Architect' },
          { name: 'Cybersecurity Analyst/Engineer' },
          { name: 'Data Scientist' },
          { name: 'Database Administrator (DBA)' },
          { name: 'DevOps Engineer' },
          { name: 'Front-end Developer' },
          { name: 'Full-stack Developer' },
          { name: 'Information Security Specialist' },
          { name: 'IT Support Technician' },
          { name: 'Machine Learning Engineer' },
          { name: 'Mobile App Developer' },
          { name: 'Network Administrator/Engineer' },
          { name: 'Project Manager (IT)' },
          { name: 'Quality Assurance Engineer' },
          { name: 'Software Developer/Engineer' },
          { name: 'Systems Administrator/Engineer' },
          { name: 'UI/UX Designer' },
          { name: 'Web Developer' }
        ]
          const skill =[
            { name: 'AWS' },
            { name: 'Flutter' },
            { name: 'Kotlin' },
            { name: 'Node js' },
            { name: 'Reat js' },
            { name: 'SQl' },
            { name: 'Typescript' }
          ]
          const containerRef = useRef(null);
          const [clickedCheckboxes, setClickedCheckboxes] = useState([]);
          const [prevData, setPrevData] = useState(prevedata);
          const [searched,setSearched]=useState(false);
          useEffect(() => {
            if(type == 'department'){
              setSkills(skelled?skelled:Department);
            }else if(type == 'role'){
              setSkills(skelled?skelled:role);
            }else if(type == 'skill'){
             
              //console.log("kj");  
            }else{
              setSkills(skelled?skelled:skell);
            }

            // setSkills(skill.map((item) => item.name).slice().sort());
            
            if(prevedata){
            
                setClickedCheckboxes([prevedata]);
              }
            
            const handleClickOutside = (event) => {
              if (containerRef.current && !containerRef.current.contains(event.target)) {
                setToast(false);
              }
            };
        
            document.addEventListener('mousedown', handleClickOutside);
        
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, [prevedata]);

          const fetchSkills = async (searchValue) => {
            try {
              const response = await axios.get(`${server}/v1/global/skill?skill=${searchValue}`, {
                headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
              })
             setSkills(response.data);
             return response.data;

            } catch (error) {
          
            }
          };
          
        
          const handleClick = () => {
            if(type == 'skill'){
              fetchSkills('');
            }
            setToast(true);
          };
        
          // const handleSave = () => {
          //   if (skill !== '') {
          //     setOptions(prevOptions => [...prevOptions, skill]);
          //     setSkill('');
          //     setToast(false);
          //   } else {
          //     alert('Please enter a skill');
          //   }
          // };
        
          // const handleChange = (e) => {
          //   setSkill(e.target.value);
          // };
        
        
        
         
          let updatedCheckboxes = [];
          const handleCheckboxClick =async (value) => {
          
            if (loc) {
              updatedCheckboxes = [value];
              setClickedCheckboxes(updatedCheckboxes);
              onDataReceived1(updatedCheckboxes);
              setToast(false);
            } else {
              if (clickedCheckboxes.includes(value)) {
                updatedCheckboxes = clickedCheckboxes.filter(cb => cb !== value);
              } else {
                updatedCheckboxes = [...clickedCheckboxes, value];
              }
           
              setClickedCheckboxes(updatedCheckboxes);
              onDataReceived(updatedCheckboxes);
            }
            ;
           
          };
    
        


    
          const handleSearch =async (e) => {
            setSearched(true);
            const searchValue = e.target.value;
           if(type == 'skill'){
        let data=  await  fetchSkills(searchValue);
       
     
        setFilteredOptions(data);
           }else{
            const filteredSkills = skills.filter(option =>
              option.name.toLowerCase().includes(searchValue.toLowerCase())
             
            );
            setFilteredOptions(filteredSkills);
           }
           
          };
          const[adedd,setAdedd]=useState(false);
          const handleAdd = () => {
            setAdedd(true);
          };
         const[skil,setSkil]=useState('');
          const addChange=(e)=>{
             setSkil(e.target.value);
          }

          const addeds = () => {
            if (skil !== '') {
              let updatedCheckboxes = []; // Declare the variable here
          
              if (loc) {
                updatedCheckboxes = [skil];
                setClickedCheckboxes(updatedCheckboxes);
                setAdedd(false);
                onDataReceived1(updatedCheckboxes);
              } else {
                updatedCheckboxes = [...clickedCheckboxes, skil];
                setClickedCheckboxes(updatedCheckboxes);
                setAdedd(false);
                onDataReceived(updatedCheckboxes);
              }
            } else {
              setAdedd(false);
            }
          };
          

          const handleOptionsClose = (option) => {
         
            setClickedCheckboxes((prevCheckboxes) => prevCheckboxes.filter((cb, index) => index !== option));
          if(loc){
            const updatedCheckboxes = clickedCheckboxes.filter((cb, index) => index !== option);
            onDataReceived1(updatedCheckboxes);
          }else{
            const updatedCheckboxes = clickedCheckboxes.filter((cb, index) => index !== option);
            onDataReceived(updatedCheckboxes);
          }
         
          };


          const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
              setToast((prevToast) => !prevToast);
            }
          };

      
          return (
            <div style={{margin:0,position:"relative", }} >
           <div
                 tabIndex={tabIndex}
                 onKeyDown={handleKeyDown}
            // onKeyDown={handleKeyDown}  
            style={{       
    width: width ? width:'250px',
    height:loc ?"43px":height? height:"100px",
    overflow: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none', 
    },
  }}
  className="gov"
  onClick={handleClick}
>

          <div style={{ display: 'flex',paddingTop:'4px', alignItems:"center", flexWrap: 'wrap',  ":hover":{
        borderColor:'red'}}} >
            {clickedCheckboxes?.map((option,index) => (
               <div
               key={index}    
               style={{
                 border: '1px solid gray',
                //  height: '28px',
                 marginBottom: '1px',
                 borderRadius: '10rem',
                 display: 'flex',
                 alignItems: 'center',
            
                 padding: '0.2rem',
                 margin: '2px',
               }}
               
             >
                
               <span>{option}</span>
               <IconButton sx={{width:5,height:3}} onClick={() => handleOptionsClose(index)}>
                 <CloseIcon fontSize='10'/>
               </IconButton>
             </div>
            ))}
          {clickedCheckboxes && clickedCheckboxes.length > 0 ? null : <span style={{ color: 'lightgrey', fontSize: '15px',marginLeft:'8px',marginTop:'5px' }}>{cmp}</span>}
          </div>
         
        
          
        </div>
              {toast ? (
                
                <Card  ref={containerRef}  sx={{
                  border:'1px solid grey',
                    marginTop:'4px',
                    width: carwidth?carwidth:'250px',
                    zIndex:1500,
                     position:"absolute"
                  }}
                  >
                  <CardHeader title={cmp}  action={
          <IconButton onClick={() =>{setToast(false);setSearched(false);}}>
            <CloseIcon />
          </IconButton>
        } sx={{marginBottom:'-18px'}}/>
                  <CardContent sx={{margin:'0px'}}>
                  <TextField
  type="text"
  sx={{width:carwidth?'250px':'200px'}}
  onKeyDown={handleKeyDown}
  placeholder='Search here'
  onChange={handleSearch}
  variant="outlined"
  InputProps={{
    sx: { height: '30px' },
    endAdornment: (
      <InputAdornment position="end">
        <Button
          sx={{
            height:'30px',
            backgroundColor: '#adb5bd',
            paddingRight: '-12',
            marginRight: '-12px', 
            color:'#fff',
            '&:focus-within': {
                backgroundColor: 'red',
              },
              ":hover":{
                backgroundColor:'green'
              }
            
          }}
          onClick={handleAdd}
        >
          Add New
        </Button>
      </InputAdornment>
    ),
  }}
/>

    {adedd == true ?
   <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
   <TextField sx={{ width: '100%', marginTop: '5px' }} type="text" onChange={addChange} />
   <div style={{ marginLeft: 'auto' }}>
     <Button onClick={addeds}>Save</Button>
   </div>
 </div>
    
    :
    <FormGroup  >
       <div className="scrollable-divs">
      {
                      searched === true ?filteredOptions?.map((option,index) => (
                        <FormControlLabel
                          key={index}
                          control={<Checkbox
                            value={option.name}
                            checked={clickedCheckboxes.includes(option.name)}
                            onChange={() => handleCheckboxClick(option.name)}
                          />}
                          label={option.name}
                        />
                      ))
                     
                    :
                    <>
                 { skills?.map((option, index) => (
                    <FormControlLabel
                     
                        key={index}
                        control={<Checkbox
                         value={option.name}
                        checked={clickedCheckboxes.includes(option.name)}
                         onChange={() => handleCheckboxClick(option.name)}
                       />}
                        label={option.name}
                        />
                           ))
                        }
                    </>
                      }
                      </div>
                    </FormGroup>
    }
                    
                  </CardContent>
                </Card>
              ) : null}
            </div>
          );
        };
        
        export default CountryDropdown;
        