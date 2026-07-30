# Lab 4 — Xây dựng AI Agent với Agent Builder

**Thời lượng:** 20 phút | **Ứng dụng:** Microsoft 365 Copilot Chat, Agent Builder

---

## Mục tiêu

Sau khi hoàn thành lab này, bạn sẽ có thể:

- Hiểu sự khác biệt giữa **Declarative Agent** và **Custom Engine Agent**
- Tạo một AI Agent hoàn chỉnh chỉ bằng ngôn ngữ tự nhiên — không cần code
- Cấu hình instructions, knowledge sources và starter prompts cho agent
- Chia sẻ agent với đồng nghiệp

---

## Khái niệm cần biết

| Khái niệm | Giải thích |
|-----------|------------|
| **Agent** | Trợ lý AI được tuỳ chỉnh, có thể trả lời câu hỏi và hướng dẫn người dùng dựa trên instructions và knowledge sources đã cấu hình |
| **Declarative Agent** | Loại agent đơn giản, được cấu hình qua instructions, prompts và knowledge sources. Chạy trên nền tảng Copilot, phù hợp cho các use case có phạm vi rõ ràng |
| **Custom Engine Agent** | Loại agent nâng cao, có orchestration, knowledge base và execution engine riêng. Không phụ thuộc Copilot, phù hợp cho use case phức tạp |
| **Grounding** | Quá trình gắn kết responses của agent với các nguồn dữ liệu cụ thể (website, SharePoint, file) để đảm bảo độ chính xác |
| **Instruction** | Cấu hình định nghĩa cách agent hoạt động — giọng điệu, tính cách, ưu tiên và giới hạn |
| **Starter Prompts** | Các câu hỏi gợi ý hiển thị trên giao diện chat để hướng dẫn người dùng bắt đầu |

> [!NOTE]
> **Microsoft 365 Copilot** là bản trả phí ($30/user/month) tích hợp sâu vào Office apps và được grounded trên dữ liệu tổ chức (email, file, cuộc họp). **Copilot Chat** là bản miễn phí dành cho doanh nghiệp, tương đương ChatGPT nhưng trong môi trường Microsoft 365, sử dụng dữ liệu từ web.

---

## Tình huống

> Bạn muốn tạo một AI agent hỗ trợ đồng nghiệp học về Microsoft 365 Copilot — giải thích các khái niệm, phân biệt các loại agent, và trả lời câu hỏi dựa trên tài liệu chính thức của Microsoft.

---

## Phần A: Truy cập Agent Builder

### Bước 1: Mở Microsoft 365 Copilot Chat

1. Mở trình duyệt và truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/)
2. Đảm bảo URL là `https://m365.cloud.microsoft/` — **không phải** `https://copilot.cloud.microsoft/`
3. Chuyển sang tab **Chat**

> [!TIP]
> Nếu bạn có cả Microsoft 365 Copilot license và Copilot Chat, bạn sẽ thấy toggle **Work / Web** trên giao diện. Đảm bảo bạn đang ở tab **Web** (Copilot Chat) cho lab này.

### Bước 2: Mở Agent Builder

1. Trong panel bên trái, tìm mục **Agents** và mở rộng nó
2. Nhấn **New agent** để bắt đầu tạo agent mới

> [!TIP]
> Nếu không thấy nút **New agent**, thử nhấn `Ctrl + F5` để refresh. Tài khoản của bạn có thể đang trong quá trình khởi tạo dịch vụ.

---

## Phần B: Tạo Agent bằng ngôn ngữ tự nhiên

### Bước 3: Mô tả agent bằng tiếng tự nhiên

1. Chọn tab **Describe**
2. Nhập mô tả sau vào ô input và nhấn **Send**:

> **PROMPT:**
>
> Tôi muốn xây dựng một agent kiểu giáo viên, giúp người dùng tìm hiểu về Microsoft 365 Copilot tại công ty chúng tôi. Agent cần giải thích các tính năng Copilot trong Outlook, Teams, Word, Excel và PowerPoint. Agent nên đặt câu hỏi để kiểm tra và củng cố hiểu biết của người dùng, khuyến khích khám phá và đóng vai trò là người hướng dẫn am hiểu.

Agent Builder sẽ tự động tạo **tên**, **mô tả**, **instructions** và **starter prompts** dựa trên mô tả của bạn.

### Bước 4: Tinh chỉnh tên và giọng điệu

Nếu tên agent không phải là "Copilot Trainer", nhập prompt sau:

> **PROMPT:**
>
> Đặt tên agent là "Copilot Trainer". Giọng điệu nên thân thiện, gần gũi và dễ hiểu. Phù hợp với nhân viên văn phòng không có chuyên môn kỹ thuật.

### Bước 5: Định nghĩa giới hạn của agent

Nếu được hỏi về phạm vi hoạt động, trả lời:

> **PROMPT:**
>
> Agent chỉ trả lời các câu hỏi liên quan đến Microsoft 365 Copilot và các ứng dụng Office 365. Không trả lời các câu hỏi không liên quan. Luôn hướng người dùng đến giải pháp đúng dựa trên kiến thức của bạn.

---

## Phần C: Thêm Knowledge Sources

### Bước 6: Gắn kết agent với nguồn tài liệu chính thức

Agent Builder sẽ hỏi về knowledge sources. Cung cấp các URL sau:

> **PROMPT:**
>
> Thêm các URL sau làm knowledge sources: https://learn.microsoft.com/en-us/copilot/microsoft-365/ và https://learn.microsoft.com/en-us/microsoft-365-copilot/

> [!TIP]
> Bạn có thể thêm URL với độ sâu tối đa 2 cấp. Ví dụ: `https://www.domain.com/level1/level2` — tất cả các trang con bên dưới URL đó đều sẽ được dùng làm nguồn grounding.

---

## Phần D: Hoàn thiện cấu hình

### Bước 7: Xem và chỉnh sửa trong tab Configure

1. Chuyển sang tab **Configure**
2. Xem lại toàn bộ cấu hình được tạo tự động:
   - **Name** — tên agent
   - **Description** — mô tả ngắn
   - **Instructions** — hành vi và giới hạn của agent
   - **Knowledge sources** — các URL đã thêm
   - **Starter prompts** — các câu hỏi gợi ý

3. Trong phần **Knowledge**, bật toggle **"Only use selected sources"** để agent chỉ dùng các knowledge sources đã cấu hình, không dùng kiến thức chung của LLM

> [!NOTE]
> Bật "Only use selected sources" giúp agent cho kết quả chính xác và có thể kiểm chứng hơn, nhưng cũng hạn chế khả năng trả lời các câu hỏi ngoài phạm vi nguồn dữ liệu đã cung cấp.

### Bước 8: Test agent trước khi publish

1. Dùng **Test pane** bên phải để thử agent
2. Nhập câu hỏi thử:

> **PROMPT:**
>
> Copilot trong Outlook có thể làm gì để giúp tôi xử lý email nhanh hơn?

3. Kiểm tra xem câu trả lời có chính xác và phù hợp với giọng điệu mong muốn không

### Bước 9: Tạo và chia sẻ agent

1. Nhấn **Create** ở góc trên bên phải để publish agent
2. Sau khi tạo xong, bạn sẽ nhận được **shareable link**
3. Chia sẻ link này với đồng nghiệp để họ có thể dùng agent của bạn
4. Nhấn **Go to agent** để thử nghiệm agent đã publish

---

## Phần E: Thử nghiệm Agent đã hoàn thành

Sau khi agent được tạo, thử các câu hỏi sau:

> **PROMPT:**
>
> Tôi mới bắt đầu dùng Copilot. Tôi nên bắt đầu từ đâu?

> **PROMPT:**
>
> Copilot trong Teams có thể tóm tắt cuộc họp không? Cần điều kiện gì?

> **PROMPT:**
>
> Sự khác biệt giữa Copilot trong Word và Copilot Chat là gì?

---

## Tự thực hành: Tạo agent cho use case của bạn

Bây giờ hãy thử tạo một agent phù hợp với công việc thực tế của bạn:

1. **Xác định chủ đề** — Agent sẽ hỗ trợ mảng gì? (onboarding nhân viên, FAQ IT, hỗ trợ quy trình nội bộ...)
2. **Xác định giọng điệu** — Trang trọng hay thân thiện? Dành cho ai?
3. **Xác định knowledge sources** — Website hoặc SharePoint nào sẽ làm nguồn dữ liệu?
4. **Thiết kế starter prompts** — 3-5 câu hỏi mà người dùng thường xuyên hỏi nhất

---

## Tổng kết

| Bạn đã học được | Chi tiết |
|-----------------|----------|
| Tạo Declarative Agent | Dùng ngôn ngữ tự nhiên, không cần code |
| Cấu hình instructions | Định nghĩa tính cách, giới hạn và hành vi |
| Thêm knowledge sources | Grounding agent với tài liệu chính thức |
| Kiểm soát phạm vi | Bật "Only use selected sources" |
| Publish và chia sẻ | Tạo shareable link cho đồng nghiệp |
| Test và iterate | Thử nghiệm và cải thiện agent |

> [!TIP]
> Để cập nhật agent sau khi đã tạo: nhấn **...** cạnh tên agent → chọn **Edit**, hoặc vào **Create agent** → chọn **My agents**.
