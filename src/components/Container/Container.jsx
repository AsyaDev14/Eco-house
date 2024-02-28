import React from "react";
import { AdaptiveContainer } from "./Container.styled";

const Container = ({ children }) => {
  return <AdaptiveContainer>{children}</AdaptiveContainer>;
};

export default Container;
