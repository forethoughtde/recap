import fetchPhotos from './../api'

const reducers = (state = [], action)=>{
    switch (action.type) {
        case 'GET_PHOTOS':
            return fetchPhotos();
        case 'UPDATE_PHOTO':
            return { ...state, photo : state.photo }
        default:
            return state;
    }
};

export default reducers;
