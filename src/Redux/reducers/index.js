import { combineReducers } from 'redux';
import changePost from './addPost';


const reducerRoot = combineReducers({
    changePost : changePost
});

export default reducerRoot;