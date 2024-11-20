import "@/app/globals.css";

import Image from "next/image";

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
          <main className="flex w-screen h-screen bg-secondary-foreground text-background">
            <div className="mx-auto">
              <div className="xl:basis-1/2 max-xl:basis-full flex flex-col pt-10 px-16 gap-4">
                {children}
              </div>
            </div>

            <div className="basis-1/2 max-xl:hidden">
              <Image
                className="w-full h-full object-cover"
                src="/images/library.jpg"
                alt="Bookshelves in a big library | made by Martin adams"
                priority
                width={1080}
                height={1080}
              />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
