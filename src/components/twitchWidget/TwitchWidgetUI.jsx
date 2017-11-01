import React, { Component } from 'react';

class TwitchWidgetUI extends Component {
    componentWillMount() {
        this.props.getTwitchData();
    }

    render() {
        let componentToRender;

        componentToRender = (
            <p>Here is the twitch stuff...</p>
        );

        return (
            <div>
                {componentToRender}
            </div>
        );
    }
}

export default TwitchWidgetUI;