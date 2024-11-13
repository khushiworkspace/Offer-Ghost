import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getJobRole } from '../API/adminApi';
import { Alert, FormHelperText, styled } from '@mui/material';

const CustomTextField = styled(TextField)({
  "& .MuiAutocomplete-input": {
    padding: "8px", // Adjusted for better visibility and usability
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px", // Optional: styling to improve look
  },
});


const NotificationRole = ({ jobRole, visible,errors,helperText,inputRef ,setFormState}) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const [role, setRoleData] = useState([]);
  const [error, setError] = useState("");

  // Fetch job roles when the component mounts
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getJobRole('', true);
        if (response?.status === 200) {
          setRoleData(response.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch roles:", err);
      }
    };

    fetchRoles();
  }, []);

  // Propagate the selected values to the parent component
  useEffect(() => {
    jobRole(selectedValue);
  }, [selectedValue, jobRole]);

  const selectJobRole = (event, newValue) => {
    
    // Check if user tries to select more than 5 job designations
    if (newValue.length > 5) {
      setError('You can select only 5 job designations');
    } else {
      setError('');
      setSelectedValue(newValue);
    }
    handleInputChange()
  }
  const handleInputChange=()=>{
    if (setFormState) {
      setFormState('');
    }
  }
  

  return (
    <>
      <Autocomplete
        multiple
        id="multiple-limit-tags"
        options={role}
        getOptionLabel={(option) => option?.name || ''}
        value={selectedValue} // Ensure the selected value is controlled properly
        onChange={selectJobRole}
        renderInput={(params) => (
          <CustomTextField {...params} placeholder="Select Job Designation" 
          variant="outlined" 
          error={!!error||errors}
          helperText={error}
          inputRef={inputRef}
          onChange={handleInputChange}
          />
        )}
        disabled={visible}
      />
      {/* {error && <Alert severity="error">{error}</Alert>} */}
      {errors && <FormHelperText style={{color:"#FFA39E"}}>{helperText}</FormHelperText>}
    </>
  );
};

export default NotificationRole;
