export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
     token: 'BQC1OHcVFPB3OikQjyjn4D6gpkM9BFbvT3ynzc5YxZGjNyvOWk_VQ_AFFf1W1nOWmG85-5HAVyR6lqkbh5GZ61X4JcpR-PuqPLBbKW8IBhh7N8pJkbqsEstzFCCWoCG-eSwb-Bcf-2dewAKqdjnyiiITIi0r16BamnUcgEr6KYDRVtFfym3HFRFrFWYjBcUUb4NXhn0xB1q7lVBxO5xppmTp',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly : action.discover_weekly,
            }
        default:
            return state;
    }
};

export default reducer;
