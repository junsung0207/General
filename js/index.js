document.addEventListener("scroll", function () {
    let scrollThreshold = 300; // 특정 스크롤 값 (픽셀 단위)
    // let backgroundContainer = document.querySelector(".background-container");

    // 숨길 클래스 목록 (각각 다른 class명을 사용)
    let targetClassNames = ["back-text-container", "back-dog-maincontainer"];
    
    // 해당 클래스명을 가진 요소들을 모두 가져옴
    let targetElements = targetClassNames.flatMap(className => 
        Array.from(document.querySelectorAll(`.${className}`))
    );

    if (window.scrollY >= scrollThreshold) {
        // 스크롤이 특정 값 이상 내려갔을 때
        // backgroundContainer.style.background = "none"; 

        targetElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transition = "opacity 0.3s ease-in-out"; // 부드럽게 사라지도록
        });

    } else {
        // 다시 위로 올라갔을 때 원래 상태로 복원
        // backgroundContainer.style.background = ""; // 기본 스타일로 돌아가도록

        targetElements.forEach(element => {
            element.style.opacity = "1";
        });
    }
});
