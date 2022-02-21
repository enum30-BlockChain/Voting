import MainLayout from "./layout";

import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {
  const customization = useSelector((state) => state.customization);
  return (
    <>
      <Provider theme={customization}>
        <Routes>
          <Route path="/*" element={<MainLayout />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
