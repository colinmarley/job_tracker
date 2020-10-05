import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewJobFormView from '../pres/NewJobFormView';

const mapStateToProps = (state, ownProps) => {
    return ({
        db: state.db.db,
    });
}

const mapDispatchToProps = dispatch => ({

});

function docId(id) {
    return document.getElementById(id);
}

class JobForm extends Component {

    
    onJobFormSubmit(e) {
        let NewJob = {
            jobTitle: docId("job-title").value,
            companyName: docId("company-name").value,
            location: docId("location").value,
        }
        console.log(`Job Title: ${NewJob.jobTitle}\nCompany Name: ${NewJob.companyName}\nLocation: ${NewJob.location}`);
        
        this.props.db.collection("JobForms").doc("Test").set({
            jobTitle: NewJob.jobTitle,
            companyName: NewJob.companyName,
            location: NewJob.location,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    

    render() {
        return (
            <div className="job-form">
                <NewJobFormView onJobFormSubmit={(e) => this.onJobFormSubmit(e)}></NewJobFormView>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobForm);