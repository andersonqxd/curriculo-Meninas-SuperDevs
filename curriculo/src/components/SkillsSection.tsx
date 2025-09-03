import React from "react";

interface SkillsProps {
  currentSkill: string;
  setCurrentSkill: (skill: string) => void;
}

export default function SkillsSection({
  currentSkill,
  setCurrentSkill,
}: SkillsProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b pb-2 mb-2">Habilidades</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite uma habilidade"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        />
        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
