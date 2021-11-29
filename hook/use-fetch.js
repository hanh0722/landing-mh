import { useReducer, useCallback } from "react";
import axios from "axios";

const helperProgress = (loaded, total) => {
  return Math.round((loaded * 100) / total);
};
const typeDispatch = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  RESET: "RESET",
  PROGRESS_DOWNLOAD: "PROGRESS_DOWNLOAD",
  PROGRESS_UPLOAD: "PROGRESS_UPLOAD",
};
const initialState = {
  data: null,
  isLoading: false,
  error: null,
  status: 200,
  download_progress: 0,
  upload_progress: 0,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case typeDispatch.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case typeDispatch.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case typeDispatch.ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case typeDispatch.PROGRESS_DOWNLOAD: {
      return {
        ...state,
        download_progress: action.payload,
      };
    }
    case typeDispatch.PROGRESS_UPLOAD: {
      return {
        ...state,
        upload_progress: action.payload,
      };
    }
    case typeDispatch.RESET: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
const useFetch = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const fetchDataFromServer = useCallback(
    async (config) => {
      dispatch({
        type: typeDispatch.RESET,
      });
      dispatch({
        type: typeDispatch.LOADING,
      });
      try {
        const response = await axios({
          url: config.url,
          method: config.method ? config.method : "GET",
          data: config.data ? config.data : null,
          headers: config.headers
            ? {
                ...config.headers,
              }
            : null,
          onDownloadProgress: (ProgressEvent) => {
            let progress = helperProgress(
              ProgressEvent.loaded,
              ProgressEvent.total
            );
            dispatch({
              type: typeDispatch.PROGRESS_DOWNLOAD,
              payload: progress,
            });
          },
          onUploadProgress: (ProgressEvent) => {
            let progress = helperProgress(
              ProgressEvent.loaded,
              ProgressEvent.total
            );
            dispatch({
              type: typeDispatch.PROGRESS_UPLOAD,
              payload: progress,
            });
          },
        });
        if (response.status >= 400) {
          const error = new Error(response.data.message);
          //   assump data is data oject with message (axios return data object)
          // data: {message: 'error', code: 404}
          error.code = response.data.code || response.status;
          throw error;
        }
        dispatch({
          type: typeDispatch.SUCCESS,
          payload: response.data,
        });
      } catch (err) {
        dispatch({
          type: typeDispatch.ERROR,
          payload: err.message || "cannot fetch data from server",
        });
      }
    },
    []
  );
  const fakeFetchingData = useCallback((data) => {
    dispatch({
      type: typeDispatch.LOADING
    });
    const timeout = setTimeout(() => {
      dispatch({
        type: typeDispatch.SUCCESS,
        payload: data
      })
    });
    clearTimeout(timeout);
  }, []);
  return {
    fetchDataFromServer,
    fakeFetchingData,
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    status: state.status,
    download_progress: state.download_progress,
    upload_progress: state.upload_progress,
  };
};

export default useFetch;
