import PageTitle from "~/components/page-title";
import Container from "~/components/container";
import BadgesComponent from "~/components/badges";
const Badges = () => {
  return (
    <div>
      <PageTitle title="Badges" />
      <Container>
        <BadgesComponent />
      </Container>
    </div>
  );
};

export default Badges;
