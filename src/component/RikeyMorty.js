// src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../actions/characterAction'; 
import CharacterTable from './CharacterTable'; 
import Search from './Search';
import Container from '@mui/material/Container';
import axios from 'axios'



function RickeyAndMorty() {
  const dispatch = useDispatch();
  const {characters:{characters=[]}} = useSelector((state) => state); 
  const[ selectedCharacter,setSelectedCharacter] = useState({});
  const [ searchValue, setSearchValue] = useState('');
  const [ filterData, setFilterData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  
  useEffect(() => {
    const fetchData  = async () => {
        try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        dispatch(fetchCharacters(response.data.results));
        } catch (error) {
          console.error('Error fetching characters: ', error);
        }
        }
        fetchData()
  }, []);

  useEffect(() => {
    if(characters && characters.length > 0){
      setFilterData([...characters]);
    }
  },[characters])

  const searchArray = () => {
    if(searchValue.length > 0){
        let searchedValue = filterData.filter(({name})=>{
           return  name.toLowerCase().includes(searchValue)
        })
        setFilterData(searchedValue)
        setIsAscending(true)
    }else{
        setFilterData([...characters])
    }
  }

  useEffect(()=>{
    searchArray()
  },[searchValue])
  
  const sortCharacters = () => {
    let tempArray = [...filterData];
    if(isAscending){
        tempArray.length && tempArray.sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
        });
        setFilterData(tempArray)
    }else{  
        setFilterData([...characters])
    }
  }

 
  return (
    <Container maxWidth="lg">
      <h1>Rick and Morty Character Viewer</h1>
      <div style={{margin:"20px",textAlign:"left"}}>
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
      <CharacterTable 
      characters={filterData || []} 
      setSelectedCharacter={setSelectedCharacter} 
      sortCharacters={sortCharacters}
      setIsAscending={setIsAscending}
      isAscending={isAscending}/>
    </Container>
  );
}

export default RickeyAndMorty;

