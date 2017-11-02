import React, { Component } from 'react';

class TwitchWidgetUI extends Component {
    componentWillMount() {
        this.props.getTwitchData();
    }

    render() {
        const { users, streams } = this.props;
        let componentToRender;

        if (users.length === 0) {
            componentToRender = (
                <p>No Twitch channels provided.</p>
            );
        } else {
            const streamItems = users.map((streamer, i) => (
                <li key={i}>
                    <p>{streamer.display_name}</p>
                </li>
            ));

            componentToRender = (
                <ul>{streamItems}</ul>
            );
        }

        return (
            <div id='twitch'>
                {componentToRender}
            </div>
        );
    }
}

export default TwitchWidgetUI;