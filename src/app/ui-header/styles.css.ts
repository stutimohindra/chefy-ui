import { style } from "@vanilla-extract/css";
import { vars } from "@/app/tokens.css";

export const header = style({
  backgroundColor: vars.colors.gray12,
  alignItems: "center",
  padding: "12px 16px",
  minHeight: 60,
  display: "flex",
  justifyContent: "space-between",
});

export const Icons = style({
  background: "transparent",
  color: vars.colors.gray1,
});

export const LoginButton = style({
  color: vars.colors.gray1,
  boxShadow: "none",
  cursor: "pointer",
});
