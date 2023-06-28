import React from "react";

interface PComponentProps {
  children: React.ReactNode;
}

const Block: React.FC<PComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Block;
