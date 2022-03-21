import React from "react";
import { useDispatch } from 'react-redux'
import { TextField, Autocomplete } from '@mui/material'; 
import { setDiseases, setInsurance, setLiteracy, setLowerRange, setUpperRange } from "../Configure/configureDialogSlice";

const AutocompleteBoxes = ({defdisease = undefined, defliteracy = undefined, definsurance = undefined}) => {
    const dispatch = useDispatch()

    const handleAutocompleteChange = (event, value, comp) => {
        if(comp === "disease")
        {
            dispatch(setDiseases(value))
        }
        else if(comp === "literacy")
        {
            dispatch(setLiteracy(value))
        }
        else if(comp === "insurance")
        {
            dispatch(setInsurance(value))
        }
    }

    return (
        <div>
            <Autocomplete 
                    className = "dialog_autocomplete" 
                    multiple
                    id = "disease_selector"
                    options = {diseases}
                    filterSelectedOptions
                    defaultValue={defdisease}
                    onChange={(e, value) => handleAutocompleteChange(e, value, "disease")}
                    renderInput = {(params) => (
                        <TextField {...params} label = "Diseases" />
                    )}
                />
                <Autocomplete 
                    className = "dialog_autocomplete" 
                    disablePortal
                    id = "literacy_selector"
                    options = {digital_literacy}
                    defaultValue={defliteracy}
                    onChange={(e, value) => handleAutocompleteChange(e, value, "literacy")}
                    renderInput = {(params) => (
                        <TextField {...params} label = "Digital Literacy"/>
                    )}
                />
                <Autocomplete 
                    className = "dialog_autocomplete" 
                    disablePortal
                    id = "insurance_selector"
                    options = {insurance}
                    defaultValue={definsurance}
                    onChange={(e, value) => handleAutocompleteChange(e, value, "insurance")}
                    renderInput = {(params) => (
                        <TextField {...params} label = "Health Insurance Provider"/>
                    )}
                />
        </div>
    );
};

const diseases = ['Diabetes Type 1', 'Diabetes Type 2', 'Hypertension']
const digital_literacy = ['No Literacy', 'Basic', 'Advanced', 'Fluent' ]
const insurance = ['None', 'TK', 'EU', 'Other']

export default AutocompleteBoxes;