import { configureStore } from '@reduxjs/toolkit'
import searchDialogReducer from '../components/Search/searchDialogSlice'

export const store = configureStore({
    reducer: {
        search_dialog: searchDialogReducer,
    },
})