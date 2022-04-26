import React from 'react';
import {connect} from 'react-redux';
import Button from './components/Button/Button';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { loadImages, setError, setImages } from './store/actions';

function App(props) {
    // console.log(props);
    // useEffect(() => {
    //     props.loadImages();
    // }, []);
        return (
            <div>
                <Header />
                <ImageGrid images={props.images} error={props.error}/>
                <Button title='Load Images' loadImages={props.loadImages}/>
            </div>
        );
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.imageReducer.isLoading,
        images: state.imageReducer.images,
        error: state.imageReducer.error,
        pageNumber: state.imageReducer.pageNumber,
    }
};

const dispatchToProps = (dispatch) => {
    return {
        loadImages: () => dispatch(loadImages()),
        fetchImages: (images) => dispatch(setImages(images)),
        fetchImageError: (error) => dispatch(setError(error)),
    }
}
export default connect(mapStateToProps, dispatchToProps)(App);
