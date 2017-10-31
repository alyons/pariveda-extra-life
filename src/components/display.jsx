import React, { Component } from 'react';
import Progress from 'react-progressbar';
import { connect } from 'react-redux';
import * as TeamActions from '../actions/team';

function mapStateToProps(state, props) {
    return {
        team: state.team
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getTeamInfo: () => dispatch(TeamActions.getTeamInfo())
    }
};

class Display extends Component {

    constructor(props) {
        super(props);
        this.onClickLoadData = this.onClickLoadData.bind(this);
    }

    onClickLoadData() {
        this.props.getTeamInfo();
    }

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
                <button onClick={()=>this.onClickLoadData()}>Load Data</button>
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