// import * as React from 'react';
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { styled } from '@mui/system';
// import { ShrinkOutlined } from '@ant-design/icons';

// const StyledFormControl = styled(FormControl)(({ status}) => ({
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//     //  borderColor:'grey',
//     },
//   },
// }));


// export default function FormPropsTextFields({ label,name,width, onchange, Options, selected, disable,status ,error,helperText,inputRef}) {
  
//   return (
//      <StyledFormControl sx={{ width: width }} xs={12} sm={12}  >
    
//       <Select
//              style={{backgroundColor:"white"}}
//         id="demo-simple-select-helper"
//         value={selected}
//         name={name}
//         onChange={onchange}
//         displayEmpty
//        // borderColor={'red'}
//       //  inputProps={{ 'aria-label': 'Without label' }}
//       xs={12} sm={12}
//         error={error}
//         helperText={helperText}
//         inputRef={inputRef}
//       >
//          <MenuItem value="" xs={12} sm={12}>
//             <span style={{color:'lightgray',font:"inherit",fontSize:"inherit",lineHeight:"inherit",fontWeight:"normal", display: 'flex', flexDirection: 'column', overflow:'clip', width: width}}>{label}</span>
//           </MenuItem>
//         {Options?.map((option) => (
//           <MenuItem value={option.value}>{option.label}</MenuItem>
//         ))}
//       </Select>
//      </StyledFormControl>
//   );
// }
import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const StyledFormControl = styled(FormControl)(({ status }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      // borderColor:'grey',
    },
  },
}));

export default function FormPropsTextFields({
  label,
  name,
  width,
  onchange,
  Options,
  selected,
  disable,
  status,
  error,
  helperText,
  inputRef
}) {
  return (
    <StyledFormControl sx={{ width: width }} error={error} xs={12} sm={12}>
      <Select
        style={{ backgroundColor: 'white' }}
        id="demo-simple-select-helper"
        value={selected}
        name={name}
        onChange={onchange}
        displayEmpty
        xs={12}
        sm={12}
        inputRef={inputRef}
      >
        <MenuItem value="" xs={12} sm={12}>
          <span
            style={{
              color: 'lightgray',
              font: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit',
              fontWeight: 'normal',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'clip',
              width: width
            }}
          >
            {label}
          </span>
        </MenuItem>
        {Options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}
