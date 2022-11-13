import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";


import { useRecoilState, useRecoilValue } from "recoil";
import { editorTheme, editorValues } from "./appState";

export function HtmlEditor() {
  const [editorVal, setEditorValues] = useRecoilState(editorValues);
  const theme = useRecoilValue(editorTheme);
  function handleChange(val) {
    console.log(val);
    setEditorValues({ ...editorVal, html: val });
  }

  return (
    <div className="html-editor">
      <AceEditor
        value={editorVal.html}
        mode="html"
        theme={theme}
        onChange={handleChange}
        name="html-editor"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
}
