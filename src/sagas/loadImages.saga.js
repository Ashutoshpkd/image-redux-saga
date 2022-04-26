import { takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchImages } from '../api';
import { FETCH_IMAGES } from '../constants';
import { setError, setImages } from '../store/actions';

const getPage = state => state.imageReducer.pageNumber;

function* handleFetchImages() {
    console.log('handleFetchImages');
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error));
    }
}

function* loadImagesSaga() {
    yield takeEvery(FETCH_IMAGES, handleFetchImages);
}

export default loadImagesSaga;