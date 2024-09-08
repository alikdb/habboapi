import PageTitle from "~/components/page-title";
import HomeComponent from "~/components/home";
import Container from "~/components/container";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | HabboAPI</title>
      </Helmet>
      <PageTitle title="Home" />
      <Container>
        <HomeComponent />
      </Container>
    </div>
  );
};

export default Home;
