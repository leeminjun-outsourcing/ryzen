const info = styles(`
    font-size: 18px;
`)

const commandbg = "bg-gray-900 edge-25 p-15 my-20"
const commandtitle = "mt-0 mb-5 text-white"
const cmdbtn = "mt-5 mr-5 edge-10 hover:bg-blue-600 py-3 px-10 border-solid border-1 inline-block border-blue-600 text-white"

nitron.component("command-prefix", {
    return: `
    <div class="${commandbg}">
    <h2 class="${commandtitle}">접두사</h2>
    <p class="${cmdbtn}"> > </p>
    </div>
`})

nitron.component("command-basic", {
    return: `
        <div class="${commandbg}">
            <h2 class="${commandtitle}">기본 명령어</h2>
            <p class="${cmdbtn}">도움말</p>
            <p class="${cmdbtn}">작동확인</p>
            <p class="${cmdbtn}">유저정보</p>
            <p class="${cmdbtn}">서버정보</p>
            <p class="${cmdbtn}">프사</p>
            <p class="${cmdbtn}">가위바위보</p>
            <p class="${cmdbtn}">서포트</p>
            <p class="${cmdbtn}">하트인증</p>
            <p class="${cmdbtn}">블랙</p>
            <p class="${cmdbtn}">생일</p>
            <p class="${cmdbtn}">생일 등록</p>
            <p class="${cmdbtn}">생일 삭제</p>
        </div>
    `
})

nitron.component("command-music", {
    return: `
    <div class="${commandbg}">
        <h2 class="${commandtitle}">음악</h2>
        <p class="${cmdbtn}">나가</p>
        <p class="${cmdbtn}">재생</p>
        <p class="${cmdbtn}">지금곡</p>
        <p class="${cmdbtn}">들어와</p>
        <p class="${cmdbtn}">일시정지</p>
        <p class="${cmdbtn}">이어재생</p>
        <p class="${cmdbtn}">볼륨</p>
        <p class="${cmdbtn}">반복</p>
        <p class="${cmdbtn}">큐 루프</p>
        <p class="${cmdbtn}">스킵</p>
        <p class="${cmdbtn}">정지</p>
        <p class="${cmdbtn}">노래기록</p>
        <p class="${cmdbtn}">반복확인</p>
        <p class="${cmdbtn}">자동재생</p>
        <p class="${cmdbtn}">이전곡</p>
        <p class="${cmdbtn}">뮤직셋업 (관리자 기능)</p>
    </div>
    `
})

nitron.component("command-management", {
    return: `
    <div class="${commandbg}">
        <h2 class="${commandtitle}">관리</h2>
        <p class="${cmdbtn}">킥</p>
        <p class="${cmdbtn}">밴</p>
        <p class="${cmdbtn}">언밴</p>
        <p class="${cmdbtn}">뮤트</p>
        <p class="${cmdbtn}">언뮤트</p>
        <p class="${cmdbtn}">청소</p>
        <p class="${cmdbtn}">처벌</p>
        <p class="${cmdbtn}">처벌 추가</p>
        <p class="${cmdbtn}">처벌 제거</p>
        <p class="${cmdbtn}">처벌 조회</p>
        <p class="${cmdbtn}">옵션</p>
        <p class="${cmdbtn}">티켓설정</p>
    </div>
    `
})

nitron.component("command-economy", {
    return: `
    <div class="${commandbg}">
        <h2 class="${commandtitle}">경제</h2>
        <p class="${cmdbtn}">가입</p>
        <p class="${cmdbtn}">돈확인</p>
        <p class="${cmdbtn}">지원금</p>
        <p class="${cmdbtn}">도박</p>
        <p class="${cmdbtn}">입금</p>
        <p class="${cmdbtn}">출금</p>
        <p class="${cmdbtn}">탈퇴</p>
    </div>
    `
})

const commandinfo = function(){
return `
    <div class="container bg-gray-900 text-white text-center">
        <h1>{{ name }} 명령어</h1>
        <p class="${info}">기본 명령어부터 관리, 음악, 경제 기능까지 모든것을 가지고있습니다.</p>
    </div>
`}

const command = `
    <div class="container">
        <command-prefix></command-prefix>
        <command-basic></command-basic>
        <command-music></command-music>
        <command-management></command-management>
        <command-economy></command-economy>
    </div>
`

nitronDOM.render(
    placeholders(navs,data) + 
    placeholders(commandinfo,data) + 
    command + 
    placeholders(footer,data),
    document.getElementById("root")
)