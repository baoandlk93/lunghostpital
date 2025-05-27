"use client";
import Layout from "../../components/Layout";
import { Sidebar } from "primereact/sidebar";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
export default function Booking() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    bhyt: "",
    address: "",
    date: "",
    gender: "",
  });
  const onSubmit = () => {
    console.log(value);
  };

  return (
    <Layout>
      <BreadCrumb
        model={[
          { label: "Trang chủ", url: "/" },
          { label: "Đặt lịch khám", url: "/booking" },
          { label: "Hướng dẫn đặt lịch" },
        ]}
      />
      <div className="flex justify-center gap-2 p-4 border border-gray-200 rounded">
        <div className="flex flex-col gap-2 justify-start">
          <h1 className="text-2xl font-bold">
            Hướng dẫn đặt lịch khám chữa bệnh
          </h1>
          <p>- Thời gian nhận đặt lịch: Từ Thứ hai đến Thứ sáu:</p>
          <p>
            <span className="font-bold">Buổi sáng:</span> 07h00 - 11h30p
          </p>
          <p>
            <span className="font-bold">Buổi chiều:</span> 13h00 - 16h30
          </p>
          <h2 className="text-xl font-bold">
            1. Đặt lịch khám qua điện thoại:
          </h2>
          <p>
            <span className="font-bold">Bước 1:</span> Gọi điện đặt khám qua số
            điện thoại Phòng khám: 02583.830.341
          </p>
          <p>
            <span className="font-bold">Bước 2:</span> Nhân viên Bệnh viện tư
            vấn, hẹn lịch khám.
          </p>
          <h2 className="text-xl font-bold">2. Đặt lịch khám trên website:</h2>
          <p>
            <span className="font-bold">Bước 1:</span> Đặt khám trực tuyến qua
            website của Bệnh viện{" "}
            <Button
              label="Tại đây"
              text
              size="small"
              onClick={() => setVisible(true)}
              className="p-button-success"
            />
          </p>
          <p>
            <span className="font-bold">Bước 2:</span> Điền đầy đủ thông tin
            theo mẫu hướng dẫn và đăng ký đặt lịch.
          </p>
          <p>
            <span className="font-bold">Bước 3:</span> Bệnh viện sẽ liên hệ qua
            số điện thoại đã đăng ký và thông báo tới Quý khách.
          </p>
          <h2 className="text-xl font-bold">Lưu ý:</h2>
          <p>Khi đi mang theo:</p>
          <ul className="list-disc">
            <li>Thẻ BHYT.</li>
            <li>Sổ khám bệnh.</li>
            <li>Căn cước công dân</li>
            <li>Giấy chuyển tuyến nếu có</li>
            <li>Và các giấy tờ liên quan</li>
          </ul>
        </div>
      </div>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="left"
        className="gap-4"
      >
        <h2 className="text-xl font-bold">Đặt lịch khám chữa bệnh</h2>
        <FloatLabel className="m-1">
          <InputText
            id="name"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
          <label htmlFor="name">
            Họ và tên <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <FloatLabel className="m-1">
          <InputText
            id="phone"
            value={value.phone}
            onChange={(e) => setValue({ ...value, phone: e.target.value })}
          />
          <label htmlFor="phone">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <FloatLabel className="m-1">
          <InputText
            id="bhyt"
            value={value.bhyt}
            onChange={(e) => setValue({ ...value, bhyt: e.target.value })}
          />
          <label htmlFor="bhyt">
            BHYT <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <FloatLabel className="m-1">
          <InputText
            id="address"
            value={value.address}
            onChange={(e) => setValue({ ...value, address: e.target.value })}
          />
          <label htmlFor="address">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <FloatLabel className="m-1">
          <Calendar
            id="date"
            value={value.date}
            onChange={(e) => setValue({ ...value, date: e.value })}
          />
          <label htmlFor="date">
            Ngày sinh <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <FloatLabel className="m-1">
          <InputText
            id="gender"
            value={value.gender}
            onChange={(e) => setValue({ ...value, gender: e.target.value })}
          />
          <label htmlFor="gender">
            Giới tính <span className="text-red-500">*</span>
          </label>
        </FloatLabel>
        <Button label="Đặt lịch" onClick={onSubmit} />
      </Sidebar>
    </Layout>
  );
}
