
// import React from 'react';
// import { TextField, InputAdornment, Divider, Box } from '@mui/material';
// import { SearchOutlined } from '@mui/icons-material';

// export default function NewSearch({ placeholder, searchInput, handleKeyPress,width }) {
//   return (
//     <TextField 
//       fullWidth
//       sx={{
//         // border: '1px solid #A6C0FF',
//         width:{width} ,
//         borderRadius:"5px"

//       }}
//       size="small"
//       id="header-search"
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <SearchOutlined style={{ color: "#333F5D", cursor: "pointer" }} size="large" />
//               <Divider orientation="vertical" flexItem sx={{ borderColor: "#B1C8FF", height: '30px', mx: 1 }} />
//             </Box>
//           </InputAdornment>
//         )
//       }}
//       aria-describedby="header-search-text"
//       inputProps={{
//         'aria-label': 'weight'
//       }}
//       placeholder={placeholder}
//       onChange={(e) => searchInput(e.target.value)}
//       onKeyDown={handleKeyPress}
//     />
//   );
// }
import React from 'react';
import { TextField, InputAdornment, Divider, Box } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

export default function NewSearch({ placeholder, searchInput, handleKeyPress, width }) {
  return (
    <TextField 
      fullWidth
      sx={{
        width: width,
        borderRadius: "5px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#A6C0FF', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#A6C0FF', // Same border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#A6C0FF', // Same border color when focused
          },
          '&.Mui-focused': {
            boxShadow: 'none', // Remove shadow on focus
          },
          '&:hover': {
            boxShadow: 'none', // Remove shadow on hover
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#A6C0FF', // Ensure the border color stays the same
        },
      }}
      size="small"
      id="header-search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SearchOutlined style={{ color: "#333F5D", cursor: "pointer" ,marginTop:"3px"}} size="large" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: "#B1C8FF", height: '30px', mx: 1 }} />
            </Box>
          </InputAdornment>
        )
      }}
      aria-describedby="header-search-text"
      inputProps={{
        'aria-label': 'weight'
      }}
      placeholder={placeholder}
      onChange={(e) => searchInput(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
