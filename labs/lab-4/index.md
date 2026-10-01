# Lab 4 - Agent dựng sẵn của Microsoft (Researcher & Analyst)

**Thời lượng:** 20 phút | **Ứng dụng:** Microsoft 365 Copilot - Frontier Agents

---

## Mục tiêu

Trước khi tự tay xây dựng agent ở Lab 5, hãy làm quen với các **agent dựng sẵn** mạnh mẽ mà Microsoft đã tích hợp sẵn trong Microsoft 365 Copilot. Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Hiểu **Frontier Agent** là gì và khác gì so với chat Copilot thông thường
- Dùng **Researcher agent** để phân tích sâu một tài liệu phức tạp, tổng hợp thông tin trải dài nhiều phần
- Dùng **Analyst agent** để trích xuất dữ liệu và dựng mô hình tài chính (NPV, IRR) từ một báo cáo
- Biết khi nào nên dùng Researcher, khi nào nên dùng Analyst

---

## Khái niệm cần biết

| Khái niệm | Giải thích |
|-----------|------------|
| **Frontier Agent** | Nhóm agent dựng sẵn của Microsoft, chạy trên các mô hình suy luận (reasoning) tiên tiến. Được tối ưu cho các tác vụ chuyên sâu, không chỉ trò chuyện thông thường |
| **Researcher** | Agent chuyên **suy luận và tổng hợp** - đọc tài liệu dài, đối chiếu chéo nhiều phần, và tạo ra phân tích ở cấp độ điều hành. Coi như "cố vấn chiến lược" của anh/chị |
| **Analyst** | Agent chuyên **xử lý dữ liệu** - trích bảng từ tài liệu, tính toán, dựng mô hình, tạo biểu đồ và xuất file Excel. Coi như "chuyên viên mô hình tài chính" của anh/chị |
| **Grounding** | Neo câu trả lời của agent vào một nguồn dữ liệu cụ thể (ở đây là file PDF anh/chị tải lên) để đảm bảo độ chính xác |

> [!NOTE]
> Frontier agents (Researcher, Analyst, Cowork...) yêu cầu **license Microsoft 365 Copilot**. Chúng khác với chat Copilot thông thường: được thiết kế để "suy nghĩ lâu hơn" và cho kết quả sâu hơn, thay vì trả lời tức thì.

---

## Chuẩn bị: Tải tài liệu mẫu

Cả hai tình huống dưới đây đều dùng chung một file PDF báo cáo mẫu.

1. Tải file báo cáo mẫu: [Contoso Grand Hotel Performance Report](https://github.com/microsoft/mcs-labs/raw/main/labs/agent-builder-m365/Contoso_Grand_Hotel_Performance_Report.pdf)
2. Lưu vào nơi dễ tìm (Desktop hoặc Downloads)

> [!NOTE]
> Đây là báo cáo hư cấu dài khoảng 20 trang, gồm **18 phần** với bảng biểu, dữ liệu tài chính và các chỉ số vận hành. Anh/chị sẽ tải cùng file này lên cho cả Researcher và Analyst để thấy hai agent trích xuất giá trị khác nhau như thế nào từ cùng một nguồn.

---

## Tình huống 1: Phân tích chuyên sâu với Researcher agent

> **Bối cảnh:** Anh/chị là Phó Chủ tịch vùng đang xem xét báo cáo hoạt động thường niên của Contoso Grand Hotel & Resort. Thay vì tự đọc hết 18 phần, anh/chị muốn dùng Researcher agent để nhanh chóng xác định các vấn đề vận hành cấp bách nhất và kiểm tra xem các khuyến nghị trong báo cáo có bao quát hết vấn đề hay không.

### Bước 1: Mở Researcher agent

1. Truy cập [Microsoft 365 Copilot](https://m365.cloud.microsoft/)
2. Trong danh sách agent ở thanh bên trái, tìm **Researcher**. Anh/chị cũng có thể mở bằng cách gõ `@Researcher` trong ô chat

> [!TIP]
> Researcher là một trong các **frontier agent** của Microsoft - dùng mô hình suy luận nâng cao. Nó xuất sắc ở việc phân tích tài liệu sâu, đối chiếu chéo nhiều phần và tổng hợp thông tin phức tạp.

### Bước 2: (Khuyến nghị) Chọn chế độ Critique

Trong phần header của khung chat Researcher (góc trên bên phải), nhấn vào pill chọn chế độ (mặc định là **Auto**) và chuyển sang **Critique**.

> [!NOTE]
> Với các PDF dài, chế độ **Critique** thường cho kết quả hội tụ ổn định hơn Auto. Các chế độ khác (Model Council, Claude) cũng dùng được nhưng thường chậm hơn.

### Bước 3: Tải file lên

Nhấn nút **+ (Add and manage sources)** cạnh ô nhập tin nhắn → chọn **Upload images and files** → chọn file `Contoso_Grand_Hotel_Performance_Report.pdf`. Chờ xác nhận tải lên xong rồi mới tiếp tục.

### Bước 4: Gửi prompt phân tích

Sau khi file đã tải lên, dán prompt sau và nhấn **Send**:

> **PROMPT:**
>
> Tạo một bản tóm tắt điều hành (executive briefing) cho Tổng Giám đốc, nêu năm vấn đề vận hành cấp bách nhất, nguyên nhân gốc rễ, tác động tài chính và giải pháp khuyến nghị cho từng vấn đề - tất cả đều lấy nguồn từ báo cáo này.

> [!NOTE]
> Researcher thường sẽ hỏi lại một câu làm rõ về đối tượng người đọc, cách định nghĩa "cấp bách" và độ dài mong muốn. Hãy nhấn vào một gợi ý (suggestion chip) hoặc gõ "cứ tiến hành" / "proceed" rồi nhấn **Send** - nhấn chip chỉ điền vào ô chat chứ không tự gửi. Sau khi anh/chị trả lời, Researcher sẽ bắt đầu suy luận.

> [!NOTE]
> **Quan trọng:** Researcher là agent suy luận sâu - với một PDF ~20 trang, một prompt thường mất **10–25 phút** để cho kết quả hoàn chỉnh. Anh/chị **không cần ngồi chờ**: cứ gửi prompt, chuyển sang Tình huống 2 (Analyst), rồi quay lại khi danh sách chat báo Researcher đã xong. Nếu hết giờ lab mà Researcher vẫn đang chạy, cứ để nguyên tab và chuyển sang Lab 5 - anh/chị có thể xem kết quả sau buổi học. Nếu sau ~25 phút vẫn chưa xong, nhấn **Stop** và dùng kết quả tạm.

### Bước 5: Quan sát kết quả

Khi Researcher trả lời, hãy quan sát cách agent:

- Xác định các vấn đề trải khắp nhiều phần (buồng phòng, WiFi, HVAC, biên lợi nhuận F&B, bảo trì thang máy)
- Truy ngược mỗi vấn đề về nguyên nhân gốc rễ bằng dữ liệu từ những phần khác nhau
- Định lượng tác động tài chính bằng cách rút số liệu doanh thu, chi phí và khiếu nại từ nhiều bảng
- Ánh xạ từng vấn đề tới khuyến nghị cụ thể trong Phần 16
- Tạo ra một bản tóm tắt có cấu trúc, sẵn sàng trình lãnh đạo

> [!TIP]
> Sức mạnh của prompt này nằm ở việc buộc agent **tổng hợp chéo nhiều phần** - không phần đơn lẻ nào chứa đủ câu trả lời. Thử hỏi tiếp: *"Lập luận phản biện mạnh nhất chống lại khuyến nghị hàng đầu của anh/chị là gì?"* để xem Researcher tư duy phản biện.

### Xuất kết quả

Nhấn **Edit in Pages** ở cuối câu trả lời để mở trong trình soạn thảo Pages. Từ menu **Create** trên thanh công cụ, anh/chị có thể xuất ra **Word** hoặc **PDF**.

---

## Tình huống 2: Mô hình tài chính với Analyst agent

> **Bối cảnh:** Báo cáo Contoso Grand Hotel đề xuất 2,975 triệu USD đầu tư vốn cho mười sáng kiến, nhưng chỉ đưa ra thời gian hoàn vốn đơn giản (simple payback). Là Giám đốc Tài chính (CFO), anh/chị cần phân tích NPV và IRR đúng chuẩn trước khi phê duyệt. Anh/chị sẽ dùng Analyst agent để dựng phân tích này từ dữ liệu báo cáo.

Trong khi Researcher (Tình huống 1) vẫn đang suy luận ở nền, hãy chuyển sang **Analyst agent** để làm việc với cùng file báo cáo.

### Bước 1: Mở Analyst agent

1. Truy cập [Microsoft 365 Copilot](https://m365.cloud.microsoft/)
2. Chọn **Analyst** từ bộ chọn agent, hoặc gõ `@Analyst` trong ô chat

> [!TIP]
> Nếu **Researcher** giỏi suy luận và tổng hợp, thì **Analyst** được xây riêng cho công việc **nặng về dữ liệu** - trích bảng từ tài liệu, tính toán, dựng mô hình, tạo biểu đồ và xuất file có cấu trúc như Excel.

### Bước 2: Tải file lên

Nhấn **+ (Add and manage sources)** → **Upload images and files** → chọn **cùng file PDF** anh/chị đã dùng ở Tình huống 1.

> [!NOTE]
> Anh/chị dùng lại đúng file PDF của Tình huống 1, nhưng với một agent hoàn toàn khác. Đây là minh chứng cho việc các frontier agent khác nhau có thể khai thác giá trị khác nhau từ cùng một tài liệu nguồn.

### Bước 3: Gửi prompt phân tích tài chính

Dán prompt sau và nhấn **Send**:

> **PROMPT:**
>
> Dựa trên dữ liệu khuyến nghị ở Phần 16 của báo cáo hoạt động khách sạn này, hãy xây dựng phân tích ROI chi tiết cho từng khuyến nghị trong số 10 khuyến nghị (R1 đến R10). Với mỗi khuyến nghị, trích chi phí đầu tư và ROI hàng năm ước tính từ báo cáo, sau đó tính:
> 1. Giá trị hiện tại thuần (NPV) với tỷ lệ chiết khấu 8% trong 5 năm
> 2. Tỷ suất hoàn vốn nội bộ (IRR)
> 3. Thời gian hoàn vốn (cả simple và discounted)
> 4. Lợi ích ròng luỹ kế 5 năm (tổng lợi nhuận trừ đầu tư)
>
> Giả định ROI hàng năm bắt đầu từ Năm 1 và không đổi trong 5 năm. Với hiện đại hoá thang máy (R5), giả định khoản đầu tư 1,2 triệu USD được chia đều cho Năm 0 và Năm 1, lợi nhuận bắt đầu từ Năm 2. Với các chương trình chi phí thường niên (R7, R10), coi khoản đầu tư hàng năm là chi phí lặp lại mỗi năm.
>
> Trình bày kết quả trong một bảng xếp hạng theo NPV (cao đến thấp). Thêm một cột cho biết mỗi khuyến nghị tạo ra hay phá huỷ giá trị ở ngưỡng lãi suất 8%. Sau đó đưa ra khuyến nghị tổng hợp: khoản đầu tư nào nên phê duyệt, khoản nào ở mức cận biên, khoản nào nên hoãn - thuần tuý dựa trên phân tích tài chính.

### Bước 4: Quan sát kết quả

Hãy quan sát cách Analyst agent:

- Trích chi phí đầu tư và lợi nhuận hàng năm từ 10 khuyến nghị ở Phần 16
- Dựng mô hình dòng tiền chiết khấu (DCF) cho từng khuyến nghị
- Tính NPV với tỷ lệ chiết khấu 8% đã chỉ định
- Tính IRR cho từng khoản đầu tư
- Xác định thời gian hoàn vốn (cả simple và discounted)
- Xếp hạng cả 10 khuyến nghị theo giá trị tài chính
- Chỉ ra khoản nào tạo ra / phá huỷ giá trị ở ngưỡng lãi suất
- Đưa ra khuyến nghị phê duyệt / hoãn rõ ràng

> [!NOTE]
> **Quan trọng:** Báo cáo gốc chỉ có thời gian hoàn vốn đơn giản (bỏ qua giá trị thời gian của tiền). Analyst agent tạo ra **NPV và IRR** - các chỉ số tài chính chuẩn mực mà CFO thực sự dùng để đánh giá dự án đầu tư. Đây là ví dụ mạnh mẽ cho thấy Analyst có thể **nâng tầm phân tích vượt ra ngoài tài liệu nguồn**.

### Bước 5: Phân tích mở rộng (tuỳ chọn)

Nếu còn thời gian, thử prompt tiếp theo:

> **PROMPT:**
>
> Bây giờ hãy tạo biểu đồ thể hiện NPV so với Chi phí đầu tư cho cả 10 khuyến nghị, với kích thước bong bóng biểu thị IRR.

---

## Researcher hay Analyst? Chọn thế nào

| Anh/chị cần... | Dùng agent |
|------------|------------|
| Tổng hợp, suy luận chiến lược, đối chiếu chéo tài liệu dài | **Researcher** |
| Đọc và tóm tắt báo cáo phức tạp cho lãnh đạo | **Researcher** |
| Trích bảng, tính toán, dựng mô hình tài chính | **Analyst** |
| Tạo biểu đồ, xuất Excel, phân tích số liệu | **Analyst** |

---

## Tổng kết

| Anh/chị đã học được | Chi tiết |
|-----------------|----------|
| Frontier agents là gì | Agent dựng sẵn dùng mô hình suy luận nâng cao |
| Dùng Researcher | Phân tích sâu, tổng hợp chéo nhiều phần của tài liệu dài |
| Quy trình "gửi rồi quay lại" | Researcher chạy lâu - cứ gửi prompt và làm việc khác |
| Dùng Analyst | Trích dữ liệu và dựng mô hình NPV/IRR từ báo cáo |
| Grounding bằng file | Tải PDF lên để neo câu trả lời vào nguồn cụ thể |
| Chọn đúng agent | Researcher = cố vấn chiến lược; Analyst = chuyên viên tài chính |

> [!TIP]
> Ở Lab 5, anh/chị sẽ chuyển từ **dùng** agent dựng sẵn sang **tự xây dựng** agent của riêng mình với Agent Builder.
