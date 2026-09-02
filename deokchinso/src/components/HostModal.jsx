import React, { useState } from "react";

export default function HostModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    category: "K-POP",
    title: "",
    location: "",
    date: "",
    author: "덕후유저",
  });

  // 방 개설 완료 상태
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true); // 완료 화면으로 전환
        onSuccess(); // 백엔드 데이터 다시 불러오기
      } else {
        alert("등록에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("통신 에러:", error);
      alert("서버와 통신할 수 없습니다. 백엔드가 켜져 있는지 확인해주세요!");
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      category: "K-POP",
      title: "",
      location: "",
      date: "",
      author: "덕후유저",
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* 헤더 */}
        <div className="modal-header">
          <h3>🎙️ 나만의 동행 방 개설하기</h3>
          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>
        </div>

        {/* 성공했을 때 보여줄 예쁜 완료 화면 */}
        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
            <h3 style={{ color: "#f43f5e", marginBottom: "8px" }}>
              [방 개설 완료!]
            </h3>
            <p
              style={{
                color: "#57534e",
                fontSize: "14px",
                marginBottom: "24px",
                lineHeight: "1.5",
              }}
            >
              제목: {formData.title}
              <br />
              지역: {formData.location}
              <br />
              성공적으로 동행 방이 개설되었습니다.
            </p>
            <button className="submit-btn" onClick={handleClose}>
              확인
            </button>
          </div>
        ) : (
          /* 평소에 보여주는 입력 폼 (수빈 님 원래 클래스명 적용) */
          <form className="host-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>장르 카테고리</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="K-POP">K-POP</option>
                <option value="애니메이션">애니메이션</option>
                <option value="게임">게임</option>
                <option value="만화/웹툰">만화/웹툰</option>
                <option value="뮤지컬">뮤지컬</option>
                <option value="스포츠">스포츠</option>
                <option value="아이돌">아이돌</option>
                <option value="코스프레">코스프레</option>
              </select>
            </div>

            <div className="form-group">
              <label>동행 제목</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="예: 서울 코믹월드 일요일 동행 구해요"
                required
              />
            </div>

            <div className="form-group">
              <label>장소</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="예: 일산 킨텍스"
                required
              />
            </div>

            <div className="form-group">
              <label>날짜</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="예: 8월 25일 (일)"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              방 개설하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
