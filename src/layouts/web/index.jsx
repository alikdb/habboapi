import { Outlet } from "react-router-dom";
import Header from "~/components/header";
import { Helmet } from "react-helmet";
const WebLayout = () => {
  return (
    <div>
      <Helmet>
        <title>HabboAPI</title>
        <meta
          name="description"
          content="HabboAPI is a free API for Habbo Hotel."
        />
        <meta
          name="keywords"
          content="habbo, api, habboapi, habbo api, habbolar, habbo retro, retro hotel, habnet, habbo badges, badges, furnis"
        />
        <meta name="author" content="Ali Şen" />

        <meta property="og:title" content="HabboAPI" />
        <meta
          property="og:description"
          content="HabboAPI is a free API for Habbo Hotel."
        />
        <meta
          property="og:image"
          content="https://habboapi.co/images/og-image.png"
        />
        <meta property="og:url" content="https://habboapi.co" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HabboAPI" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@habboapi" />
        <meta name="twitter:creator" content="@habboapi" />
        <meta name="twitter:title" content="HabboAPI" />
        <meta
          name="twitter:description"
          content="HabboAPI is a free API for Habbo Hotel."
        />
        <meta
          name="twitter:image"
          content="https://habboapi.co/images/og-image.png"
        />
      </Helmet>

      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebLayout;
