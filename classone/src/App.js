import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowData from "./components/showdata";
import SMButton from "./components/SMButton";
import SMInput from "./components/SMinput";
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [selectedRow,setSelectedRow] = useState({})
  let arr = [
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
    {
      id:1,
      title:'abc',
      desc:'ABCak da sakjs dlka slkas jl',    
    },   
  ]
  return (
  <>
  <div>
    <ShowData onRowClick={(row)=>console.log(row)} data={arr} />
    </div>
    <SMButton endIcon={<SearchIcon />} onClick={()=>console.log('Add Click')} label='Add' />
    <SMInput label="Email" />
    
  </>    
  );
}

export default App;
