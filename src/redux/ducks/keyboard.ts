import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface KeyboardState {
  capsOn: boolean
}

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState: {
    capsOn: false,
  } as KeyboardState,
  reducers: {
    setCaps(state, action: PayloadAction<boolean>) {
      state.capsOn = action.payload
    },
  },
})

export const { setCaps } = keyboardSlice.actions

export default keyboardSlice.reducer
