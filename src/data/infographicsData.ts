import { InfographicData } from '../types/infographic';

export const REFORM_2026_DATA: InfographicData = {
  id: 'reform-2026',
  title: 'BÁO CÁO TỔNG HỢP CẢI CÁCH BỘ MÁY & PHÁT TRIỂN 2026',
  subtitle: 'Trực quan hóa thành tựu tinh giản bộ máy, cải cách thủ tục hành chính & ngân sách hỗ trợ giáo dục',
  updatedAt: 'Tháng 10/2026',
  sourceNotes: 'Tổng hợp từ các nguồn: Báo cáo chính trị của Ban Chấp hành Đảng bộ Chính phủ nhiệm kỳ 2020 - 2025 tại Đại hội Đại biểu Đảng bộ Chính phủ lần thứ nhất, nhiệm kỳ 2025 - 2030; Báo cáo của Bộ GD-ĐT; Báo cáo kinh tế - xã hội do Thủ tướng Lê Minh Hưng trình bày tại Kỳ họp thứ 2, Quốc hội khóa XVI',
  sections: [
    {
      id: 'section-apparatus',
      title: 'SẮP XẾP, TINH GỌN BỘ MÁY',
      subtitle: 'Tối ưu hóa cấu trúc cơ quan nhà nước, giảm tải bộ máy chuyên trách',
      badgeBgColor: 'bg-sky-600',
      badgeTextColor: 'text-white',
      borderColor: 'border-sky-500',
      items: [
        {
          id: 'item-1',
          title: 'Biên chế tinh giản',
          targetValue: 145000,
          unit: 'biên chế',
          description: 'được tinh giản sau sắp xếp bộ máy',
          subText: 'Giảm chồng chéo chức năng giữa các đơn vị, cơ quan bộ ngành và địa phương',
          iconType: 'personnel',
          trend: 'down',
          color: 'blue',
          breakdownTitle: 'Cơ cấu tinh giản biên chế theo khu vực',
          breakdownData: [
            { label: 'Cơ quan hành chính Nhà nước', value: 58000, unit: 'biên chế', percentage: 40, color: '#0284c7' },
            { label: 'Đơn vị sự nghiệp công lập', value: 65250, unit: 'biên chế', percentage: 45, color: '#0369a1' },
            { label: 'Cơ quan cấp huyện, xã trùng lặp', value: 21750, unit: 'biên chế', percentage: 15, color: '#38bdf8' }
          ],
          detailNote: 'Biện pháp tinh giản tập trung vào việc quy hoạch lại đầu mối, giải quyết chế độ chính sách thỏa đáng và chuyển đổi số hóa công tác chỉ đạo vận hành.'
        },
        {
          id: 'item-2',
          title: 'Tiết kiệm chi thường xuyên',
          targetValue: 39000,
          unit: 'tỷ đồng/năm',
          description: 'chi thường xuyên được tiết kiệm, tạo nguồn lực cho an sinh xã hội',
          subText: 'Tái bổ sung trực tiếp vào quỹ lương mới, y tế, giáo dục và hạ tầng dân sinh',
          iconType: 'savings',
          trend: 'up',
          color: 'emerald',
          breakdownTitle: 'Phân bổ nguồn vốn tiết kiệm được',
          breakdownData: [
            { label: 'An sinh xã hội & Y tế cộng đồng', value: 15600, unit: 'tỷ đồng', percentage: 40, color: '#059669' },
            { label: 'Miễn giảm học phí & Giáo dục', value: 11700, unit: 'tỷ đồng', percentage: 30, color: '#10b981' },
            { label: 'Tái đầu tư Chuyển đổi số công', value: 7800, unit: 'tỷ đồng', percentage: 20, color: '#34d399' },
            { label: 'Dự phòng ngân sách phát triển', value: 3900, unit: 'tỷ đồng', percentage: 10, color: '#6ee7b7' }
          ],
          detailNote: 'Việc tiết kiệm 39.000 tỷ đồng/năm giúp giảm áp lực bội chi ngân sách nhà nước và tăng nguồn lực hỗ trợ trực tiếp người dân.'
        }
      ]
    },
    {
      id: 'section-admin',
      title: 'CẢI CÁCH THỦ TỤC HÀNH CHÍNH (Từ đầu năm 2026 đến nay)',
      subtitle: 'Đơn giản hóa điều kiện kinh doanh, cắt giảm thủ tục rườm rà cho người dân & doanh nghiệp',
      badgeBgColor: 'bg-sky-600',
      badgeTextColor: 'text-white',
      borderColor: 'border-sky-500',
      items: [
        {
          id: 'item-3',
          title: 'TTHC & điều kiện kinh doanh cắt giảm',
          targetValue: 3500,
          prefix: '>',
          unit: 'TTHC',
          description: 'được cắt giảm, đơn giản hóa, phân cấp',
          subText: 'Tích hợp toàn bộ lên Cổng dịch vụ công quốc gia, xử lý trực tuyến toàn trình',
          iconType: 'portal',
          trend: 'down',
          color: 'blue',
          breakdownTitle: 'Phân loại thủ tục được tối giản',
          breakdownData: [
            { label: 'Điều kiện giấy phép kinh doanh', value: 1400, unit: 'thủ tục', percentage: 40, color: '#2563eb' },
            { label: 'Thủ tục đất đai, xây dựng, môi trường', value: 1050, unit: 'thủ tục', percentage: 30, color: '#3b82f6' },
            { label: 'Thủ tục hải quan & thương mại', value: 700, unit: 'thủ tục', percentage: 20, color: '#60a5fa' },
            { label: 'Cấp chứng chỉ & xác nhận hành chính', value: 350, unit: 'thủ tục', percentage: 10, color: '#93c5fd' }
          ],
          detailNote: 'Cắt giảm tận gốc các quy định rào cản kinh doanh giúp thu hút nguồn vốn FDI và kích thích tinh thần khởi nghiệp.'
        },
        {
          id: 'item-4',
          title: 'Thời gian thực hiện',
          targetValue: 53,
          prefix: '↓',
          suffix: '%',
          unit: 'thời gian',
          description: 'thời gian thực hiện thủ tục hành chính',
          subText: 'Nhờ áp dụng dữ liệu dân cư quốc gia VNeID và ký số tự động',
          iconType: 'clock',
          trend: 'down',
          color: 'blue',
          breakdownTitle: 'Thời gian xử lý trung bình theo nhóm',
          breakdownData: [
            { label: 'Đăng ký thành lập doanh nghiệp', value: 65, unit: '% giảm', percentage: 65, color: '#0284c7' },
            { label: 'Đăng ký biến động đất đai', value: 50, unit: '% giảm', percentage: 50, color: '#0369a1' },
            { label: 'Cấp Giấy phép lao động / Chứng chỉ', value: 48, unit: '% giảm', percentage: 48, color: '#0284c7' }
          ],
          detailNote: 'Thời gian thực hiện giảm hơn một nửa giúp người dân không còn phải xếp hàng rườm rà tại cơ quan một cửa.'
        },
        {
          id: 'item-5',
          title: 'Chi phí tuân thủ',
          targetValue: 55,
          prefix: '↓',
          suffix: '%',
          unit: 'chi phí',
          description: 'chi phí tuân thủ cho người dân, doanh nghiệp',
          subText: 'Bỏ hoàn toàn việc yêu cầu chứng thực giấy tờ đã có trên cơ sở dữ liệu số',
          iconType: 'cost',
          trend: 'down',
          color: 'blue',
          breakdownTitle: 'Mức giảm chi phí tuân thủ',
          breakdownData: [
            { label: 'Chi phí in ấn, sao chụp giấy tờ', value: 80, unit: '% giảm', percentage: 80, color: '#2563eb' },
            { label: 'Chi phí đi lại & dịch vụ trung gian', value: 60, unit: '% giảm', percentage: 60, color: '#3b82f6' },
            { label: 'Chi phí cơ hội do chờ đợi phê duyệt', value: 52, unit: '% giảm', percentage: 52, color: '#60a5fa' }
          ],
          detailNote: 'Chi phí tuân thủ hạ thấp giúp nâng cao năng lực cạnh tranh quốc gia theo chuẩn xếp hạng quốc tế.'
        },
        {
          id: 'item-6',
          title: 'Tiết kiệm chi phí xã hội',
          targetValue: 23000,
          prefix: 'Tiết kiệm ',
          unit: 'tỷ đồng/năm',
          description: 'cho toàn xã hội từ cải cách thủ tục',
          subText: 'Số tiền tiết kiệm trực tiếp tái đầu tư vào hoạt động sản xuất kinh doanh',
          iconType: 'savings',
          trend: 'up',
          color: 'blue',
          breakdownTitle: 'Tiết kiệm theo đối tượng thụ hưởng',
          breakdownData: [
            { label: 'Cộng đồng Khối Doanh nghiệp', value: 16100, unit: 'tỷ đồng', percentage: 70, color: '#0284c7' },
            { label: 'Người dân & Hộ gia đình', value: 6900, unit: 'tỷ đồng', percentage: 30, color: '#38bdf8' }
          ],
          detailNote: 'Đóng góp thiết thực cho đà tăng trưởng GDP toàn quốc năm 2026.'
        },
        {
          id: 'item-7',
          title: 'Hỗ trợ giáo dục & an sinh xã hội',
          targetValue: 30000,
          prefix: '>',
          unit: 'tỷ đồng/năm',
          description: 'Kinh phí ước tính thực hiện miễn, hỗ trợ học phí từ năm học 2025–2026',
          subText: 'Áp dụng cho học sinh mầm non, phổ thông công lập và các đối tượng chính sách ưu tiên',
          iconType: 'education',
          trend: 'up',
          color: 'blue',
          isFullWidth: true,
          breakdownTitle: 'Cơ cấu kinh phí hỗ trợ học phí',
          breakdownData: [
            { label: 'Học sinh Cấp Tiểu học & Mầm non', value: 12000, unit: 'tỷ đồng', percentage: 40, color: '#1d4ed8' },
            { label: 'Học sinh Cấp Trung học cơ sở (THCS)', value: 9000, unit: 'tỷ đồng', percentage: 30, color: '#2563eb' },
            { label: 'Học sinh Cấp Trung học phổ thông (THPT)', value: 6000, unit: 'tỷ đồng', percentage: 20, color: '#3b82f6' },
            { label: 'Học sinh vùng sâu, hải đảo & khuyết tật', value: 3000, unit: 'tỷ đồng', percentage: 10, color: '#60a5fa' }
          ],
          detailNote: 'Chính sách mang tính đột phá thể hiện sự quan tâm đặc biệt của Đảng và Nhà nước đối với sự nghiệp giáo dục toàn dân.'
        }
      ]
    }
  ]
};

export const DIGITAL_TRANSFORMATION_PRESET: InfographicData = {
  id: 'digital-2026',
  title: 'BÁO CÁO TỔNG THỂ CHUYỂN ĐỔI SỐ QUỐC GIA 2026',
  subtitle: 'Chỉ số hạ tầng số, kinh tế số và dịch vụ công trực tuyến trên toàn quốc',
  updatedAt: 'Quý IV/2026',
  sourceNotes: 'Nguồn dữ liệu: Ủy ban Quốc gia về Chuyển đổi số & Bộ Thông tin và Truyền thông.',
  sections: [
    {
      id: 'sec-digital-econ',
      title: 'PHÁT TRIỂN KINH TẾ SỐ',
      subtitle: 'Đóng góp của kinh tế số vào tăng trưởng GDP toàn quốc',
      badgeBgColor: 'bg-indigo-600',
      badgeTextColor: 'text-white',
      borderColor: 'border-indigo-500',
      items: [
        {
          id: 'dig-1',
          title: 'Tỷ trọng Kinh tế số / GDP',
          targetValue: 22,
          prefix: 'Đạt ',
          suffix: '%',
          unit: 'GDP',
          description: 'tỷ trọng kinh tế số đóng góp trong tổng GDP quốc gia',
          iconType: 'tech',
          trend: 'up',
          color: 'indigo'
        },
        {
          id: 'dig-2',
          title: 'Doanh nghiệp Công nghệ số',
          targetValue: 78000,
          unit: 'doanh nghiệp',
          description: 'doanh nghiệp công nghệ số đang vận hành kinh doanh',
          iconType: 'chart',
          trend: 'up',
          color: 'indigo'
        }
      ]
    },
    {
      id: 'sec-digital-citizen',
      title: 'HẠ TẦNG SỐ & CÔNG DÂN SỐ',
      subtitle: 'Phủ sóng 5G, Căn cước điện tử VNeID và thanh toán không dùng tiền mặt',
      badgeBgColor: 'bg-indigo-600',
      badgeTextColor: 'text-white',
      borderColor: 'border-indigo-500',
      items: [
        {
          id: 'dig-3',
          title: 'Tài khoản VNeID kích hoạt',
          targetValue: 68,
          prefix: '>',
          unit: 'triệu',
          description: 'tài khoản định danh điện tử mức 2 được sử dụng hàng ngày',
          iconType: 'portal',
          trend: 'up',
          color: 'indigo'
        },
        {
          id: 'dig-4',
          title: 'Phủ sóng mạng 5G toàn quốc',
          targetValue: 88,
          suffix: '%',
          unit: 'dân số',
          description: 'dân số được tiếp cận mạng băng rộng di động 5G tốc độ cao',
          iconType: 'tech',
          trend: 'up',
          color: 'indigo'
        }
      ]
    }
  ]
};

export const GREEN_ENERGY_PRESET: InfographicData = {
  id: 'green-2026',
  title: 'BÁO CÁO CHUYỂN DỊCH NĂNG LƯỢNG XANH & CAM KẾT NET ZERO',
  subtitle: 'Tiến độ phát triển điện gió, điện mặt trời và giảm phát thải carbon',
  updatedAt: 'Tháng 10/2026',
  sourceNotes: 'Nguồn dữ liệu: Quy hoạch Điện VIII & Bộ Tài nguyên và Môi trường.',
  sections: [
    {
      id: 'sec-green-1',
      title: 'TỶ TRỌNG NĂNG LƯỢNG TÁI TẠO',
      subtitle: 'Gia tăng nguồn năng lượng sạch trong hệ thống điện quốc gia',
      badgeBgColor: 'bg-emerald-600',
      badgeTextColor: 'text-white',
      borderColor: 'border-emerald-500',
      items: [
        {
          id: 'grn-1',
          title: 'Tỷ trọng Điện năng tái tạo',
          targetValue: 34,
          suffix: '%',
          unit: 'tổng sản lượng',
          description: 'sản lượng điện từ gió, mặt trời và thủy điện nhỏ',
          iconType: 'energy',
          trend: 'up',
          color: 'emerald'
        },
        {
          id: 'grn-2',
          title: 'Giảm phát thải CO2',
          targetValue: 42000,
          prefix: '↓',
          unit: 'ngàn tấn/năm',
          description: 'khí thải carbon được cắt giảm nhờ chuyển đổi nhiên liệu',
          iconType: 'savings',
          trend: 'down',
          color: 'emerald'
        }
      ]
    }
  ]
};

export const PRESET_INFOGRAPHICS = [
  REFORM_2026_DATA,
  DIGITAL_TRANSFORMATION_PRESET,
  GREEN_ENERGY_PRESET
];
