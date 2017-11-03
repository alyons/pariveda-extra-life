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
                        <span class="twitch-item-label">{channel.display_name} is currently offline.</span>
                    </div>
                </a>
            );
        } else {
            const innerStyle = {
                filter: `blur(2px)`
            };
            componentToRender = (
                <a href={stream.channel.url} target="_blank">
                    <div class="twitch-item-inner">
                        <img src={stream.preview.medium} class="twitch-item-image" />
                        <span class="twitch-item-label">{channel.display_name}: {stream.game}</span>
                    </div>
                </a>
            );
        }

        return (<li class="twitch-item">{componentToRender}</li>);
    }
}

export default TwitchItemUI;