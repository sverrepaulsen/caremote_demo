import { createSlice } from '@reduxjs/toolkit'

export const searchDialogSlice = createSlice({
  name: 'search_dialog',
  initialState: {
    show: false,
  },
  reducers: {
    showDialog: (state) => {
      state.show = true
    },
    hideDialog: (state) => {
      state.show = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showDialog, hideDialog } = searchDialogSlice.actions

export default searchDialogSlice.reducer