import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chest = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      name: "Decline Push-ups",
      description: "A push-up variation where your feet are elevated on a bench, increasing difficulty.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993886/decline-pushup_xmbyp9.gif",
      repetition: "20 × 3 sets",
    },
    {
      name: "Dumbell bench press",
      description: "Performed by pressing dumbbells up while lying on a bench. Each arm works independently.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993898/dumbell-bench-press_lrc7bo.gif",
      repetition: "12 × 3 sets",
    },
    {
      name: "Incline Push-ups",
      description: "An incline push-up is a variation of the standard push-up where your hands are placed on an elevated surface like a bench or box.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993872/push-incline_nvluk8.gif",
      repetition: "23 × 3 sets",
    },
    {
      name: "Incline barbell press",
      description: "A machine exercise where you bring your arms together in a hugging motion.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993847/1incline-barbell-press_jnwuek.gif",
      repetition: "12 × 3 sets",
    },
    {
      name: "Butterfly press",
      description: "Performed by lowering dumbbells out wide and bringing them together above the chest.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766994209/chest-butter-fly_m0gl0a.gif",
      repetition: "14 × 3 sets",
    },
    {
      name: "Fly",
      description: "Exercise where you bring your arms together in a hugging motion",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993878/fly_homdga.gif",
      repetition: "16 × 3 sets",
    },
    {
      name: "Cross-over",
      description: "This exercise is done using cable machines where you pull the handles across your body.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993852/cross-over_vsiet6.webp",
      repetition: "14 × 3 sets",
    },
    {
      name: "flat Bench press",
      description: "A classic chest exercise done on a flat bench by pressing a barbell upward.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766993850/barbell-press_miqq3e.gif",
      repetition: "14 × 3 sets",
    },
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  /* TIMER */
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
        className="mb-4 text-yellow-400 hover:text-yellow-300"
      >
        ← Back
      </button>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-zinc-900 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            Chest Workout
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

export default Chest;
