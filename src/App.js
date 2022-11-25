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
import { useEffect, useState } from "react";
import { IframeComponent, IframeTemplate } from "./iframeTemplate";
import ReactDOMServer from "react-dom/server";
import { editorValues } from "./appState";

export default function App() {
  const [state, setState] = useState("<h2> hello word </h2>");
  // const snippetValues = useRecoilValue(editorValues);

  // srcDoc={ReactDOMServer.renderToString(srcDoc)}  convert react component to html
  // https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component

  // let iframeInnerContent = (
  //   <IframeTemplate
  //     html={snippetValues.html}
  //     css={snippetValues.css}
  //     js={snippetValues.js}
  //   />
  // );

  return (
    <RecoilRoot>
      <Header />
      <div className="app-container">
        <HtmlEditor />
        <CssEditor />
        <JsEditor />
        {/* <iframe
          width={500}
          height={500}
          src="https://localhost:4000/view/23"
          // srcDoc={ReactDOMServer.renderToString(iframeInnerContent)}
          srcDoc={state}
          title="view snippet"
        /> */}
        <IframeComponent/>
      </div>
    </RecoilRoot>
  );
}
