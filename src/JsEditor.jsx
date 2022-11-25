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

export function JsEditor() {
  const [editorVal, setEditorValues] = useRecoilState(editorValues);
  const settings = useRecoilValue(settingsAtom)
  const theme = useRecoilValue(editorTheme);
  function handleChange(val) {
    setEditorValues({ ...editorVal, js: val });
  }

  return (
    <div className="js-editor">
      <AceEditor
        mode="javascript"
        theme={theme}
        value={editorVal.js}
        onChange={handleChange}
        fontSize={settings.fontSize}
        name="js-editor"
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
