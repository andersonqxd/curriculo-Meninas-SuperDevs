import React, { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

export default function App() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentExperience, setCurrentExperience] = useState("");

  return (
    <div>
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
  );
}
