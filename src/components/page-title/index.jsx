import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <div className="bg-white p-5 shadow">
      <div className="container mx-auto">
        <span className="text-2xl text-zinc-700 font-bold">{title}</span>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
