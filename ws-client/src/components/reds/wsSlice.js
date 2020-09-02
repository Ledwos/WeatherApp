import { createSlice } from '@reduxjs/toolkit';

export const wsSlice = createSlice({
  name: 'ws',
  initialState: {
    submit: false,
    location: " ",
    result: " ",
    theme: "wComp"
  },
  reducers: {
    updateSubmit: state => {
        state.submit = !state.submit;
    },
  },
});

export const { updateSubmit } = wsSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTheme = state => state.ws.theme;

export default wsSlice.reducer;
