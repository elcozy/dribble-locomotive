import type { NextPage } from "next";

const Demo: NextPage = () => {
  return (
    <div className="flex bg-gray-50 justify-center py-6 md:py-14">
      <div className="container">
        <div className="image-wrapper py-4 max-w-6xl mx-auto px-5">
          <img
            className="rounded-2xl drop-shadow-lg"
            src="https://via.placeholder.com/1980x1080/FFFFFF"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Demo;
