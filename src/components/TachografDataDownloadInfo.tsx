const TachografDataDownloadInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Pobieranie Danych z Tachografu
      </h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700">
          To <span className="font-semibold">obowiązkowy proces</span> regularnego ściągania zapisów z tachografu - 
          zarówno przez kierowcę, jak i firmę transportową.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Obowiązek kierowcy</h2>
            <p className="text-gray-600">Pobieraj swoje dane <span className="font-medium">co najmniej raz na 28 dni</span>.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Obowiązek firmy</h2>
            <p className="text-gray-600">Pobieraj dane wszystkich kierowców <span className="font-medium">co najmniej raz na 90 dni</span>.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Przechowywanie</h2>
            <p className="text-gray-600">Przechowuj dane przez <span className="font-medium">12 miesięcy</span> i udostępniaj na żądanie kontroli.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Twoje alibi</h2>
            <p className="text-gray-600">Dane są dowodem przestrzegania przepisów czasu pracy i jazdy.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-800 mb-2">Gdzie pobierać dane?</h3>
        <p className="text-gray-700 mb-3">
          Aby mieć <span className="font-medium text-blue-800">pewność poprawnego pobrania i przechowania danych</span>, 
          skorzystaj z usług <span className="font-medium text-blue-800">autoryzowanego serwisu obsługi tachografów</span>.
        </p>
        <p className="text-gray-700">
          Profesjonalny serwis nie tylko prawidłowo pobierze Twoje dane, ale również 
          <span className="font-medium text-blue-800"> zapewni ich bezpieczne archiwizowanie</span> oraz 
          <span className="font-medium text-blue-800"> pomoże w interpretacji</span> w przypadku kontroli.
        </p>
      </div>
    </div>
  );
}
export default TachografDataDownloadInfo