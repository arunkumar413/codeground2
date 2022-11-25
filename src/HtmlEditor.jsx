import React, { useEffect } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/webpack-resolver'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  editorTheme,
  editorValues,
  loginStatusAtom,
  settings,
  settingsAtom,
  userLoginInfo,
} from "./appState";

export function HtmlEditor() {
  const [editorVal, setEditorValues] = useRecoilState(editorValues);
  const [loginStatus, setLoginStatus] = useRecoilState(loginStatusAtom);
  const [loginInfo, setLoginInfo] = useRecoilState(userLoginInfo);
  const settings = useRecoilValue(settingsAtom)

  useEffect(function () {
    console.log("########### session status ###############");
    console.log(localStorage.getItem("sessionID"));
    let item = localStorage.getItem("sessionID");
    let status = localStorage.getItem("sessionID") === "null" ? false : true;
    let email = localStorage.getItem("email");

    let code = localStorage.getItem("sessionID");
    setLoginInfo({
      ...loginInfo,
      isLoggedIn: status,
      sessionId: code,
      email: email,
    });
  }, []);

  useEffect(
    function () {
      console.log("###### user login info ############");
      console.log(userLoginInfo);
    },
    [userLoginInfo]
  );

  const theme = useRecoilValue(editorTheme);

  function handleChange(val) {
    setEditorValues({ ...editorVal, html: val });
  }

  return (
    <div className="html-editor">
      <AceEditor
        value={editorVal.html}
        mode="html"
        theme={theme}
        fontSize={settings.fontSize}
        onChange={handleChange}
        name="html-editor"
        editorProps={{ $blockScrolling: true }}
        // showPrintMargin={true}
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
