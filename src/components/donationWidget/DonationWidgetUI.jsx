import React, { Component } from 'react';
import './DonationWidgetUI.css';

class DonationWidgetUI extends Component {
    render() {
        const { name, totalRaisedAmount, fundraisingGoal } = this.props;
        let donationProgress = 0;
        let componentToRender;

        if (fundraisingGoal) {
            donationProgress = Math.round(100 - Math.min((totalRaisedAmount / fundraisingGoal * 100), 100));
            const barStyle = {
                transform: `translateY(${donationProgress}%)`
            };
            let barLines = [];
            for(var i = 1; i < 10; i++) {
                barLines.push(<div class={`bar-line line-${i}`} />);
            }

            componentToRender = (
                <div>
                    <div class="goal">
                        {`$${fundraisingGoal}`}
                    </div>
                    <div class="bar-container">
                        <div class="goal-bar">
                            <div class="bar-wrap">
                                {barLines}
                                <div class="bar" style={barStyle}>
                                    <div class="bar-info">
                                        <div class="bar-info-inner">
                                            {`$${totalRaisedAmount}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            componentToRender = (
                <p>Verbage about components goes here...</p>
            );
        }

        return (
            <div id="donation">
                {componentToRender}
            </div>
        );
    }
}

export default DonationWidgetUI;