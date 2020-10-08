import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

class JobFormListView extends Component {

    render() {
        return (
            <li className="list-item-container">
                <h3 className="li-title">{this.props.jobTitle}</h3>
                <h4 className="li-company">{this.props.companyName}</h4>
                <h3 className="li-location-text">{this.props.location}</h3>
            </li>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobFormListView);