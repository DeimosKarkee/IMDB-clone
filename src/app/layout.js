import "./globals.css";

export const metadata = {
  title: "IMDB clone",
  description: "Seach favourite movies using IMDB clone website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
