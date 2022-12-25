import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Users from "./Users";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <textarea
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <ReactMarkdown children={input} className="markdown" />
      <Users value={input} />
    </div>
  );
}

// const Component = ({ value, language }) => {
//   const codeString = "(num) => num + 1";
//   return (
//     <SyntaxHighlighter language={language} style={docco}>
//       {value}
//     </SyntaxHighlighter>
//   );
// };

export default App;
