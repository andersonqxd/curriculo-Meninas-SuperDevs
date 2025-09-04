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
  currentResumo: string;
  setCurrentResumo: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
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
  darkMode,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-200"
      }`}
    >
      {/* Dados Pessoais */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <span className="w-2 h-5 bg-blue-600 rounded mr-3"></span>
            Dados Pessoais
          </h3>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Informações básicas para contato
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Nome Completo *
            </label>
            <input
              type="text"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              placeholder="Seu nome completo"
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email *
            </label>
            <input
              type="email"
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Telefone *
            </label>
            <input
              type="text"
              value={currentTelefone}
              onChange={(e) => setCurrentTelefone(e.target.value)}
              placeholder="(11) 99999-9999"
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              LinkedIn
            </label>
            <input
              type="text"
              value={currentLinkedin}
              onChange={(e) => setCurrentLinkedin(e.target.value)}
              placeholder="linkedin.com/in/seuperfil"
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Resumo Profissional */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <span className="w-2 h-5 bg-blue-600 rounded mr-3"></span>
            Resumo Profissional
          </h3>
        </div>

        <textarea
          value={currentResumo}
          onChange={(e) => setCurrentResumo(e.target.value)}
          placeholder="Escreva seu resumo profissional aqui..."
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          }`}
        />
        <div className="flex justify-between items-center mt-2">
          <span
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {currentResumo.length}/200 caracteres
          </span>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md">
            <span className="flex items-center">
              <span className="mr-2">🤖</span>
              Configurar com IA
            </span>
          </button>
        </div>
      </div>

      {/* Habilidades */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <span className="w-2 h-5 bg-blue-600 rounded mr-3"></span>
            Habilidades
          </h3>
        </div>

        <input
          type="text"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          placeholder="Digite uma habilidade"
          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          }`}
        />
      </div>

      {/* Experiência Profissional */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <span className="w-2 h-5 bg-blue-600 rounded mr-3"></span>
            Experiência Profissional
          </h3>
        </div>

        <input
          type="text"
          value={currentExperience}
          onChange={(e) => setCurrentExperience(e.target.value)}
          placeholder="Digite uma experiência"
          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          }`}
        />
      </div>
    </div>
  );
};

export default FormSection;
