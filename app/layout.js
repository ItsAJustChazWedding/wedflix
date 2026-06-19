import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/main.css";
import "./globals.css";

export const metadata = {
  title: "WEDFLIX — It's a JustChaz Wedding | Justin & Chastidy",
  description:
    "You're formally invited! Justin & Chastidy are getting married on September 12, 2026 at The Birchwood Manor, Whippany, NJ. #ItsAJustChazWedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d0d10" }}>{children}</body>
    </html>
  );
}
