import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCharacter } from '../actions/characterAction'; 
import unfold from '../public/assests/unfold-more.svg'

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'status',
    label: 'Status'
  },
  {
    id: 'species',
    label: 'Species',
    minWidth: 170
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170
  }
];

const CharacterTable = ({ characters , setSelectedCharacter, sortCharacters, setIsAscending, isAscending}) =>{
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const showCharacterDetail = (e) => {
   dispatch(getCharacter(e))
    navigate('./characterDetail');
  }

  const sortData = () => {
    sortCharacters();
    setIsAscending(!isAscending)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  onClick={sortData}
                >
                  <span>{column.label}</span>
                   {column.id === "name" ?  
                   <img src={unfold} width={18} className='imageSrc'/>
                   : ""}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {characters
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        if(column.id === 'action'){
                          return(
                            <TableCell key={column.id} align={column.align}>
                              <Button variant="contained" onClick={() => showCharacterDetail(row)}>Detail</Button>
                            </TableCell>
                          )
                        }else{
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                    }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={characters.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default CharacterTable;
