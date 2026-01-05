import React from "react";
import useFetch from "../hooks/useFetch";

export default function DataDisplayComponent({ url }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { data, loading, error } = useFetch(BASE_URL + url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
