import { useState } from "react";

const useHover = (initialState) => {
    const [isHover, setIsHover] = useState(initialState || false);
    const isHoverHandler = () => {
        setIsHover(true);
    }
    const isNotHoverHandler = () => {
        setIsHover(false);
    }
    return {
        isHover,
        isHoverHandler,
        isNotHoverHandler
    }
}

export default useHover;