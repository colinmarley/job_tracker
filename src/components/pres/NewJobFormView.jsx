import React, { Component } from 'react';


class NewJobFormView extends Component {

    render() {
        return(
            <div className="new-job-form-view">
                <div id="new-job-form-container">
                    <h2>New Job Application Entry</h2>

                    <div className="input-field">
                        <input type="text" placeholder="Job Title" id="job-title"/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Company Name" id="company-name"/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Location" id="location"/>
                    </div>

                    <div className="input-field">
                        <p id="status-input-title">Application Status: </p><br/>
                        <input type="radio" name="status" value="application" id="status-application"/>
                        <input type="radio" name="status" value="interview" id="status-interview"/>
                        <input type="radio" name="status" value="rejected" id="status-rejected"/>
                        <input type="radio" name="status" value="accepted" id="status-accepted"/>
                    </div>

                    <button onClick={(e) => this.props.onJobFormSubmit(e)} type="submit" className="submitButton">Submit</button>

                </div>


            </div>
        )
    }


}

export default NewJobFormView;