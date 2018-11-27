const initialState = {
playerName:'',
session:{}
}
const PLAYERDATA = 'PLAYERDATA'
const SESSIONDATA = 'SESSIONDATA'


export default function reducer(state=initialState, action){
    switch(action.type){
        case PLAYERDATA:
        return{...state, playerName:action.payload}
        case SESSIONDATA:
        return{...state, session:action.payload}
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
