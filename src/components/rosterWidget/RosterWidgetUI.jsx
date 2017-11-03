import React, { Component } from 'react';
import './RosterWidgetUI.css';

function compare(a, b) {
    if (a.totalRaisedAmount < b.totalRaisedAmount)
        return -1;
    if (a.totalRaisedAmount > b.totalRaisedAmount)
        return 1;
    return 0;
};

class RosterWidgetUI extends Component {
    render() {
        const { roster } = this.props;
        let componentToRender;

        if (roster.length === 0) {
            componentToRender = (
                <p>No members in the roster.</p>
            );
        } else {
            const rosterOrdered = roster.sort(compare).reverse();
            const rosterItems = rosterOrdered.map((member, i) => (
                <a href={`https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=${member.participantID}`} target="_blank">
                    <div key={i} class={`roster-item place-${i}`} >
                        <img class="roster-avatar" src={member.avatarImageURL} />
                        <div class="roster-info">
                            <div class="roster-info-child">
                                {member.displayName}<br />{`$${member.totalRaisedAmount}`}
                            </div>
                        </div>
                        <div class="roster-donate">
                            <div class="roster-donate-child">Donate Here!</div>
                        </div>
                    </div>
                </a>
            ));
            componentToRender = (
                <div>{rosterItems}</div>
            );
        }

        return (
            <div id="roster-list">
                {componentToRender}
            </div>
        );
    }
}

export default RosterWidgetUI;