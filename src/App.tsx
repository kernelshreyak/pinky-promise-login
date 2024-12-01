import { useState } from "react";
import LoginPage from "./components/LoginPage";
import PinkyPromise from "./components/PinkyPromise";

const App = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {step === 1 && (
        <LoginPage
          username={username}
          setUsername={setUsername}
          onContinue={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <PinkyPromise
          username={username}
          onPinkyPromiseComplete={() => setStep(3)}
          onGoBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-green-500 mb-4">
            Login Successful
          </h1>
          <p className="text-gray-700">Welcome, {username}!</p>
        </div>
      )}
    </div>
  );
};

export default App;
