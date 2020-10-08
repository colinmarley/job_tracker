import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobFormListItem from '../pres/JobFormListItem';
import {
    setJobFormList,
} from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    db: state.db.db,
    listItems: state.list.listItems,
});

const mapDispatchToProps = dispatch => ({
    setJobFormList: (listItems) => dispatch(setJobFormList(listItems)),
});

class JobFormList extends Component {

    getJobForms() {
        let data = [];
        this.props.db.collection("JobForms").where("test", "==", true).onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                let d = doc.data();
                data.push(d);
            });

            let listItems = data.map((d, i) => 
                <li className="job-form-list-item" key={i}>
                    <div className="job-form-list-item-div">
                        <h3>{(d.jobTitle) ? d.jobTitle : "No Job Title"}</h3>
                        <h4>{(d.companyName) ? d.companyName : "No Company Name"}</h4>
                        <h4>{(d.location) ? d.location : "No Location"}</h4>
                        <h4>{"Test: " + (d.test) ? "True": "False"}</h4>
                    </div>
                </li>
            );

            // console.log('lis');
            // console.log(listItems);

            this.props.setJobFormList(listItems);
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getJobForms()}>Reset Forms</button>
                <ul id="job-form-list-root">
                    {this.props.listItems}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobFormList);