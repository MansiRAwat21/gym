import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOption, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercise, bodyPart, setExercise }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercise.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" })
  }
  useEffect(() => {
    const fetchExerciseData = async () => {

        let exerciseData = [];
        if (bodyPart === 'all') {
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

        } else {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption)
        }
        setExercise(exerciseData);
      }
      
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt={"50px"}
      p="20px"
    >
      <Typography variant='h4' mb="46px">
        Showing Result
      </Typography>

      <Stack direction={"row"}
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap={"wrap"} justifyContent={"center"}
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercise.length > 9 && (
          <Pagination
            color='secondary'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />

        )}

      </Stack>
    </Box>
  )
}

export default Exercises