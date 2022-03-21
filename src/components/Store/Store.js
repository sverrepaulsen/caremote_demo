import React from 'react';
import './Store.css';
import Card from '../Card/Card'
import { Grid, Box } from '@mui/material/';
import { useSelector } from 'react-redux'
import AutocompleteBoxes from '../AutocompleteBoxes/AutocompleteBoxes';
import PriceSlider from '../PriceSlider/PriceSlider';

function Home() {
    const diseases = useSelector((state) => state.configure_dialog.diseases)
    const literacy = useSelector((state) => state.configure_dialog.digital_literacy)
    const insurance = useSelector((state) => state.configure_dialog.insurance)

    return (
        <Box>
            <Box className="header_box">
                <h1>Matching Products</h1>
            </Box>
            <Box className="grid_box">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <h4>Product Filters</h4>
                        <AutocompleteBoxes defdisease = {diseases} defliteracy = {literacy} definsurance = {insurance}/>
                        <h5>Price Range</h5>
                        <PriceSlider/>
                    </Grid>
                    <Grid container item xs={10} direction="row" className='item_grid'>
                        {data.map((item, index) => (
                            <Card key={index} className="store_card" src={item.src} title={item.title} description={item.description}/>
                        ))}
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default Home


const data = [
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
    {
        src: "https://www.birmingham.ac.uk/images/news/diabetes-720.jpg", 
        title: "Diabetes Product", 
        description: "Diabetes Product information blob"
    },
]
