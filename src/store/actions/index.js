import { IMAGE_ERROR, FETCH_IMAGES, FETCH_IMAGE_SUCCESS } from "../../constants";


export const loadImages = () => ({
    type: FETCH_IMAGES
});

export const setImages = (images) => ({
    type: FETCH_IMAGE_SUCCESS,
    images: images,
});

export const setError = (error) => ({
    type: IMAGE_ERROR,
    error: error,
});