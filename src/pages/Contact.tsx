
const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Skontaktuj się z nami</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Imię i nazwisko
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Jan Kowalski"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Adres e-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="jan.kowalski@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Wiadomość
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Wpisz swoją wiadomość..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
};

export default Contact;
