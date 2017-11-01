import React, { Component } from 'react';
import Progress from 'react-progressbar';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
    return {
        team: state.team
    }
};

function mapDispatchToProps(dispatch) {
    return {
    }
};

class Display extends Component {

    render() {

        const { name, totalRaisedAmount, fundraisingGoal } = this.props.team;
        let donationProgress = 0;
        if (fundraisingGoal) {
            donationProgress = Math.min((totalRaisedAmount / fundraisingGoal * 100), 100);
        }

        let componentToRender;

        if (name) {
            componentToRender = (
                <div>
                    <Progress completed={donationProgress} />
                    We have raised ${totalRaisedAmount} out of ${fundraisingGoal}.
                </div>
            );
        } else {
            componentToRender = (
                <p>
                    Loading team data from query params. If you don't see anything, try adding '?teamID=' followed by
                    your team's id.
                </p>
            );
        }

        return (
            <div>
                {componentToRender}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);