import { createSlice } from '@reduxjs/toolkit'

interface EditorState {
  editing: boolean
}

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    editing: false,
  } as EditorState,
  reducers: {
    startEditing(state) {
      state.editing = true
    },
    stopEditing(state) {
      state.editing = false
    },
    toggleEditing(state) {
      state.editing = !state.editing
    },
  },
})

export const { startEditing, stopEditing, toggleEditing } = editorSlice.actions

export default editorSlice.reducer
