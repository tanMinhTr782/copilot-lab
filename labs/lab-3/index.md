# Lab 3 — Excel và ứng dụng Copilot

**Thời lượng:** 20 phút | **Ứng dụng:** Excel, Microsoft 365 Copilot Chat

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Sử dụng Copilot trong Excel để phân tích dữ liệu và tìm ra các phát hiện quan trọng
- Tạo biểu đồ và conditional formatting với Copilot
- Kiểm tra dữ liệu trùng lặp và bất thường
- Sử dụng Copilot app (m365.cloud.microsoft) để hỏi đáp xuyên ứng dụng

---

## Phần A: Copilot trong Excel

### Tình huống

> **Chị Minh Anh** — *Chief Operating Officer, Southern Star Seafood Corporation*
>
> Chị Minh Anh đang chuẩn bị trình bày kết quả kinh doanh trước Ban Điều hành. Dữ liệu gồm nhiều giao dịch và khó nhận biết nhanh những điểm đáng chú ý. Chị sử dụng Copilot trong Excel để xác định khu vực doanh thu cao nhất, nhóm sản phẩm có biên lợi nhuận thấp nhất và tạo biểu đồ trực quan.

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Insights** | Phân tích dữ liệu và đưa ra các phát hiện quan trọng |
| **Formula** | Gợi ý và tạo công thức phức tạp |
| **Formatting** | Conditional formatting, highlight dữ liệu bất thường |
| **Charts** | Tạo biểu đồ trực quan từ dữ liệu |

> [!NOTE]
> Để sử dụng Copilot trong Excel, dữ liệu cần được định dạng dưới dạng **Table** (chọn dữ liệu → Insert → Table). Copilot sẽ không hoạt động với dữ liệu dạng range thông thường.

### Bài tập 1: Phân tích tổng quan dữ liệu

**Cách thực hiện:**

1. Mở file Excel chứa dữ liệu bán hàng (đảm bảo dữ liệu đã ở dạng Table)
2. Nhấn vào **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> 1. Phân tích workbook này và cho tôi 5 phát hiện quan trọng nhất từ dữ liệu.
> 2. Tóm tắt các xu hướng nổi bật, các giá trị bất thường và những phát hiện đáng chú ý trong bảng dữ liệu này.
> 3. Tìm các mối tương quan đáng chú ý giữa các cột dữ liệu.

### Bài tập 2: Kiểm tra chất lượng dữ liệu

**Cách thực hiện:**

1. Trong cùng file Excel, mở Copilot
2. Nhập prompt:

> **PROMPT:**
>
> 1. Kiểm tra dữ liệu và xác định các dòng bị trùng lặp.
> 2. Tìm các giá trị bị thiếu hoặc bất thường và đề xuất cách xử lý.
> 3. Tạo công thức để tính doanh thu lũy kế theo tháng.

> [!TIP]
> Copilot có thể tạo cột mới với công thức phức tạp. Anh/chị có thể yêu cầu "Thêm cột tính profit margin = (Revenue - Cost) / Revenue" và Copilot sẽ tự động áp dụng.

### Bài tập 3: Conditional Formatting

**Cách thực hiện:**

1. Mở Copilot trong Excel
2. Nhập prompt:

> **PROMPT:**
>
> Đánh dấu màu đỏ nhạt những giao dịch có Revenue_USD thấp hơn Budget_Revenue_USD.

### Bài tập 4: Tạo biểu đồ

**Cách thực hiện:**

1. Trong Copilot panel, nhập prompt:

> **PROMPT:**
>
> Tạo biểu đồ cột so sánh doanh thu theo khu vực (Region). Sắp xếp từ cao đến thấp.

---

## Phần B: Microsoft 365 Copilot Chat

### Giới thiệu

Microsoft 365 Copilot Chat (truy cập tại [m365.cloud.microsoft](https://m365.cloud.microsoft)) là trợ lý AI có khả năng truy vấn dữ liệu xuyên suốt các ứng dụng Microsoft 365 — email, file, cuộc họp, chat.

### Bài tập 5: Hỏi đáp xuyên ứng dụng

**Cách thực hiện:**

1. Truy cập [m365.cloud.microsoft](https://m365.cloud.microsoft)
2. Trong khung chat Copilot, thử các prompt:

> **PROMPT:**
>
> Tóm tắt các email quan trọng tôi nhận được trong tuần này liên quan đến dự án xuất khẩu.

> **PROMPT:**
>
> Tìm file PowerPoint nào tôi đã chỉnh sửa gần đây nhất liên quan đến kế hoạch Q3.

> **PROMPT:**
>
> Trong cuộc họp tuần trước với nhóm Sales, có đầu việc nào được giao cho tôi không?

> [!TIP]
> Copilot Chat có thể tìm kiếm thông tin trong email, files trên OneDrive/SharePoint, cuộc họp Teams, và chat Teams. Đây là cách nhanh nhất để tìm thông tin phân tán ở nhiều nơi.

---

## Tự thực hành

Hãy thử áp dụng với công việc thực tế của anh/chị:

1. Mở một file Excel với dữ liệu thực và yêu cầu Copilot phân tích 3 phát hiện quan trọng
2. Thử tạo 1 biểu đồ từ dữ liệu của anh/chị
3. Vào Copilot Chat và hỏi "Tóm tắt tuần làm việc của tôi"

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|-----------------|----------|
| Phân tích dữ liệu và tìm ra phát hiện | Excel |
| Kiểm tra dữ liệu trùng lặp/bất thường | Excel |
| Conditional formatting tự động | Excel |
| Tạo biểu đồ từ prompt | Excel |
| Hỏi đáp xuyên ứng dụng | Copilot Chat |
| Tìm kiếm thông tin phân tán | Copilot Chat |
