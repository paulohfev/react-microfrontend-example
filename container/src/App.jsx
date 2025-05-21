import React, { Suspense } from "react";

const RemoteHello = React.lazy(() => import("remote1/Hello"));

const App = () => {
  return (
    <div>
      <h1>Container App 🧩</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteHello />
      </Suspense>
    </div>
  );
};

export default App;
