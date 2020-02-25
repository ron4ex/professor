enum Colors {
  PRIMARY = "#000000",
  SECONDARY = "#FFFFFF",
  DANGER = "#FF0000"
}

export interface ITheme {
  colors: typeof Colors;
}

const theme: ITheme = {
  colors: Colors
};
export default theme;
