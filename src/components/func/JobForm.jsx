import React, { Component } from 'react';
import JobFormView from '../pres/JobFormView';

class JobForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="job-form">
                <JobFormView></JobFormView>
            </div>
        );
    }
}

export default JobForm;