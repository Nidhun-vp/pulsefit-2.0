import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Leg = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      name: "dumbbell-cossack-squat",
      description: "A deep side-to-side squat where one leg bends while the other stays straight, holding a dumbbell for balance or resistance.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995333/dumbbell-cossack-squat_aonu0m.gif",
      repetition: "14 × 3 sets",
    },
    
     {
      name: "leg-curl-seated",
      description: "Performed on a machine by curling the legs downward while seated.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995521/leg-curl-seated_jblfpa.webp",
      repetition: "14 × 3 sets",
    },
     {
      name: "dumbell walk",
      description: "Holding dumbbells at your sides, walk forward with controlled steps",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995369/dumell-walk_jvt1eu.gif",
      repetition: "20 × 3 sets",
    },
     {
      name: "front-squat",
      description: "A squat variation where the barbell is held at the front of the shoulders while squatting down.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995342/front-squat_wityv7.gif",
      repetition: "20 × 3 sets",
    },
     {
      name: "Leg press",
      description: "Performed on a leg press machine by pushing the platform away using your legs",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995461/leg-press_fcymmt.gif",
      repetition: "20 × 3 sets",
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
            Leg Workout
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

export default Leg;
