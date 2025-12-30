import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Absforarms = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      name: "leg rises",
      description: "Performed by lifting your legs upward while lying flat or hanging from a bar.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766997032/leg_rise_t9uasb.gif",
      repetition: "16 × 3 sets",
    },
    {
      name: "crunches",
      description: "A basic ab exercise where you lift your upper body toward your knees while lying on your back.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996939/crunches_vaybci.gif",
      repetition: "10 × 3 sets",
    },
    {
      name: "flutter kicks",
      description: "Performed by lying on your back and kicking your legs up and down alternately.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996940/flutter_kicks_hfdtdh.gif",
      repetition: "22 × 3 sets",
    },
    {
      name: "russian twist",
      description: "Done by rotating your torso side to side while seated, holding a weight or bodyweight.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996951/russian_twist_dt9thh.gif",
      repetition: "12 × 3 sets",
    },
    {
      name: "Hanging crunches",
      description: "Performed while hanging from a pull-up bar, lifting your knees or legs upward.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996952/hanging_crunches_wfl1ow.gif",
      repetition: "14 × 3 sets",
    },
    {
      name: "wrist curl bar",
      description: "Performed by curling a barbell upward using only your wrists while seated.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996943/forarm1_cci0ih.gif",
      repetition: "16 × 3 sets",
    },
    {
      name: "arm curl",
      description: "A curl performed with an overhand grip using a barbell or dumbbells.",
      media: "https://res.cloudinary.com/duyhgge54/image/upload/v1766996942/foarm2_sizvxg.gif",
      repetition: "14 × 3 sets",
    },
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  /* TIMER */
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(i);
  }, [running]);

  const formatTime = (t) =>
    `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-sm text-yellow-400 hover:underline"
      >
        ← Back
      </button>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h4 className="mb-3 font-semibold text-lg">Abs & ForArms</h4>

          <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {exercises.map((ex, i) => (
              <li
                key={i}
                onClick={() => setSelectedExercise(ex)}
                className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-sm transition
                  ${
                    selectedExercise.name === ex.name
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
              >
                {ex.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-gray-800 rounded-xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold capitalize mb-4">
            {selectedExercise.name}
          </h2>

          <img
            src={selectedExercise.media}
            alt={selectedExercise.name}
            className="w-full max-w-md mx-auto rounded-lg mb-4 object-contain"
          />

          <p className="text-gray-300 mb-2">
            {selectedExercise.description}
          </p>

          <p className="text-sm">
            <span className="font-semibold text-yellow-400">Reps:</span>{" "}
            {selectedExercise.repetition}
          </p>
        </main>
      </div>

      {/* Timer */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-800 p-4 rounded-xl">
        <span className="text-2xl font-mono">{formatTime(timer)}</span>

        <div className="flex gap-3">
          <button
            onClick={() => setRunning(true)}
            className="px-4 py-2 bg-green-500 text-black rounded-lg text-sm"
          >
            Start
          </button>
          <button
            onClick={() => setRunning(false)}
            className="px-4 py-2 bg-red-500 text-black rounded-lg text-sm"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTimer(0);
            }}
            className="px-4 py-2 bg-gray-600 rounded-lg text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Absforarms;
