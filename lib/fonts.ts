import localFont from "next/font/local";

export const alikeSerif = localFont({
  src: "../public/fonts/Alike.woff",
  variable: "--font-alike-serif",
  weight: "100 900",
});

export const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
