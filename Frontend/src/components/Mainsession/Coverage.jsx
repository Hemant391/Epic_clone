 export default function Coverage() {
            const patient = {
              name: "John Doe",
              age: 35,
              bloodGroup: "O+",
              location: "New York, USA",
              guardian: "Jane Doe (Mother)",
              coverage: {
                insurance: "Blue Shield Health",
                policyNumber: "BSH12345678",
                validity: "2025-12-31"
              },
              services: [
                { doctor: "Dr. Smith", service: "General Checkup", date: "2025-02-15" },
                { doctor: "Dr. Emily Watson", service: "Cardiology Consultation", date: "2025-02-20" },
                { doctor: "Dr. Robert Brown", service: "Dental Cleaning", date: "2025-03-01" }
              ]
            };
          
            return (
              <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-300 mt-6">
                <h2 className="text-blue-700 text-xl font-bold mb-4">Patient Information</h2>
                
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4 text-gray-800">
                  <p><span className="font-semibold">Name:</span> {patient.name}</p>
                  <p><span className="font-semibold">Age:</span> {patient.age}</p>
                  <p><span className="font-semibold">Blood Group:</span> {patient.bloodGroup}</p>
                  <p><span className="font-semibold">Location:</span> {patient.location}</p>
                  <p><span className="font-semibold">Guardian:</span> {patient.guardian}</p>
                </div>
                
                {/* Coverage Info */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-blue-600 font-semibold">Coverage Information</h3>
                  <p><span className="font-semibold">Insurance:</span> {patient.coverage.insurance}</p>
                  <p><span className="font-semibold">Policy No:</span> {patient.coverage.policyNumber}</p>
                  <p><span className="font-semibold">Valid Until:</span> {patient.coverage.validity}</p>
                </div>
                
                {/* Services */}
                <div className="mt-4">
                  <h3 className="text-blue-600 font-semibold">Services Received</h3>
                  <table className="w-full border-collapse mt-2 text-gray-800">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2">Doctor</th>
                        <th className="border border-gray-300 p-2">Service</th>
                        <th className="border border-gray-300 p-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patient.services.map((service, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-2">{service.doctor}</td>
                          <td className="border border-gray-300 p-2">{service.service}</td>
                          <td className="border border-gray-300 p-2">{service.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
          