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
                <div key={i} id="roster-item">
                    <img src={member.avatarImageURL} />
                    <p>{member.displayName}</p>
                    <p>{member.totalRaisedAmount}</p>
                    <a href={`https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=${member.participantID}`} target="_blank">Donate</a>
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