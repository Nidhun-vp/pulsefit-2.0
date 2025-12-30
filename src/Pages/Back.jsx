import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      name: "Spider dumbell",
      description: "Performed by lying chest-down on an incline bench and rowing dumbbells upward.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994415/spider-dumbell_inulet.gif",
      repetition: "14 × 3 sets",
    },
    {
      name: "Bent Lift",
      description: "This exercise is done by bending forward at the hips and pulling a barbell or dumbbells toward your waist.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994433/bent-lift_nztjkp.gif",
      repetition: "12 × 3 sets",
    },
    {
      name: "Lat pull down",
      description: "Performed on a lat pulldown machine by pulling the bar down toward your chest.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994410/Lat-Pulldown_qmqcw5.webp",
      repetition: "23 × 3 sets",
    },
    {
      name: "Cable-straight Arm",
      description: "This exercise involves pulling a cable bar downward with straight arms from shoulder height to your thighs.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994410/cable-straightarm_sxpdzf.gif",
      repetition: "12 × 3 sets",
    },
    {
      name: "Seated rowing",
      description: "Performed while seated, pulling a cable handle toward your waist with your back straight.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994413/seated-rowing_xpxvam.gif",
      repetition: "14 × 3 sets",
    },
    {
      name: "seated-bent-over",
      description: "Done by sitting on a bench and bending forward while rowing dumbbells or a barbell.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994414/seated-bent-over_ehxh9t.gif",
      repetition: "16 × 3 sets",
    },
    {
      name: "dumbell-rowing",
      description: "A one-arm rowing exercise where a dumbbell is pulled toward the waist while supporting the body on a bench.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994412/dumbell-rowing_j23t8a.gif",
      repetition: "18 × 3 sets",
    },
    
   
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  /* ⏱ TIMER */
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(i);
  }, [running]);

  const formatTime = t =>
    `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-yellow-400 hover:text-blue-300"
      >
        ← Back
      </button>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-zinc-900 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Back Workout
          </h4>

          {/* Mobile: horizontal scroll | Desktop: vertical */}
          <ul className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {exercises.map((ex, i) => (
              <li
                key={i}
                onClick={() => setSelectedExercise(ex)}
                className={`cursor-pointer px-4 py-2 rounded-lg whitespace-nowrap transition
                  ${
                    selectedExercise.name === ex.name
                      ? "bg-yellow-400 text-black font-semibold"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
              >
                {ex.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-zinc-900 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            {selectedExercise.name}
          </h2>

          <div className="flex flex-col items-center">
            <img
              src={selectedExercise.media}
              alt={selectedExercise.name}
              className="w-full max-w-md rounded-xl mb-4"
            />

            <p className="text-gray-300 mb-2 text-center">
              {selectedExercise.description}
            </p>

            <p className="text-lg">
              <span className="text-yellow-400 font-semibold">Reps:</span>{" "}
              {selectedExercise.repetition}
            </p>
          </div>

        </main>
      </div>

      {/* Timer */}
      <div className="mt-8 bg-zinc-900 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <span className="text-2xl font-mono text-yellow-400">
          {formatTime(timer)}
        </span>

        <div className="flex gap-3">
          <button
            onClick={() => setRunning(true)}
            className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400"
          >
            Start
          </button>
          <button
            onClick={() => setRunning(false)}
            className="px-4 py-2 bg-red-500 text-black rounded-lg hover:bg-red-400"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTimer(0);
            }}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default Back;
