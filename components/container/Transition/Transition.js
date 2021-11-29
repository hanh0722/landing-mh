import React from "react";
import { CSSTransition } from "react-transition-group";

const Transition = ({ classNames, children, in_condition, timeout }) => {
  return (
    <CSSTransition
      unmountOnExit={true}
      mountOnEnter={true}
      classNames={classNames ? classNames : ''}
      in={in_condition}
      timeout={timeout}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
