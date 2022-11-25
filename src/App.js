import { CssEditor } from "./CssEditor";
import { Header } from "./Header";
import { HtmlEditor } from "./HtmlEditor";
import { JsEditor } from "./JsEditor";
import "./styles.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useEffect } from "react";

export default function App() {
  return (
    <RecoilRoot>
      <Header />
      <div className="app-container">
        <HtmlEditor />
        <CssEditor />
        <JsEditor />
      </div>
    </RecoilRoot>
  );
}
