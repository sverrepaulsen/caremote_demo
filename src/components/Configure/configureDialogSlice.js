import { createSlice } from '@reduxjs/toolkit'

export const configureDialogSlice = createSlice({
  name: 'configure_dialog',
  initialState: {
    show: false,
    diseases: [],
    digital_literacy: "",
    insurance: "",
    price_range: [0, 500]
  },
  reducers: {
    showConfigureDialog: (state) => {
      state.show = true
    },
    hideConfigureDialog: (state) => {
      state.show = false
    },
    setDiseases: (state, action) => {
      state.diseases = action.payload
    },
    setLiteracy: (state, action) => {
      state.digital_literacy = action.payload
    },
    setInsurance: (state, action) => {
      state.insurance = action.payload
    },
    setLowerRange: (state, action) => {
      state.price_range[0] = Math.min(action.payload.value, state.price_range[1] - action.payload.dist)
    },
    setUpperRange: (state, action) => {
      state.price_range[1] = Math.max(action.payload.value, state.price_range[0] + action.payload.dist)
      //setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

  },
})

// Action creators are generated for each case reducer function
export const { showConfigureDialog, hideConfigureDialog, setDiseases, setLiteracy, setInsurance, setLowerRange, setUpperRange } = configureDialogSlice.actions

export default configureDialogSlice.reducer