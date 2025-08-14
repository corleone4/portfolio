import { Route, Routes } from "react-router-dom";
import ScrollLinked from "./components/ScrollLinked";
import ProjectDetail from "./ProjectsDetail";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<ScrollLinked />} />
      <Route path="/projeto/:id" element={<ProjectDetail />} />
    </Routes>)
    ;
}
