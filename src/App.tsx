import { Routes, Route } from "react-router-dom"
import Layout from './Layout';
import { PSBElement } from "./psb/PSBElement";
const Home = () => {
  return <></>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="psb" element={<PSBElement />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
