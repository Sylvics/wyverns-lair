const initialState = {
player:''
}
const PLAYERDATA = 'USERDATA'


export default function reducer(state=initialState, action){
    switch(action.type){
        case PLAYERDATA:
        return{...state, player:action.payload}
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