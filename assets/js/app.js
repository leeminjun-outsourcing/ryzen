var data = {
    name:"Ryzen Bot",
    main:{
        title:`재미를 추구하는<br><span class="text-yellow-400">라이젠봇<span>`,
        subtitle:"라이젠봇으로 사용하기 쉬운 음악, 관리, 경제<br> 기능으로 내 커뮤니티를 성장시키세요.",
        support:{
            title:"라이젠봇 서포트 서버",
            info:"다른 사용자와 소통할 수 있고, 최신 소식을 받으실 수 있습니다."
        }
    }
};

document.querySelector("title").innerText = "Ryzen Bot - 재미를 추구하는 라이젠봇"

const justify = styles(`
    justify-content: space-between;
`);

const navsstyle = styles(`
    color: #222;
    display: block;
`)

const navslogo = styles(`
    font-size: 20px;
    line-height: 0;
`)
const navslink = styles(`
    float: right;
`)

const footercontainer = media.styles({
    size:"790px",
    style:"padding: 40px 16%;",
    media:"padding: 50px 7%;"
});

const footerlogo = styles(`
    font-size: 24px;
`);

const font13 = styles(`
    font-size: 13px;
`)



const navs = function() {
return `
    <div class="px-15p py-10 text-500 bg-gray-900 ${navsstyle}">
        <a href="https://ryzendash.xyz/" class="${navslogo} text-yellow-400 line-none">{{ name }}</a>
        <div class="${navslink}">
            <a href="https://discord.com/oauth2/authorize?client_id=872714206246469662&permissions=8&scope=bot" class="px-5 text-gray-100 hover:text-gray-200 line-none">초대하기</a>
            <a href="./command" class="px-5 text-gray-100 hover:text-gray-200 line-none">명령어</a>
            <a href="https://discord.com/invite/d7zEFsbMVN" class="px-5 text-gray-100 hover:text-gray-200 line-none">커뮤니티</a>
        </div>
    </div>
`}

const footer = function() {
return `
    <div class="${footercontainer} bg-gray-900 flex ${justify}">
        <div>
            <a class="${footerlogo} text-yellow-400 text-500 block">{{ name }}</a>
            <p class="${font13} text-gray-200 inline-block">Copyright © 2022 {{ name }}</p><span class="text-gray-200 inline-block mx-4">∙</span><a href="./privacy" class="${font13} text-gray-200 hover:text-gray-300 line-none">개인정보 처리방침</a>
        </div>
        <div>
            <p class="${font13} text-gray-200 my-15">Powered by <a href="./yuka" class="text-blue-400 line-none">Yuka</a></p>    
        </div>
    </div>
`}