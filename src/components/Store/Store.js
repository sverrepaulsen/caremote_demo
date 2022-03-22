import React, { useEffect, useState, useCallback } from 'react';
import './Store.css';
import Card from '../Card/Card'
import { Grid, Box } from '@mui/material/';
import { useSelector } from 'react-redux'
import AutocompleteBoxes from '../AutocompleteBoxes/AutocompleteBoxes';
import PriceSlider from '../PriceSlider/PriceSlider';

function Store() {
    const diseases = useSelector((state) => state.configure_dialog.diseases)
    const literacy = useSelector((state) => state.configure_dialog.digital_literacy)
    const insurance = useSelector((state) => state.configure_dialog.insurance)
    const range = useSelector((state) => state.configure_dialog.price_range)
    const [filtered_data, setFilteredData] = useState([])

    const filterData = useCallback(() => {
        var temp = []
        for(var i = 0; i < data.length; i++)
        {
            if(diseases.includes(data[i].disease))
            {
                if(data[i].literacy.includes(literacy))
                {
                    if(data[i].insurance.includes(insurance))
                    {
                        if(data[i].price >= range[0] && data[i].price <= range[1])
                        {
                            temp.push(data[i])
                        }
                    }
                }
            }
        }
        setFilteredData(temp)
    }, [diseases, literacy, insurance, range])

    useEffect(() => {
        filterData()
    }, [diseases, literacy, insurance, range, filterData])

    return (
        <Box>
            <Box className="header_box">
                <h1>Matching Products</h1>
            </Box>
            <Box className="grid_box">
                <Grid container spacing={2}>
                    <Grid item xs={2} className="filter_grid">
                        <h4>Product Filters</h4>
                        <AutocompleteBoxes defdisease = {diseases} defliteracy = {literacy} definsurance = {insurance}/>
                        <h5>Price Range</h5>
                        <PriceSlider/>
                    </Grid>
                    <Grid container item xs={10} direction="row" className='item_grid'>
                        {filtered_data.map((item, index) => (
                            <Card key={index} className="store_card" src={item.src} title={item.title} description={item.description} price={item.price}/>
                        ))}
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default Store


const data = [
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product: None + TK + EU, No Lit - Fluent", 
        description: "Diabetes Product information blob",
        disease: "Diabetes Type 1",
        insurance: ["None", "TK", "EU"],
        literacy: ['No Literacy', 'Basic', 'Advanced', 'Fluent'],
        price: 255
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes 2 Product: None + TK + EU, No Lit - Fluent", 
        description: "Diabetes 2 Product information blob",
        disease: "Diabetes Type 2",
        insurance: ["None", "TK", "EU"],
        literacy: ['No Literacy', 'Basic', 'Advanced', 'Fluent'],
        price: 100
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Hypertension Product: None + TK + EU, No Lit - Fluent", 
        description: "Hypertension Product information blob",
        disease: "Hypertension",
        insurance: ["None", "TK", "EU"],
        literacy: ['No Literacy', 'Basic', 'Advanced', 'Fluent'],
        price: 300
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product: None + TK, Advanced - Fluent", 
        description: "Diabetes Product information blob",
        disease: "Diabetes Type 1",
        insurance: ["None", "TK"],
        literacy: ['Advanced', 'Fluent'],
        price: 700
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes 2 Product: None, Basic - Fluent", 
        description: "Diabetes 2 Product information blob",
        disease: "Diabetes Type 2",
        insurance: ["None"],
        literacy: ['Basic', 'Advanced', 'Fluent'],
        price: 950
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Hypertension Product: None, Fluent", 
        description: "Hypertension Product information blob",
        disease: "Hypertension",
        insurance: ["None"],
        literacy: ['Fluent'],
        price: 600
    },
]
