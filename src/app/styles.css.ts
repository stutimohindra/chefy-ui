import { style } from "@vanilla-extract/css";
import { vars } from "@/app/tokens.css";

export const Heading = style({
  alignItems: "center",
  padding: "12px 16px",
  minHeight: 60,
  display: "flex",
  justifyContent: "center",
});

export const HeroBanner = style({
  padding: vars.space["5"],
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    "linear-gradient(to top, #0F766E 0 50%, transparent 50% 100%)",
});

export const HeroBannerText = style({
  padding: vars.space["5"],
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.teal11,
});

export const SeparatorRoot = style({
  display: "inline-block",
  color: vars.colors.gray1,
  height: "90px",
  "@media": {
    "screen and (max-width: 520px)": { display: "none" },
  },
});

export const CoreValues = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: vars.space["3"],
  paddingRight: vars.space["3"],
});

export const TextContainer = style({
  color: vars.colors.gray1,
  "@media": {
    "screen and (max-width: 520px)": { padding: vars.space["3"] },
  },
});

export const TextContainerParent = style({
  display: "flex",
  "@media": {
    "screen and (max-width: 520px)": { flexDirection: "column" },
  },
});
