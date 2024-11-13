// import React, { useState } from 'react';
// import { Button, TextField, Box, Typography, Stack } from '@mui/material';
// import { FileUpload } from '@mui/icons-material';
// const FilePicker = ({fileChange,error,helperText,inputRef}) => {
//   const [selectedFile, setSelectedFile] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleButtonClick = () => {
//     document.getElementById('file-input').click();
//   };


//   fileChange(selectedFile)
//   return (
//     <Box display="flex" alignItems="center" gap={1}>
//       <input
//         id="file-input"
//         type="file"
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />
//       <Button
//         fullWidth
//         variant="outlined"
//         color="primary"
//         onClick={handleButtonClick}
//         sx={{ p: 1, mt: 0 }} // Ensure no margin top
//       >
//         <Stack direction="row" spacing={1}>
//           <FileUpload style={{ fontSize: "20px" }} />
//           <Typography>
//             Upload<span style={{ marginLeft: "5px" }}>File</span>
//             {/* {selectedFile ? selectedFile.name : 'No file chosen'} */}
//           </Typography>
//         </Stack>
//       </Button>
//       <TextField
//         value={selectedFile ? selectedFile.name : 'No file chosen'}
//         variant="outlined"
//         margin="dense" // Use dense margin to align with button
//         fullWidth
//         disabled
//         sx={{ marginTop: 0 }} // Ensure no margin top
//         error={error}
//         helperText={helperText}
//         inputRef={inputRef}
//       />
//     </Box>
//   );
// };

// export default FilePicker;
import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Stack, FormHelperText } from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';

const FilePicker = ({ fileChange,  inputRef }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isfileError, setIsfileError] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['application/pdf','image/jpg', 'image/jpeg', 'image/png', 'message/rfc822'];
      if (!validTypes.includes(file.type)) {
        setIsfileError(true)
        setFileError("File must be PDF, JPG,JPEG, PNG, or EML ");
        setSelectedFile(null);
        fileChange(null);
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setIsfileError(true)
        setFileError("File size exceeds 2 MB.");
        setSelectedFile(null);
        fileChange(null);
        return;
      }
      setFileError("");
      setIsfileError(false)
      setSelectedFile(file);
      fileChange(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <Box >
      <Box display="flex" alignItems="center" gap={1}>
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          
        />
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={handleButtonClick}
          sx={{ p: 1, mt: 0, borderColor:isfileError&& "#FF4D4F" }} 
        >
          <Stack direction="row" spacing={1}>
            <FileUpload style={{ fontSize: "20px" }} />
            <Typography>
              Upload<span style={{ marginLeft: "5px" }}>File</span>
            </Typography>
          </Stack>
        </Button>
        <TextField
          value={selectedFile ? selectedFile.name : 'No file chosen'}
          variant="outlined"
          margin="dense" 
          fullWidth
          // disabled
          sx={{ marginTop: 0.5 }} 
          error={isfileError }
          // helperText={fileError }
          // inputRef={inputRef}
          inputRef={inputRef}
        />
      </Box>
      
     {
      fileError && <FormHelperText style={{color:"#FF4D4F"}}>  <InfoIcon fontSize="small" /> { fileError }</FormHelperText>
     }
   
    </Box>
  );
};

export default FilePicker;

