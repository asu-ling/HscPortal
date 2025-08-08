// ===== 主視覺輪播（首頁大圖） =====
// ===== 主視覺輪播（首頁大圖） =====
const visualSwiper = new Swiper('.visual-swiper', {
  loop: true,
  navigation: { nextEl: '.visual-swiper-next', prevEl: '.visual-swiper-prev' },
  //pagination: { el: '.visual-swiper-pagination', clickable: true },
  autoplay: { delay: 3500, disableOnInteraction: false }
});

// 圖片（可加連結與文字）
const visualSlides = [
  {
    src: 'action.jpg',
    alt: '112學年度-主題研習',
    caption: '112學年度－主題研習：生成式 AI 在教與學上的應用實例與實作',
    link: 'https://lib.hsc.edu.tw/albumDetail/2860e00756414b03aecd16e28a960966?uuid=022d6c23c1694df9875bc9f45e753a9d#gsc.tab=0'
  },
  {
    src: 'action2.jpg',
    alt: '活動二',
    caption: '校園閱讀推廣月：借書抽好禮',
    link: 'https://lib.hsc.edu.tw/albumDetail/2860e00756414b03aecd16e28a960966?uuid=5a4ddfcec2fd41abad3bb4b385a7861a#gsc.tab=0'
  },
  {
    src: 'action3.jpg',
    alt: '活動三',
    caption: '新進資料庫上線，歡迎試用',
    link: 'https://lib.hsc.edu.tw/albumDetail/2860e00756414b03aecd16e28a960966?uuid=a25a82bbd50649dda544a1c943cd1504#gsc.tab=0'
  }
];

const wrapper = document.querySelector('.visual-swiper .swiper-wrapper');
wrapper.innerHTML = visualSlides.map(s => {
  const figureContent = `
    <img src="${s.src}" alt="${s.alt || ''}">
    ${s.caption ? `<figcaption class="slide-caption">${s.caption}</figcaption>` : ''}
  `;
  return `
    <div class="swiper-slide">
      <figure class="slide-figure">
        ${s.link ? `<a href="${s.link}" target="_blank" rel="noopener noreferrer">${figureContent}</a>` : figureContent}
      </figure>
    </div>
  `;
}).join('');

// 通知 Swiper 重新計算
visualSwiper.update();
visualSwiper.pagination.render();
visualSwiper.pagination.update();





// ===== 最新公告 =====
// ===== 最新公告（連到 announcement.html）=====
// ===== 最新公告 =====
// id 請唯一，且要和 announcements.html 內的資料一致
const announcements = [
  { id: 1, title: '【公告】114年暑假借還書注意事項與開館公告', date: '2025/08/11' },
  { id: 2, title: '圖書館第22期電子報',                     date: '2025/05/02' },
  { id: 3, title: '圖書館第24期電子報',                     date: '2024/05/22' },
  { id: 4, title: '【公告】113端午節開閉館公告',               date: '2024/06/07' },
];

const ul = document.getElementById('announcement-list');
ul.innerHTML = '';

announcements.forEach(a => {
  const li = document.createElement('li');
  li.className = 'announcement-item';
  li.innerHTML = `
    <span class="date">${a.date}</span>
    <!-- 標題連結 -->
    <a class="announcement-link" href="./announcements.html?id=${a.id}" title="${a.title}">
      ${a.title}
    </a>
    <!-- 右側圓形按鈕，也是一個 <a> -->
    <a class="announce-action-btn" href="./announcements.html?id=${a.id}" aria-label="閱讀全文">
      <svg width="28" height="28" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="18" fill="#fff" stroke="#e2e6ea" stroke-width="2"/>
        <g stroke="#169bc9" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M15 23c.8 4 7.2 4 8 0 .4-2.5 2.2-4.6 4.7-4.9a6.2 6.2 0 0 0-12.4 0"/>
          <path d="M14.7 28.1a7.3 7.3 0 0 0 8.6 0"/>
          <path d="M19 19v6"/>
          <path d="M19 12a7 7 0 0 1 7 7"/>
          <path d="M19 12a7 7 0 0 0-7 7"/>
        </g>
      </svg>
    </a>
  `;
  ul.appendChild(li);
});

// ⚠️ 刪掉舊的 click 事件（那個 alert），避免攔住連結導向

// 把原本監聽按鈕並 alert 的這段刪掉：
// ul.addEventListener('click', ...  alert(...) ... );

// ul.addEventListener('click', function(e) {
//   const btn = e.target.closest('.announce-action-btn');
//   if (btn) {
//     const li = btn.closest('li');
//     const index = Array.from(ul.children).indexOf(li);
//     const announce = announcements[index];
//     alert('你點了公告功能按鈕：\n' + (announce ? announce.title : '未知公告'));
//   }
// }); ---->
ul.addEventListener('click', function(e) {
  const btn = e.target.closest('.announce-action-btn');
  if (btn) {
    const li = btn.closest('li');
    const index = Array.from(ul.children).indexOf(li);
    const announce = announcements[index];
    if (announce) {
      location.href = `./announcements.html?id=${announce.id}`;
    }
  }
});


// ===== 焦點新書輪播 =====
/*
const books = [
  { title: '疼痛、復健與肌力訓練...', author: '亞斯', cover: 'book1.jpg' },
  { title: '（圖解版）鍛鍊體幹的正確知識', author: '中野．詹姆士．修一', cover: 'book2.jpg' },
  { title: '用微運動整頓身心', author: '李婉寧', cover: 'book3.jpg' },
  { title: '神奇的自力整體', author: '矢上真理惠', cover: 'book4.jpg' },
  { title: '最新新書範例', author: '新作者', cover: 'book5.jpg' }
];*/
// ===== 焦點新書輪播 =====
const books = [
  {
    title: '疼痛、復健與肌力訓練...',
    author: '亞斯',
    cover: 'books1.jpg',
    pubYear: '2023',
    publisher: '知書出版社',
    callNo: '610.7 1000 2023',
    location: '中文木質書櫃區',
    barcode: 'B001100'
  },
  {
    title: '（圖解版）鍛鍊體幹的正確知識',
    author: '中野．詹姆士．修一',
    cover: 'books2.jpg',
    pubYear: '2022',
    publisher: '健康文化',
    callNo: '610.8 1001 2022',
    location: '中文木質書櫃區',
    barcode: 'B001101'
  },
  {
    title: '用微運動整頓身心',
    author: '李婉寧',
    cover: 'books3.jpg',
    pubYear: '2021',
    publisher: '楓葉社文化',
    callNo: '411.7 8776 2023',
    location: '中文木質書櫃區',
    barcode: 'B001102'
  },
  {
    title: '神奇的自力整體',
    author: '矢上真理惠',
    cover: 'books4.jpg',
    pubYear: '2019',
    publisher: '新經典',
    callNo: '610.9 1003 2019',
    location: '中文木質書櫃區',
    barcode: 'B001103'
  },
  {
    title: '最新新書範例',
    author: '新作者',
    cover: 'books5.jpg',
    pubYear: '2020',
    publisher: '測試出版社',
    callNo: '610.0 1004 2020',
    location: '中文木質書櫃區',
    barcode: 'B001104'
  }
  
];
const bookWrapper = document.getElementById('book-swiper-wrapper');
if (bookWrapper) {
  books.forEach(book => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <img class="book-cover" src="${book.cover}" alt="${book.title}">
      <div class="book-title" title="${book.title}">${book.title}</div>
      <div class="book-author">${book.author}</div>
    `;
    slide.style.cursor = 'pointer';  // 增加 pointer cursor
    slide.onclick = () => showBookModal(book); // 加這行
    bookWrapper.appendChild(slide);
  });
}
const bookSwiper = new Swiper('.book-swiper', {
  slidesPerView: 4,
  spaceBetween: 8,
  navigation: {
    nextEl: '.book-swiper-next',
    prevEl: '.book-swiper-prev',
  },
  pagination: {
    el: '.book-swiper-pagination',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    450: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    1000: { slidesPerView: 4 },
  },
});


// ===== 主題書單輪播 + Modal 彈窗 =====
const themeBooks = [
  {
    title: '夢魂之地',
    author: '平路',
    cover: 'books3.png',
    pubYear: '2023',
    publisher: '聯經出版',
    callNo: '863.55 8776 2023',
    location: '中文木質書櫃區',
    barcode: 'A001100'
  },
  {
    title: '記憶倒數24小時',
    author: '范綱志',
    cover: 'theme2.jpg',
    pubYear: '2022',
    publisher: '時報出版',
    callNo: '863.6 8777 2022',
    location: '中文木質書櫃區',
    barcode: 'A001101'
  },
  {
    title: '陪你去看蘇東坡',
    author: '衣若芬',
    cover: 'theme3.jpg',
    pubYear: '2021',
    publisher: '遠流出版',
    callNo: '863.57 8778 2021',
    location: '中文木質書櫃區',
    barcode: 'A001102'
  },
  {
    title: '沉月之鑰(第一部)',
    author: '作者未知',
    cover: 'theme1.png',
    pubYear: '2019',
    publisher: '新經典',
    callNo: '863.59 8779 2019',
    location: '中文木質書櫃區',
    barcode: 'A001103'
  },
  {
    title: '第五本主題',
    author: '測試',
    cover: 'theme5.jpg',
    pubYear: '2020',
    publisher: '測試出版社',
    callNo: '863.00 8780 2020',
    location: '中文木質書櫃區',
    barcode: 'A001104'
  }
];

const themeWrapper = document.getElementById('theme-swiper-wrapper');
if (themeWrapper) {
  themeBooks.forEach(book => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <img class="theme-book-cover" src="${book.cover}" alt="${book.title}">
      <div class="theme-book-title" title="${book.title}">${book.title}</div>
      <div class="theme-book-author">${book.author}</div>
    `;
    slide.style.cursor = 'pointer';
    slide.onclick = () => showBookModal(book);
    themeWrapper.appendChild(slide);
  });
}
const themeSwiper = new Swiper('.theme-swiper', {
  slidesPerView: 4,
  spaceBetween: 8,
  navigation: {
    nextEl: '.theme-swiper-next',
    prevEl: '.theme-swiper-prev',
  },
  pagination: {
    el: '.theme-swiper-pagination',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    450: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    1000: { slidesPerView: 4 },
  },
});

// ===== Modal 彈窗功能 =====
function showBookModal(book) {
  document.getElementById('bookModalCover').src = book.cover || '';
  document.getElementById('bookModalTitle').textContent = book.title || '-';
  document.getElementById('bookModalAuthor').textContent = book.author || '-';
  document.getElementById('bookModalPubYear').textContent = book.pubYear || '-';
  document.getElementById('bookModalPublisher').textContent = book.publisher || '-';
  document.getElementById('bookModalCallNo').textContent = book.callNo || '-';
  document.getElementById('bookModalLocation').textContent = book.location || '-';
  document.getElementById('bookModalBarcode').textContent = book.barcode || '-';
  document.getElementById('bookModalBg').style.display = 'flex';
}
document.getElementById('bookModalClose').onclick = function() {
  document.getElementById('bookModalBg').style.display = 'none';
};
document.getElementById('bookModalBg').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};

// ===== 回到 Header（頂部）按鈕 =====
document.getElementById('backToTopBtn').onclick = function () {
  const header = document.querySelector('.header');
  if(header) header.scrollIntoView({ behavior: 'smooth' });
};
