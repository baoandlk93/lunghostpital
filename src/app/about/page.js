import React from "react";
import Layout from "@/components/Layout";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
export default function About() {
  return (
    <Layout>
      <BreadCrumb
        model={[
          { label: "Trang chủ", url: "/" },
          { label: "Giới thiệu", url: "/about" },
        ]}
      />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-16">Giới thiệu</h1>
        <p className="text-start px-32 mb-4">
          Bệnh viện Lao và Bệnh Phổi Khánh Hòa được thành lập và đi vào hoạt
          động từ tháng 6 năm 2000 với quy mô 50 giường bệnh nội trú, 42 nhân
          sự, trang thiết bị còn rất đơn sơ. Trải qua 24 năm hình thành và phát
          triển, nhờ sự nỗ lực phấn đấu của tập thể, đặc biệt là sự quan tâm,
          lãnh đạo, chỉ đạo, hỗ trợ của UBND tỉnh và các sở, ban, ngành, đến
          nay, Bệnh viện đã có quy mô 150 giường bệnh với 03 khoa lâm sàng, 01
          khoa Dược-CLS-CNK và 04 phòng chức năng.
        </p>
        <p className="text-start px-32 mb-4">
          Không chỉ vậy, đơn vị đã dần có đầy đủ trang thiết bị hiện đại như:
          Máy giúp thở, Monitor theo dõi bệnh nhân, máy nội soi phế quản, máy đo
          chức năng hô hấp,… Đồng thời, được hỗ trợ nhiều trang thiết bị y tế từ
          nguồn lực Chương trình chống lao Quốc gia gồm máy xét nghiệm lao và
          lao kháng thuốc bằng phương pháp sinh học phân tử hiện đại nhất hiện
          nay (Gene Xpert), máy nuôi cấy MGIT 960, máy X - quang cố định, máy X
          - quang di động, xe chụp phim X - quang kỹ thuật số lưu động, kính
          hiển vi sinh học huỳnh quang,… “Hàng năm, Bệnh viện đã phát hiện, chẩn
          đoán và điều trị khỏi cho khoảng 1.500 bệnh nhân trong toàn tỉnh.
        </p>
        <p className="text-start px-32 mb-4">
          Trong 6 tháng đầu năm 2024, số lượt khám bệnh 16.818 lượt, đạt 156,4%
          so với kế hoạch và tăng 10% so với cùng kỳ; tổng số bệnh nhân lao quản
          lý đạt 196,0% so với kế hoạch giao, tăng 34,0% so với cùng kỳ; tỷ lệ
          khỏi và hoàn thành điều trị đạt so với kế hoạch của Chương trình Chống
          lao Quốc gia, tăng 8,1% so với cùng kỳ. Chương trình Chống lao tỉnh đã
          và đang thực hiện tốt các hoạt động phòng, chống lao theo chỉ đạo của
          Chương trình Chống lao Quốc gia.
        </p>
      </div>
      <Divider />
      <div className="card flex justify-content-center gap-4 items-start justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Cơ cấu tổ chức</h2>
          <a href="/about/organizational-structure" className="text-blue-500">
            Xem chi tiết
          </a>
        </div>
        <Divider layout="vertical" />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Khoa phòng</h2>
          <ul>
            <li>
              <Link href="/about/lao-ho-hap" className="text-blue-500">
                Khoa lao hô hấp
              </Link>
            </li>
            <li>
              <Link href="/about/laonhaophoi" className="text-blue-500">
                Khoa lao ngoài phổi và bệnh phổi
              </Link>
            </li>
            <li>
              <Link href="/about/khamsucrecapcuu" className="text-blue-500">
                Khoa khám hồi sức cấp cứu
              </Link>
            </li>
            <li>
              <Link href="/about/duoccls" className="text-blue-500">
                Khoa Dược - CLS
              </Link>
            </li>
            <li>
              <Link
                href="/about/ketoanthanhnhachuyen"
                className="text-blue-500"
              >
                Phòng Kế hoạch tổng hợp - Chỉ đạo tuyến
              </Link>
            </li>
            <li>
              <Link href="/about/dieuduong" className="text-blue-500">
                Phòng Điều dưỡng - Dinh dưỡng - KSNK
              </Link>
            </li>
            <li>
              <Link href="/about/totuchoihanachuyen" className="text-blue-500">
                Phòng Tổ chức hành chính
              </Link>
            </li>
            <li>
              <Link href="/about/taike" className="text-blue-500">
                Phòng Tài chính kế toán
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
