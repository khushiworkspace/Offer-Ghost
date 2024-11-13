import  React,{useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function SelectSmall({handleNexts3}) {
  const [Employees, setEmployees] = React.useState('Select');

  const handleChange = (event: SelectChangeEvent) => {
    setEmployees(event.target.value);
  };


  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("businessRange"));
    if (savedData && savedData.Employees) {
      setEmployees(savedData.Employees);
    }
  }, []);
  
  useEffect(() => {
    if (Employees !== undefined && Employees !== null) {
      localStorage.setItem("businessRange", JSON.stringify({ Employees }));
    }
  }, [Employees]);
  //console.log(Employees, 'employee');
  
  handleNexts3(Employees)
  return (
<>
      <InputLabel htmlFor="business-email-signup">
        Number of Employees<span style={{ color: "red" }}> *</span>
      </InputLabel>
    <FormControl sx={{mt:1}}>
      <InputLabel id="demo-select-small-label">Choose from dropdown</InputLabel>
      <Select fullWidth
        // labelId="demo-select-small-label"
        // id="demo-select-small"
        value={Employees}
        label="Number of Employees"
        onChange={handleChange}
        defaultOpen
      >
        <MenuItem value={"0-1"}>Self-employed</MenuItem>
        <MenuItem value={"1-10"}>1-10</MenuItem>
        <MenuItem value={"11-50"}>11-50</MenuItem>
        <MenuItem value={"51-200"}>51-200</MenuItem>
        <MenuItem value={"201-500"}>201-500</MenuItem>
        <MenuItem value={"501-1000"}>501-1000</MenuItem>
        <MenuItem value={"1001-5000"}>1001-5000</MenuItem>
        <MenuItem value={"5000-10000"}>5000-10000</MenuItem>
        <MenuItem value={"10001-50000"}>10000 & Above</MenuItem>
      </Select>
    </FormControl>

</>
  );
}
