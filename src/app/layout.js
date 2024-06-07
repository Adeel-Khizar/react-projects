import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App for React",
  description: "Next Generative AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col justify-between p-10`}>
        <header className="w-full flex items-center gap-2 justify-between">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div>
            <ul className="flex gap-4">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </header>
        <div>{children}</div>
        <footer>
        <p>All CopyRight Reserved by me!</p>
      </footer>
      </body>
    </html>
  );
}
