import "./globals.css";

export const metadata = {
  title: "TrawellWings",
  description: "Foreign Travel Consulting, Visa Processing & Passport Processing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}