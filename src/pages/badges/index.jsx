import PageTitle from "~/components/page-title";
import Container from "~/components/container";
import BadgesComponent from "~/components/badges";
import { Helmet } from "react-helmet";
const Badges = () => {
  return (
    <div>
      <Helmet>
        <title>Badges | HabboAPI</title>
      </Helmet>
      <PageTitle title="Badges" />
      <Container>
        <BadgesComponent />
      </Container>
    </div>
  );
};

export default Badges;
