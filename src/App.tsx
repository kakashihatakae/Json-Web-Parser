import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JsonParser from "./JsonParser/JsonParser";
import { ParentElementType, TextElementType } from "./Shared/SharedTypes";

function App() {
  const [jsonFile, setJsonFile] = useState<
    (ParentElementType | TextElementType)[]
  >([]);
  useEffect(() => {
    fetch("/fileExample.json")
      .then((response) => response.json())
      .then((jsonResponse) => setJsonFile(jsonResponse));
  }, []);
  return (
    <div className="App">
      <div className="JsonParserContainer">
        <JsonParser jsonFile={jsonFile} />
      </div>
    </div>
  );
}

export default App;
