import { Poppins } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Event",
  description: "Event organization web app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
      
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
