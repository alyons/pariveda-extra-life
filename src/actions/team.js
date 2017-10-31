import { GET_TEAM_INFO_REQUEST, GET_TEAM_INFO_SUCCESS, GET_TEAM_INFO_FAILURE } from './actionTypes';

export function getTeamInfoRequest() {
    return { type: GET_TEAM_INFO_REQUEST };
}

export function getTeamInfoSuccess(payload) {
    console.log(payload);
    return {
        type: GET_TEAM_INFO_SUCCESS,
        payload
    }
}

export function getTeamInfoFailure(payload) {
    return {
        type: GET_TEAM_INFO_FAILURE,
        payload
    }
}

export function getTeamInfo() {

    const url = 'https://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=33379&format=json';
    return dispatch => {
        dispatch(getTeamInfoRequest);
        return fetch(url)
            .then(res => dispatch(getTeamInfoSuccess(res)))
            .catch(err => dispatch(getTeamInfoFailure(err)));
    };

    /*return {
        type: GET_TEAM_INFO_SUCCESS,
        payload: {
            totalRaisedAmount:3283.38,
            fundraisingGoal:10000.00,
            createdOn:"2017-01-10T16:08:09-0500",
            timestamp:20170110090809733,
            avatarImageURL:"//assets.donordrive.com/extralife/images/$event534$/avatar_team_33379.jpg",
            teamID:33379,
            name:"Pariveda Solutions"
        }
    }*/
}