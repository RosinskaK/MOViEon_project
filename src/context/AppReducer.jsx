export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_MYLIST":
            return {
                ...state,
                mylist: [action.payload, ...state.mylist],
            };
        default:
            return state;
    }
};