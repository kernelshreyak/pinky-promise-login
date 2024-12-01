import React from "react";

interface LoginPageProps {
  username: string;
  setUsername: (username: string) => void;
  onContinue: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  username,
  setUsername,
  onContinue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // Update username state
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              id="username"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={
                username
                  ? "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  : "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              }
              onClick={onContinue}
              disabled={!username}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
