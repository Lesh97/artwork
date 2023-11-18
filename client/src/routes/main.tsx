import { BrowserRouter, Route } from "react-router-dom";
import YeonJoo from "./joo";
import JaeJung from "./jung";
import Yena from "./na";

function main() {
  return (
    <>
      <BrowserRouter>
        <Route>
          <Route path="/joo" element={<YeonJoo />} />
          <Route path="/jung" element={<JaeJung />}></Route>
          <Route path="/na" element={<Yena />} />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default main;
