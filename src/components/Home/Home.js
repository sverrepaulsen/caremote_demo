import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import Card from '../Card/Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home_section'>
            <Card
                src="https://www.birmingham.ac.uk/images/news/diabetes-720.jpg"
                title="Diabetes Type 1"
                description="Diabetes type 1 information blob"
            />
            <Card
                src="https://www.drholdright.co.uk/wp-content/uploads/2019/12/blood_pressure.png"
                title="Hypertension"
                description="Hypertension information blob"
            />
            <Card
                src="https://img.huffingtonpost.com/asset/582c96f81500001800b0d5a5.jpg?ops=scalefit_720_noupscale"
                title="Diabetes Type 2"
                description="Diabetes type 2 information blob"
            />
            </div>
            <div className='home_section'>
            <Card
                src="https://cdn.sanity.io/images/0vv8moc6/infenctioncontrol/ffec4b4e00b687598729b7678a0a3e0108c7275b-720x480.jpg"
                title="Disease 4"
                description="Disease 4 information blob"
            />
            <Card
                src="https://cdn.sanity.io/images/0vv8moc6/infenctioncontrol/ffec4b4e00b687598729b7678a0a3e0108c7275b-720x480.jpg"
                title="Disease 5"
                description="Disease 5 information blob"
            />
            <Card
                src="https://cdn.sanity.io/images/0vv8moc6/infenctioncontrol/ffec4b4e00b687598729b7678a0a3e0108c7275b-720x480.jpg"
                title="Disease 6"
                description="Disease 6 information blob"
            />
            </div>
        </div>
    )
}

export default Home
