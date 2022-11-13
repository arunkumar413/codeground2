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