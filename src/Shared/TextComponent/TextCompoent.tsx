import React from "react";
import "./TextCompoent.css";

interface TextComponentProps {
  text: String;
  bold?: boolean;
  underline?: boolean;
  italicize?: boolean;
}

const TextCompoent = ({
  text,
  bold,
  underline,
  italicize,
}: TextComponentProps): React.ReactElement => {
  let TextCssClassName = "TextContainer";
  if (bold) {
    TextCssClassName = `${TextCssClassName} bold`;
  }

  if (underline) {
    TextCssClassName = `${TextCssClassName} underline`;
  }

  if (italicize) {
    TextCssClassName = `${TextCssClassName} italicize`;
  }

  return <span className={TextCssClassName}>{text}</span>;
};

export default TextCompoent;
