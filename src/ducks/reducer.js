const initialState = {
playerName:'',
session:{},
race:{}
}
const PLAYERDATA = 'PLAYERDATA'
const SESSIONDATA = 'SESSIONDATA'
const RACEDATA = 'RACEDATA'


export default function reducer(state=initialState, action){
    switch(action.type){
        case PLAYERDATA:
        return{...state, playerName:action.payload}
        case SESSIONDATA:
        return{...state, session:action.payload}
        case RACEDATA:
        return {...state, race:action.payload}
        default:
        return state;
    }
}

export function updatePlayer(playerData){
    console.log('Hit updatePlayer Function', playerData);
    return{
        type:PLAYERDATA,
        payload:playerData
    }
}
export function updateSession(sessionData){
    console.log('Hit updatePlayer Function', sessionData);
    return{
        type:SESSIONDATA,
        payload:sessionData
    }
}
export function updateRace(raceData){
    console.log('Race is in reducer')
    return{
        type:RACEDATA,
        payload:raceData
    }
}
