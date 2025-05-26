import { NextResponse } from "next/server";

// This is a mock search function. Replace it with your actual search logic
const searchData = async (keyword) => {
  // Mock data - replace this with your actual data source
  const allData = [
    {
      id: 1,
      title: "Khám chữa bệnh phổi",
      description: "Dịch vụ khám và điều trị các bệnh về đường hô hấp và phổi.",
    },
    {
      id: 2,
      title: "Xét nghiệm chức năng hô hấp",
      description: "Dịch vụ kiểm tra và đánh giá chức năng hô hấp.",
    },
    // Add more mock data as needed
  ];

  // Simple search implementation
  return allData.filter(
    (item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase())
  );
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword");

    if (!keyword) {
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    const results = await searchData(keyword);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
