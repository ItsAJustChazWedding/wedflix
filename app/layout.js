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

const SITE_URL = "https://rhkrys.github.io/wedflix/";
const OG_IMAGE = "https://rhkrys.github.io/wedflix/assets/img/wedding/og-image.jpg";
const TITLE = "WEDFLIX — It's a JustChaz Wedding | Justin & Chastidy";
const DESCRIPTION =
  "You're formally invited! Justin & Chastidy are getting married on September 12, 2026 at The Birchwood Manor, Whippany, NJ. #ItsAJustChazWedding";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "WEDFLIX",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Justin & Chastidy — #ItsAJustChazWedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d0d10" }}>{children}</body>
    </html>
  );
}
