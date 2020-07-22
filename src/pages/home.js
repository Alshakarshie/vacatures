import React, { Children } from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import FadeIn from '../components/fadeIn/FadeIn';
import Services from '../components/services/Services';
import FeaturedJobs from '../components/featuredJobs/FeaturedJobs';

export default function Home() {
    return (
        <>
    <Hero>
        <FadeIn>
            <Banner title="Vacatures" subtitle="It’s very easy to be different, but very difficult to be better."></Banner>
        </FadeIn>
    </Hero>
    <Services/>
    <FeaturedJobs/>
    </>
    )
}

