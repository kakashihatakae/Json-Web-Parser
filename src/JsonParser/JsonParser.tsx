import React from "react";
import Block from "../Shared/TypeComponents/Block/Block";
import Mention from "../Shared/TypeComponents/Mention/Mention";
import TextCompoent from "../Shared/TextComponent/TextCompoent";
import { ParentElementType, TextElementType } from "../Shared/SharedTypes";
import "./JsonParser.css";

interface JsonParserProps {
  jsonFile: (ParentElementType | TextElementType)[];
}

const JsonParser = ({ jsonFile }: JsonParserProps): React.ReactElement => {
  return (
    <>
      {jsonFile.map((element) => {
        if ("text" in element) {
          return <TextCompoent {...element} />;
        } else if (element.type === "lic") {
          return <JsonParser jsonFile={element.children} />;
        } else if (element.type === "block") {
          return (
            <Block>
              <JsonParser jsonFile={element.children} />
            </Block>
          );
        } else if (element.type === "mention") {
          return (
            <Mention color={element.color}>
              <JsonParser jsonFile={element.children} />
            </Mention>
          );
        } else if (element.type === "clause") {
          return (
            <div color={element.color}>
              <JsonParser jsonFile={element.children} />
            </div>
          );
        } else {
          const Component = React.createElement(element.type, {
            children: <JsonParser jsonFile={element.children} />,
          });

          return Component;
        }
      })}
    </>
  );
};

export default JsonParser;
