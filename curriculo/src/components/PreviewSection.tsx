import React from "react";

interface PreviewProps {
  currentSkill: string;
  currentExperience: string;
}

const PreviewSection: React.FC<PreviewProps> = ({
  currentSkill,
  currentExperience,
}) => {
  return (
    <div>
      <h2>Nome do Candidato</h2>
      <p>Email • Telefone • LinkedIn</p>

      <h3>Habilidades</h3>
      <ul>
        {currentSkill && <li>{currentSkill}</li>}
      </ul>

      <h3>Experiência</h3>
      <ul>
        {currentExperience && <li>{currentExperience}</li>}
      </ul>
    </div>
  );
};

export default PreviewSection;
