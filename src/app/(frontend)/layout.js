import Link from "next/link";
import "@/assets/frontend/app.css";

export const metadata = {
  title: "Next Blog",
  description: "Next Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header
                    className="site-head"
                    style={{
                        // ...(site.cover_image && {
                        //     backgroundImage: `url(${site.cover_image})`,
                        // }),
                    }}
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link href="/">
                                    Logo
                                    {/* {site.logo ? (
                                        <img
                                            className="site-logo"
                                            src={site.logo}
                                            alt={site.title}
                                        />
                                    ) : (
                                        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={site.title} />
                                    )} */}
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                Twitter Facebook
                            </div>
                        </div>
                        {true ? (
                            <div className="site-banner">
                                <h1 className="site-banner-title">
                                    {/* {site.title} */}
                                    Title
                                </h1>
                                <p className="site-banner-desc">
                                    {/* {site.description} */}
                                    Description
                                </p>
                            </div>
                        ) : null}
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                {/* The navigation items as setup in Ghost */}
                                {/* <Navigation
                                    data={site.navigation}
                                    navClass="site-nav-item"
                                /> */}
                            </div>
                            <div className="site-nav-right">
                                <Link
                                    className="site-nav-button"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link href="/">{/*site.title*/} Title</Link> © 2021 &mdash;
                            Published with{" "}
                        </div>
                        <div className="site-foot-nav-right">
                            {/* <Navigation
                                data={site.navigation}
                                navClass="site-foot-nav-item"
                            /> */}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      </body>
    </html>
  );
}
