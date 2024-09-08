import PageTitle from "~/components/page-title";
import HomeComponent from "~/components/home";
import Container from "~/components/container";
const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Container>
        <HomeComponent />
      </Container>
    </div>
  );
};

export default Home;
