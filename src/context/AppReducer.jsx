export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_MYLIST":
            return {
                ...state,
                mylist: [action.payload, ...state.mylist],
            };
        case 'REMOVE_MOVIE_FROM_MYLIST':
            return {
                ...state,
                mylist: state.mylist.filter(movie => movie.id !== action.payload)
            };
        default:
            return state;
    }
};