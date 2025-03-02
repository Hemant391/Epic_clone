import { useState } from "react";

export default function LiblatyBucket() {
  const [time, setTime] = useState("15:57:46");
  const [date, setDate] = useState("2025-03-02");
  const [comments, setComments] = useState("");

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen text-sm">
      {/* Sidebar Section */}
      <div className="bg-white shadow-md rounded-lg p-3 w-64">
        <h2 className="text-xl font-bold text-gray-700">Favorites</h2>
        <div className="space-y-4">
          {[
            { title: "Staff", items: ["Staff"] },
            { title: "Events", items: ["Code Start", "Code End"] },
            { title: "Documentation", items: ["Level of consciousness"] },
            { title: "Bleeding Assessment Screen", items: ["Fundus", "Lochia or Bleeding"] },
            { title: "Interventions", items: ["Interventions", "Blood Collection without LDA", "ABO"] },
            { title: "Drains", items: ["IVs", "Airways"] }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-pink-400">{section.title}</h3>
              <div className="flex flex-col space-y-2">
                {section.items.map((item, i) => (
                  <a key={i} href="#" className="py-1 px-2 hover:bg-gray-200 rounded transition">{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="col-span-2 space-y-6">
        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-blue-600 text-lg font-semibold mb-4">Code Start (Editing)</h2>
          <div className="space-y-4">
            {[{ label: "Time", value: time, setter: setTime },
              { label: "Date", value: date, setter: setDate },
              { label: "Comments", value: comments, setter: setComments }
            ].map((field, index) => (
              <div key={index} className="flex items-center">
                <label className="w-1/4 text-gray-700">{field.label}:</label>
                <input
                  type={field.label === "Date" ? "date" : "text"}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-3/4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
            <div className="flex justify-end space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Accept</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Cancel</button>
            </div>
          </div>
        </div>

        {/* Account Log Section */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-blue-600 text-lg font-semibold mb-4">Account Log</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Time</th>
                <th className="border border-gray-300 p-2">Action</th>
                <th className="border border-gray-300 p-2">User</th>
              </tr>
            </thead>
            <tbody>
              {[{ time: "15:45:00", action: "Account Checked", user: "Marsh" },
                { time: "15:57:46", action: "Document Upload", user: "Vipin" },
                { time: "15:57:46", action: "Check CTQ", user: "Vipin" },
                { time: "15:57:46", action: "Download MTM", user: "Maan" }
              ].map((log, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{log.time}</td>
                  <td className="border border-gray-300 p-2">{log.action}</td>
                  <td className="border border-gray-300 p-2">{log.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Medications Section */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-pink-400 text-lg font-semibold mb-4">Medications</h2>
        <ul className="list-disc pl-1 text-blue-500 space-y-2 text-sm">
          {["Pitocin (Oxytocin) 30 units",
            "Methergine (Methylergonovine) 0.2 mg",
            "Hemabate (Carboprost) 250 mcg",
            "Cytotec (Misoprostol) 200 mcg"
          ].map((med, index) => (
            <li key={index} className="hover:text-blue-700 transition">
              <a href="#">{med}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
