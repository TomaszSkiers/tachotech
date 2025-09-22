
const TachografRepairInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Naprawa Tachografu – najważniejsze informacje
      </h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700">
          Naprawa tachografu to <span className="font-semibold">niezwłoczna i obowiązkowa reakcja na każdą usterkę</span>. 
          Nie można jej ignorować ani odkładać.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Kiedy trzeba go naprawić?</h2>
            <p className="text-gray-600">Gdy tylko cokolwiek przestanie działać poprawnie: wyświetlacz, przyciski, gdy pojawią się błędy, albo gdy urządzenie w ogóle nie chce się włączyć.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Kto może naprawiać?</h2>
            <p className="text-gray-600">
              <span className="font-medium">Tylko specjalistyczne warsztaty</span> do tego uprawnione. 
              Zwykły mechanik ani elektryk nie może tego robić. Musi to być serwis z odpowiednimi zezwoleniami.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Co jest najważniejsze?</h2>
            <p className="text-gray-600">
              Każda naprawa <span className="font-medium">kończy się obowiązkowym przeglądem i dostrojeniem (kalibracją)</span> urządzenia. 
              Nawet po wymianie najdrobniejszej części tachograf musi zostać na nowo skalibrowany, aby jego wskazania były wiarygodne. 
              Bez tego jest nielegalny.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Dlaczego to takie ważne?</h2>
            <p className="text-gray-600">
              Bo tylko poprawnie działający tachograf jest Twoim <span className="font-medium">dowodem i alibi</span> podczas kontroli. 
              Jazda z wadliwym lub nielegalnie naprawionym urządzeniem grozi bardzo wysokimi mandatami.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <h3 className="font-semibold text-yellow-800 mb-2">Podsumowanie:</h3>
        <p className="text-yellow-700">
          Awaria? Od razu jedź do <span className="font-medium">autoryzowanego serwisu</span>. Tylko oni mogą naprawić tachograf 
          zgodnie z prawem i wystawić odpowiednie dokumenty. Nie ryzykuj samodzielnych napraw – to się nie opłaca.
        </p>
      </div>
    </div>
  );
};

export default TachografRepairInfo;