import { Inter, Playfair_Display } from "next/font/google";

// Used by the sign-up / sign-in components via `.className`.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
