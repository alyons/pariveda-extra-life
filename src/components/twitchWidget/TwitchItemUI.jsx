import React, { Component } from 'react';
import './TwitchWidgetUI.css';

class TwitchItemUI extends Component {
    render() {
        const { channel, stream } = this.props;
        let componentToRender;

        if (!channel) {
            componentToRender = (
                <div>No channel to render... how did we do this?</div>
            );
        } else if (!stream) {
            componentToRender = (
                <div>Channel without an active stream, some kind of greyed out I would think.</div>
            );
        } else {
            componentToRender = (
                <div>Let's make something interesting here!</div>
            );
        }

        return (<div>{componentToRender}</div>);
    }
}

export default TwitchItemUI;