import "./globals.css";

export const metadata = {
  title: "SPYLT CAFFEINE",
  description: "GSAP with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
