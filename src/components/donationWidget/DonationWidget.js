import React from 'react';
import { connect } from 'react-redux';
import DonationWidgetUI from './DonationWidgetUI';

function mapStateToProps(state, props) {
    return {
        team: state.team
    }
};

const DonationWidgetContainer = connect(
    mapStateToProps
)(DonationWidgetUI);

export default DonationWidgetContainer;