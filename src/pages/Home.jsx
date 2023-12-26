import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercise,setExercise]=useState([])
  console.log(bodyPart)

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercise={setExercise}/>

      <Exercises bodyPart={bodyPart} exercise={exercise} setExercise={setExercise}/>

    </Box>
  )
}

export default Home