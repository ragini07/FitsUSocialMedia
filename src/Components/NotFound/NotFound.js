import NotFoundImg from "../../assets/NotFound.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img className="h-56 w-56 " src={NotFoundImg} alt="404" />
      <h3 className="text-lg text-gray-600">We couldn't find any matches!</h3>
      <div className="text-lg text-gray-600">
        Please check the spelling or try searching something else.
      </div>
      <Link to="/">
        <button className="mb-4 mx-4 p-2 rounded-lg ml-auto bg-purple-500 hover:bg-purple-600 text-white">
          Explore
        </button>
      </Link>
    </div>
  );
}

export { NotFound };
