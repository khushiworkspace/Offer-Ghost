// import React,{useEffect} from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// // import '../css/Drop.css';
// import { styled } from '@mui/system';
// import { getJobRole } from '../API/adminApi';
// import { useState } from 'react';
// const CustomTextField = styled(TextField)({
//   '& .MuiAutocomplete-input': {
//     padding: '1px 1px',
//     height: '8px',
//   },
// });
// const filter = createFilterOptions();

// const Role =({type,onValueSelected,label,page,width, error,helperText,inputRef})=> {
//   const [value, setValue] = React.useState('');
//   const [open, toggleOpen] = React.useState(false);
//   const [renderValue,setRenderValue] =React.useState([]);
//   const [dialogValue, setDialogValue] = React.useState({
//     name: '',
//   });
//   useEffect(()=>{
//     getRoleApi();
//     console.log('selected role', label);
//     if(label){
//       setValue({name: label})
//     }
//   },[])
  
//   const[role,setRoleData]=useState(['']);
  
//   //-----------------getSkill----------------------//
//       const getRoleApi=async()=>{
//         try{
//           const status = true;
        
//           const response = await getJobRole(dialogValue.name,status);
//           if(response?.status === 200){
//             //console.log("response?.data?.data",response?.data?.data);
//             setRoleData(response?.data?.data);
//             setRenderValue(response?.data?.data);
//           }
         
//           // //console.log("uuuuuuuuuuuuuuuu",response?.data?.data);
//         }catch(err){
//           //console.log(err);
//         }
//       }


//   // React.useEffect(() => {
//   //   if (type === "role") {
//   //       setRenderValue(role);
//   //     } else  {
//   //     }
//   // }, [type]);

//   const handleClose = () => {
//   setDialogValue({
//       name: '',
//     });
//     toggleOpen(false);
//   };


  
//   // for validation
//   return (
//       <Autocomplete
//       // multiple
//         value={value}
      
//         style={{backgroundColor:"white"}}
//         onChange={(event, newValue) => {
//           if (typeof newValue === 'string') {
//             setTimeout(() => {
//               toggleOpen(true);
//               setDialogValue({
//                 name: newValue,
//               });
//             });
//           } else if (newValue && newValue.inputValue) {
//             toggleOpen(true);
//             setDialogValue({
//                 name: newValue.inputValue,
//             });
//           } else {
//             setValue(newValue||"");
//             if (onValueSelected) {
//                 onValueSelected(newValue?.name);
//               }
//           }
//         }}
//         id="free-solo-dialog-demo"
//         options={renderValue}
//         getOptionLabel={(option) => {
//           if (typeof option === 'string') {
//             return option;
//           }
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           return option.name;
//         }}
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         renderOption={(props, option) => <li {...props}>{option.name}</li>}
//         // sx={{
//         //     width: page === 'rg' ? "100%":width ? width:350,
//         //     // height: 300
//         //   }}
//         freeSolo
//         renderInput={(params) => <CustomTextField {...params}  placeholder= {type === "role"? " Select Applied Job Designation":"Select Role" }/>}

//        onError={error}
//        helperText={helperText}
//       />
//   );
// }
// export default  Role;
import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { getJobRole } from '../API/adminApi';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, Typography, Stack, FormHelperText } from '@mui/material';

const CustomTextField = styled(TextField)({
  '& .MuiAutocomplete-input': {
    padding: '1px 1px',
    height: '8px',
  },
});

const filter = createFilterOptions();

const Role = ({ type, onValueSelected, label, page, width, error, helperText, inputRef, setFormState }) => {
  const [value, setValue] = useState('');
  const [open, toggleOpen] = useState(false);
  const [renderValue, setRenderValue] = useState([]);
  const [dialogValue, setDialogValue] = useState({
    name: '',
  });

  useEffect(() => {
    getRoleApi();
    if (label) {
      setValue({ name: label });
    }
  }, [label]);

  const [role, setRoleData] = useState(['']);

  const getRoleApi = async () => {
    try {
      const status = true;
      const response = await getJobRole(dialogValue.name, status);
      if (response?.status === 200) {
        setRoleData(response?.data?.data);
        setRenderValue(response?.data?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setDialogValue({
      name: '',
    });
    toggleOpen(false);
  };

  const handleInputChange = (event, newValue) => {
    setFormState('');
  };

  return (
    <div>
    <Autocomplete
      value={value}
      style={{ backgroundColor: 'white', marginTop: 0 }}  // Ensure no margin top
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
          setValue(newValue || '');
          if (onValueSelected) {
            onValueSelected(newValue?.name);
          }
        }
        handleInputChange(event, newValue);
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
      renderInput={(params) => (
        <CustomTextField
          {...params}
          placeholder={type === 'role' ? ' Select Applied Job Designation' : 'Select Role'}
          error={error}
          inputRef={inputRef}
          fullWidth
          margin="normal"
          sx={{
            width: page === 'rg' ? '100%' : width ? width : '100%',
            fontWeight: '500',
            marginTop: 0,  // Ensure no margin top
          }}
          onChange={handleInputChange}
        />
      )}
    />
    
      {
        error &&<FormHelperText style={{color:"#FFA39E"}}>{helperText}</FormHelperText>
      }
    
    </div>
  );
};

export default Role;




