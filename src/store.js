import { atom } from "recoil";

export const counterState = atom({
    key : "counterState",
    default : 0
})

export const textState = atom({
    key : "textState",
    default : "리코일에서 value값만 가져오기"
})