import { useState } from "react";

export default function HostModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "K-POP",
    location: "",
    date: "",
    maxPeople: "2",
    description: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `[방 개설 완료!]\n제목: ${formData.title}\n지역: ${formData.location}\n성공적으로 동행 방이 개설되었습니다.`,
    );
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>🎉 동행 방 개설하기</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>이벤트/모임 이름</label>
            <input
              type="text"
              placeholder="예: NCT DREAM 콘서트 스탠딩 함께 가실 분!"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>장르 카테고리</label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="K-POP">K-POP</option>
                <option value="애니메이션">애니메이션</option>
                <option value="게임">게임</option>
                <option value="뮤지컬">뮤지컬</option>
                <option value="스포츠">스포츠</option>
                <option value="코스프레">코스프레</option>
              </select>
            </div>

            <div className="form-group">
              <label>모집 인원 (본인 포함)</label>
              <select
                value={formData.maxPeople}
                onChange={(e) =>
                  setFormData({ ...formData, maxPeople: e.target.value })
                }
              >
                <option value="2">2명 (1:1 메이트)</option>
                <option value="3">3명</option>
                <option value="4">4명 (그룹)</option>
                <option value="6">6명 이하</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>진행 지역 / 장소</label>
              <input
                type="text"
                placeholder="예: 고척 스카이돔 / 잠실 주경기장"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>만남 일시</label>
              <input
                type="text"
                placeholder="예: 5월 12일 (금) 오후 4시"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>소개 및 동행 규칙</label>
            <textarea
              rows="4"
              placeholder="티켓팅 인증 방식, 만나는 장소, 굿즈 줄서기 계획 등을 자유롭게 적어주세요!"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            방 오픈하기
          </button>
        </form>
      </div>
    </div>
  );
}
