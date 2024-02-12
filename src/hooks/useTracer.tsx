import { useState } from "react";
import ApiService from "../app/services/ApiService.js";

const useTracer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const trace = async (params: any) => {
    try {
      // reset variables
      setError(null);
      setResult(null);
      setLoading(false);

      setLoading(true);
      const response = await ApiService.post("/trace-url", params);
      setResult(response);

      // Handle the response as needed
      console.log("Tracer response:", response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { trace, loading, result, error };
};

export default useTracer;
