import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const fakeAppointments = [
  {
    category: "Admit/Transfer/Discharge",
    records: [
      {
        date: "02/27/2023 03:10 EST",
        physician: "Dr. Arun Sheth",
        order: "Resuscitation Status (Code Status)",
        status: "Discontinued",
        details: "Start Date: 02/27/23 3:10 EST",
      },
    ],
  },
  {
    category: "Diet",
    records: [
      {
        date: "07/16/2023 17:25 EDT",
        physician: "Dr. Hemant Gupta",
        order: "Cardiac Diet",
        status: "Discontinued",
        details: "No caffeine, Start Date: 07/16/23 17:25 EDT",
      },
    ],
  },
  {
    category: "Nursing Orders",
    records: [
      {
        date: "11/11/2023 15:53 EST",
        physician: "Dr. Hemant Gupta",
        order: "Communication Order (PACU ONLY-Vital Signs)",
        status: "Discontinued",
        details: "Start Date: 11/11/23 15:53 EST",
      },
      {
        date: "09/18/2023 15:39 EDT",
        physician: "SYSTEM",
        order: "Smoking Cessation Instruction",
        status: "Completed",
        details: "Start Date: 09/18/23 15:39 EDT",
      },
    ],
  },
];

export default function AppointmentHistory() {
  const [openCategory, setOpenCategory] = useState(2);

  return (
    <div className=" text-white p-6 rounded-lg  w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Appointment History</h2>
      <div className="space-y-3">
        {fakeAppointments.map((section, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg">
            <div
              className="flex justify-between items-center cursor-pointer p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={() =>
                setOpenCategory(openCategory === index ? null : index)
              }
            >
              <h3 className="font-semibold text-pink-400">{section.category}</h3>
              <span>{openCategory === index ? "▼" : "►"}</span>
            </div>
            {openCategory === index && (
              <table className="w-full mt-2 text-sm text-gray-300">
                <thead className="text-gray-400 border-b border-gray-600">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Physician</th>
                    <th className="p-2">Order</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {section.records.map((record, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-700 hover:bg-gray-700"
                    >
                      <td className="p-2">{record.date}</td>
                      <td className="p-2">{record.physician}</td>
                      <td className="p-2 text-blue-300 cursor-pointer hover:underline">
                        {record.order}
                      </td>
                      <td className="p-2 flex items-center space-x-1">
                        {record.status === "Completed" && (
                          <FaCheckCircle className="text-green-400" />
                        )}
                        {record.status === "Discontinued" && (
                          <FaTimesCircle className="text-red-400" />
                        )}
                        {record.status === "Ordered" && (
                          <FaClock className="text-yellow-400" />
                        )}
                        <span>{record.status}</span>
                      </td>
                      <td className="p-2 text-gray-400">{record.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}