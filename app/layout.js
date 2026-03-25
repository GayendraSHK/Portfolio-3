import { GoogleTagManager } from "@next/third-parties/google";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import FloatingWhatsApp from "./components/helper/floating-whatsapp";
import MousePointerEffect from "./components/helper/mouse-pointer-effect";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Kaveesha Gayendra - Portfolio",
  description:
    "This is the portfolio of Kaveesha Gayendra. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: "#1e293b",
            color: "#fff",
            borderRadius: "8px",
            border: "1px solid #334155",
          }}
        />
        <div className="pointer-events-none fixed inset-0 -z-20 tech-grid" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_88%_15%,rgba(45,212,191,0.12),transparent_28%)]" />
        <MousePointerEffect />
        <FloatingWhatsApp />
        <main className="relative mx-auto min-h-screen px-4 sm:px-8 lg:px-12 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[90rem] text-slate-100">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}