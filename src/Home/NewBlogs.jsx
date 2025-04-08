import React from "react";

const NewBlogs = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 flex flex-col justify-center items-center">
      <h1>New Blogs</h1>
      <div className="overflow-y-scroll flex flex-col gap-10 h-[500px] bg-black text-white px-32 pt-10">
        <div className="flex text-black card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="flex text-black card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogs;
