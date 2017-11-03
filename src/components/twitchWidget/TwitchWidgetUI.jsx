import React, { Component } from 'react';
import { findIndex } from 'lodash';
import TwitchItemUI from './TwitchItemUI';
import './TwitchWidgetUI.css';

const getStreamByChannelId = (streams, id) => {
    if (!streams) {
        return null;
    }

    for (var i = 0; i < streams.length; i++) {
        if (streams[i].channel._id.toString() === id) {
            return streams[i];
        }
    }

    return null;
};

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
            let onlineUsers = [];
            let offlineUsers = [];

            for(var i = 0; i < users.length; i++) {
                const channel = users[i];
                const stream = getStreamByChannelId(streams, channel._id);

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
                <div>
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