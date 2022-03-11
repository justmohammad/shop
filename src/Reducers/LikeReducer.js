const LikeReducer = (state,action) => {
    let newLike = [];

    switch (action.type) {
        case 'LIKE':
            newLike = [...state.likes, action.id];
            localStorage.setItem('likes',JSON.stringify(newLike));
            return {
                ...state,
                likes : newLike
            }
        case 'DISLIKE':
            newLike = state.likes;
            newLike.splice(state.likes.findIndex((likeId) => likeId === action.id),1);
            localStorage.setItem('likes',JSON.stringify(newLike));
            return {
                ...state,
                likes : newLike
            }
    }
}

export default LikeReducer;