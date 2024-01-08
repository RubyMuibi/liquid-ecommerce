import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CartContextProvider } from "@/context/CartContext";
import { CartModalContextProvider } from "@/context/CartModalContext";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CartContextProvider>
        <CartModalContextProvider>
          <Header />
          {children}
          <Footer />
          </CartModalContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
