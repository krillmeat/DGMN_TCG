export const CARD_WIDTH = 180;
export const CARD_HEIGHT = 252;
export const CARD_VIEWBOX = "0 0 "+CARD_WIDTH+" "+CARD_HEIGHT;

export const COLORS = {
  red: "#E7002C",
  blue: "#0094DC",
  yellow: "#FFE100",
  green: "#009B6B",
  black: "#000",
  purple: "#6456A3",
  white: "#FFF"
}

export const DARK_COLORS = {
  red: "",
  blue: "",
  yellow: "",
  green: "#006544",
  black: "",
  purple: "",
  white: ""
}

export const CARD_BACK_SVG = "m169.79,251.86H10.21c-5.61,0-10.21-4.6-10.21-10.21V10.21C0,4.6,4.6,0,10.21,0h159.58c5.61,0,10.21,4.6,10.21,10.21v231.39c0,5.65-4.6,10.25-10.21,10.25Z";

export const FRAME_EGG_SVG = '';
export const FRAME_DGMN_SVG = '';
export const FRAME_TAMER_SVG = '';
export const FRAME_OPTION_SVG = '';

export const EFFECT_BACK_SVG = {
  dgmn: {
    BACK: "m157.95,0v46.63l-2.39,2.35H2.35l-2.35-2.35V0h157.95Z",
    LINES: ["m79.45,2.58H.19v-1h79.26v1Z","m157.89,2.58h-78.44v-1h78.44v1Z"]
  },
  dgmn6: {
    BACK: "m157.94,0v52.63l-2.39,2.35H2.35l-2.35-2.35V0h157.94Z",
    LINES: ["m79.44,2.58H.19v-1h79.26v1Z","m157.88,2.58h-78.44v-1h78.44v1Z"]
  },
  dgmnTall: {
    BACK: "m157.94,0v59.63l-2.39,2.35H2.35l-2.35-2.35V0h157.94Z",
    LINES: ["m79.44,2.58H.19v-1h79.26v1Z","m157.89,2.58h-78.44v-1h78.44v1Z"]
  },
  egg: {
    BACK: "",
    LINES: ["",""]
  },
  tamer: {
    BACK: "m157.95,0v48.63l-2.39,2.35H2.35l-2.35-2.35V0h157.95Z",
    LINES: ["m79.45,2.58H.19v-1h79.26v1Z","m157.89,2.58h-78.45v-1h78.45v1Z"]
  },
  option: {
    BACK: "m157.95,0v48.63l-2.39,2.35H2.35l-2.35-2.35V0h157.95Z",
    LINES: ["m79.45,2.58H.19v-1h79.26v1Z","m157.89,2.58h-78.45v-1h78.45v1Z"]
  }
}

export const MAIN_INFO_BACK_SVG = ["m80.2,18.32H2.35L0,15.98V2.35L2.35,0h77.85v18.32Z","m79.99,0h77.58l2.39,2.35v13.63l-2.39,2.35h-77.58V0Z"];
export const MAIN_INFO_FRONT_SVG = 'm159.97,14.17v1.8l-2.39,2.35H2.35l-2.35-2.35V2.35l.42-.42h24.06l12.49,12.25h123Z';

export const CLIP_SVG = {
  egg: 'm159.29,173.71l-2.09,2.06H2.4l-2.05-2.05V3.06L2.4,1.01h60.94l3.49,3.75h13s13.68,0,13.68,0l3.49-3.75h60.2l2.09,2.06v170.64Z',
  dgmn: "m158.45,16.91v163.44l-.15.15-.15.15-1.35,1.33-.15.14-.15.14H1.91l-.15-.15-.15-.15-1.32-1.32-.15-.15-.15-.15V23.69l.75.45.75.45,1.51.89c2.39,1.41,5.15,2.16,7.98,2.16,8.7,0,15.78-7.08,15.78-15.78,0-3.13-.91-6.15-2.64-8.73l-1.04-1.56-.52-.78-.52-.78h40.58l.15.16.15.16,3.19,3.43h26.9l3.19-3.43.15-.16.15-.16h18.45l.14.26.14.26,7.9,14.48h33.36l.15.14.15.14,1.35,1.33.15.15.15.15Z",
  dgmn6: 'm158.95,209.7l-2.09,2.06H3.05l-2.05-2.05V23.79c2.93,3.09,6.96,4.83,11.24,4.83,8.56,0,15.53-6.97,15.53-15.53,0-4.74-2.14-9.16-5.8-12.1h42.03l3.49,3.75h26.68l3.49-3.75h18.71l8.18,15h32.31l2.09,2.06v191.65Z',
  option: 'm159.91,173.69l-2.09,2.06h-77.37v.07H3.05l-2.05-2.05V23.79c2.93,3.09,6.96,4.83,11.24,4.83,8.56,0,15.53-6.96,15.53-15.53,0-4.74-2.14-9.16-5.8-12.09h42.03l3.49,3.75h26.64l3.49-3.75h60.2l2.09,2.06v170.64Z',
  tamer: 'm159.91,173.69l-2.09,2.06h-77.37v.07H3.05l-2.05-2.05V23.79c2.93,3.09,6.96,4.83,11.24,4.83,8.56,0,15.53-6.96,15.53-15.53,0-4.74-2.14-9.16-5.8-12.09h42.03l3.49,3.75h26.64l3.49-3.75h60.2l2.09,2.06v170.64Z'
}

export const TRIM_SVG = {
  egg: ["m80.28,176.26H2.49l-.22-.22-2.05-2.05L0,173.76V2.5l.22-.22L2.27.22,2.49,0h61.58l.22.24,3.27,3.51h11.92s.75,0,.75,0h.05v2.5h-.8s-11.92,0-11.92,0h-1.09l-.74-.8-2.75-2.95H3.53l-1.03,1.03v169.2l1.03,1.03h76.75v2.5Z","m158.45,2.49v171.27l-.22.22-2.09,2.06-.22.22h-75.63v-2.5h74.61l1.06-1.04V3.54l-1.06-1.04h-56.72l-2.75,2.95-.74.8h-14.39s0-2.5,0-2.5h13.31l3.27-3.51L97.07,0h58.84l.22.22,2.09,2.06.22.22Z"],
  dgmn: ["m79.28,182.26H1.91l-.15-.15-.15-.15-1.32-1.32-.15-.15L0,180.35V23.69l.75.45.75.45,1.51.89c2.39,1.41,5.15,2.16,7.98,2.16,8.7,0,15.78-7.08,15.78-15.78,0-3.13-.91-6.15-2.64-8.73l-1.04-1.56-.52-.78L22.06,0h40.58l.15.16.15.16,3.19,3.43h13.15v2.5h-14.24l-.74-.8-2.75-2.95H26.71c1.68,2.82,2.56,6.03,2.56,9.35,0,10.08-8.2,18.28-18.28,18.28-2.98,0-5.9-.72-8.49-2.08v151.28l.44.44h76.33v2.5Z","m158.45,16.91v163.44l-.15.15-.15.15-1.35,1.33-.15.14-.15.14h-77.23v-2.5h76.21l.47-.46V17.96l-.47-.46h-33.82l-.71-1.3-7.47-13.7h-15.88l-2.75,2.95-.74.8h-14.84v-2.5h13.75l3.19-3.43.15-.16L96.51,0h18.45l.14.26.14.26,7.9,14.48h33.36l.15.14.15.14,1.35,1.33.15.15.15.15Z"],
  dgmn6: ["m79.28,212.26H1.91l-.15-.15-.15-.15-1.32-1.32-.15-.15-.15-.15V23.69l.75.45.75.45,1.51.89c2.39,1.41,5.15,2.16,7.98,2.16,8.7,0,15.78-7.08,15.78-15.78,0-3.13-.91-6.15-2.64-8.73l-1.04-1.56-.52-.78-.52-.78h40.58l.15.16.15.16,3.19,3.43h13.15v2.5h-14.24l-.74-.8-2.75-2.95H26.71c1.68,2.82,2.56,6.03,2.56,9.35,0,10.08-8.2,18.28-18.28,18.28-2.98,0-5.9-.72-8.49-2.08v181.28l.44.44h76.33v2.5Z","m158.45,16.91v193.44l-.15.15-.15.15-1.35,1.33-.15.14-.15.14h-77.23v-2.5h76.21l.47-.46V17.96l-.47-.46h-33.82l-.71-1.3-7.47-13.7h-15.88l-2.75,2.95-.74.8h-14.84v-2.5h13.75l3.19-3.43.15-.16.15-.16h18.45l.14.26.14.26,7.9,14.48h33.36l.15.14.15.14,1.35,1.33.15.15.15.15Z"],
  tamer: ["m80.27,176.25H1.91l-.15-.15-.15-.15-1.32-1.32-.15-.15-.15-.15V23.68l.75.45.75.45,1.51.89c2.39,1.41,5.15,2.16,7.98,2.16,8.7,0,15.78-7.08,15.78-15.78,0-3.13-.91-6.15-2.64-8.73l-1.04-1.56-.52-.78-.52-.78h41.58l.15.16.15.16,3.19,3.43h13.15v2.5h-14.24l-.74-.8-2.75-2.95H26.71c1.68,2.81,2.56,6.03,2.56,9.34,0,10.08-8.2,18.28-18.28,18.28-2.98,0-5.9-.72-8.49-2.08v145.27l.44.44h77.33v2.5Z","m158.4,2.49v171.27l-.22.22-2.09,2.06-.22.22h-75.63v-2.5h74.61l1.06-1.04V3.54l-1.06-1.04h-56.72l-2.75,2.95-.74.8h-14.39s0-2.5,0-2.5h13.31l3.27-3.51.22-.24h58.84l.22.22,2.09,2.06.22.22Z"],
  option: ["m80.27,176.25H1.91l-.15-.15-.15-.15-1.32-1.32-.15-.15-.15-.15V23.68l.75.45.75.45,1.51.89c2.39,1.41,5.15,2.16,7.98,2.16,8.7,0,15.78-7.08,15.78-15.78,0-3.13-.91-6.15-2.64-8.73l-1.04-1.56-.52-.78-.52-.78h41.58l.15.16.15.16,3.19,3.43h13.15v2.5h-14.24l-.74-.8-2.75-2.95H26.71c1.68,2.81,2.56,6.03,2.56,9.34,0,10.08-8.2,18.28-18.28,18.28-2.98,0-5.9-.72-8.49-2.08v145.27l.44.44h77.33v2.5Z","m158.4,2.49v171.27l-.22.22-2.09,2.06-.22.22h-75.63v-2.5h74.61l1.06-1.04V3.54l-1.06-1.04h-56.72l-2.75,2.95-.74.8h-14.39s0-2.5,0-2.5h13.31l3.27-3.51.22-.24h58.84l.22.22,2.09,2.06.22.22Z"]
}

export const INHERIT_SVG = {
  egg: ["m80.88,0H2.64L.28,2.35l-.28,29.49,2.36,2.35h79.17l-.73-21.53s-.07,0-.1,0l.16-12.66Z","m160.42,2.35l-2.35-2.35h-77.69l.14,34.19h76.28l3.35-2.35.28-19.32s-.05.01-.14.02l.15-10.19Z"],
  dgmn: ["m80.81,0H2.64L.28,2.35,0,34.68c-.19-.19,40.18-.19,80.54-.14l.28-34.53Z","m80.38,0h77.69l2.35,2.35-.28,32.33s-40-.09-80.04-.14l.28-34.53Z"],
  option: ["m80.88,0H2.64L.28,2.35l-.28,29.49,2.36,2.35h79.17l-.73-21.53s-.07,0-.1,0l.16-12.66Z","m160.42,2.35l-2.35-2.35h-77.69l.14,34.19h76.28l3.35-2.35.28-19.32s-.05.01-.14.02l.15-10.19Z"],
  tamer: ["m80.88,0H2.64L.28,2.35l-.28,29.49,2.36,2.35h79.17l-.73-21.53s-.07,0-.1,0l.16-12.66Z","m160.42,2.35l-2.35-2.35h-77.69l.14,34.19h76.28l3.35-2.35.28-19.32s-.05.01-.14.02l.15-10.19Z"]
}

export const PLAY_COST_SVG = {
  BACK: "m17.17,30.02c-6.89,0-12.56-5.37-12.85-12.26v-.17l-4.1-.93C.47,7.65,7.61.47,16.62.17l.93,4.1h.17c6.93.3,12.35,5.92,12.35,12.85-.04,7.15-5.79,12.9-12.9,12.9Z",
  WHITE_RING: "m17.17,27.87c-5.88,0-10.7-4.78-10.7-10.7s4.82-10.7,10.7-10.7,10.7,4.78,10.7,10.7-4.78,10.7-10.7,10.7Zm0-20.55c-5.41,0-9.85,4.44-9.85,9.85s4.44,9.85,9.85,9.85,9.85-4.44,9.85-9.85-4.4-9.85-9.85-9.85Z",
  DARK_RING: "m17.17,8.16c4.95,0,9.01,4.06,9.01,9.01s-4.06,9.01-9.01,9.01-9.01-4.06-9.01-9.01,4.06-9.01,9.01-9.01m0-1.27c-5.67,0-10.28,4.61-10.28,10.28s4.61,10.28,10.28,10.28,10.28-4.61,10.28-10.28-4.57-10.28-10.28-10.28h0Z",
  INNER_CIRCLE: "m17.17,26.81c-5.33,0-9.64-4.31-9.64-9.64s4.36-9.64,9.64-9.64,9.64,4.31,9.64,9.64-4.31,9.64-9.64,9.64Z",
  SHADOW: "m17.17,9.43c4.27,0,7.74,3.47,7.74,7.74s-3.47,7.74-7.74,7.74-7.74-3.47-7.74-7.74,3.51-7.74,7.74-7.74m0-2.54c-5.67,0-10.28,4.61-10.28,10.28s4.61,10.28,10.28,10.28,10.28-4.61,10.28-10.28-4.57-10.28-10.28-10.28h0Z",
  TEXT: [""]
}

export const EVO_COST_SVG = {
  ONE: {
    TRIM_ADDON: "m17.44,4.47v-2.4l-.49-.56-.67-.77-.64-.74-.97.05C10.5.24,6.74,1.89,3.85,4.47v20.65l.65-.35c2.42,3.67,6.55,5.95,11.03,5.95,7.25,0,13.15-5.9,13.15-13.15,0-6.64-4.89-12.16-11.24-13.1Z",
    BACK: "m15.52,6.33h-.08v-3.52l-.67-.77C6.55,2.43,0,9.18,0,17.53c0,2.12.45,4.12,1.19,5.95l.74.41,3.35-1.82c1.75,3.91,5.66,6.66,10.24,6.66,6.16,0,11.15-4.99,11.15-11.15s-4.95-11.24-11.15-11.24Z",
    WHITE_RING: "m15.52,26.97c-5.2,0-9.45-4.24-9.45-9.45s4.24-9.45,9.45-9.45,9.45,4.24,9.45,9.45-4.2,9.45-9.45,9.45Zm0-18.1c-4.74,0-8.61,3.87-8.61,8.61s3.87,8.61,8.61,8.61,8.61-3.87,8.61-8.61c.04-4.74-3.83-8.61-8.61-8.61Z",
    INNER_CIRCLE: "m15.52,8.37c-5.04,0-9.15,4.12-9.15,9.15s4.12,9.15,9.15,9.15,9.15-4.12,9.15-9.15-4.08-9.15-9.15-9.15Z"
  },
  TWO: {
    BACK_WHITE: "m11.05,30.34h-5.3v9H1.06v-19.36h4.69v.49h5.3v9.87Z",
    TRIM_ADDON: "m25.02,26.45c2.22-2.41,3.46-5.54,3.46-8.88,0-6.64-4.89-12.16-11.23-13.09v-2.4l-.49-.56-.67-.77-.64-.74-.97.05C10.35.24,6.62,1.86,3.74,4.4v20.68l.57-.31c.4.6.84,1.16,1.33,1.69-.74.8-1.37,1.69-1.9,2.63v12.9c2.28,4.06,6.62,6.82,11.6,6.82,7.33,0,13.29-5.96,13.29-13.29,0-3.37-1.32-6.62-3.6-9.07Z",
    BACK: "m22.23,26.69c2.69-2.04,4.44-5.26,4.44-8.89,0-6.16-4.95-11.24-11.15-11.24h-.08v-3.52l-.67-.77C6.55,2.67,0,9.41,0,17.76c0,2.12.45,4.12,1.19,5.95l.74.41,3.35-1.82c.78,1.75,2,3.26,3.51,4.41-2.77,2.06-4.57,5.35-4.57,9.05,0,6.22,5.08,11.3,11.3,11.3s11.3-5.08,11.3-11.3c0-3.71-1.81-7-4.58-9.06Z",
    WHITE_RING: "m15.52,45.2c-5.2,0-9.45-4.24-9.45-9.45s4.24-9.45,9.45-9.45,9.45,4.24,9.45,9.45-4.2,9.45-9.45,9.45Zm0-18.1c-4.74,0-8.61,3.87-8.61,8.61s3.87,8.61,8.61,8.61,8.61-3.87,8.61-8.61c.04-4.74-3.83-8.61-8.61-8.61Z",
    INNER_CIRCLE: "m15.52,26.6c-5.04,0-9.15,4.12-9.15,9.15s4.12,9.15,9.15,9.15,9.15-4.12,9.15-9.15-4.08-9.15-9.15-9.15Z",
    TRIM: "m23.29,44.15l-.7-.71c2.07-2.04,3.21-4.78,3.21-7.69,0-3.38-1.64-6.62-4.38-8.66l-.54-.4.53-.4c2.7-2.04,4.24-5.13,4.24-8.49,0-2.93-1.21-5.76-3.32-7.78l.69-.72c2.3,2.21,3.62,5.31,3.62,8.5,0,3.46-1.5,6.67-4.14,8.89,2.69,2.24,4.28,5.58,4.28,9.06,0,3.18-1.25,6.17-3.51,8.4Z"
  }
}

export const SECURITY_ICON_SVG = {
  WHITE_TRIM: 'm24.88,12.44l-2.59-2.59v-4.59l-.29-.29-2.09-2.09-.29-.29h-4.59L12.44,0l-2.59,2.59h-4.59l-.29.29-2.09,2.09-.29.29v4.59L0,12.44l2.59,2.59v4.59l.29.29,2.09,2.09.29.29h4.59l2.59,2.59,2.59-2.59h4.59l.29-.29,2.09-2.09.29-.29v-4.59l2.59-2.59Zm-.71,0l-1.88,1.88v-3.76l1.88,1.88ZM12.44.71l1.88,1.88h-3.76l1.88-1.88ZM.71,12.44l1.88-1.88v3.76l-1.88-1.88Zm11.73,11.73l-1.88-1.88h3.76l-1.88,1.88Z',
  BACK_COLOR: 'm12.44,24.52L.35,12.44,12.44.35l12.08,12.08-12.08,12.08Z',
  COLOR_TRIM: 'm19.41,21.79H5.47l-2.38-2.38V5.47l2.38-2.38h13.94l2.38,2.38v13.94l-2.38,2.38Zm-13.53-1h13.11l1.79-1.79V5.88l-1.79-1.79H5.88l-1.79,1.79v13.11l1.79,1.79Z',
  MAIN_COLOR: 'm19.2,3.59l2.09,2.09v13.53l-2.09,2.09H5.67l-2.09-2.09V5.67l2.09-2.09h13.53Z',
  LOCK_ICON: {
    BODY: 'm7.16,10.89v8h10.55v-8H7.16Zm7.49,4.52l-2.22,2.23-2.32-2.32c-.33-.3-.54-.73-.54-1.21,0-.92.74-1.66,1.66-1.66.47,0,.9.2,1.2.52h0c.3-.32.73-.52,1.2-.52.92,0,1.66.74,1.66,1.66,0,.53-.26,1-.65,1.31Z',
    RING: 'm10.14,9.78c.19-1.26,1.14-2.22,2.29-2.22s2.11.96,2.29,2.22h2c-.21-2.36-2.04-4.22-4.29-4.22s-4.08,1.86-4.29,4.22h2Z'
  }
}

export const RARITY_SVG = {
  C: "m2.52,0C1.13,0,0,1.13,0,2.52s1.13,2.52,2.52,2.52,2.52-1.13,2.52-2.52S3.91,0,2.52,0Zm.93,2.21h-.62v-.62h-.62v1.87h.62v-.62h.62v1.25h-1.87V.96h1.87v1.25Z",
  U: "m2.52,0C1.13,0,0,1.13,0,2.52s1.13,2.52,2.52,2.52,2.52-1.13,2.52-2.52S3.91,0,2.52,0Zm.93,4.08h-1.87V.96h.62v2.49h.62V.96h.62v3.11Z",
  R: "m2.52,0C1.13,0,0,1.13,0,2.52s1.13,2.52,2.52,2.52,2.52-1.13,2.52-2.52S3.91,0,2.52,0Zm.66,4.08h-.27l-.74-1.48v1.48h-.62V.96h1.87v1.87h-.43l.62,1.24h-.43Z",
  SR: "m4.26,4.16h-.27l-.74-1.48v1.48h-.62V1.05h1.87v1.87h-.43l.52,1.03c.28-.41.45-.9.45-1.43,0-1.39-1.13-2.52-2.52-2.52S0,1.13,0,2.52c0,.56.19,1.08.51,1.5v-.47h1.25v-.62H.51v-1.87h1.87v.62h-1.25v.62h1.25v1.87H.63c.46.52,1.13.86,1.88.86s1.43-.34,1.9-.88h-.15Z",
  SEC: "m5.95,0s-.03,0-.04,0h0s-3.43,0-3.43,0h0C1.1.03,0,1.14,0,2.52s1.1,2.49,2.48,2.52h0s3.43,0,3.43,0h0s.03,0,.04,0c1.39,0,2.52-1.13,2.52-2.52S7.34,0,5.95,0Zm-2.89,1.59h-1.25v.62h1.25v1.87h-1.87v-.62h1.25v-.62h-1.25V.96h1.87v.62Zm2.12,0h-1.25v.62h1.25v.62h-1.25v.62h1.25v.62h-1.87V.96h1.87v.62Zm2.09.62h-.62v-.62h-.62v1.87h.62v-.62h.62v1.25h-1.87V.96h1.87v1.25Z",
  P: "m2.52,0C1.13,0,0,1.13,0,2.52s1.13,2.52,2.52,2.52,2.52-1.13,2.52-2.52S3.91,0,2.52,0Zm-.25,2.82v1.26h-.62V.96h1.87v1.87h-1.25Z"
}