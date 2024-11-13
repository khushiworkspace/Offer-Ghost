// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// const SearchField = () => {
//   // State to manage selected option
//   const [selectedOption, setSelectedOption] = useState('pan');

//   return (
//     <TextField
//       variant="outlined"
//       size="small"
//       sx={{
//         '& .MuiInput-root': {
//             paddingLeft: 0, // Adjusted paddingLeft to remove the extra space
//           },
//         overflow:'visible' }}
//       fullWidth
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start" sx={{ marginRight: 10 }}>
//             <Select
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               size="small"
//               sx={{
//                  width:"120px",
//                 backgroundColor: "#EAF0FF",
//                 borderRadius: 0,
//                 margin: 0,
//                 // '& .MuiSelect-select': {
//                 //   paddingTop: 10,
//                 //   paddingBottom: 10,
//                 // },
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   display: 'none',
//                 },
//                 '&:focus': {
//                   backgroundColor: "#EAF0FF",
//                 },
//               }}
//             >
//               <MenuItem value={"pan"}>Pan</MenuItem>
//               <MenuItem value={"email"}>Email</MenuItem>
//               <MenuItem value={"ogId"}>OGID</MenuItem>
//             </Select>
//           </InputAdornment>
//         ),
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//     />
//   );
// };

// export default SearchField;


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Stack } from '@mui/system';

const SearchField = () => {
  // State to manage selected option
  const [selectedOption, setSelectedOption] = useState('pan');
  // State to manage whether the input has been clicked
  const [isClicked, setIsClicked] = useState(false);
  // Additional state to track focus status
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100); // Delay to prevent rapid toggling
  };

  return (
    <>
      <Stack direction={"row"}>
        <Select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          size="small"
          sx={{
            width: "150px",
            backgroundColor: "#EAF0FF",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: "none",
            '&.MuiOutlinedInput-notchedOutline': {
              display: 'none',
            },
            '&:focus': {
              backgroundColor: "#EAF0FF",
            },
          }}
        >
          <MenuItem value={"pan"}>Pan</MenuItem>
          <MenuItem value={"email"}>Email</MenuItem>
          <MenuItem value={"ogId"}>OGID</MenuItem>
        </Select>
        <TextField
        sx={{width:"580px"}}
        />
       
        <Box sx={{ bgcolor: "#3C77FF", width: "7%", borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default SearchField;





