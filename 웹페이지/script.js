// 1. 바뀔 내용들을 객체 데이터로 미리 준비해 둡니다.
const tabData = {
  ai: {
    title: "Notion AI",
    desc: "업무용 AI 툴. 더 빠르게 글을 쓰고, 생각하고, 편집하세요.",
    imgText: "✨ AI 기능 미리보기 화면",
  },
  docs: {
    title: "문서",
    desc: "단순한 텍스트를 넘어선 차세대 문서 작성 도구입니다.",
    imgText: "📄 문서 편집기 미리보기 화면",
  },
  wiki: {
    title: "지식 베이스",
    desc: "팀의 모든 지식을 한 곳에 모아 쉽게 검색하고 공유하세요.",
    imgText: "📚 지식 베이스 미리보기 화면",
  },
};

// 2. HTML에서 조작할 요소들을 가져옵니다.
const tabButtons = document.querySelectorAll(".tab-btn");
const tabTitle = document.getElementById("tab-title");
const tabDesc = document.getElementById("tab-desc");
const tabImage = document.getElementById("tab-image");

// 3. 각각의 버튼에 클릭 이벤트를 달아줍니다.
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // - 먼저 모든 버튼의 색상(active 클래스)을 원래대로 되돌립니다.
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // - 내가 방금 클릭한 버튼에만 'active' 클래스를 추가해서 색을 바꿉니다.
    button.classList.add("active");

    // - 클릭한 버튼의 data-tab 값(ai, docs, wiki 중 하나)을 가져옵니다.
    const targetId = button.getAttribute("data-tab");

    // - 가져온 값에 맞는 데이터를 위에서 만든 tabData에서 꺼내옵니다.
    const data = tabData[targetId];

    // - 화면의 텍스트를 새로운 데이터로 교체합니다.
    tabTitle.textContent = data.title;
    tabDesc.textContent = data.desc;
    tabImage.textContent = data.imgText;
  });
});
