const grid = media.styles({
    size:"790px",
    style:`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 50px;
    `,
    media:"display: block;"
});


const btn = styles(`
    border-radius: 3px;
    padding: 7px 13px;
`);

const container = media.styles({
    size:"790px",
    style:"padding: 50px 16%;",
    media:"padding: 50px 7%;"
});

const support_justify = media.styles({
    size:"790px",
    style:" justify-content: space-between;",
    media:"display: block;"
});

const support_btn = styles(`display: inline-block;`);

const main = function (){
return `
    <div class="container bg-gray-900 text-white">
        <div>
            <h1>{{ main.title }}</h1>
            <p>{{ main.subtitle }}</p>
            <div class="my-20">
                <a href="https://discord.com/oauth2/authorize?client_id=872714206246469662&permissions=8&scope=bot" class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-500 ${btn} line-none">봇 초대하기</a>
                <a href="#help" class="text-gray-200 ${btn} line-none mx-5">더 읽어보기</a>
            </div>
        </div>
        <div>
        </div>
    </div>
    <div class="${container} ${support_justify} bg-gray-800 text-white flex">
        <div>
            <h2 class="m-0">{{ main.support.title }}</h2>
            <p>{{ main.support.info }}</p>
        </div>
        <a class="${btn} ${support_btn} my-5 text-white bg-blue-500 line-none" href="https://discord.gg/d7zEFsbMVN">서버 참여하기</a>
    </div>

    <div class="${grid} container bg-gray-900 text-white ">
        <div>
            <h4 class="text-red-500">관리 기능</h4>
            <h1 class="text-gray-400">라이젠 봇을 초대하고 <span class="text-white">커뮤니티를 관리</span>하여, 깨끗하고 안전한 서버를 만드세요.</h1>
        </div>
        <div>
            
        </div>
    </div>

    <div class="${grid} container bg-gray-900 text-white ">
        <div>
                
        </div>
        <div>
            <h4 class="text-purple-500">음악 기능</h4>
            <h1 class="text-gray-400">기초적인 음악 기능이며, <span class="text-white">고품질 음악</span>을 24/7 끊김없이 제공합니다.</h1>
        </div>
    </div>

    <div class="${grid} container bg-gray-900 text-white ">
        <div>
            <h4 class="text-green-500">경제 기능</h4>
            <h1 class="text-gray-400">경제 기능으로 커뮤니티 사용자와 소통하며 <span class="text-white">커뮤니티 활성화</span>를 할 수 있습니다.</h1>
        </div>
        <div>
                
        </div>
    </div>

    <div class="${container} bg-gray-800 text-white text-center">
        <h1>지금 라이젠 봇을 초대하세요</h1>
        <a href="https://discord.com/oauth2/authorize?client_id=872714206246469662&permissions=8&scope=bot" class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-500 ${btn} line-none inline-block">봇 초대하기</a>
    </div>
`}

nitronDOM.render(placeholders(navs,data) + placeholders(main,data) + placeholders(footer,data),document.getElementById("root"))