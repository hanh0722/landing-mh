import React, { useEffect } from "react";
import styles from './Overlay.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
const Overlay = (props) => {
    const overlayIsOpen = useSelector(state => state.model.openOverlay);
    const dispatch = useDispatch();
    useEffect(() => {
        if(overlayIsOpen){
            document.body.setAttribute('data-model', 'flow');
        } else {
            document.body.removeAttribute('data-model');
        }
    }, [overlayIsOpen]);
    const clickModalHandler = () => {
        dispatch(modelActions.closeModelHandler());
    }
    return(
        <div onClick={clickModalHandler} className={`${styles.container} ${overlayIsOpen && styles.open} ${props.container}`}>
            {props.children}
        </div>
    )
}

export default Overlay;