import { Helmet } from "react-helmet";
import APIComponent from "~/components/api";
import Container from "~/components/container";
import PageTitle from "~/components/page-title";
const APIPage = () => {
  return (
    <div>
      <Helmet>
        <title>API | HabboAPI</title>
      </Helmet>
      <PageTitle title="Badges" />
      <Container>
        <APIComponent />
      </Container>
    </div>
  );
};

export default APIPage;
