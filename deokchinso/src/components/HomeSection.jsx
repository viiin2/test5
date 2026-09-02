import React from "react";
import mainBannerImg from "./mainphoto.png";
import {
  categories,
  initialPosts,
  reviews,
  trendingEvents,
} from "../data/mockData";

export default function HomeSection({
  activeCategory,
  setActiveCategory,
  location,
  setLocation,
  locationOptions,
  genre,
  setGenre,
  genreOptions,
  date,
  setDate,
  dateOptions,
  handleSearch,
  setSelectedPost,
  setIsChatModalOpen,
  setSelectedUser,
  setIsProfileModalOpen,
  setIsHostModalOpen,
  setCurrentCondition,
  setIsSearchModalOpen,
}) {
  // 🌟 선택된 카테고리 이름에 따라 initialPosts를 필터링
  // 🌟 카테고리별 정확한 매칭 필터링 로직 수정
  const selectedCategoryObj = categories.find(
    (cat) => cat.id === activeCategory,
  );

  const filteredPosts = initialPosts.filter((post) => {
    if (!selectedCategoryObj) return true;
    const catName = selectedCategoryObj.name;

    if (catName === "K-POP") {
      return post.category === "K-POP";
    }
    if (catName === "아이돌") {
      // 아이돌 카테고리는 K-POP 아이돌이나 '아이돌' 태그가 포함된 항목만 정확히 매칭 (애니메이션 제외)
      return (
        post.category === "아이돌" ||
        (post.category === "K-POP" && post.title.includes("아이돌"))
      );
    }
    if (catName === "애니메이션") {
      return post.category === "애니메이션";
    }
    if (catName === "만화/웹툰") {
      return post.category === "만화/웹툰";
    }
    if (catName === "게임") {
      return post.category === "게임";
    }
    if (catName === "뮤지컬") {
      return post.category === "뮤지컬";
    }
    if (catName === "코스프레") {
      return post.category === "코스프레";
    }
    if (catName === "스포츠") {
      return post.category === "스포츠";
    }
    return post.category === catName;
  });

  return (
    <>
      {/* 카테고리 탭 (클릭 시 해당 장르로 즉시 필터링되도록 변경) */}
      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-item ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <div className="category-icon">{cat.icon}</div>
            <span className="category-name">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* 메인 배너 및 검색창 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-group">
            <span className="badge">누적 매칭 5만 건 돌파</span>
            <span className="badge-text">100% 안전 신원 인증</span>
          </div>
          <h2 className="hero-title">
            함께하면 덕질이 두 배!
            <br />내 곁의 최애 메이트
          </h2>
          <p className="hero-desc">
            혼자 가기 망설여졌던 콘서트, 애니메이션 팝업스토어, 코스프레
            페스티벌까지.
            <br />
            나와 취향이 99% 일치하는 든든한 동행을 안전하게 찾아보세요.
          </p>

          <div className="search-box">
            <div className="search-inputs">
              <div className="input-group">
                <label>📍 지역</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="divider"></div>
              <div className="input-group">
                <label>🎸 장르</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  {genreOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="divider"></div>
              <div className="input-group">
                <label>📅 날짜</label>
                <select value={date} onChange={(e) => setDate(e.target.value)}>
                  {dateOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="search-submit" onClick={handleSearch}>
              🔍 맞춤 최애 메이트 찾기
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={mainBannerImg} alt="메인 배너" className="banner-img" />
        </div>
      </section>

      {/* 실시간 인기 모집 (선택한 장르별로 필터링된 결과 노출) */}
      <section className="section-padding">
        <div className="section-header">
          <div>
            <p className="sub-title">장르별 실시간 모집</p>
            <h3 className="main-title">
              {selectedCategoryObj
                ? `✨ [${selectedCategoryObj.name}] 장르 추천 동행`
                : "지금 모집 중인 덕친소 동행"}
            </h3>
          </div>
          <button
            className="more-btn"
            onClick={() => {
              setCurrentCondition({
                region: "전체",
                genre: "전체",
                date: "전체",
              });
              setIsSearchModalOpen(true);
            }}
          >
            모든 모집방 보기 &rarr;
          </button>
        </div>

        <div className="card-grid-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                className="card"
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  setIsChatModalOpen(true);
                }}
              >
                <div className="card-image-wrapper">
                  <img src={post.img} alt={post.title} className="card-image" />
                  <span className="status-badge">동행 모집중</span>
                </div>
                <div className="card-info">
                  <div className="card-meta">
                    <span className="category">{post.category}</span>
                    <span className="rating">⭐ {post.rating}</span>
                  </div>
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-detail">📅 {post.date}</p>
                  <p className="card-detail">📍 {post.location}</p>
                  <div className="card-footer">
                    <div
                      className="author-info"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUser(post);
                        setIsProfileModalOpen(true);
                      }}
                    >
                      <img
                        src={`https://picsum.photos/seed/${post.author}/100/100`}
                        alt="작성자"
                      />
                      <span>{post.author}</span>
                    </div>
                    <span className="card-tag">{post.tag}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                gridColumn: "span 4",
                textAlign: "center",
                padding: "60px 0",
                color: "#71717a",
              }}
            >
              <p>
                해당 장르로 등록된 실시간 동행 모집글이 없습니다. 첫 호스트가
                되어보세요! 🚀
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 안심 정책 가이드 */}
      <section className="policy-section">
        <div className="policy-grid">
          <div className="policy-item">
            <div className="policy-icon">🛡️</div>
            <div>
              <h4 className="policy-title">안심 본인인증</h4>
              <p className="policy-desc">
                모든 회원은 휴대폰 본인 신원 인증 후에만 동행 매칭 서비스를
                이용할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="policy-item">
            <div className="policy-icon">❤️</div>
            <div>
              <h4 className="policy-title">매너 온도 & 후기</h4>
              <p className="policy-desc">
                이전 메이트들이 직접 작성한 따뜻한 한 줄 평과 신뢰 등급을 미리
                확인해보세요.
              </p>
            </div>
          </div>
          <div className="policy-item">
            <div className="policy-icon">💬</div>
            <div>
              <h4 className="policy-title">안전 안심 대화</h4>
              <p className="policy-desc">
                개인 연락처 공개 없이 덕친소 안에서 약속을 확정 지을 수 있는 톡
                기능 제공.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 리얼 후기 */}
      <section className="section-padding bg-gray">
        <div className="section-header">
          <div>
            <p className="sub-title">신뢰 피드백</p>
            <h3 className="main-title">메이트들을 통해 입증된 리얼 후기</h3>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author-box">
                <img
                  src={`https://picsum.photos/seed/${review.id}/100/100`}
                  alt="리뷰어"
                />
                <div>
                  <p className="review-author-name">{review.author}</p>
                  <p className="review-author-event">{review.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 트렌딩 이벤트 */}
      <section className="section-padding">
        <div className="section-header">
          <div>
            <p className="sub-title">트렌딩 이벤트</p>
            <h3 className="main-title">지금 가장 핫한 동행 이벤트지</h3>
          </div>
        </div>
        <div className="trending-grid">
          {trendingEvents.map((event) => (
            <div
              className="trending-card"
              key={event.id}
              onClick={() => {
                setCurrentCondition({
                  region: "전체",
                  genre: event.title,
                  date: "진행중",
                });
                setIsSearchModalOpen(true);
              }}
            >
              <img src={event.img} alt={event.title} className="trending-img" />
              <div className="trending-info">
                <h4 className="trending-title">{event.title}</h4>
                <p className="trending-desc">{event.desc}</p>
                <p className="trending-count">
                  🔥 {event.count}명 동행 구하는 중
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 배너 CTA */}
      <section className="section-padding">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">
              나만의 덕질 일정이 있나요?
              <br />
              직접 동행 호스트가 되어보세요!
            </h2>
            <p className="cta-desc">
              애니메이션 팝업스토어 오픈런, 코스프레 촬영, 굿즈 대리구매 등
              함께하고 싶은 스케줄을 열어 마음이 통하는 베스트 메이트들을
              모아보세요.
            </p>
            <button
              className="cta-btn"
              onClick={() => setIsHostModalOpen(true)}
            >
              방 개설하기 (무료)
            </button>
          </div>
          <div className="cta-image">
            <img
              src="https://picsum.photos/seed/anime2/400/300"
              alt="호스트 이미지"
            />
          </div>
        </div>
      </section>
    </>
  );
}
