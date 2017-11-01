import { GET_TEAM_INFO_REQUEST, GET_TEAM_INFO_SUCCESS, GET_TEAM_INFO_FAILURE } from './actionTypes';

export function getTeamInfoRequest() {
    return { type: GET_TEAM_INFO_REQUEST };
}

export function getTeamInfoSuccess(payload) {
    return {
        type: GET_TEAM_INFO_SUCCESS,
        payload
    };
}

export function getTeamInfoFailure(payload) {
    return {
        type: GET_TEAM_INFO_FAILURE,
        payload
    };
}

export function getTeamInfo() {
    const url = 'https://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=33379&format=json';
    return dispatch => {
        dispatch(getTeamInfoRequest);
        return fetch(url)
            .then(res => res.json())
            .then(body => dispatch(getTeamInfoSuccess(body)))
            .catch(err => dispatch(getTeamInfoFailure(err)));
    };
}