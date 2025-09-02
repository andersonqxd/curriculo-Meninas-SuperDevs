import React from "react";

interface FormProps {
  currentName: string;
  setCurrentName: React.Dispatch<React.SetStateAction<string>>;
  currentEmail: string;
  setCurrentEmail: React.Dispatch<React.SetStateAction<string>>;
  currentTelefone: string;
  setCurrentTelefone: React.Dispatch<React.SetStateAction<string>>;
  currentLinkedin: string;
  setCurrentLinkedin: React.Dispatch<React.SetStateAction<string>>;
  currentSkill: string;
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
  currentExperience: string;
  setCurrentExperience: React.Dispatch<React.SetStateAction<string>>;
  currentResumo: string; // 👈 Novo
  setCurrentResumo: React.Dispatch<React.SetStateAction<string>>; // 👈 Novo
}

const FormSection: React.FC<FormProps> = ({
  currentName,
  setCurrentName,
  currentEmail,
  setCurrentEmail,
  currentTelefone,
  setCurrentTelefone,
  currentLinkedin,
  setCurrentLinkedin,
  currentSkill,
  setCurrentSkill,
  currentExperience,
  setCurrentExperience,
  currentResumo,
  setCurrentResumo,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Dados Pessoais</h2>
      <input
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        placeholder="Seu nome completo"
      />
      <input
        type="email"
        value={currentEmail}
        onChange={(e) => setCurrentEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={currentTelefone}
        onChange={(e) => setCurrentTelefone(e.target.value)}
        placeholder="Telefone"
      />
      <input
        type="text"
        value={currentLinkedin}
        onChange={(e) => setCurrentLinkedin(e.target.value)}
        placeholder="LinkedIn"
      />

      <h2>Resumo Profissional</h2>
      <textarea
        value={currentResumo}
        onChange={(e) => setCurrentResumo(e.target.value)}
        placeholder="Escreva seu resumo profissional"
        rows={4}
      />

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
