import { CssEditor } from "./CssEditor";
import { Header } from "./Header";
import { HtmlEditor } from "./HtmlEditor";
import { JsEditor } from "./JsEditor";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <HtmlEditor />
      <CssEditor />
      <JsEditor />
    </div>
  );
}
