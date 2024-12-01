import React, { useState } from "react";
import interact from "interactjs";
import Draggable from "react-draggable";

interface PinkyPromiseProps {
  username: string;
  onPinkyPromiseComplete: () => void;
  onGoBack: () => void;
}

const PinkyPromise: React.FC<PinkyPromiseProps> = ({
  username,
  onPinkyPromiseComplete,
  onGoBack,
}) => {
  const [completed, setCompleted] = useState(false);

  const handleDragStop = (event: any) => {
    const dropZone = document.getElementById("drop-zone");
    const draggable = document.getElementById("draggable-hand");

    if (!dropZone || !draggable) {
      console.error("Drop zone or draggable element is not available.");
      return;
    }

    // Get bounding boxes for both elements
    const dropZoneRect = dropZone.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();

    console.log("Drop Zone:", dropZoneRect);
    console.log("Draggable Position:", draggableRect);

    // Define specific points on the images (e.g., finger tips)
    const fingerTipRight = {
      x: draggableRect.right - 10, // Adjust based on where the finger is on the right hand
      y: draggableRect.top + draggableRect.height / 2, // Adjust based on finger position
    };

    const fingerTipLeft = {
      x: dropZoneRect.left + 10, // Adjust based on where the finger is on the left hand
      y: dropZoneRect.top + dropZoneRect.height / 2, // Adjust based on finger position
    };

    // Calculate the distance between the finger tips
    const distance = Math.sqrt(
      Math.pow(fingerTipRight.x - fingerTipLeft.x, 2) +
        Math.pow(fingerTipRight.y - fingerTipLeft.y, 2),
    );
    console.log("hands distance:", distance);
    // Check if the distance is small enough to consider the fingers touching
    const isFingersTouching = distance <= 269; // Adjust the threshold as needed

    if (isFingersTouching) {
      setCompleted(true);
      onPinkyPromiseComplete();
    }
  };

  const handleDrop = () => {
    setCompleted(true);
    onPinkyPromiseComplete();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Access</h1>
      <p className="text-gray-600 mb-8">
        Do you pinky promise this is your account? <br />
        <span className="text-blue-500 font-semibold">
          We trust you, {username}!
        </span>
      </p>
      <div className="relative flex justify-center items-center mb-6">
        {/* Fixed Left Hand */}
        <div
          id="drop-zone"
          className="w-20 h-20 flex justify-center items-center bg-gray-200 rounded-full"
        >
          <img
            src="/left.png"
            alt="Left Hand"
            className={`w-full h-full ${
              completed ? "opacity-50" : "opacity-100"
            } transition`}
          />
        </div>
        {/* Draggable Right Hand */}
        <Draggable onStop={handleDragStop}>
          <div
            id="draggable-hand"
            className="w-12 h-12 flex justify-center items-center ml-4 cursor-pointer"
            style={{ transform: "translate(0, 0)" }}
            data-x="0"
            data-y="0"
          >
            <img src="/right.png" alt="Right Hand" className="w-full h-full" />
          </div>
        </Draggable>
      </div>
      <button
        className="mt-4 text-sm text-gray-500 underline"
        onClick={onGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PinkyPromise;
