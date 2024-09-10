import { Link } from "react-router-dom";
const APIComponent = () => {
  return (
    <div className="relative block rounded shadow bg-white p-5 my-5 via-blue-500 to-purple-600">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="flex justify-between">
        <div className="text-xl font-semibold">Badge API</div>
      </div>

      <hr className="my-4" />

      <div>
        <span>
          Our badge API allows you to quickly view all latest badges added to
          all <b>9 hotels</b>.
        </span>
        <br />

        <div className="my-2">
          <Link
            to={import.meta.env.VITE_API_URL + "badges"}
            target="_blank"
            className="text-blue-400"
          >
            {import.meta.env.VITE_API_URL + "badges"}
          </Link>
        </div>

        <div color="my-2">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Usage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-6">
                  term
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Allows you to search via name.
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-6">
                  hotel
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  You may specify a hotel to fetch badges from (default is all).
                  <br />
                  <small className="text-muted">
                    options: 'com', 'com.br', 'com.tr', 'it', 'nl', 'es', 'fi',
                    'de', 'fr' or 'all'.
                  </small>
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-6">
                  limit
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Default limit is 100, you may request 2,000 at the most.
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-6">
                  page
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  You can specify an page, useful for pagination.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default APIComponent;
