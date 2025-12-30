import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Triceps = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      name: "dumbbell-curl",
      description: "A basic biceps exercise performed by curling dumbbells upward while standing or seated.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995894/DB_PREA_CURL_dcrd9q.gif",
      repetition: "16 × 3 sets or up to failure",
    },
     {
      name: "Rope Curl",
      description: "Performed using a rope attachment on a cable machine, curling the rope upward while keeping elbows close.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995889/rope-curl_lu7tiv.gif",
      repetition: "20 × 3 sets",
    },
     {
      name: "Seated-Zottman-Curl",
      description: "A curl where you lift the dumbbells with palms facing up and lower them with palms facing down.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766995893/Seated-Zottman-Curl_vomgng.gif",
      repetition: "20 × 3 sets",
    },
     {
      name: "High-Cable-Single-Arm-Bicep-Curl",
      description: "Done using a cable pulley set high, curling one arm toward your head.",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766995889/High-Cable-Single-Arm-Bicep-Curl_pax3zi.gif",
      repetition: "20 × 3 sets",
    },
   
     {
      name: " Incline_Dumbbell_Curls",
      description: "Performed on an incline bench, curling dumbbells while arms hang back.",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766995890/Incline_Dumbbell_Curls_xqhq8a.webp",
      repetition: "20 × 3 sets",
    },
     {
      name: " tríceps-pulley",
      description: "A cable-based triceps exercise where you extend your arms downward using a straight bar or handle.",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766996401/tr%C3%ADceps-pulley_iok1is.gif",
      repetition: "20 × 3 sets",
    },
     {
      name: " push-down",
      description: "Performed by pushing a cable handle downward while keeping elbows fixed at the sides",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766996402/Pushdown_k2ugzk.gif",
      repetition: "20 × 3 sets",
    },
      {
      name: "head over",
      description: "A triceps exercise where the weight is extended overhead using dumbbells or cables.",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766996399/headover2_jyd2ow.gif",
      repetition: "20 × 3 sets",
    },

     {
      name: "seated bar overhead",
      description: "Performed while seated, extending a barbell overhead by straightening the arms.",
      media:  "https://res.cloudinary.com/duyhgge54/image/upload/v1766996401/Seated-EZ-Bar-Overhead-Triceps-Extension_g8izty.gif",
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
            Triceps + Biceps Workout
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

export default Triceps;
