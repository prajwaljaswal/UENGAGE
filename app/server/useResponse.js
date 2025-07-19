// hooks/useCardFetch.js
"use client";

import { useEffect, useState } from "react";
import axiosInstance from ".";

const useResponse = (endpoints = []) => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const requests = endpoints.map((url) => axiosInstance.get(url));
        const results = await Promise.all(requests);
        setResponses(results.map((res) => res.data));
      } catch (err) {
        setError(err);
      } finally {   
        setLoading(false);
      }
    };

    if (endpoints.length > 0) {
      fetchAll();
    }
  }, [JSON.stringify(endpoints)]);

  return { responses, loading, error };
};

export default useResponse;
