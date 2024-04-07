import React from "react";

export const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop:backdrop-blur-lg bg-opacity-0">
        {/* <div className="h-full w-full bg-grey-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"> */}
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-blue-500">chatApp</span>
        </h1>

        <form>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              type=" text"
              placeholder="Enter username"
             className="input input-bordered input-sm w-full max-w-xs"/>
          </div>

          <div>
            <label className=" label p-2">
              <span className=" text-base label-text">password</span>
            </label>
            <input
              type=" password"
              placeholder="Enter Password"
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
          <a className="link link-warning text-sm">{"Don't"} have an account</a>
        <div>
        <button className="btn btn-block btn-sm btn-success mt-2">Login</button>
        </div>
        </form>
      </div>
    </div>
  );
};
