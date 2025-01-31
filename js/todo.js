// 팝업 열기 (id 매개변수 추가)
function PAMclicked(id) {
    let container = document.getElementById(id);
    if (!container) return; // id가 없으면 함수 종료

    container.style.display = "flex";

    setTimeout(() => {
        container.style.opacity = "1";
    }, 10);

    document.body.style.overflow = "hidden"; // 스크롤 차단
}

// 팝업 닫기 (id 매개변수 추가)
function PAMunclicked(id) {
    let container = document.getElementById(id);
    if (!container) return; // id가 없으면 함수 종료

    container.style.opacity = "0";

    setTimeout(() => {
        container.style.display = "none";
        document.body.style.overflow = "auto"; // 스크롤 다시 허용
    }, 300);
}
