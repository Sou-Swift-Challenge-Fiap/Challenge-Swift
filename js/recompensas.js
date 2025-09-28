// (Ajuste os caminhos das imagens conforme seu projeto)
const IMG = {
  dreampedia: "/components/img/card_gift_model.png",
  fastfood:   "/components/img/card_gift_model2.png",
  kids:       "/components/img/card_gift_model3.png",
  zapp:       "/components/img/card_gift_model4.png"
};

const rewards = [
  { id:1,  title:"CARTÃO-PRESENTE DREAMPEDIA", cost:400, img:IMG.dreampedia },
  { id:2,  title:"VALE-COMPRAS FAST FOOD STORE", cost:750, img:IMG.fastfood },
  { id:3,  title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
  { id:3,  title:"CARTÃO-PRESENTE ZAPP MOBILE", cost:120, img:IMG.zapp },
  { id:5,  title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
  { id:6,  title:"CARTÃO-PRESENTE DREAMPEDIA", cost:400, img:IMG.dreampedia },
  { id:7,  title:"VALE-COMPRAS FAST FOOD STORE", cost:750, img:IMG.fastfood },
  { id:8,  title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
  { id:9,  title:"CARTÃO-PRESENTE ZAPP MOBILE", cost:120, img:IMG.zapp },
  { id:10, title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
  { id:11, title:"CARTÃO-PRESENTE DREAMPEDIA", cost:400, img:IMG.dreampedia },
  { id:12, title:"VALE-COMPRAS FAST FOOD STORE", cost:750, img:IMG.fastfood },
  { id:13, title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
  { id:14, title:"CARTÃO-PRESENTE ZAPP MOBILE", cost:120, img:IMG.zapp },
  { id:15, title:"CARTÃO-PRESENTE MUNDO MÁGICO KIDS", cost:650, img:IMG.kids },
];

function renderGrid(list){
  const grid = document.getElementById('rewardsGrid');
  grid.innerHTML = list.map(item => `
    <div class="col">
      <article class="card h-100 swift-card">
        <!-- mídia quadrada, sem cortar -->
        <div class="swift-media">
          <div class="ratio">
            <img src="${item.img}" alt="" loading="lazy">
          </div>
        </div>

        <div class="card-body pb-2 pt-2">
          <h3 class="swift-title">${item.title}</h3>
        </div>

        <div class="card-footer swift-footer">
          <div class="d-flex align-items-center gap-2">
            <span class="swift-cost me-auto">
              <i class="bi bi-coin" aria-hidden="true"></i>${item.cost}
            </span>
            <button class="swift-redeem" data-redeem="${item.id}">Resgatar</button>
            <button class="btn swift-fav" data-fav="${item.id}" aria-pressed="false" title="Favoritar">
              <i class="bi bi-heart" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  `).join('');
}


function bindGridEvents(){
  const grid = document.getElementById('rewardsGrid');

  grid.addEventListener('click', (e) => {
    const fav = e.target.closest('[data-fav]');
    const redeem = e.target.closest('[data-redeem]');

    if (fav){
      fav.classList.toggle('active');
      fav.setAttribute('aria-pressed', fav.classList.contains('active'));
      const icon = fav.querySelector('i');
      if (icon){ icon.classList.toggle('bi-heart'); icon.classList.toggle('bi-heart-fill'); }
    }

    if (redeem){
      const id = Number(redeem.dataset.redeem);
      const item = rewards.find(r => r.id === id);
      if (item) alert(`Resgatar: ${item.title}\nCusto: ${item.cost}`);
    }
  });
}

function setupHero(){
  const hero = document.querySelector('.swift-hero');
  const level = Number(hero.dataset.level || 1);
  const current = Number(hero.dataset.current || 0);
  const next = Number(hero.dataset.nextThreshold || 1);

  const pct = Math.max(0, Math.min(100, (current / next) * 100));
  const remaining = Math.max(next - current, 0);

  document.getElementById('levelNum').textContent = level;
  document.getElementById('levelBar').style.width = `${pct}%`;
  document.getElementById('levelHint').textContent = `${remaining}pts para o próximo nível`;

  // Atalhos (placeholders)
  document.querySelector('.swift-hero').addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    if (btn.dataset.action === 'coins') alert('Abrir “Moedas”.');
    if (btn.dataset.action === 'orders') alert('Abrir “Histórico de Pedidos”.');
  });
}

// Boot
renderGrid(rewards);
bindGridEvents();
setupHero();
