import React from 'react';
import JobsFilter from '../jobsFilter/JobsFilter';
import JobsList from '../jobsList/JobsList';
import { withJobsConsumer } from '../../context';
import Loading from '../loading/Loading';


function JobContanier({context}){
 const {loading, sortedJobs, jobs} = context;

 if(loading) {
        return <Loading />
    }

    return (
        <>
            <JobsFilter jobs={jobs} />
            <JobsList jobs={sortedJobs} />
        </>
    );
}


export default withJobsConsumer(JobContanier);