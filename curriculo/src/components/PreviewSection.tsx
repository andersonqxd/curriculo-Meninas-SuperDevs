import React from "react";

interface PreviewProps {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  skill: string;
  experience: string;
  resumo: string; // 👈 Novo
}

const PreviewSection: React.FC<PreviewProps> = ({
  name,
  email,
  phone,
  linkedin,
  skill,
  experience,
  resumo,
}) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h1>{name || "Nome do Candidato"}</h1>
      <p>
        {email || "email@exemplo.com"} • {phone || "(00) 00000-0000"} •{" "}
        {linkedin || "linkedin.com/in/seunome"}
      </p>

      <h2>Resumo Profissional</h2>
      <p>{resumo || "Seu resumo aparecerá aqui..."}</p>

      <h2>Habilidades</h2>
      <p>{skill || "Nenhuma habilidade adicionada"}</p>

      <h2>Experiência</h2>
      <p>{experience || "Nenhuma experiência adicionada"}</p>
    </div>
  );
};

export default PreviewSection;
