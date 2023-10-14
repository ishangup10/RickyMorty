import React from 'react';
import {  useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import './component.css';


const CharacterDetail = () => {
  const {character:{character}} = useSelector((state) => state);

  if (!character) {
    return null;
  }
 
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifySelf='center' className='characterContainer'>
        <Grid item xs={8} lg={6}>
          <img src={character.image}/>
        </Grid>
        <Grid item lg={6}>
          <h2>{character.name}</h2>
          <div className='status'>
            <strong>Status:</strong> {character.status}
          </div>
          <div className='species'>
            <strong>Species:</strong> {character.species}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterDetail;
