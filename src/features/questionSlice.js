import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  question: [
    {
      id: 1,
      answers: [
        {label: 'Rabat', correct: true},
        {label: 'Casablanca', correct: false},
      ],
      image: null,
      label: 'Capitale du maroc ?',
      time: 60,
    },
    {
      id: 2,
      answers: [
        {label: 'Espagne', correct: true},
        {label: 'italie', correct: false},
      ],
      label:
        'Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille ?',
      time: 30,
    },
    {
      id: 3,
      answers: [
        {label: 'Vercingétorix', correct: false},
        {label: 'César', correct: true},
        {label: 'Attila', correct: false},
      ],
      label: 'Qui a dit : « Le sort en est jeté » (Alea jacta est) ?',
      time: 60,
    },
  ],
  correctResponse: 0,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.question = data;
    },
    setCorrect: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.correctResponse += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setQuestion, setCorrect} = questionSlice.actions;

export default questionSlice.reducer;
