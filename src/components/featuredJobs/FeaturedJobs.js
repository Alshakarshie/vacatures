import React, { Component } from 'react';
import './featuredJobs.scss';
import { JobsContext } from '../../context';
import Loading from '../loading/Loading';
import Job from '../job/Job';
import Title from '../title/Title';
import FadeIn from '../fadeIn/FadeIn';

export default class FeaturedJobs extends Component {
    static contextType = JobsContext;
    render() {        
        let {loading, featuredJobs: Jobs} = this.context;
        Jobs = Jobs.map(job => {
            return <Job key={job.id} job={job}/>
        });


        return (
            <section className="featured-jobs">
                <FadeIn>
                <Title title="featured Vacatures"/>
                <div className="featured-jobs-center">
                    {loading?<Loading/>:Jobs}
                </div>
                </FadeIn>
            </section>
        )
    }
}
