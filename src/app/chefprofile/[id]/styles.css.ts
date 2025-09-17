import { vars } from "@/app/tokens.css";
import { style } from "@vanilla-extract/css";

export const galleryWrap = style({
  maxWidth: 1040,
  margin: "0 auto",
  padding: 8,
  "@media": {
    "(max-width: 768px)": {
      maxWidth: 500,
    },
  },
});

export const gallery = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  gridTemplateAreas: `
    "main t1 t2"
    "main b1 b2"
  `,
  gap: 8,

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `"main" "t1" "t2" "b1" "b2"`,
    },
  },
});

const tile = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: 12,
});

const square = style([tile, { aspectRatio: "3 / 2" }]);

export const main = style([tile, { gridArea: "main" }]);
export const top1 = style([square, { gridArea: "t1" }]);
export const top2 = style([square, { gridArea: "t2" }]);
export const bot1 = style([square, { gridArea: "b1" }]);
export const bot2 = style([square, { gridArea: "b2" }]);

export const capsule = style({
  display: "flex",
  border: vars.colors.gray12,
  borderStyle: "solid",
  borderRadius: vars.space[4],
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: vars.space[6],
  margin: vars.space[6],
});

export const capsuleSeparator = style({
  color: vars.colors.gray12,
  height: vars.space[8],
});
