import React, { Component } from 'react';
import { findIndex } from 'lodash';
import TwitchItemUI from './TwitchItemUI';
import './TwitchWidgetUI.css';

class TwitchWidgetUI extends Component {
    componentWillMount() {
        // this.props.getTwitchData();
    }

    render() {
        const { users, streams } = this.props;
        let componentToRender;

        if (users.length === 0) {
            componentToRender = (
                <p>No Twitch channels provided.</p>
            );
        } else {
            let onlineUsers = [];
            let offlineUsers = [];

            for(var i = 0; i < users.length; i++) {
                let stream;
                const channel = users[i];
                const index = findIndex(streams, (s) => { return s.channel._id.toString() === channel._id; });
                if (index > -1) stream = streams[index];

                if (!stream) {
                    offlineUsers.push(
                        <TwitchItemUI key={i}
                            channel={channel}   
                            />
                    );
                } else {
                    onlineUsers.push(
                        <TwitchItemUI key={i}
                            channel={channel}
                            stream={stream}   
                            />
                    );
                }
            }

            componentToRender = (
                <div class="twitch-container">
                    {onlineUsers}
                    {offlineUsers}
                </div>
            );
        }

        return (
            <div id="twitch">
                {componentToRender}
            </div>
        );
    }
}

export default TwitchWidgetUI;