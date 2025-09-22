const TachografCalibrationInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Kalibracja Tachografu Cyfrowego
      </h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700">
          Kalibracja to po prostu <span className="font-semibold">"dostrojenie"</span> tachografu do Twojej ciężarówki, 
          żeby dokładnie pokazywał, ile jeździsz.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Obowiązkowa</h2>
            <p className="text-gray-600">Prawo wymaga kalibracji tachografu.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Okresowa</h2>
            <p className="text-gray-600">Należy ją wykonywać co <span className="font-medium">2 lata</span> (jak przegląd techniczny).</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Po awarii lub zmianach</h2>
            <p className="text-gray-600">Wymagana po wymianie kół, czujnika, skrzyni biegów lub samego tachografu.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Tylko w autoryzowanym serwisie</h2>
            <p className="text-gray-600">Nie zrobisz tego sam! Musi to wykonać warsztat ze specjalnym sprzętem.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Dlaczego to ważne?</h3>
        <p className="text-gray-700">
          Kalibracja zapewnia, że Twoje karty i dane pokazują <span className="font-medium">prawdziwy</span> czas jazdy i przejechane kilometry. 
          To Twoje alibi i dowód, że jeździsz zgodnie z prawem.
        </p>
      </div>
    </div>
  );
}
export default TachografCalibrationInfo