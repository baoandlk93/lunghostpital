import Layout from "@/components/Layout";
import Link from "next/link";

export default function Instruct() {
  const articles = [
    {
      id: 1,
      title:
        "Danh mục Quy trình chuyên môn kỹ thuật thực hiện tại Bệnh viện Lao và Bệnh phổi Khánh Hòa",
      link: "/instruct/1",
    },
    {
      id: 2,
      title: "Quyết định về việc Kiện toàn ban chỉ đạo CCHC",
      link: "/instruct/2",
    },
    {
      id: 3,
      title:
        "Kế hoạch Thực hiện các giải pháp khắc phục những hạn chế, thiếu sót và duy trì, phát huy kết quả đã đạt được từ kết quả CCHC năm 2023 và triển khai các giải pháp cải thiện và nâng cao Chỉ số PARI năm 2024",
      link: "/instruct/3",
    },
    {
      id: 4,
      title: "Kế hoạch kiểm tra CCHC Bệnh viện năm 2024",
      link: "/instruct/4",
    },
    {
      id: 5,
      title: "Kế hoạch công tác CCHC Bệnh viện năm 2024",
      link: "/instruct/5",
    },
    {
      id: 6,
      title: "Danh mục quy chế, quy trình thủ tục điều hành nội bộ",
      link: "/instruct/6",
    },
    {
      id: 7,
      title:
        "Danh mục quy trình, quy định thủ tục giao dịch phục vụ khách hàng",
      link: "/instruct/7",
    },
    {
      id: 8,
      title:
        "Danh mục quy trình chuyên môn nghiệp vụ mang tính thường quy tại Bệnh viện",
      link: "/instruct/8",
    },
    {
      id: 9,
      title: "Kế hoạch tuyên truyền CCHC Bệnh viện năm 2023",
      link: "/instruct/9",
    },
    {
      id: 10,
      title:
        "Quyết định về việc kiện toàn ban chỉ đạo CCHC Bệnh viện năm 2023 và Quy chế hoạt động ban chỉ đạo CCHC",
      link: "/instruct/10",
    },
    {
      id: 11,
      title:
        "Kế hoạch Thực hiện các giải pháp khắc phục những hạn chế, thiếu sót và duy trì, phát huy kết quả đã đạt được từ kết quả CCHC năm 2022 và triển khai các giải pháp cải thiện và nâng cao Chỉ số PARI năm 2023",
      link: "/instruct/11",
    },
    {
      id: 12,
      title:
        "Danh mục các Quy trình, Quy chế thủ tục điều hành nội bộ tại Bệnh viện",
      link: "/instruct/12",
    },
    {
      id: 13,
      title: "Danh mục Quy trình, quy định về chuyên môn kỹ thuật năm 2022",
      link: "/instruct/13",
    },
    {
      id: 14,
      title: "Kế hoạch cải cách hành chính 2022",
      link: "/instruct/14",
    },
    {
      id: 15,
      title:
        "Quy định về việc ưu tiên người bệnh trọng khám chẩn đoán và điều trị",
      link: "/instruct/15",
    },
    {
      id: 16,
      title: "Quy trình tiếp đón và xử lý bệnh nhân cấp cứu",
      link: "/instruct/16",
    },
    {
      id: 17,
      title: "Quy định về việc cứu chữa ngay cho người bệnh cấp cứu",
      link: "/instruct/17",
    },
    {
      id: 18,
      title:
        "Sơ đồ hướng dẫn thủ tục khám bệnh ngoại trú tại Bệnh viện Lao và Bệnh phổi Khánh Hòa (Dành cho bệnh nhân không có BHYT)",
      link: "/instruct/18",
    },
    {
      id: 19,
      title:
        "Sơ đồ hướng dẫn thủ tục khám bệnh ngoại trú tại Bệnh viện Lao và Bệnh phổi Khánh Hòa (Dành cho bệnh nhân BHYT)",
      link: "/instruct/19",
    },
    {
      id: 20,
      title: "Quy định về việc ưu tiên người bệnh trong khám bệnh, chữa bệnh",
      link: "/instruct/20",
    },
  ];
  return (
    <Layout>
      <div className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600 text-center uppercase tracking-wider">
          Danh sách các thủ tục
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex-1 p-5 flex flex-col">
                <Link
                  href={article.link}
                  className="font-semibold text-gray-900 text-lg mb-2"
                >
                  {article.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
