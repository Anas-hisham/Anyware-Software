import React, { useState } from "react";

const ExamsTimeSection: React.FC = () => {
  const [examsIllustrationSrc, setExamsIllustrationSrc] = useState<string>(
    "https://img.freepik.com/free-vector/students-taking-exam-with-clipboards_74855-5250.jpg?w=900"
  );

  const handleExamsIllustrationError = () => {
    setExamsIllustrationSrc(
      "https://placehold.co/200x150/E0F7FA/000000?text=Exams+Illustration"
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center justify-between text-center text-left">
      <div className="mb-4 md:mb-0 md:mr-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">EXAMS TIME</h3>
        <p className="text-gray-600 mb-4">
          Here we are, Are you ready to fight? Don't worry, we prepared some
          tips to be ready for your exams.
        </p>
        <p className="text-gray-500 italic mb-4">
          "Nothing happens until something moves" - Albert Einstein
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
          View exams tips
        </button>
      </div>

      <img
        src={examsIllustrationSrc}
        alt="Exams Illustration"
        className="hidden lg:block w-full md:w-auto max-w-xs rounded-lg mt-4 md:mt-0"
        onError={handleExamsIllustrationError}
      />
    </div>
  );
};

export default ExamsTimeSection;
