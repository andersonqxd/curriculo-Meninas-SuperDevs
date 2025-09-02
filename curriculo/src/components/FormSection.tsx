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
    <div className="w-full lg:w-2/5 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Dados Pessoais
      </h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-2">Nome</label>
        <input
          type="text"
          placeholder="Seu nome completo"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
        Habilidades
      </h2>

      <div className="mb-4">
        <input
          type="text"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          placeholder="Digite uma habilidade"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
        Experiência Profissional
      </h2>

      <div>
        <input
          type="text"
          value={currentExperience}
          onChange={(e) => setCurrentExperience(e.target.value)}
          placeholder="Digite uma experiência"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default FormSection;
