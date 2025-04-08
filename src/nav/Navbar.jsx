import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-cyan-950 pb-10 text-white px-32 pt-10">
      <div>
        <h1 className="text-3xl font-bold border-b-2">Blogs</h1>
      </div>
      <div className="">
        <ul className="flex justify-center gap-5">
          <Link to="/">
            <button className="btn btn-neutral">Home</button>
          </Link>
          <Link to="/blogs">
            <button className="btn btn-neutral">Blogs</button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-neutral">Contact</button>
          </Link>
          
          <Link to="/admin">
            <button className="btn btn-neutral">Admin</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
