import { Helmet } from "react-helmet";
import PageTitle from "~/components/page-title";
import Container from "~/components/container";
import NotFoundComponent from "~/components/not-found";
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 | HabboAPI</title>
      </Helmet>
      <PageTitle title="Page not found" />
      <Container>
        <NotFoundComponent />
      </Container>
    </div>
  );
};

export default NotFound;
