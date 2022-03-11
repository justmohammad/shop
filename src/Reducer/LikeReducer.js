const LikeReducer = (state,action) => {
    switch (action.type) {
        case 'LIKE':
            return {
                ...state,
                likes : [
                    ...state.likes,
                    action.id
                ]
            }
        case 'DISLIKE':
            let newLike = state.likes;
            newLike.splice(state.likes.findIndex((likeId) => likeId === action.id),1);
            return {
                ...state,
                likes : newLike
            }
    }
}

export default LikeReducer;