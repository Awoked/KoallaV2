import { proxy } from "valtio";

const state = proxy({
    bodyColor: "#1B1A1D",
    breakPoints: {
        "sm": 640,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "2xl": 1536,
    },
    asideActive: false,

})

export default state;