// import React,{useEffect} from 'react';
// import {TextField,Stack,Select,InputLabel,MenuItem,FormHelperText,Typography} from '@mui/material'
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// // import '../css/Drop.css';
// import { styled } from '@mui/system';

// const CustomTextField = styled(TextField)({
//   '& .MuiAutocomplete-input': {
//     padding: '1px 1px',
//     height: '8px',
//   },
// });



// const Location =({type,onValueSelected,label,page,widt,datas})=> {


//   const location =[
//     { name: "Agra" },
//     { name: "Ahmedabad" },
//     { name: "Allahabad" },
//     { name: "Amritsar" },
//     { name: "Bangalore" },
//     { name: "Bhopal" },
//     { name: "Bhubaneswar" },
//     { name: "Chandigarh" },
//     { name: "Chennai" },
//     { name: "Coimbatore" },
//     { name: "Dehradun" },
//     { name: "Delhi" },
//     { name: "Faridabad" },
//     { name: "Gandhinagar" },
//     { name: "Ghaziabad" },
//     { name: "Gurugram" },
//     { name: "Guwahati" },
//     { name: "Hubli" },
//     { name: "Hyderabad" },
//     { name: "Indore" },
//     { name: "Jaipur" },
//     { name: "Jamshedpur" },
//     { name: "Jalandhar" },
//     { name: "Jodhpur" },
//     { name: "Kanpur" },
//     { name: "Kochi" },
//     { name: "Kolkata" },
//     { name: "Lucknow" },
//     { name: "Ludhiana" },
//     { name: "Madurai" },
//     { name: "Mangalore" },
//     { name: "Mumbai" },
//     { name: "Mysore" },
//     { name: "Nagpur" },
//     { name: "Nashik" },
//     { name: "Noida" },
//     { name: "Patna" },
//     { name: "Pune" },
//     { name: "Raipur" },
//     { name: "Ranchi" },
//     { name: "Salem" },
//     { name: "Shimla" },
//     { name: "Surat" },
//     { name: "Thiruvananthapuram" },
//     { name: "Tiruchirapalli" },
//     { name: "Vadodara" },
//     { name: "Varanasi" },
//     { name: "Visakhapatnam" },
//     { name: "Vijayawada" }
//     ];

//   const [value, setValue] = React.useState(null);

//   const [locations, setLocation] = React.useState("Select");

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("businessLoc"));
//     if (savedData && savedData.locations) {
//       setLocation(savedData.locations);
//     }
//   }, []);

//   useEffect(() => {
//     if (locations !== undefined && locations !== null) {
//       localStorage.setItem("businessLoc", JSON.stringify({ locations }));
//     }
//   }, [locations]);



//   datas(locations)
//   return(

//     <Stack spacing={1} style={{marginTop:10}}>
//           {/* <InputLabel htmlFor="created-signup">Industry Type<span style={{color:'red'}}>*</span></InputLabel> */}
//           <Select
//             labelId="candidate-status-label"
//             defaultValue="Select"
//             placeholder="Select"
//              value={locations}

//             onChange={(e) => {
//               setLocation(e.target.value)

//             }}
//           >
//             <MenuItem value="Select">Select</MenuItem>
//             {Array.isArray(location) &&
//               location.map((item,index) => (
//                 <MenuItem value={item.name} key={index}>
//                   {item.name}
//                 </MenuItem>
//               ))}

//           </Select>

//         </Stack>



//   )


// }
// export default  Location;



import React,{useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiAutocomplete-input': {
    padding: '1px 1px',
    height: '8px',
  },
});

const filter = createFilterOptions();

const Location =({type,onValueSelected,label,page,width,datas})=> {
  const [value, setValue] = React.useState('');
  const [open, toggleOpen] = React.useState(false);
  const [renderValue,setRenderValue] =React.useState([]);
  React.useEffect(() => {
    if (type === "location") {
        setRenderValue(location);
      } else  {
        //console.log("role in Location")
      }
  }, [type]);

  const handleClose = () => {
  setDialogValue({
      name: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
  });

  datas(value)
  //console.log("value",value)

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("BusinesLocation"));
    if (savedData && savedData.value) {
      setValue(savedData.value);
    }
  }, []);


  useEffect(() => {
    if (value !== undefined && value !== null) {
      localStorage.setItem("BusinesLocation", JSON.stringify({ value }));
    }
  }, [value]);


  return (
      <Autocomplete

        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,

              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
                name: newValue.inputValue,
            });
          } else {
            setValue(newValue||"");
            if (onValueSelected) {
                onValueSelected(newValue?.name);
              }
          }
        }}
        id="free-solo-dialog-demo"

        options={renderValue}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        freeSolo
        renderInput={(params) => <CustomTextField {...params}  placeholder= {type === "location"? " Select location":"Select Role" }/>}
      />

  );
}
export default  Location;

const location =[

  { name: "Agra" },
  { name: "Ahmedabad" },
  { name: "Allahabad" },
  { name: "Amritsar" },
  { name: "Bengaluru" },
  { name: "Bhopal" },
  { name: "Bhubaneswar" },
  { name: "Chandigarh" },
  { name: "Chennai" },
  { name: "Coimbatore" },
  { name: "Dehradun" },
  { name: "Delhi" },
  { name: "Faridabad" },
  { name: "Gandhinagar" },
  { name: "Ghaziabad" },
  { name: "Gurugram" },
  { name: "Guwahati" },
  { name: "Hubli" },
  { name: "Hyderabad" },
  { name: "Indore" },
  { name: "Jaipur" },
  { name: "Jamshedpur" },
  { name: "Jalandhar" },
  { name: "Jodhpur" },
  { name: "Kanpur" },
  { name: "Kochi" },
  { name: "Kolkata" },
  { name: "Lucknow" },
  { name: "Ludhiana" },
  { name: "Madurai" },
  { name: "Mangalore" },
  { name: "Mumbai" },
  { name: "Mysore" },
  { name: "Nagpur" },
  { name: "Nashik" },
  { name: "Noida" },
  { name: "Patna" },
  { name: "Pune" },
  { name: "Raipur" },
  { name: "Ranchi" },
  { name: "Salem" },
  { name: "Shimla" },
  { name: "Surat" },
  { name: "Thiruvananthapuram" },
  { name: "Tiruchirapalli" },
  { name: "Vadodara" },
  { name: "Varanasi" },
  { name: "Visakhapatnam" },
  { name: "Vijayawada" }
  ];

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

