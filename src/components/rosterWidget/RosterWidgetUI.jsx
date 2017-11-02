import React, { Component } from 'react';

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
                <li key={i}>
                    <p>{member.displayName}</p>
                    <p>{member.totalRaisedAmount}</p>
                </li>
            ));
            componentToRender = (
                <ol>{rosterItems}</ol>
            );
        }

        return (
            <div id='roster'>
                {componentToRender}
            </div>
        );
    }
}

export default RosterWidgetUI;