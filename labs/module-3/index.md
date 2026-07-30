# Module 3 — Nền tảng viết prompt

**Thời lượng:** 20 phút

---

## Mục tiêu

Sau module này, anh/chị sẽ:

- Hiểu cấu trúc của một prompt hiệu quả
- Biết cách cải thiện prompt dần qua nhiều lần
- Sử dụng tham chiếu file trong prompt
- Biết nơi tìm prompt mẫu (Prompt Gallery)

---

## Prompt là gì?

**Prompt** là hướng dẫn anh/chị đưa cho Copilot bằng ngôn ngữ tự nhiên. Prompt càng rõ ràng và cụ thể, kết quả càng tốt.

### So sánh prompt kém và prompt tốt

| ❌ Prompt kém | ✅ Prompt tốt |
|--------------|--------------|
| "Viết email" | "Soạn email xác nhận tham gia cuộc họp ngày thứ 5, giọng điệu lịch sự và chuyên nghiệp" |
| "Tóm tắt" | "Tóm tắt 5 điểm chính trong tài liệu này, trình bày dạng bullet points" |
| "Tạo biểu đồ" | "Tạo biểu đồ cột so sánh doanh thu Q1-Q4 theo khu vực, sắp xếp từ cao đến thấp" |

---

## Framework: Goal / Context / Source / Expectations

Một prompt hiệu quả thường bao gồm 4 thành phần:

### 1. 🎯 Goal (Mục tiêu)
Anh/chị muốn Copilot làm gì?

> "Tóm tắt...", "Soạn...", "Phân tích...", "Tạo..."

### 2. 📋 Context (Ngữ cảnh)
Bối cảnh, vai trò, đối tượng nhận

> "...cho cuộc họp với Ban Điều hành", "...email từ khách hàng Nhật Bản"

### 3. 📁 Source (Nguồn dữ liệu)
Dữ liệu nào Copilot nên tham chiếu?

> "...từ file báo cáo Q2.docx", "...dựa trên chuỗi email này"

### 4. 📐 Expectations (Kỳ vọng đầu ra)
Format, độ dài, giọng điệu mong muốn

> "...dưới dạng bảng", "...trong 5 bullet points", "...giọng điệu chuyên nghiệp"

---

## Ví dụ áp dụng framework

### Ví dụ 1: Outlook

```
PROMPT: Tóm tắt các email tôi nhận trong 3 ngày qua [Goal]. 
Tôi vừa đi công tác về và cần nắm nhanh tình hình [Context]. 
Trình bày dưới dạng bảng gồm: Chủ đề | Người gửi | Tóm tắt | Việc cần làm [Expectations].
```

### Ví dụ 2: Word

```
PROMPT: Dịch toàn bộ tài liệu này sang tiếng Anh [Goal]. 
Tài liệu sẽ gửi cho đối tác tại Nhật Bản [Context]. 
Giữ nguyên format và sử dụng văn phong kinh doanh quốc tế [Expectations].
```

### Ví dụ 3: Excel

```
PROMPT: Phân tích bảng dữ liệu bán hàng này [Goal] 
và tìm 5 phát hiện quan trọng nhất [Expectations]. 
Tập trung vào sự khác biệt giữa các khu vực [Context].
```

---

## Cải thiện dần qua nhiều lần

Anh/chị không cần viết prompt hoàn hảo ngay lần đầu. Hãy **cải thiện dần**:

1. **Prompt đầu tiên** → Xem kết quả
2. **Tinh chỉnh** → Thêm chi tiết hoặc thay đổi yêu cầu
3. **Lặp lại** → Cho đến khi kết quả đạt yêu cầu

### Ví dụ quá trình cải thiện dần

| Lần | Prompt | Vấn đề |
|-----|--------|--------|
| 1 | "Tóm tắt email" | Quá chung chung, kết quả dài |
| 2 | "Tóm tắt email trong 3 ngày qua, dạng bảng" | Tốt hơn, nhưng thiếu đầu việc cần làm |
| 3 | "Tóm tắt email 3 ngày qua, dạng bảng: Chủ đề \| Người gửi \| Tóm tắt \| Việc cần làm" | ✅ Hoàn chỉnh |

> [!TIP]
> Không cần xóa chat và bắt đầu lại. Anh/chị có thể tiếp tục hội thoại: "Thêm cột Thời hạn vào bảng trên" hoặc "Rút ngắn phần tóm tắt lại".

---

## Tham chiếu file trong prompt

Trong nhiều ứng dụng, anh/chị có thể tham chiếu file cụ thể:

- **Trong PowerPoint:** Gõ `/` để chọn file Word làm nguồn
- **Trong Word:** Copilot có thể đọc file đang mở
- **Trong Copilot Chat:** Gõ `/` để tham chiếu file trên OneDrive/SharePoint

### Ví dụ

> **PROMPT:**
>
> Tạo bài thuyết trình 10 slides từ file /Báo cáo xuất khẩu Q2 2026.docx. Tập trung vào kết quả kinh doanh và kế hoạch Q3.

---

## Prompt Gallery

Microsoft cung cấp thư viện prompt mẫu tại:

- **Trong ứng dụng:** Nhấn vào biểu tượng Copilot → xem các gợi ý prompt
- **Online:** [Copilot Prompt Gallery](https://copilot.cloud.microsoft/prompts)

Anh/chị có thể:
- Duyệt prompt theo ứng dụng (Word, Excel, Teams...)
- Duyệt theo vai trò (Marketing, Finance, HR...)
- Lưu prompt yêu thích để dùng lại

---

## Tóm lại

| Nguyên tắc | Mô tả |
|------------|--------|
| **Cụ thể** | Prompt càng chi tiết, kết quả càng chính xác |
| **Framework** | Goal + Context + Source + Expectations |
| **Cải thiện dần** | Tinh chỉnh qua nhiều lần, không cần hoàn hảo ngay |
| **Tham chiếu** | Dùng `/` để chỉ file cụ thể |
| **Gallery** | Tham khảo prompt mẫu khi cần ý tưởng |

---

Anh/chị đã sẵn sàng thực hành! Chuyển sang **Lab 1** để bắt đầu với Outlook và Teams.
