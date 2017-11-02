export const getUsers = (state) => {
    return state.twitch.users || [];
};

export const getStreams = (state) => {
    return state.twitch.streams || [];
};
