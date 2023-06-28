import React from "react";
import "./Mention.css";

interface MentionComponentProps {
  children: React.ReactNode;
  color?: string;
}

const Mention: React.FC<MentionComponentProps> = ({ children, color }) => {
  const mentionStyle = {
    color: color ? "white" : "",
    backgroundColor: color ? color : "",
    borderRadius: 5,
  };

  return <span style={mentionStyle}>{children}</span>;
};

export default Mention;
