import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";

import { editorTheme, editorValues, settingsAtom } from "./appState";
import { useRecoilState, useRecoilValue } from "recoil";

export function CssEditor() {
  const [editorVal, setEditorValues] = useRecoilState(editorValues);
  const theme = useRecoilValue(editorTheme);
  const settings = useRecoilValue(settingsAtom);
  function handleChange(val) {
    setEditorValues({ ...editorVal, css: val });
  }

  return (
    <div className="css-editor">
      <AceEditor
        mode="css"
        theme={theme}
        onChange={handleChange}
        value={editorVal.css}
        fontSize={settings.fontSize}
        name="css-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
}
