"use client";
import Layout from "../../components/Layout";
import { useSearchParams } from "next/navigation";
export default function Search() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">
          Kết quả tìm kiếm cho: <span className="text-teal-700">{keyword}</span>
        </h2>
      </div>
    </Layout>
  );
}
