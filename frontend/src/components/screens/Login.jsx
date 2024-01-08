import React, { useState } from "react";
import{Link} from 'react-router-dom'
import { HiEyeOff, HiEye } from "react-icons/hi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to log the user in
    onLogin();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-center p-4 py-12 sm:px-8 sm:rounded-md lg:px-8 dark:bg-primary">
      {/* <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
      </div> */}

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-primary text-primary py-8 px-4 sm:rounded-lg sm:px-10 shadow-inner shadow-white dark:bg-primary">
          <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary dark:text-primary">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-primary mb-1 dark:text-primary"
              >
                User name
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  value={email} onChange={handleEmailChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-primary text-primary dark:bg-primary dark:text-primary shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-primary mb-1 dark:text-primary"
              >
                Password
              </label>
              <div className="relative -z-0">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  required
                  value={password} onChange={handlePasswordChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-primary text-primary dark:bg-primary dark:text-primary shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"

                  // className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <HiEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* <form className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4" />
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <div className="w-full max-w-md">
              <div className="mb-4">
                <label
                  className="block text-gray-400 mb-1 font-bold"
                  htmlFor="username"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label
                  className="block text-gray-400 mb-1 font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5" />
                  ) : (
                    <HiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Login
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
