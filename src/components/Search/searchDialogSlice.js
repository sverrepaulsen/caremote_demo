import { createSlice } from '@reduxjs/toolkit'

export const searchDialogSlice = createSlice({
  name: 'search_dialog',
  initialState: {
    show: false,
  },
  reducers: {
    showSearchDialog: (state) => {
      state.show = true
    },
    hideSearchDialog: (state) => {
      state.show = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showSearchDialog, hideSearchDialog } = searchDialogSlice.actions

export default searchDialogSlice.reducer