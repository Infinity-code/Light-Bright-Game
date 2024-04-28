import { atom, selector } from "recoil";


export const moveColor=atom({
    key:"moveColor",
    default:"default"
});
export const begin=atom({
    key:"begin",
    default:false
});

export const identity=atom<HTMLElement&EventTarget|null>({
    key:"id",
    default:null
});

