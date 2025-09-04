import React from "react";

interface PreviewProps {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  skill: string;
  experience: string;
  resumo: string;
  darkMode: boolean;
}

const PreviewSection: React.FC<PreviewProps> = ({
  name,
  email,
  phone,
  linkedin,
  skill,
  experience,
  resumo,
  darkMode,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md h-fit ${
        darkMode
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center">
          <span className="w-2 h-5 bg-green-600 rounded mr-3"></span>
          Preview do Currículo
        </h2>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Visualização em tempo real
        </p>
      </div>

      <div
        className={`p-6 rounded-lg ${
          darkMode
            ? "bg-gray-700 border border-gray-600"
            : "bg-gray-50 border border-gray-200"
        } transition-colors`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1
            className={`text-2xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {name || "Seu Nome Completo"}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm">
            {email && (
              <span
                className={`flex items-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="mr-1">📧</span>
                {email}
              </span>
            )}
            {phone && (
              <span
                className={`flex items-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="mr-1">📱</span>
                {phone}
              </span>
            )}
            {linkedin && (
              <span
                className={`flex items-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="mr-1">💼</span>
                {linkedin}
              </span>
            )}
          </div>
        </div>

        {/* Resumo Profissional */}
        <div className="mb-6">
          <h3
            className={`font-semibold mb-3 flex items-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="w-2 h-5 bg-blue-600 rounded mr-2"></span>
            Resumo Profissional
          </h3>
          <p
            className={`text-sm ${
              resumo
                ? darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
                : darkMode
                ? "text-gray-500 italic"
                : "text-gray-400 italic"
            }`}
          >
            {resumo || "Seu resumo profissional aparecerá aqui..."}
          </p>
        </div>

        {/* Habilidades */}
        <div className="mb-6">
          <h3
            className={`font-semibold mb-3 flex items-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="w-2 h-5 bg-blue-600 rounded mr-2"></span>
            Habilidades
          </h3>
          <div className="flex flex-wrap gap-2">
            {skill ? (
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  darkMode
                    ? "bg-blue-900 text-blue-200"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {skill}
              </span>
            ) : (
              <p
                className={`text-sm italic ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Suas habilidades aparecerão aqui conforme você adiciona...
              </p>
            )}
          </div>
        </div>

        {/* Experiência Profissional */}
        <div>
          <h3
            className={`font-semibold mb-3 flex items-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="w-2 h-5 bg-blue-600 rounded mr-2"></span>
            Experiência Profissional
          </h3>
          <div className="space-y-3">
            {experience ? (
              <div
                className={`pl-4 border-l-2 ${
                  darkMode ? "border-blue-500" : "border-blue-400"
                }`}
              >
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {experience}
                </p>
              </div>
            ) : (
              <p
                className={`text-sm italic ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Suas experiências profissionais aparecerão aqui conforme você
                adiciona...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
