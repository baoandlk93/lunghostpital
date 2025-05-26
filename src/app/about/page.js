import React from "react";
import Layout from "@/components/Layout";

export default function About() {
  const groups = [
    {
      group: "BAN GIÁM ĐỐC BỆNH VIỆN",
      members: [
        {
          name: "BS CK1. Huỳnh Minh Tâm",
          position: "Giám đốc Bệnh viện",
          phone: "02583.838689",
        },
      ],
    },
    {
      group: "CÁC KHOA PHÒNG TRỰC THUỘC",
      subGroups: [
        {
          subGroup: "PHÒNG KHTH-CDT",
          members: [
            {
              name: "ThS.BS. Trần Văn Trung",
              position: "Phó phòng",
              phone: "02583.838010",
            },
            {
              name: "CN. Phan Thị Thường",
              position: "Phó phòng",
              phone: "02583.830557",
            },
          ],
        },
        {
          subGroup: "PHÒNG ĐIỀU DƯỠNG - DINH DƯỠNG - KSNK",
          members: [
            {
              name: "CN. An Đình Quang",
              position: "Phó phòng",
              phone: "02583.834954",
            },
          ],
        },
        {
          subGroup: "PHÒNG TỔ CHỨC HÀNH CHÍNH",
          members: [
            {
              name: "ThS. Đinh Thị Ngọc Huệ",
              position: "Trưởng phòng",
              phone: "02583.838728",
            },
            {
              name: "DS. Võ Phan Quỳnh Quyên",
              position: "Phó phòng",
              phone: "02583.838728",
            },
          ],
        },
        {
          subGroup: "PHÒNG TÀI CHÍNH KẾ TOÁN",
          members: [
            {
              name: "CN. Nguyễn Thị Diệu Thúy",
              position: "Phó phòng",
              phone: "02583.832175",
            },
            {
              name: "CN. Hoàng Thị Bích An",
              position: "Phó phòng",
              phone: "02583.832175",
            },
          ],
        },
        {
          subGroup: "KHOA DƯỢC – CLS",
          members: [
            {
              name: "CN. Hoàng Bá Đạo",
              position: "Phó khoa",
              phone: "02583.540891",
            },
          ],
        },
      ],
    },
    {
      group: "KHOA KHÁM – HSCC",
      members: [
        {
          name: "BS CK1. Nguyễn Thị Mỹ Dung",
          position: "Trưởng khoa",
          phone: "02583.834952",
        },
        {
          name: "BS CK1. Huỳnh Trí Nam",
          position: "Phó khoa",
          phone: "02583.834952",
        },
      ],
    },
    {
      group: "KHOA LAO HÔ HẤP",
      members: [
        {
          name: "BS CK1. Nguyễn Thị Lệ",
          position: "Trưởng khoa",
          phone: "02583.835856",
        },
      ],
    },
    {
      group: "KHOA LAO NGOÀI PHỔI VÀ BỆNH PHỔI",
      members: [
        {
          name: "ThS.BS. Nguyễn Đắc Dy",
          position: "Trưởng khoa",
          phone: "02583.543772",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-4">
        <h2 className="text-2xl font-bold text-center mb-6">CƠ CẤU TỔ CHỨC</h2>
        <table className="w-full border border-black text-sm">
          <thead>
            <tr className="bg-blue-100 text-center">
              <th className="border border-black p-2 w-12">STT</th>
              <th className="border border-black p-2">Họ và tên</th>
              <th className="border border-black p-2">Chức vụ</th>
              <th className="border border-black p-2">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, idx) => (
              <React.Fragment key={group.group}>
                <tr>
                  <td
                    colSpan={4}
                    className="border border-black text-center font-bold bg-gray-200 p-2 uppercase"
                  >
                    {group.group}
                  </td>
                </tr>
                {/* Nếu có subgroup thì render subgroup, nếu không render members luôn */}
                {group.subGroups
                  ? group.subGroups.map((sub, subIdx) => (
                      <React.Fragment key={sub.subGroup}>
                        <tr>
                          <td
                            colSpan={4}
                            className="border border-black text-left font-semibold bg-gray-100 p-2 pl-6 uppercase"
                          >
                            {sub.subGroup}
                          </td>
                        </tr>
                        {sub.members.map((mem, i) => (
                          <tr key={i}>
                            <td className="border border-black p-2 text-center">
                              {i + 1}
                            </td>
                            <td className="border border-black p-2">
                              {mem.name}
                            </td>
                            <td className="border border-black p-2">
                              {mem.position}
                            </td>
                            <td className="border border-black p-2">
                              SDT: {mem.phone}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  : group.members.map((mem, i) => (
                      <tr key={i}>
                        <td className="border border-black p-2 text-center">
                          {i + 1}
                        </td>
                        <td className="border border-black p-2">{mem.name}</td>
                        <td className="border border-black p-2">
                          {mem.position}
                        </td>
                        <td className="border border-black p-2">
                          SDT: {mem.phone}
                        </td>
                      </tr>
                    ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
