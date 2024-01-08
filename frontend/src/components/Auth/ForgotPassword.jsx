import React from "react";

const ForgotPasswordForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary1 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Forgot Password</h2>
        <p className="text-gray-600 mb-6 dark:text-white">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-blue-600 dark:hover:translate-y-1"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
