import React from "react";

interface FormProps {
  currentSkill: string;
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
  currentExperience: string;
  setCurrentExperience: React.Dispatch<React.SetStateAction<string>>;
}

const FormSection: React.FC<FormProps> = ({
  currentSkill,
  setCurrentSkill,
  currentExperience,
  setCurrentExperience,
}) => {
  return (
    <div>
      <h2>Dados Pessoais</h2>
      <label>Nome</label>
      <input type="text" placeholder="Seu nome completo" />

      <h2>Habilidades</h2>
      <input
        type="text"
        value={currentSkill}
        onChange={(e) => setCurrentSkill(e.target.value)}
        placeholder="Digite uma habilidade"
      />

      <h2>Experiência Profissional</h2>
      <input
        type="text"
        value={currentExperience}
        onChange={(e) => setCurrentExperience(e.target.value)}
        placeholder="Digite uma experiência"
      />
    </div>
  );
};

export default FormSection;
