import React from 'react';
import Job from '../job/Job';
import './jobsList.scss';
import FadeIn from '../fadeIn/FadeIn';

export default function JobsList({jobs}) {
    if(jobs.length === 0) {
        return (
            <div className="empty-search">
                <h3>Er zijn geen resultaten gevonden!</h3>
            </div>
        )
    }
    return <section className="roomslist">
            <FadeIn>
        <div className="roomslist-center">
            {jobs.map(item => {
                return <Job key={item.id} job={item} />
            })}
        </div>
            </FadeIn>
    </section>
}
