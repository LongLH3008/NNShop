# http-status-codes

Constants enumerating the HTTP status codes. Based on the Java Apache HttpStatus API.

All status codes defined in RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and RFC7538 (Permanent Redirect) are supported.

TypeScript or JavaScript. Completely library agnostic. No dependencies.

---

Hằng số liệt kê các mã trạng thái HTTP. Dựa trên API HttpStatus của Java Apache.

Tất cả các mã trạng thái được định nghĩa trong RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV), RFC6585 (Các mã trạng thái HTTP bổ sung), và RFC7538 (Chuyển hướng cố định) được hỗ trợ.

TypeScript hoặc JavaScript. Hoàn toàn không phụ thuộc vào thư viện nào. Không có phụ thuộc.

## Installation

```bash
npm install http-status-codes --save
```

## Usage (express 4.x)

```javascript
import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } from "http-status-codes";

response.status(StatusCodes.OK).send(ReasonPhrases.OK);

response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
	error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
});

response.status(getStatusCode("Internal Server Error")).send({
	error: "Internal Server Error",
});
```

## Codes

| Mã (Codes) | Hằng số                         | Reason Phrase (Lí do)                                                |
| ---------- | ------------------------------- | -------------------------------------------------------------------- |
| 100        | CONTINUE                        | Continue (Tiếp tục)                                                  |
| 101        | SWITCHING_PROTOCOLS             | Switching Protocols (Chuyển đổi giao thức)                           |
| 102        | PROCESSING                      | Processing (Xử lý)                                                   |
| 103        | EARLY_HINTS                     | Early Hints (Gợi ý sớm)                                              |
| 200        | OK                              | OK (OK)                                                              |
| 201        | CREATED                         | Created (Đã tạo)                                                     |
| 202        | ACCEPTED                        | Accepted (Đã chấp nhận)                                              |
| 203        | NON_AUTHORITATIVE_INFORMATION   | Non Authoritative Information (Thông tin không có quyền lực)         |
| 204        | NO_CONTENT                      | No Content (Không có nội dung)                                       |
| 205        | RESET_CONTENT                   | Reset Content (Thiết lập lại nội dung)                               |
| 206        | PARTIAL_CONTENT                 | Partial Content (Nội dung một phần)                                  |
| 207        | MULTI_STATUS                    | Multi-Status (Đa trạng thái)                                         |
| 300        | MULTIPLE_CHOICES                | Multiple Choices (Nhiều lựa chọn)                                    |
| 301        | MOVED_PERMANENTLY               | Moved Permanently (Đã di chuyển vĩnh viễn)                           |
| 302        | MOVED_TEMPORARILY               | Moved Temporarily (Đã di chuyển tạm thời)                            |
| 303        | SEE_OTHER                       | See Other (Xem thêm)                                                 |
| 304        | NOT_MODIFIED                    | Not Modified (Không sửa đổi)                                         |
| 305        | USE_PROXY                       | Use Proxy (Sử dụng proxy)                                            |
| 307        | TEMPORARY_REDIRECT              | Temporary Redirect (Chuyển hướng tạm thời)                           |
| 308        | PERMANENT_REDIRECT              | Permanent Redirect (Chuyển hướng cố định)                            |
| 400        | BAD_REQUEST                     | Bad Request (Yêu cầu không hợp lệ)                                   |
| 401        | UNAUTHORIZED                    | Unauthorized (Không được ủy quyền)                                   |
| 402        | PAYMENT_REQUIRED                | Payment Required (Yêu cầu thanh toán)                                |
| 403        | FORBIDDEN                       | Forbidden (Bị cấm)                                                   |
| 404        | NOT_FOUND                       | Not Found (Không tìm thấy)                                           |
| 405        | METHOD_NOT_ALLOWED              | Method Not Allowed (Phương thức không được phép)                     |
| 406        | NOT_ACCEPTABLE                  | Not Acceptable (Không chấp nhận)                                     |
| 407        | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required (Yêu cầu xác thực proxy)               |
| 408        | REQUEST_TIMEOUT                 | Request Timeout (Hết thời gian chờ yêu cầu)                          |
| 409        | CONFLICT                        | Conflict (Xung đột)                                                  |
| 410        | GONE                            | Gone (Đã biến mất)                                                   |
| 411        | LENGTH_REQUIRED                 | Length Required (Yêu cầu chiều dài)                                  |
| 412        | PRECONDITION_FAILED             | Precondition Failed (Điều kiện tiên quyết không thành công)          |
| 413        | REQUEST_TOO_LONG                | Request Entity Too Large (Yêu cầu quá dài)                           |
| 414        | REQUEST_URI_TOO_LONG            | Request-URI Too Long (URI yêu cầu quá dài)                           |
| 415        | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type (Loại phương tiện không được hỗ trợ)          |
| 416        | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable (Dải được yêu cầu không thỏa mãn)    |
| 417        | EXPECTATION_FAILED              | Expectation Failed (Mong đợi không thành công)                       |
| 418        | IM_A_TEAPOT                     | I'm a teapot (Tôi là một ấm trà)                                     |
| 419        | INSUFFICIENT_SPACE_ON_RESOURCE  | Insufficient Space on Resource (Không đủ không gian trên tài nguyên) |
| 420        | METHOD_FAILURE                  | Method Failure (Phương thức không thành công)                        |
| 421        | MISDIRECTED_REQUEST             | Misdirected Request (Yêu cầu sai hướng)                              |
| 422        | UNPROCESSABLE_ENTITY            | Unprocessable Entity (Thực thể không thể xử lý)                      |
| 423        | LOCKED                          | Locked (Đã bị khóa)                                                  |
| 424        | FAILED_DEPENDENCY               | Failed Dependency (Phụ thuộc không thành công)                       |
| 426        | UPGRADE_REQUIRED                | Upgrade Required (Cần nâng cấp)                                      |
| 428        | PRECONDITION_REQUIRED           | Precondition Required (Điều kiện tiên quyết được yêu cầu)            |
| 429        | TOO_MANY_REQUESTS               | Too Many Requests (Quá nhiều yêu cầu)                                |
| 431        | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large (Trường tiêu đề yêu cầu quá lớn)     |
| 451        | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons (Không có sẵn vì lý do pháp lý)        |
| 500        | INTERNAL_SERVER_ERROR           | Internal Server Error (Lỗi máy chủ nội bộ)                           |
| 501        | NOT_IMPLEMENTED                 | Not Implemented (Chưa thực hiện)                                     |
| 502        | BAD_GATEWAY                     | Bad Gateway (Cổng không hợp lệ)                                      |
| 503        | SERVICE_UNAVAILABLE             | Service Unavailable (Dịch vụ không khả dụng)                         |
| 504        | GATEWAY_TIMEOUT                 | Gateway Timeout (Hết thời gian cổng)                                 |
| 505        | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported (Phiên bản HTTP                           |

```

```
