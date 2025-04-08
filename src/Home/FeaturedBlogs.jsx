import React from "react";
import NewBlogs from "./NewBlogs";

const FeaturedBlogs = () => {
  return (
    <div className="">
      <h1 className="text-center">FeaturedBlogs</h1>
      <div className="flex justify-between items-center bg-black text-white px-32 pt-10">
        <div>
          <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-full h-52 object-cover"
              src="https://www.imgcorporations.com/images/bg-img.jpg"
              alt="Blog Thumbnail"
            />
            <div className="p-5 space-y-3">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3M16 7V3M4 11h16M4 19h16M4 15h16"
                  />
                </svg>
                <span>April 8, 2025</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Building a Blog with React & Tailwind
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how I created a modern blog interface using React,
                Tailwind CSS, and clean design principles.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline mt-2 font-medium"
              >
                Read More
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
            <NewBlogs></NewBlogs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
