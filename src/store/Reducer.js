const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                ...{movie: action.payload}
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movie: state.movie.slice(action.payload),
            };
        default:
            return state;
    }
};

export default Reducer;