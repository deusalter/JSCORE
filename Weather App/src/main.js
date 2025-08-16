const apiKey = "50661989";
const omdbUrl = (q, p=1) => `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(q)}&page=${p}`;

document.body.style.margin = "0";
document.body.style.background = "#000";
document.body.style.color = "#fff";
document.body.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

const app = document.getElementById("app");
app.style.minHeight = "100vh";


const navBar = document.createElement("header");
navBar.style.position = "sticky";
navBar.style.top = "0";
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.gap = "14px";
navBar.style.padding = "12px 20px";
navBar.style.background = "rgba(0,0,0,.75)";

const brand = document.createElement("div");
brand.style.fontWeight = "700";
const brandBlue = document.createElement("span"); brandBlue.textContent = "prime"; brandBlue.style.color = "#00A8E1";
const brandGray = document.createElement("span"); brandGray.textContent = " video"; brandGray.style.color = "#ddd";
brand.append(brandBlue, brandGray);

const grow = document.createElement("div"); grow.style.flex = "1";

const searchField = document.createElement("input");
searchField.placeholder = "Search movies…";
searchField.style.width = "300px";
searchField.style.padding = "10px 12px";
searchField.style.background = "#121212";
searchField.style.color = "#fff";
searchField.style.border = "1px solid #2a2a2a";
searchField.style.borderRadius = "6px";
searchField.style.outline = "none";

const goButton = document.createElement("button");
goButton.textContent = "Search";
goButton.style.padding = "10px 14px";
goButton.style.background = "#00A8E1";
goButton.style.color = "#001014";
goButton.style.border = "none";
goButton.style.borderRadius = "6px";
goButton.style.fontWeight = "700";
goButton.style.cursor = "pointer";

const userBubble = document.createElement("div");
userBubble.textContent = "U";
userBubble.style.width = "32px";
userBubble.style.height = "32px";
userBubble.style.borderRadius = "50%";
userBubble.style.background = "#1c1c1c";
userBubble.style.display = "grid";
userBubble.style.placeItems = "center";
userBubble.style.color = "#bbb";
userBubble.style.fontSize = "12px";

navBar.append(brand, grow, searchField, goButton, userBubble);
app.appendChild(navBar);

// -------- hero ----------
const stage = document.createElement("section");
stage.style.height = "56vh";
stage.style.minHeight = "360px";
stage.style.position = "relative";
stage.style.display = "flex";
stage.style.alignItems = "flex-end";
stage.style.padding = "32px 20px";
stage.style.backgroundSize = "cover";
stage.style.backgroundPosition = "center";

const fade = document.createElement("div");
fade.style.position = "absolute";
fade.style.inset = "0";
fade.style.background = "linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.7) 60%, #000 100%)";

const textBox = document.createElement("div");
textBox.style.position = "relative";
textBox.style.maxWidth = "820px";
textBox.style.zIndex = "1";

const headline = document.createElement("h1");
headline.style.margin = "0 0 8px";
headline.style.fontSize = "38px";
headline.style.lineHeight = "1.1";

const subline = document.createElement("div");
subline.style.marginBottom = "14px";
subline.style.color = "#bbb";

const playNow = document.createElement("button");
playNow.textContent = "Watch now";
playNow.style.padding = "12px 16px";
playNow.style.background = "#00A8E1";
playNow.style.color = "#001014";
playNow.style.fontWeight = "700";
playNow.style.border = "none";
playNow.style.borderRadius = "8px";
playNow.style.cursor = "pointer";

textBox.append(headline, subline, playNow);
stage.append(fade, textBox);
app.appendChild(stage);

const shelfWrap = document.createElement("div");
shelfWrap.style.padding = "10px 0 24px";
app.appendChild(shelfWrap);

function makeShelf(titleText) {
  const block = document.createElement("section");
  block.style.padding = "8px 20px";

  const label = document.createElement("h2");
  label.textContent = titleText;
  label.style.fontSize = "20px";
  label.style.fontWeight = "700";
  label.style.margin = "4px 0 8px";

  const railBox = document.createElement("div");
  railBox.style.position = "relative";

  const rail = document.createElement("div");
  rail.style.display = "grid";
  rail.style.gridAutoFlow = "column";
  rail.style.gridAutoColumns = "180px";
  rail.style.gap = "12px";
  rail.style.overflowX = "auto";
  rail.style.scrollBehavior = "smooth";
  rail.style.paddingBottom = "6px";

  const prev = document.createElement("button");
  prev.textContent = "‹";
  prev.style.position = "absolute";
  prev.style.top = "50%";
  prev.style.transform = "translateY(-50%)";
  prev.style.left = "2px";
  prev.style.width = "32px";
  prev.style.height = "52px";
  prev.style.background = "rgba(0,0,0,.5)";
  prev.style.color = "#fff";
  prev.style.border = "none";
  prev.style.cursor = "pointer";
  prev.style.borderRadius = "6px";

  const next = document.createElement("button");
  next.textContent = "›";
  next.style.position = "absolute";
  next.style.top = "50%";
  next.style.transform = "translateY(-50%)";
  next.style.right = "2px";
  next.style.width = "32px";
  next.style.height = "52px";
  next.style.background = "rgba(0,0,0,.5)";
  next.style.color = "#fff";
  next.style.border = "none";
  next.style.cursor = "pointer";
  next.style.borderRadius = "6px";

  prev.addEventListener("click", () => rail.scrollBy({ left: -640, behavior: "smooth" }));
  next.addEventListener("click", () => rail.scrollBy({ left: 640, behavior: "smooth" }));

  railBox.append(rail, prev, next);
  block.append(label, railBox);
  shelfWrap.appendChild(block);

  return rail; 
}

const railOne = makeShelf("Trending now");
const railTwo = makeShelf("Action & Adventure");

// -------- explore grid ----------
const exploreLabel = document.createElement("h2");
exploreLabel.textContent = "Explore";
exploreLabel.style.fontSize = "20px";
exploreLabel.style.fontWeight = "700";
exploreLabel.style.margin = "12px 20px 8px";

const posterGrid = document.createElement("div");
posterGrid.id = "bigbox";
posterGrid.style.margin = "0 20px 28px";
posterGrid.style.display = "grid";
posterGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(180px, 1fr))";
posterGrid.style.gap = "14px";

app.append(exploreLabel, posterGrid);

function buildCard(item) {
  const card = document.createElement("div");
  card.style.background = "#1b1b1b";
  card.style.borderRadius = "6px";
  card.style.overflow = "hidden";
  card.style.cursor = "pointer";
  card.style.transition = "transform .2s ease";
  card.onmouseover = () => (card.style.transform = "scale(1.03)");
  card.onmouseout  = () => (card.style.transform = "scale(1)");

  const pic = document.createElement("img");
  pic.src = item.Poster;
  pic.alt = item.Title;
  pic.style.width = "100%";
  pic.style.height = "270px";
  pic.style.objectFit = "cover";

  const textArea = document.createElement("div");
  textArea.style.padding = "8px";
  textArea.style.color = "#fff";

  const infoRow = document.createElement("div");    
  infoRow.style.display = "flex";
  infoRow.style.justifyContent = "space-between";
  infoRow.style.fontSize = "12px";
  infoRow.style.color = "#aaa";

  const yearTag = document.createElement("span");
  yearTag.textContent = item.Year;

  const tiny = document.createElement("span");
  tiny.textContent = "Prime";
  tiny.style.background = "#00A8E1";
  tiny.style.color = "#001014";
  tiny.style.padding = "2px 6px";
  tiny.style.borderRadius = "4px";
  tiny.style.fontSize = "10px";
  tiny.style.fontWeight = "700";

  const nameLine = document.createElement("div");
  nameLine.textContent = item.Title;
  nameLine.style.marginTop = "6px";
  nameLine.style.fontWeight = "700";
  nameLine.style.fontSize = "14px";

  infoRow.append(yearTag, tiny);
  textArea.append(infoRow, nameLine);
  card.append(pic, textArea);

  card.addEventListener("click", () => {
    stage.style.backgroundImage =
      `linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.7)), url(${item.Poster})`;
    headline.textContent = item.Title;
    subline.textContent = `${item.Year || ""} • ${(item.Type || "Title").toUpperCase()}`;
  });

  return card;
}

async function fetchTwenty(q) {
  const [a, b] = await Promise.all([fetch(omdbUrl(q,1)), fetch(omdbUrl(q,2))]);
  const j1 = await a.json(), j2 = await b.json();
  const list = (j1.Search || []).concat(j2.Search || []);
  return list.filter(x => x.Poster && x.Poster !== "N/A");
}

function fillRail(list, rail) { list.forEach(x => rail.appendChild(buildCard(x))); }
function fillGrid(list) { posterGrid.innerHTML = ""; list.forEach(x => posterGrid.appendChild(buildCard(x))); }
function seedStage(first) {
  if (!first) return;
  stage.style.backgroundImage =
    `linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.7)), url(${first.Poster})`;
  headline.textContent = first.Title;
  subline.textContent = `${first.Year || ""} • ${(first.Type || "Title").toUpperCase()}`;
}

(async function init() {
  const listA = await fetchTwenty("star");
  const listB = await fetchTwenty("war");
  fillRail(listA, railOne);
  fillRail(listB, railTwo);
  seedStage(listA[0]);

  const loveA = await fetch(omdbUrl("dog",1)).then(r=>r.json());
  const loveB = await fetch(omdbUrl("dog",2)).then(r=>r.json());
  let movlist = (loveA.Search || []).concat(loveB.Search || []).filter(x=>x.Poster && x.Poster!=="N/A");
  movlist.forEach(m => posterGrid.appendChild(buildCard(m)));
})();

async function runSearch() {
  const q = searchField.value.trim();
  if (!q) return;
  exploreLabel.textContent = `Results for “${q}”`;
  const found = await fetchTwenty(q);
  fillGrid(found);
  seedStage(found[0]);
}
goButton.addEventListener("click", runSearch);
searchField.addEventListener("keydown", (e) => e.key === "Enter" && runSearch());
