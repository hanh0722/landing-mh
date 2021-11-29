import { useState } from "react";

const useToggle = (initialState) => {
    const [toggle, setToggle] = useState(initialState || false);
    const changeToggleHandler = () => {
        setToggle(prevState => {
            return !prevState;
        })
    }

    return {
        toggle,
        setToggle,
        changeToggleHandler
    }
}

export default useToggle;