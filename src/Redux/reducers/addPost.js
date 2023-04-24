const initialState = [] ;

const changePost = (state = initialState, action) => {
    switch(action.type){
        case "ADDPOST" : return [...action.payload];
        default : return state;
    }

}

export default changePost;