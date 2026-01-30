import React, { useState } from "react";
import PlaceSearch from "../src/components/About"
// ⚠️ Your API Key — visible to anyone (for testing only)
const API_KEY = "AIzaSyCDprEQZ6vWjnAr4EN1bOnDjrqOhfv_FQU";

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper: label scores as Good / Needs Improvement / Poor
  const grade = (score) => {
    if (score >= 0.9) return { text: "Good ✅", color: "green" };
    if (score >= 0.5) return { text: "Needs Improvement ⚠️", color: "#e6a700" };
    return { text: "Poor ❌", color: "red" };
  };

  // Extract only useful PSI info
  const parseUsefulInfo = (data) => {
    const lr = data.lighthouseResult;
    const perf = lr.categories.performance.score;
    const audits = lr.audits;

    return {
      performance: perf,
      metrics: {
        LCP: audits["largest-contentful-paint"].displayValue,
        FCP: audits["first-contentful-paint"].displayValue,
        CLS: audits["cumulative-layout-shift"].displayValue,
        TBT: audits["total-blocking-time"].displayValue,
      },
      issues: [
        audits["render-blocking-resources"],
        audits["unused-javascript"],
        audits["offscreen-images"],
        audits["server-response-time"],
      ]
        .filter((a) => a && a.score !== 1 && a.score !== null)
        .map((a) => ({
          title: a.title,
          desc: a.description || "",
          display: a.displayValue || "",
        })),
    };
  };

  const checkPageSpeed = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${API_KEY}&strategy=mobile`;

      const res = await fetch(apiUrl);
      const json = await res.json();

      if (json.error) throw new Error(json.error.message);
      setResult(parseUsefulInfo(json));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.title}>🔍 Website Health Checker (Google PageSpeed)</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter website URL (e.g. https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={checkPageSpeed} style={styles.button} disabled={loading}>
          {loading ? "Checking..." : "Check Speed"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {result && (
        <div style={styles.card}>
          <h2>Overall Performance</h2>
          <p style={{ fontSize: "22px", color: grade(result.performance).color }}>
            {Math.round(result.performance * 100)} / 100 — {grade(result.performance).text}
          </p>

          <h3 style={{ marginTop: 20 }}>📊 Core Metrics</h3>
          <ul>
            <li>Largest Contentful Paint (LCP): {result.metrics.LCP}</li>
            <li>First Contentful Paint (FCP): {result.metrics.FCP}</li>
            <li>Cumulative Layout Shift (CLS): {result.metrics.CLS}</li>
            <li>Total Blocking Time (TBT): {result.metrics.TBT}</li>
          </ul>

          {result.issues.length > 0 && (
            <>
              <h3 style={{ marginTop: 20 }}>⚠️ Issues Found</h3>
              <ul>
                {result.issues.map((i, idx) => (
                  <li key={idx}>
                    <strong>{i.title}</strong> — {i.display}
                    <br />
                    <small style={{ color: "#555" }}>{i.desc}</small>
                  </li>
                ))}
              </ul>
            </>
          )}

          {result.issues.length === 0 && (
            <p style={{ color: "green" }}>✅ No major performance issues detected!</p>
          )}
        </div>
      )}

    </div>
    <PlaceSearch  />
    </>
  );
};

// Simple inline styles
const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    padding: 20,
    maxWidth: 800,
    margin: "auto",
  },
  title: { fontSize: 22, fontWeight: 600, marginBottom: 20 },
  inputBox: { display: "flex", gap: 10, marginBottom: 20 },
  input: {
    flex: 1,
    padding: "10px 14px",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    padding: "10px 18px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#1f6feb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  card: {
    background: "#fafafa",
    padding: 20,
    borderRadius: 10,
    border: "1px solid #ddd",
  },
};

export default App;
