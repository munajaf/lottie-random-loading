import { useState } from "react";
import Loading from "./Loading";

import "./styles.css";

export default function App() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      <input
        type="button"
        value="Refresh"
        onClick={() => setRefresh(!refresh)}
      />
      <Loading refresh={refresh} />
    </div>
  );
}
