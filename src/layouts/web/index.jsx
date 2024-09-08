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
      </Helmet>

      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebLayout;
