import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("جاري التحميل...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("مش عارف أوصل للـ backend"));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>حالة الـ backend: {status}</p>
    </div>
  );
}

export default App;