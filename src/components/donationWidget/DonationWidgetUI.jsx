import React, { Component } from 'react';
import Progress from 'react-progressbar';

class DonationWidgetUI extends Component {
    render() {
        const { name, totalRaisedAmount, fundraisingGoal } = this.props;
        let donationProgress = 0;
        let componentToRender;

        if (fundraisingGoal) {
            donationProgress = Math.min((totalRaisedAmount / fundraisingGoal * 100), 100);
            componentToRender = (
                <div>
                    <Progress completed={donationProgress} />
                    {name} have raised ${totalRaisedAmount} out of ${fundraisingGoal}.
                </div>
            );
        } else {
            componentToRender = (
                <p>Verbage about components goes here...</p>
            );
        }

        return (
            <div id='donation'>
                {componentToRender}
            </div>
        );
    }
}

export default DonationWidgetUI;