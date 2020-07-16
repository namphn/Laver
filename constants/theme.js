const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6",
  border: '#616164'
};

const sizes = {
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  numberOfIcons = 5,
  horizontalPadding = 48,
  DURATION = 450,
  PADDING = 16,
  SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons),
  ICON_SIZE = SEGMENT - horizontalPadding
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  }
};



export { colors, sizes, fonts };