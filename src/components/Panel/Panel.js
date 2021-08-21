import PropTypes from "prop-types";
import React from "react";
import s from "./Panel.module.css";

const Panel = ({ title, children }) => (
  <div>
    <h1 className={s.title}>{title}</h1>
    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
  children: [],
};
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Panel;
