
const IMG = {
  cream: 'images/image-02.png',
  word: 'images/image-03.png',
  red: 'images/image-04.png',
  lava: 'images/image-05.png',
  roll: 'images/image-06.png',
  crc: 'images/image-07.png',
  matcha: 'images/image-08.png',
  pist: 'images/image-09.png',
  choux: 'images/image-10.png',
  cheese: 'images/image-11.png',
  lotus: 'images/image-12.png',
  short: 'images/image-13.png',
  cr1: 'images/image-14.png',
  cr2: 'images/image-15.png',
  mac: 'images/image-16.png'
};

const $ = s => document.querySelector(s);
const fmt = n => 'Rp ' + n.toLocaleString('id-ID');
const DELIV = 15000, LARGE = 5000;

const vis = i => `<img src="${i.img}" alt="${i.n}" loading="lazy">`;

const ITEMS = [
  {id:1,n:'Red Velvet Berry Slice',c:'Cake',p:28000,r:4.9,v:112,img:IMG.red,d:'Red velvet berlapis krim keju lembut, ditutup stroberi segar dan sejumput remah merah.'},
  {id:2,n:'Strawberry Velvet Roll',c:'Cake',p:26000,r:4.8,v:87,img:IMG.roll,d:'Roll cake red velvet dengan krim vanila dan stroberi, dibingkai rempel krim merah muda.'},
  {id:3,n:'Strawberry Shortcake',c:'Cake',p:27000,r:4.9,v:134,img:IMG.short,d:'Sponge vanila ringan berisi krim dan irisan stroberi, dengan pita krim di atasnya.'},
  {id:4,n:'Strawberry Cream Roll',c:'Cake',p:24000,r:4.7,v:76,img:IMG.cream,d:'Roll cake lembut dengan pusaran krim dan stroberi, ditaburi gula halus.'},
  {id:5,n:'Matcha Oreo Cake',c:'Cake',p:29000,r:4.8,v:91,img:IMG.matcha,d:'Mousse matcha berlapis remah cokelat, dihias krim dan biskuit Oreo.'},
  {id:6,n:'Biscoff Cheesecake',c:'Cheesecake',p:30000,r:4.9,v:143,img:IMG.lotus,d:'Cheesecake creamy dengan saus karamel biskuit dan remah renyah di atasnya.'},
  {id:7,n:'Berry Cheesecake',c:'Cheesecake',p:28000,r:4.8,v:98,img:IMG.cheese,d:'Cheesecake panggang yang lembut dengan saus beri, buah segar, dan gula halus.'},
  {id:8,n:'Cloudy Choco Melt',c:'Cake',p:20000,r:4.8,v:120,img:IMG.lava,d:'Dessert cokelat lembut dengan lelehan cokelat premium yang creamy. Perpaduan manis dan rich-nya cocok untuk menemani waktu santaimu.'},
  {id:9,n:'Strawberry Cloud Croissant',c:'Pastry',p:26000,r:4.7,v:69,img:IMG.crc,d:'Croissant renyah dengan krim stroberi, whipped cream, dan marshmallow mungil.'},
  {id:10,n:'Choco Drizzle Croissant',c:'Pastry',p:24000,r:4.8,v:105,img:IMG.cr1,d:'Croissant berlapis dengan siraman cokelat dan serpihan cokelat di atasnya.'},
  {id:11,n:'Molten Choco Croissant',c:'Pastry',p:25000,r:4.9,v:118,img:IMG.cr2,d:'Croissant garing dengan isian cokelat cair yang meleleh saat dibelah.'},
  {id:12,n:'Choco Cream Puff',c:'Pastry',p:22000,r:4.7,v:64,img:IMG.choux,d:'Kue sus isi krim vanila, dilapisi ganache cokelat yang mengilap.'},
  {id:13,n:'Macaron Garden',c:'Cookies',p:35000,r:4.9,v:58,img:IMG.mac,d:'Macaron warna-warni dengan isian krim, renyah di luar dan lembut di dalam.'},
  {id:14,n:'Dubay Chewy Cookie',c:'Cookies',p:23000,r:4.8,v:52,img:IMG.pist,d:'Kue cokelat berisi pistachio dan cokelat leleh, bertabur pistachio cincang.'},
  {id:15,n:'Blueberry Pie Pocket',c:'Pastry',p:18000,r:4.8,v:61,img:'images/image-17.png',d:'Pie mungil berisi blueberry juicy dengan kulit pastry renyah dan taburan gula halus.'},
  {id:16,n:'Choco Chip Cookies',c:'Cookies',p:16000,r:4.8,v:89,img:'images/image-18.png',d:'Cookies klasik dengan chocolate chips melimpah, renyah di pinggir dan chewy di tengah.'},
  {id:17,n:'Blueberry Cheesecake',c:'Cheesecake',p:32000,r:4.9,v:126,img:'images/image-19.png',d:'Cheesecake creamy dengan topping blueberry segar dan saus beri yang glossy.'},
  {id:18,n:'Chocolate Cheesecake',c:'Cheesecake',p:31000,r:4.8,v:93,img:'images/image-20.png',d:'Cheesecake lembut dengan saus cokelat pekat dan sentuhan mint.'},
  {id:19,n:'Caramel Crunch Cheesecake',c:'Cheesecake',p:33000,r:4.9,v:101,img:'images/image-21.png',d:'Cheesecake klasik dengan saus karamel, whipped cream, dan remah crunchy.'},
  {id:20,n:'Key Lime Cheesecake',c:'Cheesecake',p:30000,r:4.8,v:78,img:'images/image-22.png',d:'Cheesecake lime segar dengan krim lembut, zest lime, dan crumb buttery.'},
  {id:21,n:'Lemon Mint Iced Tea',c:'Minuman',p:18000,r:4.8,v:73,img:'images/image-23.png',d:'Teh dingin lemon dengan mint segar, citrusy dan menyegarkan.'},
  {id:22,n:'Oreo Cream Chocolate',c:'Minuman',p:25000,r:4.9,v:110,img:'images/image-24.png',d:'Minuman cokelat creamy dengan remahan Oreo, whipped cream, dan biskuit di atasnya.'},
  {id:23,n:'Caramel Nut Latte',c:'Minuman',p:26000,r:4.8,v:84,img:'images/image-25.png',d:'Latte dengan foam lembut, karamel, dan taburan kacang renyah.'},
  {id:24,n:'Pistachio Cream Shake',c:'Minuman',p:28000,r:4.9,v:97,img:'images/image-26.png',d:'Pistachio shake creamy dengan whipped cream dan pistachio cincang.'},
  {id:25,n:'Cookie Cream Caramel Frappe',c:'Minuman',p:27000,r:4.9,v:96,img:'images/image-27.png',d:'Minuman kopi dingin dengan saus karamel, krim lembut, dan taburan remah biskuit. Manis, creamy, dan menyegarkan.'},
  {id:26,n:'Caramel Affogato',c:'Minuman',p:29000,r:4.9,v:88,img:'images/image-28.png',d:'Perpaduan espresso dan es krim vanilla dengan swirl karamel yang lembut. Cocok untuk pencinta kopi dan dessert.'}
];

const CATS = ['Semua','Cake','Cheesecake','Pastry','Cookies','Minuman'];
const POP = [8,1,13,17,25];

let cat = 'Semua', cart = [], user = null, toastT;

try {
  cart = JSON.parse(localStorage.getItem('crumella-cart') || '[]');
  user = localStorage.getItem('crumella-user');
} catch(e) {}

const save = () => {
  try { localStorage.setItem('crumella-cart',JSON.stringify(cart)); } catch(e) {}
};

const toast = m => {
  const t = $('#toast');
  t.textContent = m;
  t.classList.add('on');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('on'),2600);
};

const price = l => {
  const i = ITEMS.find(x => x.id == l.id);
  return (i.p + (l.size == 'Large' ? LARGE : 0)) * l.qty;
};

const sub = () => cart.reduce((s,l) => s + price(l),0);

/* Hero dan langkah */
document.querySelectorAll('[data-img]').forEach(e => e.src = IMG[e.dataset.img]);

$('.belt div').innerHTML = [
  'Red velvet','Cheesecake','Choco croissant','Strawberry roll',
  'Macaron','Cloudy choco melt','Matcha cake','Cream puff',
  'Caramel frappe','Affogato'
].map(t => `<span>${t}</span><span>✦</span>`).join('').repeat(2);

$('#steps').innerHTML = [
  ['Pilih dessert','Temukan kue, pastry, dan camilan manis yang dibuat segar setiap hari.'],
  ['Atur pesanan','Pilih ukuran dan jumlah, lalu masukkan ke keranjang.'],
  ['Checkout','Isi alamat, pilih pembayaran, lalu konfirmasi.'],
  ['Pantau pesanan','Ikuti pesananmu dari dapur sampai ke depan pintu.']
].map((t,k) => `<div class="step"><b>${k+1}</b><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join('');

/* Menu */
const card = i => `<button class="card" data-id="${i.id}" data-c="${i.c}">
  <i class="glare"></i>
  <div class="pic">${vis(i)}</div>
  <h3>${i.n}</h3>
  <span class="m">★ ${i.r} (${i.v} review) · ${i.c}</span>
  <span class="pr">${fmt(i.p)}</span>
</button>`;

function renderMenu() {
  const q = $('#q').value.trim().toLowerCase();
  const list = ITEMS.filter(i =>
    (cat == 'Semua' || i.c == cat) && i.n.toLowerCase().includes(q)
  );

  $('#chips').innerHTML = CATS.map(c =>
    `<button class="chip" aria-pressed="${c==cat}" data-cat="${c}">${c}</button>`
  ).join('');

  $('#popWrap').hidden = !!q || cat != 'Semua';
  renderShowcase();
  $('#allT').textContent = q || cat != 'Semua' ? `Hasil (${list.length})` : 'Semua menu';
  $('#all').innerHTML = list.length
    animateCards();
    ? list.map(card).join('')
    : '<p class="empty">Belum ada dessert yang cocok. Coba kata kunci atau kategori lain.</p>';
}

$('#q').oninput = renderMenu;

$('#chips').onclick = e => {
  const b = e.target.closest('[data-cat]');
  if (b) {
    cat = b.dataset.cat;
    renderMenu();
  }
};

document.addEventListener('click',e => {
  const c = e.target.closest('.card');
  if (c) openProd(+c.dataset.id);

  const a = e.target.closest('[data-auth]');
  if (a) openAuth(a.dataset.auth);

  if (e.target.closest('.x')) e.target.closest('dialog').close();
  if (e.target.tagName == 'DIALOG') e.target.close();
});

/* Detail produk */
function openProd(id) {
  const i = ITEMS.find(x => x.id == id);
  let size = 'Reguler', qty = 1;
  const d = $('#dProd');

  const draw = () => {
    d.innerHTML = `<div class="hero-pic${i.img?' ph':''}">${vis(i)}</div>
    <div class="db">
      <div class="row2">
        <div>
          <h3 style="font:700 24px var(--sans)">${i.n}</h3>
          <div style="font-size:22px;margin:2px 0">${fmt(i.p+(size=='Large'?LARGE:0))}</div>
        </div>
        <button class="x" aria-label="Tutup">×</button>
      </div>
      <p style="margin:6px 0"><span style="color:#f0a500">★</span> <b>${i.r}</b> (${i.v} Review)</p>
      <p style="margin:10px 0 16px;color:var(--mute)">${i.d}</p>
      <b>Pilih ukuran</b>
      <div class="opts">
        <button class="opt" aria-pressed="${size=='Reguler'}" data-s="Reguler">Reguler<small>${fmt(i.p)}</small></button>
        <button class="opt" aria-pressed="${size=='Large'}" data-s="Large">Large<small>+ ${fmt(LARGE)}</small></button>
      </div>
      <div class="row2">
        <div class="qty">
          <button data-q="-1" aria-label="Kurangi">−</button>
          <span>${qty}</span>
          <button data-q="1" aria-label="Tambah">+</button>
        </div>
        <button class="btn" id="add">Tambah ke keranjang · ${fmt((i.p+(size=='Large'?LARGE:0))*qty)}</button>
      </div>
    </div>`;
  };

  d.onclick = e => {
    const s = e.target.closest('[data-s]');
    const q = e.target.closest('[data-q]');

    if (s) {
      size = s.dataset.s;
      draw();
    } else if (q) {
      qty = Math.max(1,Math.min(20,qty + +q.dataset.q));
      draw();
    } else if (e.target.closest('#add')) {
      const f = cart.find(l => l.id == id && l.size == size);
      f ? f.qty += qty : cart.push({id,size,qty});
      save();
      upd();
      d.close();
      toast(`${i.n} masuk keranjang`);
    }
  };

  draw();
  d.showModal();
}

/* Keranjang */
function upd() {
  $('#cnt').textContent = cart.reduce((s,l) => s + l.qty,0);
}

function openCart() {
  const d = $('#dCart'), s = sub();

  d.innerHTML = `<div class="dh">
    <h3>Your sweet cart</h3>
    <button class="x" aria-label="Tutup">×</button>
  </div>
  <div class="db">` + (cart.length
    ? cart.map((l,k) => {
        const i = ITEMS.find(x => x.id == l.id);
        return `<div class="item">
          <div class="t">${vis(i)}</div>
          <div class="n">
            <b>${i.n}</b>
            <small>${l.size} · ${fmt(price(l)/l.qty)}</small>
            <div class="qty" style="margin-top:6px">
              <button data-k="${k}" data-q="-1" aria-label="Kurangi">−</button>
              <span>${l.qty}</span>
              <button data-k="${k}" data-q="1" aria-label="Tambah">+</button>
            </div>
          </div>
          <button class="x" data-del="${k}" aria-label="Hapus ${i.n}" style="font-size:16px">🗑</button>
        </div>`;
      }).join('') +
      `<div class="tot">
        <div><span>Subtotal</span><b>${fmt(s)}</b></div>
        <div><span>Delivery</span><b>${fmt(DELIV)}</b></div>
        <div class="g"><span>Total</span><span>${fmt(s+DELIV)}</span></div>
      </div>
      <button class="btn" id="go" style="width:100%;margin-top:20px">Checkout</button>`
    : `<p class="empty" style="padding:40px 0">Keranjangmu masih kosong.<br>Pilih dessert favoritmu dulu.</p>
       <button class="btn" style="width:100%" onclick="$('#dCart').close();location.hash='menu'">Lihat menu</button>`
  ) + `</div>`;

  if (!d.open) d.showModal();
}

$('#dCart').onclick = e => {
  const q = e.target.closest('[data-q]');
  const del = e.target.closest('[data-del]');

  if (q) {
    const l = cart[+q.dataset.k];
    l.qty += +q.dataset.q;
    if (l.qty < 1) cart.splice(+q.dataset.k,1);
    save();
    upd();
    openCart();
  } else if (del) {
    cart.splice(+del.dataset.del,1);
    save();
    upd();
    openCart();
  } else if (e.target.closest('#go')) {
    $('#dCart').close();
    openOut();
  }
};

$('#cartBtn').onclick = openCart;

/* Checkout */
function openOut() {
  const d = $('#dOut'), s = sub();

  d.innerHTML = `<div class="dh">
    <h3>Checkout</h3>
    <button class="x" aria-label="Tutup">×</button>
  </div>
  <form class="db" id="fo">
    <label class="f" for="nm">Nama penerima</label>
    <input class="in" id="nm" required autocomplete="name" value="${user||''}">

    <label class="f" for="ad">Alamat pengiriman</label>
    <input class="in" id="ad" required autocomplete="street-address" placeholder="Jalan, nomor rumah, kota">

    <label class="f" style="margin-bottom:0">Metode pembayaran</label>
    <div class="opts" style="grid-template-columns:1fr;margin-top:8px">
      ${['Transfer bank','E-wallet','Bayar di tempat (COD)'].map((m,k) =>
        `<label class="opt" style="position:relative"><input type="radio" name="pay" ${k?'':'checked'}>${m}</label>`
      ).join('')}
    </div>

    <b>Ringkasan pesanan</b>
    <div class="tot" style="border:0;margin-top:6px">
      ${cart.map(l => `<div>
        <span>${l.qty}× ${ITEMS.find(x => x.id == l.id).n} (${l.size})</span>
        <span>${fmt(price(l))}</span>
      </div>`).join('')}
      <div><span>Delivery</span><span>${fmt(DELIV)}</span></div>
      <div class="g"><span>Total</span><span>${fmt(s+DELIV)}</span></div>
    </div>
    <button class="btn" style="width:100%;margin-top:18px">Konfirmasi pesanan</button>
  </form>`;

  d.showModal();

  $('#fo').onsubmit = e => {
    e.preventDefault();
    cart = [];
    save();
    upd();

    d.innerHTML = `<div class="dh">
      <h3>Pesanan diterima 🎉</h3>
      <button class="x" aria-label="Tutup">×</button>
    </div>
    <div class="db">
      <p style="color:var(--mute)">Terima kasih! Dapur kami mulai menyiapkan dessert-mu.</p>
      <ul class="track">
        <li>Pesanan dikonfirmasi</li>
        <li class="o">Sedang dipanggang di dapur</li>
        <li class="o">Kurir menuju alamatmu</li>
        <li class="o">Sampai, selamat menikmati</li>
      </ul>
      <button class="btn" style="width:100%" onclick="$('#dOut').close()">Kembali ke menu</button>
    </div>`;
  };
}

/* Masuk / daftar */
function openAuth(mode='in') {
  const d = $('#dAuth');

  if (user && !mode.startsWith('up')) {
    d.innerHTML = `<div class="dh">
      <h3>Hi, Sweetie ♡</h3>
      <button class="x" aria-label="Tutup">×</button>
    </div>
    <div class="db">
      <p style="margin-bottom:16px">${user}</p>
      <button class="btn ghost" id="out" style="width:100%">Log out</button>
    </div>`;

    d.showModal();

    $('#out').onclick = () => {
      user = null;
      try { localStorage.removeItem('crumella-user'); } catch(e) {}
      $('#authBtn').textContent = 'Masuk';
      d.close();
      toast('Kamu sudah keluar');
    };
    return;
  }

  const up = mode == 'up';

  d.innerHTML = `<div class="dh">
    <img src="${IMG.word}" alt="Crumella" style="height:42px;margin-right:auto">
    <button class="x" aria-label="Tutup">×</button>
  </div>
  <form class="db" id="fa">
    <div class="tabs" role="tablist">
      <button type="button" role="tab" aria-selected="${!up}" data-m="in">Log In</button>
      <button type="button" role="tab" aria-selected="${up}" data-m="up">Sign Up</button>
    </div>

    ${up ? `<label class="f" for="un">Nama</label><input class="in" id="un" required autocomplete="name">` : ''}

    <label class="f" for="em">Email atau username</label>
    <input class="in" id="em" required autocomplete="username">

    <label class="f" for="pw">Password</label>
    <input class="in" id="pw" type="password" required minlength="6" autocomplete="${up?'new':'current'}-password">

    <button class="btn" style="width:100%;margin-top:20px">${up?'Daftar':'Log In'}</button>
    <p style="text-align:center;color:var(--mute);margin-top:14px;font-size:14px">
      ${up?'Sudah punya akun?':'Belum terdaftar?'}
      <a href="#" data-m="${up?'in':'up'}" style="color:#0b4de0">${up?'Log In':'Sign Up'}</a>
    </p>
  </form>`;

  if (!d.open) d.showModal();

  d.onclick = e => {
    const m = e.target.closest('[data-m]');
    if (m) {
      e.preventDefault();
      openAuth(m.dataset.m);
    } else if (e.target.closest('.x') || e.target === d) {
      d.close();
    }
  };

  $('#fa').onsubmit = e => {
    e.preventDefault();
    user = ($('#un') ? $('#un').value : $('#em').value).trim();
    try { localStorage.setItem('crumella-user',user); } catch(x) {}
    $('#authBtn').textContent = user.split(' ')[0];
    d.close();
    toast(up ? 'Akun dibuat. Diskon pesanan pertama aktif!' : `Halo, ${user}!`);
  };
}

$('#authBtn').onclick = () => openAuth('in');

if (user) $('#authBtn').textContent = user.split(' ')[0];
/* ===== Showcase Menu Populer ===== */
var showT, showI = 0;

const io = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .15 });

document.querySelectorAll('.step').forEach(el => { el.classList.add('rv'); io.observe(el); });

function renderShowcase() {
  const box = $('#pop');
  const items = POP.map(id => ITEMS.find(i => i.id == id));
  const sparks = ['✦','♥','✧','★','✦','♡'].map((s,k) =>
    `<span class="s-spark" style="left:${8 + k*16}%;animation-delay:${k*.8}s">${s}</span>`
  ).join('');

  clearInterval(showT);
  showI = 0;
  box.classList.add('showcase');
  box.classList.remove('in','hold');

  box.innerHTML = `
    <div class="s-stage">
      ${items.map((i,k) => `<img class="s-img${k ? '' : ' on'}" src="${i.img}" alt="${i.n}">`).join('')}
      ${sparks}
      <div class="s-cap">
        <span class="s-no">01</span>
        <div><small>Pilihan favorit</small><b>${items[0].n}</b></div>
        <button class="s-open" type="button">Lihat detail</button>
      </div>
    </div>
    <div class="s-list">
      <p class="s-eyebrow">Best seller</p>
      <h3 class="s-title">Dari oven ke hatimu</h3>
      ${items.map((i,k) => `
        <button class="srow${k ? '' : ' on'}" type="button" style="--k:${k}">
          <img src="${i.img}" alt="">
          <span class="sn"><b>${i.n}</b><small>${i.c} · ★ ${i.r} (${i.v})</small></span>
          <span class="sp">${fmt(i.p)}</span>
        </button>`).join('')}
    </div>`;

  const cap  = box.querySelector('.s-cap');
  const imgs = box.querySelectorAll('.s-img');
  const rows = box.querySelectorAll('.srow');

  const set = k => {
    showI = k;
    imgs.forEach((el,n) => el.classList.toggle('on', n == k));
    rows.forEach((el,n) => el.classList.toggle('on', n == k));
    cap.querySelector('.s-no').textContent = String(k + 1).padStart(2,'0');
    cap.querySelector('b').textContent = items[k].n;
    cap.classList.remove('pulse');
    void cap.offsetWidth;            // restart animasi keterangan
    cap.classList.add('pulse');
  };

  const play = () => {
    clearInterval(showT);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    showT = setInterval(() => set((showI + 1) % items.length), 3500);
  };

  rows.forEach((r,k) => {
    r.addEventListener('pointerenter', e => { if (e.pointerType == 'mouse') set(k); });
    r.addEventListener('focus', () => { if (r.matches(':focus-visible')) set(k); });
    r.addEventListener('click', () => {
      if (r.classList.contains('on')) openProd(items[k].id);
      else { set(k); clearInterval(showT); }   // layar sentuh: ketuk pertama pilih, kedua buka
    });
  });

  box.onpointerenter = e => {
    if (e.pointerType == 'mouse') { box.classList.add('hold'); clearInterval(showT); }
  };
  box.onpointerleave = e => {
    if (e.pointerType != 'mouse') return;
    box.classList.remove('hold');
    play();
  };
  box.querySelector('.s-open').onclick = () => openProd(items[showI].id);

  play();
  io.observe(box);
}
