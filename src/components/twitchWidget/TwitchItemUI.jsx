import React, { Component } from 'react';
import './TwitchItemUI.css';

class TwitchItemUI extends Component {
    render() {
        const { channel, stream } = this.props;
        let componentToRender;

        if (!channel) {
            componentToRender = (
                <div>No channel to render... how did we do this?</div>
            );
        } else if (!stream) {
            const streamLink = `https://go.twitch.tv/${channel.name}`;
            componentToRender = (
                <a href={streamLink} target="_blank">
                    <div class="twitch-item-inner twitch-item-offline">
                        {channel.display_name} is currently offline.
                    </div>
                </a>
            );
        } else {
            componentToRender = (
                <a href={stream.channel.url} target="_blank">
                    <div class="twitch-item-inner">
                        <div><img src={stream.preview.medium} /></div>
                        <div><span>{channel.display_name}: {stream.game}</span></div>
                    </div>
                </a>
            );
        }

        return (<li class="twitch-item">{componentToRender}</li>);
    }
}

export default TwitchItemUI;