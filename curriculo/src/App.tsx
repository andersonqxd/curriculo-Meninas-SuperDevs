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
  const [currentResumo, setCurrentResumo] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      <div
        className={`px-6 py-4 ${
          darkMode
            ? "bg-gray-800 border-b border-gray-700"
            : "bg-white border-b border-gray-200"
        } shadow-md`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-blue-600 mr-2">📝</span>
              Gerador de Currículos AI
            </h1>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } mt-1`}
            >
              Gerador Inteligente de Currículos com IA
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Input API Key */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cole sua API Key"
                className={`w-48 px-4 py-2 rounded-lg border transition-colors text-sm ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
                title="Cole sua chave API aqui"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔑
              </span>
            </div>

            {/* Botão Exportar PDF */}
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                darkMode
                  ? "bg-blue-700 text-white hover:bg-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled
              title="Exportar PDF - Funcionalidade em desenvolvimento"
            >
              <span>📄</span>
              <span className="text-sm">Exportar PDF</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                darkMode
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600 border border-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
              }`}
              style={{ width: "40px", height: "40px" }}
              title={darkMode ? "Modo claro" : "Modo escuro"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          className={`mb-8 p-6 rounded-lg ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          } shadow-sm`}
        >
          <h2 className="text-xl font-semibold mb-2">
            Informações do Currículo
          </h2>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Preencha os dados e veja o preview em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            currentResumo={currentResumo}
            setCurrentResumo={setCurrentResumo}
            darkMode={darkMode}
          />

          <PreviewSection
            name={currentName}
            email={currentEmail}
            phone={currentTelefone}
            linkedin={currentLinkedin}
            skill={currentSkill}
            experience={currentExperience}
            resumo={currentResumo}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}
