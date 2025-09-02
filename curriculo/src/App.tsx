import React, { useState } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

export default function App() {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentTelefone, setCurrentTelefone] = useState("");
  const [currentLinkedin, setCurrentLinkedin] = useState("");
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentExperience, setCurrentExperience] = useState("");
  const [currentResumo, setCurrentResumo] = useState(""); // 👈 Novo estado

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <FormSection
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
          currentTelefone={currentTelefone}
          setCurrentTelefone={setCurrentTelefone}
          currentLinkedin={currentLinkedin}
          setCurrentLinkedin={setCurrentLinkedin}
          currentSkill={currentSkill}
          setCurrentSkill={setCurrentSkill}
          currentExperience={currentExperience}
          setCurrentExperience={setCurrentExperience}
          currentResumo={currentResumo} // 👈 Passando para o FormSection
          setCurrentResumo={setCurrentResumo}
        />
      </div>
      <div style={{ flex: 1 }}>
        <PreviewSection
          name={currentName}
          email={currentEmail}
          phone={currentTelefone}
          linkedin={currentLinkedin}
          skill={currentSkill}
          experience={currentExperience}
          resumo={currentResumo} // 👈 Passando para o preview
        />
      </div>
    </div>
  );
}
