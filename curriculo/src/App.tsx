import { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

export default function App() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentExperience, setCurrentExperience] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <FormSection
          currentSkill={currentSkill}
          setCurrentSkill={setCurrentSkill}
          currentExperience={currentExperience}
          setCurrentExperience={setCurrentExperience}
        />
        <PreviewSection
          currentSkill={currentSkill}
          currentExperience={currentExperience}
        />
      </div>
    </div>
  );
}
