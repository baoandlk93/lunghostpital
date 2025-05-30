export default function BentoGrid() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600"></h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          CÁC KHOA KHÁM CHỮA BỆNH CỦA BỆNH VIỆN
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Khoa Lao Hô Hấp
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Khoa Lao Hô hấp của Bệnh viện Phổi là đơn vị chuyên sâu hàng
                  đầu trong chẩn đoán, điều trị và quản lý các bệnh lý về lao và
                  hô hấp, cam kết mang đến chất lượng chăm sóc tối ưu cho người
                  bệnh với đội ngũ y bác sĩ giàu kinh nghiệm và trang thiết bị
                  hiện đại.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="/img/lao-ho-hap.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Khoa Lao ngoài phổi và bệnh phổi
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Khoa Lao ngoài phổi và Bệnh phổi của Bệnh viện Phổi là nơi tập
                  trung chuyên sâu trong khám, chẩn đoán và điều trị các bệnh
                  lao ngoài phổi và các bệnh lý phổi đa dạng, với đội ngũ chuyên
                  gia tận tâm cùng phương pháp điều trị tiên tiến, mang đến dịch
                  vụ chăm sóc toàn diện và hiệu quả cho người bệnh.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs rounded-[calc(var(--radius-lg)+1px)]"
                  src="/img/x-quang.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Khoa Dược - CLS
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Khoa Dược – Cận lâm sàng của Bệnh viện Phổi đóng vai trò quan
                  trọng trong đảm bảo cung ứng đầy đủ, an toàn thuốc men và thực
                  hiện các xét nghiệm cận lâm sàng chính xác, góp phần hỗ trợ
                  tối đa cho quá trình chẩn đoán, điều trị và nâng cao chất
                  lượng chăm sóc sức khỏe người bệnh.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover rounded-[calc(var(--radius-lg)+1px)]"
                  src="/img/d-cls.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Khoa Khám - Hồi sức cấp cứu
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Khoa Khám hồi sức cấp cứu của Bệnh viện Phổi là đơn vị đầu
                  tiên tiếp nhận và xử trí các trường hợp cấp cứu hô hấp và bệnh
                  lý nặng, quy tụ đội ngũ y bác sĩ giàu kinh nghiệm cùng hệ
                  thống trang thiết bị hiện đại, sẵn sàng cấp cứu và chăm sóc
                  người bệnh nhanh chóng, an toàn, hiệu quả.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top rounded-[calc(var(--radius-lg)+1px)]"
                    src="/img/xet-nghiem.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
