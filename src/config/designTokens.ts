export const DESIGN_TOKENS = {
  colors: {
    primaryDarkNavy: "#06172B",
    secondaryNavy: "#0B2744",
    brandBlue: "#087BDB",
    electricBlue: "#168DFF",
    cyanAccent: "#40D5FF",
    softBlueBg: "#EEF7FF",
    warmOffWhite: "#F8FAFC",
    white: "#FFFFFF",
    primaryText: "#10243B",
    secondaryText: "#5C7188",
    border: "#DFE8F2",
  },
  typography: {
    fontDisplay: "var(--font-heading)",
    fontBody: "var(--font-body)",
  },
  motion: {
    fast: "150ms cubic-bezier(0.22, 1, 0.36, 1)",
    standard: "250ms cubic-bezier(0.22, 1, 0.36, 1)",
    section: "450ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
} as const;
