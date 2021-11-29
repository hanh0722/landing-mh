import React from "react";
import parse from "html-react-parser";
const StringToHTML = ({ string }) => {
  return <>{parse(string)}</>;
};

export default StringToHTML;
