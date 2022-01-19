const grid = styles(`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
`);

function  random(c , l) {
    const chars = c
    const stringLength = l
    let randomstring = ''
    for (let i = 0; i < stringLength; i++) {
        const rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
    }
    return randomstring
};

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
const num = '56789';

const yuka = function (){
return `
    <div class="container bg-gray-900 text-gray-200 text-center">
        <h1>이 웹은 <span class="text-blue-400">Yuka</span>가 제작했습니다.</h1>
        <p>다음과 같은 웹 페이지를 제작하고싶습니까? 지금 디스코드 Yuka#2022 로 문의하십시오 </p>
    </div>
    <div class="container ${grid}">
        <div>
            <h4 class="text-yellow-400 m-0">시작하기</h4>
            <div>
                <h1 class="m-0">웹에서 자신의 플랫폼을 만드십시오.<span class="text-gray-500">정적 웹 뿐 아니라, 콘텐츠를 게시하고, 공유 및 성장시킬 수 있는 솔루션까지 제공합니다.</span></h1>
            </div>
        </div>
    </div>
    <div class="container bg-gray-900 text-white ${grid}">
        <div class="px-20">
            <div class="p-10 border-solid border-3 edge-t-50">
                <p class="text-gray-500">${random(abc,1+random(num,1))} <span class="text-yellow-300 text-500">{{ name }}</span> ${random(abc,1+random(num,1))}</p>
            </div>
            <div class="p-10 border-solid border-3">
            <p class="text-gray-500">${random(abc,1+random(num,1))} <span class="text-green-400 text-900">NAVER</span> ${random(abc,1+random(num,1))}</p>
            </div>
            <div class="p-10 border-solid border-3 edge-b-50">
            <p class="text-gray-500">${random(abc,1+random(num,1))} <span class="text-blue-400 text-500">G</span><span class="text-red-500 text-500">o</span><span class="text-yellow-400 text-500">o</span><span class="text-blue-400 text-500">g</span><span class="text-green-400 text-500">l</span><span class="text-red-500 text-500">e</span> ${random(abc,1+random(num,1))}</p>
            </div>
        </div>
        <div>
            <h4 class="text-purple-400 m-0">동시 성장</h4>
            <div>
                <h1 class="m-0"><span class="text-gray-500">제작이 끝이 아니라 </span>웹이 성장할 수 있도록 도와줍니다.<span class="text-gray-500">구글, 네이버 와 같은 플랫폼에서 상위에 노출 될 수 있도록 지원 합니다.</span></h1>
            </div>
        </div>
    </div>
</div>
`}

nitronDOM.render(placeholders(navs,data) + placeholders(yuka,data) + placeholders(footer,data),document.getElementById("root"))