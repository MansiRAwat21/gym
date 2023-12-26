import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOption,fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDeatail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
 const { id }= useParams();

 useEffect(() => {
  const fetchExerciseData=async()=>{
    const exerciseDbUrl="https://exercisedb.p.rapidapi.com";
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id} `,exerciseOption);
      setExerciseDeatail(exerciseDetailData);

      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOption)
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOption)
      setEquipmentExercises(equipmentExercisesData)
     
    }
     fetchExerciseData();
     }, [id])
 

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <SimilarExercises equipmentExercises={equipmentExercises} targetMuscleExercises={targetMuscleExercises}/>
    </Box>
  )
}

export default ExerciseDetails