
export default function Sidebar() {
  return (
    <div className=" h-screen bg-blue-600 text-white py-5 shadow-md flex flex-col items-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img className="w-20 h-20 border-4 border-white rounded-full" src="./doc.png" alt="Profile" />
        <p className="mt-3 text-lg font-semibold">Zeller Til</p>
        <p className="text-sm opacity-80"><span className="font-medium">DOB:</span> 02/10/2001</p>
        <p className="text-sm opacity-80"><span className="font-medium">Admit:</span> 20/02/2024</p>
        <p className="text-sm opacity-80"><span className="font-medium">Dischare:</span> 21/02/2024</p>
        <p className="mt-2 text-sm">Ciner Slide</p>
      </div>

      {/* Allergies Section */}
      <div className="w-full bg-blue-500 p-3 rounded-md mb-4">
        <p className="text-sm font-bold">ALLERGIES</p>
        <p className="text-sm opacity-80">Codeine, Penicillins</p>
      </div>

      {/* DOS Section */}
      <div className="w-full bg-blue-500 p-3 rounded-md">
        <p className="text-sm font-bold">DOS</p>
        <p className="text-sm opacity-80">20/02/2024</p>
      </div>
    </div>
  );
}

