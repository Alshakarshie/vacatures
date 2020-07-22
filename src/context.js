import React, { Component } from 'react';
import Client from './Contentful';

const JobsContext = React.createContext();

class JobsProvider extends Component {
    state = {
        jobs: [],
        sortedJobs: [],
        featuredJobs: [],
        loading: true,
        type: 'all'
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "testLeviy"
            });
            let jobs = this.formatData(response.items);
            let featuredJobs = jobs.filter(job => job.featured === true);

            this.setState({
                jobs,
                featuredJobs,
                sortedJobs: jobs,
                loading: false,
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData()
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.image.fields.file.url;

            let job = { ...item.fields, id, images }
            return job;
        });
        return tempItems;
    }

    getJob = (slug) => {
        let temJobs = [...this.state.jobs];
        const job = temJobs.find(job => job.slug === slug);
        return job;
    }

    handelChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterJobs);
    }

    filterJobs = () => {
        let {
            jobs,
             type
        } = this.state

        // all the jobs
        let tempJobs = [...jobs];

        // filter by type
        if (type !== 'all') {
            tempJobs = tempJobs.filter(job => job.type === type)
        }

        // change state
        this.setState({
            sortedJobs: tempJobs
        })
    }

    render() {
        return <JobsContext.Provider value={{ ...this.state, getJob: this.getJob, handelChange: this.handelChange }}>
            {this.props.children}
        </JobsContext.Provider>
    }
}

const JobsConsumer = JobsContext.Consumer;

export function withJobsConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <JobsConsumer>
            {value => <Component {...props} context={value} />}
        </JobsConsumer>
    }
}

export { JobsConsumer, JobsContext, JobsProvider }