import BadgesComponent from "../badges";
import ActivitiesComponent from "../activities";
const HomeComponent = () => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="md:col-span-2">
        <div className="mb-5">
          <BadgesComponent type="small" />
        </div>
      </div>
      <div className="col">
        <ActivitiesComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
