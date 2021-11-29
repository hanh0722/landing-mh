import React, { useEffect, useState } from "react";
import styles from "./ButtonUpTop.module.scss";
const ButtonUpTop = () => {
    const [getButton, setGetButton] = useState(false);
    const goToTopHandler = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const scrollHandler = () => {
            const value = window.scrollY;
            if(value > 100){
                setGetButton(true);
            } else {
                setGetButton(false);
            }
        }
        window.addEventListener('scroll', scrollHandler);
    }, []);
  return (
    <div onClick={goToTopHandler} className={`${styles.button} d-flex justify-content-center align-items-center rounded-circle ${getButton && styles['button-back']}`}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="long-arrow-up"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="svg-inline--fa fa-long-arrow-up fa-w-10 fa-3x"
      >
        <path
          fill="currentColor"
          d="M19.716 184.485l19.626 19.626c4.753 4.753 12.484 4.675 17.14-.173L134 123.22V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V123.22l77.518 80.717c4.656 4.849 12.387 4.927 17.14.173l19.626-19.626c4.686-4.686 4.686-12.284 0-16.971L168.485 35.716c-4.686-4.686-12.284-4.686-16.971 0L19.716 167.515c-4.686 4.686-4.686 12.284 0 16.97z"
          className=""
        ></path>
      </svg>
    </div>
  );
};

export default ButtonUpTop;
