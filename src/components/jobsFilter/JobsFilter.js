import React, { useContext } from 'react';
import './jobsFilter.scss';
import { JobsContext } from '../../context';
import title from '../title/Title';
import Title from '../title/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function JobsFilter({jobs}) {
    const context = useContext(JobsContext);
    const {
        handelChange,
        type
    } = context;

    // get unique types
    let types = getUnique(jobs, 'type');

    // add all
    types = ['all', ...types];

    // map to jsx
    types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
    })


    return <section className="filter-container">
        <Title title="Filter" />
        <form className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">Vacature branch</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handelChange}>
                    {types}
                </select>
            </div>
            {/* end select type */}
        </form>
    </section>
}
