import { Link, useLocation } from "react-router-dom";

export default function Topbar() {  
  const location = useLocation();
  const selectedtag = location.pathname.substring(1); 

  return (
    <div className="bg-blue-200 text-black px-6 flex items-center justify-start shadow-md topbarheight">
      <h2 className="text-2xl font-bold text-red-400 px-2 mr-2">EPIC</h2>

      <ul className="flex h-full items-end text-sm ml-32">
        <li><Link to="/dashboard" className={`hover:text-blue-500 border border-l-0 border-t-0 border-r-0 px-1 ${selectedtag === 'dashboard' ? "selecttab" : ""}`}>Dashboard</Link></li>
        <li><Link to="/patients" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'patients' ? "selecttab" : ""}`}>Patients</Link></li>
        <li><Link to="/appointments" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'appointments' ? "selecttab" : ""}`}>Appointments</Link></li>
        <li><Link to="/bucket" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'bucket' ? "selecttab" : ""}`}>Bucket</Link></li>
        <li><Link to="/coverage" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'coverage' ? "selecttab" : ""}`}>Coverage</Link></li>
        <li><Link to="/transition" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'transition' ? "selecttab" : ""}`}>Transition</Link></li>
        <li><Link to="/care-plan" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'care-plan' ? "selecttab" : ""}`}>Care Plan</Link></li>
        <li><Link to="/Work-List" className={`hover:text-blue-500 border border-t-0 px-1 ${selectedtag === 'Work-List' ? "selecttab" : ""}`}>Work List</Link></li>
        <li><Link to="/Dc-Info" className={`hover:text-blue-500 border border-t-0 px-1 border-r-0 ${selectedtag === 'Dc-Info' ? "selecttab" : ""}`}>DC Info</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
        <li><Link to="/Navigators" className={`hover:text-blue-500 border border-t-0 border-r-0 px-1 ${selectedtag === 'Navigators' ? "selecttab" : ""}`}>Navigators</Link></li>
      </ul>
    </div>
  );
}
