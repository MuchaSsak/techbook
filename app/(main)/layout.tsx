import "@/app/globals.css";

import NavBar from "@/components/pages-ui/(main)/NavBar";
import Providers from "@/components/Providers";
import { METADATA } from "@/lib/constants";
import { alikeSerif, geistMono, geistSans } from "@/lib/fonts";

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alikeSerif.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <NavBar />

          <main className="max-2xl:px-48 2xl:px-72 max-xl:px-24 max-sm:px-6 py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
