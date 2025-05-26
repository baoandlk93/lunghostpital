"use client";
import Layout from "../../components/Layout";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!keyword) {
        setResults([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Replace this with your actual API endpoint
        const response = await fetch(
          `/api/search?keyword=${encodeURIComponent(keyword)}`
        );
        if (!response.ok) throw new Error("Failed to fetch results");
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">
          Kết quả tìm kiếm cho: <span className="text-teal-700">{keyword}</span>
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-700"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result) => (
              <div key={result.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Không tìm thấy kết quả nào cho &quot;{keyword}&quot;
          </div>
        )}
      </div>
    </Layout>
  );
}
