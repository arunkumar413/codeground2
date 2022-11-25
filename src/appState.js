import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const cdnLibraries = atom({
  key: "cdn-libraries", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const modalAtom = atom({
  key: "modal-state",
  default: false,
});

export const selectedLibraries = atom({
  key: "selected-libraries",
  default: [],
});

export const editorValues = atom({
  key: "editor-values",
  default: {
    html: "",
    css: "",
    js: "",
  },
});

export const editorTheme = atom({
  key: "theme",
  default: "xcode",
});

export const userLoginInfo = atom({
  key: "userLoginInfo",
  default: {
    isLoggedIn: false,
    email: "",
    sessionId: "",
  },
});

export const loginModalAtom = atom({
  key: "loginModal",
  default: "false",
});

export const loginFormAtom = atom({
  key: "loginForm",
  default: {
    email: "",
    password: "",
  },
});

export const loginStatusAtom = atom({
  key: "isUserLoggedin",
  default: {
    isLoggedIn: false,
    sessionID: null,
  },
});

export const accountModalAtom = atom({
  key: "accountModal",
  default: false,
});

export const settingsAtom = atom({
  key: "settings",
  default: {
    fontSize: 18,
    theme: localStorage.getItem("theme"),
  },
});

export const iframeContent = atom({
  key: "iframe-content",
  default: `<htm>  </html>`,
});
