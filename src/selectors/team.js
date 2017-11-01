export const getTeam = (state) => {
    return state.team || { };
};

export const getAvatarImageUrl = (state) => {
    return state.team.avatarImageURL || '';
};

export const getCreatedOn = (state) => {
    return state.team.createdOn || '';
};

export const getFundraisingGoal = (state) => {
    return state.team.fundraisingGoal || 0;
};

export const getName = (state) => {
    return state.team.name || '';
};

export const getId = (state) => {
    return state.team.teamID || 0;
};

export const getTimestamp = (state) => {
    return state.team.timestamp || 0;
};

export const getTotalRaiseAmount = (state) => {
    return state.team.totalRaisedAmount || 0;
};
