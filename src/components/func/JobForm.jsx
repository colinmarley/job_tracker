import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobFormView from '../pres/JobFormView';

const mapStateToProps = (state, ownProps) => {
    return ({

    });
}

const mapDispatchToProps = dispatch => ({

});

class JobForm extends Component {
    

    render() {
        return (
            <div className="job-form">
                <JobFormView></JobFormView>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobForm);