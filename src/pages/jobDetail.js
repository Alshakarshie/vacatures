import React, { Component } from 'react';
import defaultBcg from '../assets/images/background.png';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';
import { JobsContext } from '../context';
import StyledHero from '../components/hero/StyledHero';

export default class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.detail,
            defaultBcg
        };
    }

    static contextType = JobsContext;

    render() {
        const { getJob } = this.context;
        const job = getJob(this.state.slug);
        if (!job) {
            return <div className="error">
                <h3>Vacature niet gevonden!</h3>
                <Link to="/jobs" className="btn">Terug naar vacatures pagina</Link>
            </div>
        }
        const { name, description, extras, images } = job;
        return <>
            <StyledHero img={images || this.state.defaultBcg}>
                <Banner title={name}>
                    <Link to="/jobs" className="btn">
                        Terug naar alle vacatures
                </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                {extras ? <h6>Extras</h6> : ""}
                {extras ? extras.map((item, index) => {
                    return <li key={index}>{item}</li>
                }) : ""}
            </section>
        </>
    }
}
