import { Navigate, Route, Routes } from "react-router-dom";
import JobBoard from "./pages/JobBoard";
import JobDetails from "./pages/JobDetails";

function App() {
  console.log(window.location.href);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs" element={<Navigate to="/jobs/1" replace />} />
        <Route path="/jobs/:pageNumber" element={<JobBoard />} />
        <Route
          path="/jobs/:pageNumber/details-:jobId"
          element={<JobDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
