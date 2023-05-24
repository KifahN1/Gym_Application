import { createSlice } from "@reduxjs/toolkit";
import { Exercise } from "../../data/interfaces/exercise";

interface ExerciseState {
  data: Exercise[];
}

const exerciseSlice = createSlice({
  name: "selectedExercises",
  initialState: {
    data: [],
  } as ExerciseState,
  reducers: {
    addExercise: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    removeExercise: (state, action) => {
      return {
        ...state,
        data: state.data.filter(
          (exercise: Exercise) => exercise.name !== action.payload.name
        ),
      };
    },
  },
});

export const { addExercise, removeExercise } = exerciseSlice.actions;

export const exerciseReducer = exerciseSlice.reducer;
