import React from "react";
import TextField from '@mui/material/TextField';


const Search = ({setSearchValue, searchValue}) => {
    return(
        <div>
           <TextField id="outlined-basic" 
           label="Search" variant="outlined" 
           onChange={(e) => setSearchValue(e.target.value)} alue={searchValue}/>
        </div>
    )
}

export default Search