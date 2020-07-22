import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return <Hero>
        <Banner title="404" subtitle="Pagina niet gevonden!">
            <Link to="/" className="btn">Homepagina</Link>
        </Banner>
    </Hero>
}

