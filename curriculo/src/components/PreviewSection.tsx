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
    <div className="w-full lg:w-3/5">
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Nome do Candidato
          </h1>
          <p className="text-gray-600 text-sm">Email • Telefone • LinkedIn</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Habilidades
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentSkill && (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm border border-gray-300">
                {currentSkill}
              </span>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Experiência
          </h3>
          <div className="space-y-4">
            {currentExperience && (
              <div className="pl-4 border-l-4 border-gray-300">
                <p className="text-gray-700">{currentExperience}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
