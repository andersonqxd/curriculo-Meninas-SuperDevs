export default function PersonalInfoForm() {
  return (
    <form className="personal-info-form mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Dados Pessoais
      </h2>
      <div className="form-group mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome completo"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
        />
      </div>
    </form>
  );
}
