import React from "react";

export default function PersonalInfoForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-lg font-semibold border-b pb-2 mb-2">
        Informações Pessoais
      </h2>

      <input
        type="text"
        placeholder="Nome completo"
        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      />

      <input
        type="tel"
        placeholder="Telefone"
        className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      />

      <textarea
        placeholder="Resumo profissional"
        rows={3}
        className="w-full p-2 border rounded-lg resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
      />
    </form>
  );
}
