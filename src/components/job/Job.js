import React from 'react';
import './job.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Job({ job }) {
    const { name, slug, images } = job;
    return <article className="job">
        <div className="img-container">
            <img src={images} alt="job" />
            <Link to={`/jobs/${slug}`} className="btn job-link">
                Vacature
            </Link>
        </div>
        <p className="job-info">{name}</p>
    </article>
}

Job.propTypes = {
    job: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired,
    })
}