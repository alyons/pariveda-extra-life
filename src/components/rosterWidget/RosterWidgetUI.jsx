import React, { Component } from 'react';

class RosterWidgetUI extends Component {
    render() {
        let componentToRender;

        componentToRender = (
            <p>Here is where the team list goes</p>
        );

        return (
            <div id='roster'>
                {componentToRender}
            </div>
        );
    }
}

export default RosterWidgetUI;