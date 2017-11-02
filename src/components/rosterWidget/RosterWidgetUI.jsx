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
                <div key={i} class="roster-item" >
                    <img class="roster-avatar" src={member.avatarImageURL} />
                    <div class="roster-info">
                        <p>{member.displayName}</p>
                        <p>{`$${member.totalRaisedAmount}`}</p>
                    </div>
                    <div class="roster-donate">
                        <a class="roster-donate-link" href={`https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=${member.participantID}`} target="_blank">Donate</a>
                    </div>
                </div>
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