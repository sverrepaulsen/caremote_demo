import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Slider } from '@mui/material'; 
import { setLowerRange, setUpperRange } from "../Configure/configureDialogSlice";

const PriceSlider = () => {
    const range = useSelector((state) => state.configure_dialog.price_range)
    const dispatch = useDispatch()

    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        
        if (activeThumb === 0) {
            dispatch(setLowerRange({value: newValue[0], dist: minDistance}))
        } 
        else {
            dispatch(setUpperRange({value: newValue[1], dist: minDistance}))
        }
    };

    function valueLabelFormat(value) {
        return `€${value}`;
    }

    return (
        <div>
            <Slider
                getAriaLabel = {() => 'Price Range'}
                value = {range}
                step = {5}
                max = {1000}
                onChange = {handleSliderChange}
                valueLabelDisplay = "auto"
                valueLabelFormat = {valueLabelFormat}
                disableSwap
                marks={marks}
                className="slider"
            />
        </div>
    );  
};

const minDistance = 50
const marks = [
    {
      value: 0,
      label: '€0',
    },
    {
      value: 1000,
      label: '€1000',
    }
];

export default PriceSlider;