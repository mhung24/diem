const courses = [
  { name: "Nhập môn tin học", credit: 3 },
  { name: "Tiếng anh 1", credit: 2 },
  { name: "Toán cao cấp 1", credit: 2 },
  { name: "Giáo dục thể chất 1", credit: 1 },
  { name: "Vật lý đại cương", credit: 3 },
  { name: "Tin học văn phòng", credit: 3 },
  { name: "Nhập môn ngành 3", credit: 2 },
  { name: "Triết học Mác - Lênin", credit: 3 },
  { name: "Tiếng anh 2", credit: 3 },
  { name: "Toán cao cấp 2", credit: 2 },
  { name: "Giáo dục thể chất 2", credit: 2 },
  { name: "Pháp luật đại cương", credit: 2 },
  { name: "Cơ sở dữ liệu quan hệ", credit: 2 },
  { name: "Giáo dục Quốc phòng - an ninh", credit: 8 },
  { name: "Tiếng anh chuyên ngành công nghệ thông tin", credit: 2 },
  { name: "Toán chuyên đề 1", credit: 2 },
  { name: "Kinh tế chính trị Mác - Lênin", credit: 2 },
  { name: "Kỹ thuật xử lý ảnh", credit: 2 },
  { name: "Cấu trúc dữ liệu và giải thuật", credit: 3 },
  { name: "Lập trình hướng đối tượng", credit: 3 },
  { name: "Thiết kế đồ họa với Corel Draw", credit: 2 },
  { name: "Thiết kế đồ họa với Illustrator", credit: 2 },
  { name: "Giáo dục thể chất 3", credit: 1 },
  { name: "Giáo dục thể chất 4", credit: 1 },
  { name: "Chủ nghĩa xã hội khoa học", credit: 2 },
  { name: "Tổ chức quản lý sản xuất", credit: 2 },
  { name: "Thiết kế web", credit: 3 },
  { name: "Hệ quản trị cơ sở dữ liệu", credit: 2 },
  { name: "Thực hành đồ họa ứng dụng", credit: 2 },
  { name: "Toán chuyên đề 2", credit: 2 },
  { name: "Nhập môn khoa học giao tiếp", credit: 2 },
  { name: "Cơ sở dữ liệu phân tán", credit: 2 },
  { name: "Tâm lý học", credit: 3 },
  { name: "Tư tưởng Hồ Chí Minh", credit: 2 },
  { name: "Kiến trúc máy tính", credit: 3 },
  { name: "Mạng máy tính", credit: 3 },
  { name: "Phân tích thiết kế hướng đối tượng", credit: 2 },
  { name: "Thực hành phần mềm mô phỏng", credit: 3 },
  { name: "Kỹ thuật xử lý video", credit: 2 },
  { name: "Chế bản điện tử", credit: 2 },
  { name: "Lịch sử Đảng Cộng sản Việt Nam", credit: 2 },
  { name: "Toán rời rạc", credit: 3 },
  { name: "Hệ điều hành mạng", credit: 2 },
  { name: "Lập trình ứng dụng với Java", credit: 3 },
  { name: "Thiết kế mạng", credit: 3 },
  { name: "Thực hành lập trình ứng dụng với Java", credit: 3 },
  { name: "Công nghệ phần mềm", credit: 2 },
  { name: "Quản lý dự án công nghệ thông tin", credit: 2 },
  { name: "Lập trình Web", credit: 3 },
  { name: "Phát triển ứng dụng trên thiết bị di động", credit: 3 },
  { name: "Lập trình Game", credit: 3 },
  { name: "JavaScripts", credit: 2 },
  { name: "Thực hành thiết kế, quản trị và bảo trì hệ thống mạng", credit: 3 },
  { name: "Thực hành phát triển ứng dụng web", credit: 3 },
  { name: "Đồ án chuyên môn công nghệ thông tin", credit: 2 },
  { name: "An toàn và an ninh mạng", credit: 3 },
  { name: "Thực hành phát triển ứng dụng trên thiết bị di động", credit: 3 },
  { name: "Thực hành Lập trình Game", credit: 3 },
  { name: "Trí tuệ nhân tạo", credit: 3 },
  { name: "Lập trình mạng", credit: 3 },
  { name: "Lập trình mã nguồn mở", credit: 3 },
  { name: "Các mô hình phát triển phần mềm hiện đại", credit: 2 },
  { name: "Lập trình API", credit: 2 },
  { name: "Phát triển ứng dụng thương mại điện tử", credit: 3 },
  { name: "Kiểm thử và đảm bảo chất lượng phần mềm", credit: 3 },
  { name: "Thực tập doanh nghiệp", credit: 6 },
  { name: "Đồ án tốt nghiệp", credit: 8 },
  { name: "Điện toán đám mây", credit: 2 },
  { name: "Học máy và ứng dụng", credit: 2 },
];

const tbody = document.querySelector("#table tbody");
const statsDiv = document.getElementById("stats");

function renderTable() {
  tbody.innerHTML = "";
  courses.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" id="score-${index}" value="0" oninput="calculateStats()" />
      </td>
      <td>${item.credit}</td>
    `;
    tbody.appendChild(row);
  });
  calculateStats();
}

function calculateStats() {
  let tongDiem = 0;
  let tongTc = 0;
  let totalCreditsWithScore = 0; // Tổng tín chỉ có điểm lớn hơn 0

  courses.forEach((item, index) => {
    const scoreInput = document.getElementById(`score-${index}`);
    const score = parseFloat(scoreInput.value);

    // Kiểm tra điểm hợp lệ và điểm lớn hơn 0
    if (isNaN(score) || score <= 0 || score > 4) {
      return; // Nếu điểm không hợp lệ hoặc là 0, bỏ qua môn đó
    }

    tongDiem += score * item.credit;
    tongTc += item.credit;

    if (score > 0) {
      totalCreditsWithScore += item.credit; // Cộng tín chỉ nếu điểm lớn hơn 0
    }
  });

  const gpa = tongTc > 0 ? (tongDiem / tongTc).toFixed(2) : 0;
  statsDiv.textContent = `📊 GPA: ${gpa} | Tổng tín chỉ tích luỹ: ${totalCreditsWithScore}`;
}

// Khởi tạo
renderTable();
