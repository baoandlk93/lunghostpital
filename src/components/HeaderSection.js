const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Thạc sĩ, Bác sĩ", value: "12" },
  { name: "Bác sĩ CKI", value: "300+" },
  { name: "Điều dưỡng", value: "40" },
  { name: "Nhân viên hành chính", value: "Unlimited" },
];

export default function HeaderSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center">
      <img
        src="/img/anh-nen.jpg"
        alt="Bệnh viện Phổi tỉnh Khánh Hoà"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 bg-white/80 rounded-r-full 
                px-8 py-8 md:px-16 md:py-12 shadow-lg max-w-3xl z-10"
        style={{ backdropFilter: "blur(3px)" }}
      >
        <h3 className="text-xl font-serif md:text-2xl font-bold text-cyan-600 mb-2 tracking-wider">
          BỆNH VIỆN
        </h3>
        <h1 className="text-2xl font-serif md:text-4xl font-black text-blue-900 mb-4 uppercase">
          PHỔI TỈNH KHÁNH HOÀ
        </h1>

        <a
          href="/about"
          className="inline-block px-6 py-2 rounded-full bg-cyan-600 hover:bg-blue-800 text-white font-semibold shadow transition"
        >
          Về chúng tôi
        </a>
      </div>
    </section>
  );
}
