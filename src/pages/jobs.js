import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import {Link} from 'react-router-dom';
import JobsContainer from '../components/jobsContainer/JobsCointainer';

const Jobs = () => {
    return <>
    <Hero hero="Hero">
        <Banner title="Alle Vacatures">
            <Link to="/" className="btn">
                Terug naar de homepagina
            </Link>
        </Banner>
    </Hero>
    <JobsContainer>
        
    </JobsContainer>
    </>
}

export default Jobs;