import React, { Component } from 'react';

class DonationWidgetUI extends Component {
    render() {
        let componentToRender;

        componentToRender = (
            <p>Verbage about components goes here...</p>
        );

        return (
            <div>
                {componentToRender}
            </div>
        );
    }
}

export default DonationWidgetUI;