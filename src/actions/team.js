import { GET_TEAM_INFO_REQUEST, 
         GET_TEAM_INFO_SUCCESS, 
         GET_TEAM_INFO_FAILURE,
         GET_TEAM_ROSTER_REQUEST,
         GET_TEAM_ROSTER_SUCCESS,
         GET_TEAM_ROSTER_FAILURE,
         SET_TEAM_ID } from './actionTypes';

export function getTeamInfoRequest() {
    return { type: GET_TEAM_INFO_REQUEST };
};

export function getTeamInfoSuccess(payload) {
    return {
        type: GET_TEAM_INFO_SUCCESS,
        payload
    };
};

export function getTeamInfoFailure(payload) {
    return {
        type: GET_TEAM_INFO_FAILURE,
        payload
    };
};

export function getTeamInfo(teamId) {
    const url = 'https://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=' + teamId + '&format=json';
    return dispatch => {
        dispatch(getTeamInfoRequest);
        return fetch(url)
            .then(res => res.json())
            .then(body => dispatch(getTeamInfoSuccess(body)))
            .catch(err => dispatch(getTeamInfoFailure(err)));
    };
};

export function setTeamId(teamId) {
    return {
        type: SET_TEAM_ID,
        payload: teamId
    };
}

export function getTeamRosterRequest() {
    return {
        type: GET_TEAM_ROSTER_REQUEST
    };
};

export function getTeamRosterSuccess(payload) {
    return {
        type: GET_TEAM_ROSTER_SUCCESS,
        payload
    };
};

export function getTeamRosterFailure(payload) {
    return {
        type: GET_TEAM_ROSTER_FAILURE,
        payload
    };
};

export function getTeamRoster(teamId) {
    const url = 'https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=' + teamId + '&format=json';
    return dispatch => {
        dispatch(getTeamRosterRequest);
        return fetch(url)
            .then(res => res.json())
            .then(body => dispatch(getTeamRosterSuccess(body)))
            .catch(err => dispatch(getTeamRosterFailure(err)));
    };
}