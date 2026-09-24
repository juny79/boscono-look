const PRODUCTS = [
  { id:"palette", name:"나염팔레트자켓", tag:"BLACK · PRINT", view:"B",
    copy:"색을 입힌 것이 아니라, 먹에 물을 탄 것.",
    img:"https://boscono.co.kr/web/product/medium/202609/1a886965c23514a58a12f5d111f0349c.gif",
    url:"https://boscono.co.kr/product/%EB%82%98%EC%97%BC%ED%8C%94%EB%A0%88%ED%8A%B8%EC%9E%90%EC%BC%93/7656/" },
  { id:"merian", name:"메리언발롱자켓", tag:"VOLUME · UNEVEN", view:"D",
    copy:"앞과 뒤가 같은 시간에 도착하지 않는다.",
    img:"https://boscono.co.kr/web/product/medium/202609/7f586ef657d350f931475dbe1fe0bf36.gif",
    url:"https://boscono.co.kr/product/%EB%A9%94%EB%A6%AC%EC%96%B8%EB%B0%9C%EB%A1%B1%EC%9E%90%EC%BC%93/7657/" },
  { id:"pocket", name:"아방포켓롱조끼", tag:"RETURNED · POCKET", view:"G",
    copy:"여름마다 돌아오는 검은 기둥.",
    img:"https://boscono.co.kr/web/product/medium/202505/ec0a897bb24b3a42674c8eec697f1047.jpg",
    url:"https://boscono.co.kr/product/%EC%95%84%EB%B0%A9%ED%8F%AC%EC%BC%93%EB%A1%B1%EC%A1%B0%EB%81%BC/6452/" },
  { id:"bambi", name:"[B] 밤비셔켓", tag:"B LABEL · SHACKET", view:"H",
    copy:"겉옷인지 속옷인지 고르지 않아도 된다.",
    img:"https://boscono.co.kr/web/product/medium/202608/01064fb2443b9adc3454bfb3c9ca8c16.gif",
    url:"https://boscono.co.kr/product/b%EB%9D%BC%EB%B2%A8-%EB%B0%A4%EB%B9%84%EC%85%94%EC%BC%93/7638/" },
  { id:"nana", name:"[B] 나나점퍼", tag:"B LABEL · BLACK", view:"B",
    copy:"가장 비싼 침묵은 어깨에 있다.",
    img:"https://boscono.co.kr/web/product/medium/202608/ea7d565b236a1a9c1a0b9590b54f0fbd.gif",
    url:"https://boscono.co.kr/product/b%EB%9D%BC%EB%B2%A8-%EB%82%98%EB%82%98%EC%A0%90%ED%8D%BC/7636/" },
  { id:"poky", name:"[B] 포키탑자켓", tag:"B LABEL · CROP", view:"A",
    copy:"길이를 줄이면 태도가 남는다.",
    img:"https://boscono.co.kr/web/product/medium/202608/42648cbd477619ba3dc0a78d83c74f7c.gif",
    url:"https://boscono.co.kr/product/b%EB%9D%BC%EB%B2%A8-%ED%8F%AC%ED%82%A4%ED%83%91%EC%9E%90%EC%BC%93/7630/" },
  { id:"boxy", name:"박시아방셔츠", tag:"DAILY · BOXY", view:"C",
    copy:"몸을 숨기는 셔츠가 아니라, 몸을 그리는 사각형.",
    img:"https://boscono.co.kr/web/product/medium/202607/4c1a2ad89821dc8d4c228bd52da91243.gif",
    url:"https://boscono.co.kr/product/%EB%B0%95%EC%8B%9C%EC%95%84%EB%B0%A9%EC%85%94%EC%B8%A0/7626/" },
  { id:"stitch", name:"라인스티치자켓", tag:"DRAWING · STITCH", view:"E",
    copy:"이 선은 장식이 아니라 구조다.",
    img:"https://boscono.co.kr/web/product/medium/202607/ce3315a49f210d070e1eb75302d5fbe6.gif",
    url:"https://boscono.co.kr/product/%EB%9D%BC%EC%9D%B8%EC%8A%A4%ED%8B%B0%EC%B9%98%EC%9E%90%EC%BC%93/7618/" },
  { id:"lina", name:"[C] 리나끌조끼", tag:"C LABEL · STRING", view:"H",
    copy:"가을의 실험은 항상 끌에서 시작된다.",
    img:"https://boscono.co.kr/web/product/medium/202602/0855b0b133c9fa7d450456fdef895cb6.gif",
    url:"https://boscono.co.kr/product/c%EB%9D%BC%EB%B2%A8-%EB%A6%AC%EB%82%98%EB%81%88%EC%A1%B0%EB%81%BCbctp2182/7471/" },
  { id:"dyna", name:"다이나언발티", tag:"UNEVEN · TEE", view:"A",
    copy:"대칭을 포기한 자리에서 하루가 시작된다.",
    img:"https://boscono.co.kr/web/product/medium/202503/b0c72b5e8e9c514e795c0ebf9c53f103.gif",
    url:"https://boscono.co.kr/product/%EB%8B%A4%EC%9D%B4%EB%82%98%EC%96%B8%EB%B0%9C%ED%8B%B0/7170/" },
  { id:"slit", name:"언발슬릿조끼", tag:"UNEVEN · SLIT", view:"A",
    copy:"슬릿이 열리며 레이어가 보인다.",
    img:"https://boscono.co.kr/web/product/medium/202603/c80b601e630343052ea42f71f59e5ae3.gif",
    url:"https://boscono.co.kr/product/%EC%96%B8%EB%B0%9C%EC%8A%AC%EB%A6%BF%EC%A1%B0%EB%81%BC/7514/" },
  { id:"here", name:"언발헤레조끼", tag:"RETURNED · 6th", view:"G",
    copy:"아방가르드 아이템 중 가장 많이 다시 만들어진 형태.",
    img:"https://boscono.co.kr/web/product/medium/202505/a5d07e4c68258d8520e5d2a9f767c809.gif",
    url:"https://boscono.co.kr/product/%EC%96%B8%EB%B0%9C%ED%97%A4%EB%A0%88%EC%A1%B0%EB%81%BC-6%EC%B0%A8-%EC%B6%94%EA%B0%80%EC%A0%9C%EC%9E%91/7223/" },
  { id:"sinbad", name:"신밓드벌룬팬츠", tag:"VOLUME · PANTS", view:"D",
    copy:"바지가 먼저 도착하고, 사람이 따라온다.",
    img:"https://boscono.co.kr/web/product/medium/202410/80a8d36db47622e64426fb14fbed94ee.gif",
    url:"https://boscono.co.kr/product/%EC%8B%A0%EB%B0%A7%EB%93%9C%EB%B2%8C%EB%A3%AC%ED%8C%AC%EC%B8%A0/7002/" },
  { id:"balloon", name:"벌룬아방롱스커트", tag:"VOLUME · SKIRT", view:"D",
    copy:"걷는 것이 아니라, 공기를 옮기는 일.",
    img:"https://boscono.co.kr/web/product/medium/202503/9eea939c045d014b4f396ba22a7eed49.gif",
    url:"https://boscono.co.kr/product/%EB%B2%8C%EB%A3%AC%EC%95%84%EB%B0%A9%EB%A1%B1%EC%8A%A4%EC%BB%A4%ED%8A%B8bcsk1043/7174/" },
  { id:"noir", name:"누아르원피스", tag:"BLACK · ONEPIECE", view:"B",
    copy:"한 장으로 끝나는 검정.",
    img:"https://boscono.co.kr/web/product/medium/202507/20898a8e93133fe6ba424e601256d67a.gif",
    url:"https://boscono.co.kr/product/%EB%88%84%EC%95%84%EB%A5%B4%EC%9B%90%ED%94%BC%EC%8A%A4/7287/" }
];

const VIEWS = [
  { id:"ALL", label:"ALL" },
  { id:"A", label:"해부" },
  { id:"B", label:"블랙" },
  { id:"C", label:"일상" },
  { id:"D", label:"공기" },
  { id:"E", label:"스티치" },
  { id:"G", label:"재입고" },
  { id:"H", label:"라벨" }
];

const filters = document.getElementById("filters");
const grid = document.getElementById("filmsGrid");
const viewer = document.getElementById("viewer");
let current = "ALL";

function renderFilters() {
  filters.innerHTML = "";
  VIEWS.forEach(v => {
    const b = document.createElement("button");
    b.textContent = v.label;
    b.className = v.id === current ? "on" : "";
    b.onclick = () => { current = v.id; renderFilters(); renderFilms(); };
    filters.appendChild(b);
  });
}

function renderFilms() {
  const list = PRODUCTS.filter(p => current === "ALL" || p.view === current);
  grid.innerHTML = list.map(p => `
    <article class="film" data-id="${p.id}">
      <div class="frame">
        <img src="${p.img}" alt="${p.name}" />
        <span class="play">▶</span>
      </div>
      <h3>${p.name}</h3>
      <p class="copy">${p.copy}</p>
      <a class="go" href="${p.url}" target="_blank" rel="noopener">공식몰에서 보기</a>
    </article>
  `).join("");
  grid.querySelectorAll(".film").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target.closest(".go")) return;
      openViewer(el.dataset.id);
    });
  });
}

function openViewer(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById("viewerImg").src = p.img;
  document.getElementById("viewerTag").textContent = p.tag;
  document.getElementById("viewerTitle").textContent = p.name;
  document.getElementById("viewerCopy").textContent = p.copy;
  document.getElementById("viewerShop").href = p.url;
  viewer.showModal();
}

document.getElementById("closeViewer").onclick = () => viewer.close();
viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });
renderFilters();
renderFilms();
