import react, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { editorValues, selectedLibraries } from "./appState";

export function IframeTemplate(props) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>Our Funky HTML Page</title>
        <meta name="description" content="Our first page" />
        <meta name="keywords" content="html tutorial template" />
        <meta charset="utf-8" />
        <style>{props.style}</style>
      </head>
      <body>
        {props.html}
        <script>{props.js}</script>
      </body>
    </html>
  );
}

export function IframeComponent() {
  const [state, setState] = useState("<h2> hello word </h2>");
  const editVals = useRecoilValue(editorValues);
  const [selLibs, setSelLibs] = useRecoilState(selectedLibraries);

  const libScripts = selLibs.map(function (item, index) {
    return `<script src = ${item}> </script>`;
  });

  console.log(libScripts.join(""));

  const content = ` <html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <title>Our Funky HTML Page</title>
      <meta name="description" content="Our first page" />
      <meta name="keywords" content="html tutorial template" />
      <meta charset="utf-8" />
      <style>${editVals.css}</style>
    </head>
    <body>
    ${editVals.html}
      <script>${editVals.js}</script>
      ${libScripts.join('')}
    </body>
  </html>`;

  return (
    <iframe
      width={"100%"}
      height={500}
      src="https://localhost:4000/view/23"
      // srcDoc={ReactDOMServer.renderToString(iframeInnerContent)}
      srcDoc={content}
      title="view snippet"
    />
  );
}
