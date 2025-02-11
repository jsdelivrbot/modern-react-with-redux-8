import { reducer  as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
