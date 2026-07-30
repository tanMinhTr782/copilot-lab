# Module 2 — Copilot là gì

**Thời lượng:** 10 phút

---

## Microsoft 365 Copilot là gì?

Microsoft 365 Copilot là trợ lý AI được tích hợp trực tiếp vào các ứng dụng Microsoft 365 mà anh/chị sử dụng hàng ngày — Word, Excel, PowerPoint, Outlook, Teams, và hơn thế nữa.

Copilot kết hợp:
- **Large Language Models (LLMs)** — khả năng hiểu và tạo ngôn ngữ tự nhiên
- **Microsoft Graph** — dữ liệu công việc của anh/chị (email, file, cuộc họp, chat)
- **Ứng dụng Microsoft 365** — nơi anh/chị làm việc mỗi ngày

---

## Work IQ — Copilot hiểu ngữ cảnh công việc

Copilot không chỉ là chatbot thông thường. Nhờ kết nối với Microsoft Graph, Copilot có thể:

- Truy cập **email** anh/chị nhận và gửi
- Đọc **files** trên OneDrive và SharePoint
- Xem **cuộc họp** và transcript trong Teams
- Hiểu **ai đang làm gì** trong tổ chức

> Đây được gọi là **Work IQ** — khả năng hiểu ngữ cảnh công việc cụ thể của anh/chị.

---

## Ranh giới quyền truy cập (Permissions Boundary)

### Copilot chỉ truy cập dữ liệu anh/chị có quyền xem

Đây là nguyên tắc quan trọng nhất:

- ✅ Copilot **có thể** đọc file anh/chị có quyền truy cập
- ✅ Copilot **có thể** xem email của anh/chị
- ❌ Copilot **không thể** đọc email của người khác
- ❌ Copilot **không thể** truy cập file mà anh/chị không có quyền

> [!NOTE]
> Copilot tuân thủ mô hình bảo mật Microsoft 365 hiện có. Nếu anh/chị không có quyền xem một tài liệu, Copilot cũng không thể truy cập tài liệu đó cho anh/chị.

---

## Câu trả lời về bảo mật và quyền riêng tư

| Câu hỏi | Trả lời |
|---------|---------|
| Dữ liệu của tôi có được dùng để huấn luyện AI? | **Không.** Dữ liệu tenant của anh/chị không được dùng để huấn luyện mô hình. |
| Người khác có thể xem prompt của tôi? | **Không.** Prompt và kết quả chỉ hiển thị với anh/chị. |
| Admin có thể xem lịch sử prompt? | Chỉ trong audit log nếu tổ chức bật tính năng này. |
| Copilot có gửi dữ liệu ra ngoài? | Dữ liệu xử lý trong Azure, tuân thủ ranh giới dữ liệu của tenant. |

---

## Giới hạn của Copilot

Copilot rất hữu ích nhưng cũng có giới hạn:

- **Không phải lúc nào cũng đúng** — Copilot có thể "hallucinate" (đưa ra thông tin không chính xác)
- **Không thay thế chuyên gia** — Kết quả cần được người dùng rà soát
- **Phụ thuộc vào chất lượng dữ liệu** — "Dữ liệu vào kém, kết quả ra kém"
- **Giới hạn về ngữ cảnh** — Không thể xử lý file quá lớn hoặc quá nhiều thông tin cùng lúc

> [!TIP]
> Luôn **rà soát kết quả** trước khi sử dụng. Copilot là trợ lý, không phải người ra quyết định. Anh/chị chịu trách nhiệm cuối cùng với kết quả.

---

## Copilot hoạt động ở đâu?

| Ứng dụng | Khả năng chính |
|-----------|----------------|
| **Outlook** | Tóm tắt email, soạn thư, góp ý cải thiện |
| **Teams** | Recap cuộc họp, tóm tắt chat, hỏi đáp |
| **Word** | Soạn thảo, dịch, tóm tắt, phân tích |
| **Excel** | Phân tích dữ liệu, công thức, biểu đồ |
| **PowerPoint** | Tạo deck, speaker notes, định dạng |
| **Copilot Chat** | Hỏi đáp xuyên ứng dụng, tìm kiếm thông tin |

---

## Tóm lại

1. Copilot = LLM + Microsoft Graph + Ứng dụng M365
2. Chỉ truy cập dữ liệu anh/chị có quyền xem
3. Dữ liệu không dùng để huấn luyện mô hình
4. Luôn rà soát kết quả — Copilot là trợ lý, không phải nguồn chân lý tuyệt đối

Sẵn sàng học cách viết prompt hiệu quả? Chuyển sang **Module 3**!
