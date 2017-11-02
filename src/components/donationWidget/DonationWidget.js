import React from 'react';
import { connect } from 'react-redux';
import DonationWidgetUI from './DonationWidgetUI';
import { getName, getFundraisingGoal, getTotalRaisedAmount } from '../../selectors/team';

function mapStateToProps(state, props) {
    return {
        name: getName(state),
        fundraisingGoal: getFundraisingGoal(state),
        totalRaisedAmount: getTotalRaisedAmount(state)
    }
};

const DonationWidgetContainer = connect(
    mapStateToProps
)(DonationWidgetUI);

export default DonationWidgetContainer;