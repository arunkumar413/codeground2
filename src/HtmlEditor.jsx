import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export function HtmlEditor() {
  function handleChange() {}

  return (
    <div className="html-editor">
      <AceEditor
        mode="html"
        theme="github"
        onChange={handleChange}
        name="html-editor"
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
