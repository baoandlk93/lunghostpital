import Layout from "@/components/Layout";
import { BreadCrumb } from "primereact/breadcrumb";
export default function CalendarPage() {
  return (
    <Layout>
      <BreadCrumb
        model={[
          { label: "Trang chủ", url: "/" },
          { label: "Lịch công tác", url: "/calendar" },
        ]}
      />
    </Layout>
  );
}
