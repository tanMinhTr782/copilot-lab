# Module 2 — What Copilot is

**Thời lượng:** 10 phút

---

## Microsoft 365 Copilot là gì?

Microsoft 365 Copilot là trợ lý AI được tích hợp trực tiếp vào các ứng dụng Microsoft 365 mà bạn sử dụng hàng ngày — Word, Excel, PowerPoint, Outlook, Teams, và hơn thế nữa.

Copilot kết hợp:
- **Large Language Models (LLMs)** — khả năng hiểu và tạo ngôn ngữ tự nhiên
- **Microsoft Graph** — dữ liệu công việc của bạn (email, file, cuộc họp, chat)
- **Ứng dụng Microsoft 365** — nơi bạn làm việc mỗi ngày

---

## Work IQ — Copilot hiểu ngữ cảnh công việc

Copilot không chỉ là chatbot thông thường. Nhờ kết nối với Microsoft Graph, Copilot có thể:

- Truy cập **email** bạn nhận và gửi
- Đọc **files** trên OneDrive và SharePoint
- Xem **cuộc họp** và transcript trong Teams
- Hiểu **ai đang làm gì** trong tổ chức

> Đây được gọi là **Work IQ** — khả năng hiểu ngữ cảnh công việc cụ thể của bạn.

---

## Ranh giới quyền truy cập (Permissions Boundary)

### Copilot chỉ truy cập dữ liệu bạn có quyền xem

Đây là nguyên tắc quan trọng nhất:

- ✅ Copilot **có thể** đọc file bạn có quyền truy cập
- ✅ Copilot **có thể** xem email của bạn
- ❌ Copilot **không thể** đọc email của người khác
- ❌ Copilot **không thể** truy cập file mà bạn không có quyền

> [!NOTE]
> Copilot tuân thủ mô hình bảo mật Microsoft 365 hiện có. Nếu bạn không có quyền xem một tài liệu, Copilot cũng không thể truy cập tài liệu đó cho bạn.

---

## Câu trả lời về bảo mật và quyền riêng tư

| Câu hỏi | Trả lời |
|---------|---------|
| Dữ liệu của tôi có được dùng để train AI? | **Không.** Dữ liệu tenant của bạn không được dùng để huấn luyện mô hình. |
| Người khác có thể xem prompt của tôi? | **Không.** Prompt và kết quả chỉ hiển thị với bạn. |
| Admin có thể xem lịch sử prompt? | Chỉ trong audit log nếu tổ chức bật tính năng này. |
| Copilot có gửi dữ liệu ra ngoài? | Dữ liệu xử lý trong Azure, tuân thủ boundary của tenant. |

---

## Giới hạn của Copilot

Copilot rất hữu ích nhưng cũng có giới hạn:

- **Không phải lúc nào cũng đúng** — Copilot có thể "hallucinate" (đưa ra thông tin không chính xác)
- **Không thay thế chuyên gia** — Kết quả cần được người dùng review
- **Phụ thuộc vào chất lượng dữ liệu** — "Garbage in, garbage out"
- **Giới hạn về ngữ cảnh** — Không thể xử lý file quá lớn hoặc quá nhiều thông tin cùng lúc

> [!TIP]
> Luôn **review kết quả** trước khi sử dụng. Copilot là trợ lý, không phải người ra quyết định. Bạn chịu trách nhiệm cuối cùng với output.

---

## Copilot hoạt động ở đâu?

| Ứng dụng | Khả năng chính |
|-----------|----------------|
| **Outlook** | Tóm tắt email, soạn thư, coaching |
| **Teams** | Recap cuộc họp, tóm tắt chat, Q&A |
| **Word** | Soạn thảo, dịch, tóm tắt, phân tích |
| **Excel** | Phân tích dữ liệu, công thức, biểu đồ |
| **PowerPoint** | Tạo deck, speaker notes, format |
| **Copilot Chat** | Hỏi đáp cross-app, tìm kiếm thông tin |

---

## Tóm lại

1. Copilot = LLM + Microsoft Graph + Ứng dụng M365
2. Chỉ truy cập dữ liệu bạn có quyền xem
3. Dữ liệu không dùng để train model
4. Luôn review kết quả — Copilot là trợ lý, không phải oracle

Sẵn sàng học cách viết prompt hiệu quả? Chuyển sang **Module 3**!
