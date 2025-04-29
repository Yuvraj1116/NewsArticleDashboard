const articles =[ {
  "id": 1,
  "title": "AI is Changing Everything",
  "author": "Jane Doe",
  "date": "2025-March-18",
  "description": "A quick summary of how AI is reshaping industries...",
  "content": "Artificial Intelligence (AI) is rapidly transforming a wide range of industries by automating tasks, improving decision-making, enhancing customer experiences, and creating new business models. From healthcare and finance to transportation and manufacturing, AI technologies like machine learning, natural language processing, and robotics are driving innovation, increasing efficiency, and opening up new opportunities. Companies that adapt quickly to AI are gaining a competitive edge, while those that lag behind risk falling out of the market."
},
{
  "id": 2,
  "title": "The Future of Renewable Energy",
  "author": "John Smith",
  "date": "2025-April-01",
  "description": "An overview of clean energy trends and technologies...",
  "content": "The future of renewable energy looks promising as global efforts intensify to combat climate change and reduce dependence on fossil fuels. Innovations in solar, wind, hydroelectric, and geothermal technologies are making clean energy more efficient and affordable. Battery storage advancements are solving the problem of intermittent energy supply, while smart grids are improving energy distribution. Governments worldwide are introducing policies and incentives to accelerate the transition to renewables. As costs continue to fall and public demand for sustainable energy grows, renewable sources are expected to dominate the global energy mix in the coming decades."
},
{
    "id": 3,
    "title": "Pahalgam attack",
    "author": "News 24",
    "date": "2025-April-23",
    "description": " The attack resulted in the deaths of 26 people — 25 Indian nationals...",
    "content": "On April 22, 2025, a brutal terrorist attack took place in Baisaran Valley near Pahalgam, Jammu and Kashmir. Five militants, dressed in military uniforms, ambushed a group of tourists. They separated victims based on religion, reportedly asking them to recite Islamic verses or checking for circumcision, and those who failed were executed at close range. The attack resulted in the deaths of 26 people — 25 Indian nationals and one person from Nepal — while over 20 others were injured. Although a group called Kashmir Resistance initially claimed responsibility, Indian intelligence agencies linked the attack to Lashkar-e-Taiba (LeT), with suspicions pointing toward LeT chief Hafiz Saeed. In response, Prime Minister Narendra Modi condemned the attack, announcing strict actions, including downgrading diplomatic ties with Pakistan and suspending the Indus Waters Treaty. Massive search operations were launched in Kashmir, leading to widespread detentions. The international community, including the United States, United Kingdom, China, and the United Nations, strongly condemned the attack, calling it an unacceptable act of violence against civilians. Tensions between India and Pakistan have since escalated significantly."
  },
  {
    "id": 4,
    "title": "Blockchain Beyond Cryptocurrency",
    "author": "Michael Lee",
    "date": "2025-Jan-30",
    "description": "How blockchain is transforming industries other than finance...",
    "content": "Full article content goes here."
  },
  {
    "id": 5,
    "title": "Mental Health in the Digital Age",
    "author": "Emily Davis",
    "date": "2025-Feb-10",
    "description": "The effects of social media and technology on mental well-being...",
    "content": "Full article content goes here."
  }
];

const grid= document.getElementById("article-section");


function renderArticle (data){
  grid.innerHTML = ' '; 
data.forEach((el)=>{
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${el.title}</h2>
  <p>${el.author}, ${(el.date)}</p>
  <p>${el.description}</p>
  <button onclick="openPopup(${el.id})" >Read More</button>
  `;
  grid.appendChild(card)
});
}

const filterInput = document.getElementById("filterinput");
filterInput.addEventListener('input',()=>{
  const query = filterInput.value.toLowerCase();
  const filterData = articles.filter((el) => el.title.toLowerCase().includes(query));
  renderArticle(filterData);
});




const articlePopUP = document.getElementById('article-pop');
const articleTitle = document.getElementById('article-Title');
const articleContent = document.getElementById('article-Content');
const closeBtn = document.getElementById('closeBtn');

function openPopup(id) {
  const article = articles.find(el =>  el.id === id );
  articleTitle.textContent = article.title;
  articleContent.textContent = article.content;
  articlePopUP.style.display = 'flex';
}

closeBtn.onclick = () => {
  articlePopUP.style.display = 'none'; 
}

renderArticle(articles);
