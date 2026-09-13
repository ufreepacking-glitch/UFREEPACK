// UFREEPACK shared app — auto-generated
// Depends on: assets/i18n.js (must load first, sets window.tr)
// All functions are global so inline onclick="switchCat(i)" works.

// Bind local shorthand `tr` -> `window.tr` to eliminate "tr is not defined" under any load pattern
window.tr = window.tr || (typeof tr !== 'undefined' ? tr : {});
/* global tr */
var tr = window.tr;

let curLang = localStorage.getItem('lang') || 'en';
let curPage = 1;
const langCodeMap={en:'EN',zh:'ZH',ja:'JA',es:'ES',ar:'AR',ko:'KO',pt:'PT'};
function applyLang(lang) {
  curLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const v = T(k);
    if (v !== k) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    const v = T(k);
    if (v !== k) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = (el.getAttribute('data-i18n-attr') || '').split('|');
    for (let i = 0; i < pairs.length; i++) {
      const kv = pairs[i].split(':');
      if (kv[0] && kv[1]) {
        const v = T(kv[1]);
        if (v !== kv[1]) el.setAttribute(kv[0], v);
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('#langMenu button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const lc=document.getElementById('langCurrent');
  if(lc) lc.textContent=langCodeMap[lang]||'EN';
  if(typeof renderSidebar==='function'){renderSidebar();renderMobileSelect();renderProducts();}
  if(typeof buildMarquee==='function') buildMarquee();
}

/* ===== LANG DROPDOWN ===== */
const langDropdown=document.getElementById('langDropdown');
const langTrigger=document.getElementById('langTrigger');
if(langTrigger){
  langTrigger.addEventListener('click',(e)=>{
    e.stopPropagation();
    var open=langDropdown.classList.toggle('open');
    langTrigger.setAttribute('aria-expanded',open?'true':'false');
  });
  document.addEventListener('click',()=>{langDropdown.classList.remove('open');langTrigger.setAttribute('aria-expanded','false');});
  document.querySelectorAll('#langMenu button[data-lang]').forEach(b=>{
    b.addEventListener('click',()=>{
      applyLang(b.dataset.lang);
      langDropdown.classList.remove('open');
      langTrigger.setAttribute('aria-expanded','false');
    });
  });
}
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ===== NAV ===== */
const nav = document.getElementById('nav');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  backTop.classList.toggle('visible', y > 600);
});

/* ===== MOBILE MENU ===== */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  var open=mobileMenu.classList.contains('active');
  navToggle.setAttribute('aria-expanded',open?'true':'false');
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  navToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
  navToggle.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}));

/* ===== BACK TOP ===== */
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== PRODUCT CENTER ===== */
const prodCats={
  industry:[
    ['Chocolate Box','巧克力盒','チョコレート缶',87],['Candy Box','糖果盒','キャンディ缶',65],['Chewing Gum Box','口香糖盒','チューインガム缶',42],['Cookie Jar','饼干罐','クッキー缶',78],['Cigarette Box','烟盒','タバコ缶',35],['Wine Tin','酒罐','ワイン缶',28],['Tea Tin','茶叶罐','ティー缶',156],['Coffee Tin','咖啡罐','コーヒー缶',89],['Mooncake Box','月饼盒','月餅缶',67],['Cosmetics & Perfume','化妆品&香水盒','化粧品・香水缶',54],['Medicine Box','医药盒','医薬品缶',43],['Health Product','保健品盒','健康食品缶',38],['Spice Tin','调味罐','調味料缶',31],['Lunch Box','午餐盒','ランチボックス',45],['Other Food Tins','其它食品罐','その他食品缶',62],['Coin Bank','钱罐','貯金箱',25],['Candle Tin','蜡烛罐','キャンドル缶',48],['Stationery Box','文具盒','文房具箱',33],['Pen Holder','笔筒','ペン立て',22],['CD/DVD Box','CD/DVD盒','CD/DVD箱',18],['Game Box','游戏盒','ゲーム箱',15],['Soap Box','肥皂盒','ソープ箱',27],['Tool Box','工具盒','ツール箱',30],['Milk Tin','牛奶罐','ミルク缶',20],['Watch Box','手表盒','腕時計箱',24],['Thermometer','温度计','温度計缶',12],['Dial Plate','表盘','ダイヤルプレート',8],['Glasses Case','眼镜盒','メガネケース',19],['Tissue Box','纸巾盒','ティッシュ箱',26],['Ashtray','烟灰缸','灰皿',14],['Condom Box','避孕套盒','コンドーム箱',10],['Brooch Tin','胸针','ブローチ缶',11],['Badge Tin','徽章','バッジ缶',13],['Coaster','杯垫','コースター',29],['Metal Plate','铁牌','金属プレート',16],['Lids','盖子','蓋',37],['Tray','托盘','トレイ',41],['Ice Bucket','冰桶','アイスバケツ',17],['Paint Bucket','油漆桶','ペイントバケツ',9],['PET Bucket','PET桶','PETバケツ',7]
  ],
  shape:[
    ['Round Tin','圆罐','丸型缶',180],['Small Round Tin','小圆罐','小丸型缶',95],['Square Tin','方罐','四角缶',120],['Egg Tin','蛋罐','卵型缶',32],['Ball Tin','球罐','ボール缶',28],['Car Shape Tin','车形罐','車型缶',15],['Book Shape Box','书本盒','ブック型箱',42],['Heart Shape Tin','心形罐','ハート型缶',67],['Oval Tin','椭圆罐','楕円缶',38],['Triangle Tin','三角罐','三角缶',12],['Pentagon Tin','五角罐','五角缶',8],['Hexagon Tin','六角罐','六角缶',10],['Octagon Tin','八角罐','八角缶',14],['Small Tin','小罐','小缶',55],['Nesting Tins','套罐','セット缶',22],['Irregular Shape','异形罐','異形缶',48],['Suitcase & Handle','手提箱&手挽罐','スーツケース・ハンドル缶',18],['Drawer Box','推拉盒','引出し箱',25],['Bottle Shape Tin','汽水瓶罐','ボトル型缶',13],['Pull-Tab Tin','易拉罐','プルタブ缶',20],['Animal Shape Tin','动物罐','動物型缶',30],['Sock Tin','袜子罐','ソックス缶',8],['House Shape Tin','屋形罐','ハウス型缶',11]
  ],
  structure:[
    ['Music Tin','音乐罐','音楽缶',18],['Zipper Tin','拉链罐','ジッパー缶',22],['Window Tin','开窗罐','窓付き缶',35],['Magnet Plate','磁铁牌','マグネットプレート',12],['Double Wire Tin','双铁线罐','ダブルワイヤー缶',8],['Galvanized Tin','白铁罐','亜鉛メッキ缶',15],['Aluminum Tin','铝罐','アルミ缶',20],['Special Tin','特殊罐','特殊缶',10]
  ],
  holiday:[
    ['Christmas Tin','圣诞节罐','クリスマス缶',45],['Easter Tin','复活节罐','イースター缶',18],['Promotional Tin','促销品罐','販促缶',67],['Gift Tin','礼品罐','ギフト缶',89],['Other Holiday','其它节日罐','その他祝日缶',23]
  ]
};
const langIdx={en:0,zh:1,ja:2};
const prodCatExtra={
  es:{'Chocolate Box':'Caja de Chocolate','Candy Box':'Caja de Caramelos','Chewing Gum Box':'Caja de Chicle','Cookie Jar':'Tarro de Galletas','Cigarette Box':'Caja de Cigarrillos','Wine Tin':'Lata de Vino','Tea Tin':'Lata de Té','Coffee Tin':'Lata de Café','Mooncake Box':'Caja de Pastel de Luna','Cosmetics & Perfume':'Cosméticos y Perfume','Medicine Box':'Caja de Medicina','Health Product':'Producto de Salud','Spice Tin':'Lata de Especias','Lunch Box':'Caja de Almuerzo','Other Food Tins':'Otras Latas de Alimentos','Coin Bank':'Alcancía','Candle Tin':'Lata de Vela','Stationery Box':'Caja de Papelería','Pen Holder':'Portalápices','CD/DVD Box':'Caja de CD/DVD','Game Box':'Caja de Juego','Soap Box':'Caja de Jabón','Tool Box':'Caja de Herramientas','Milk Tin':'Lata de Leche','Watch Box':'Caja de Reloj','Thermometer':'Termómetro','Dial Plate':'Esfera','Glasses Case':'Estuche de Gafas','Tissue Box':'Caja de Pañuelos','Ashtray':'Cenicero','Condom Box':'Caja de Condones','Brooch Tin':'Lata de Broche','Badge Tin':'Lata de Insignia','Coaster':'Posavasos','Metal Plate':'Placa de Metal','Lids':'Tapas','Tray':'Bandeja','Ice Bucket':'Cubo de Hielo','Paint Bucket':'Cubo de Pintura','PET Bucket':'Cubo PET','Round Tin':'Lata Redonda','Small Round Tin':'Lata Redonda Pequeña','Square Tin':'Lata Cuadrada','Egg Tin':'Lata de Huevo','Ball Tin':'Lata Esférica','Car Shape Tin':'Lata Forma de Coche','Book Shape Box':'Caja Forma de Libro','Heart Shape Tin':'Lata Forma de Corazón','Oval Tin':'Lata Ovalada','Triangle Tin':'Lata Triangular','Pentagon Tin':'Lata Pentagonal','Hexagon Tin':'Lata Hexagonal','Octagon Tin':'Lata Octogonal','Small Tin':'Lata Pequeña','Nesting Tins':'Latas Anidadas','Irregular Shape':'Forma Irregular','Suitcase & Handle':'Maleta y Asa','Drawer Box':'Caja de Cajones','Bottle Shape Tin':'Lata Forma de Botella','Pull-Tab Tin':'Lata de Anilla','Animal Shape Tin':'Lata Forma de Animal','Sock Tin':'Lata de Calcetín','House Shape Tin':'Lata Forma de Casa','Music Tin':'Lata de Música','Zipper Tin':'Lata Cremallera','Window Tin':'Lata con Ventana','Magnet Plate':'Placa de Imán','Double Wire Tin':'Lata de Doble Alambre','Galvanized Tin':'Lata Galvanizada','Aluminum Tin':'Lata de Aluminio','Special Tin':'Lata Especial','Christmas Tin':'Lata de Navidad','Easter Tin':'Lata de Pascua','Promotional Tin':'Lata Promocional','Gift Tin':'Lata de Regalo','Other Holiday':'Otras Festividades'},
  ar:{'Chocolate Box':'علبة شوكولاتة','Candy Box':'علبة حلوى','Chewing Gum Box':'علبة علكة','Cookie Jar':'وعاء بسكويت','Cigarette Box':'علبة سجائر','Wine Tin':'علبة نبيذ','Tea Tin':'علبة شاي','Coffee Tin':'علبة قهوة','Mooncake Box':'علبة كعكة القمر','Cosmetics & Perfume':'مستحضرات تجميل وعطور','Medicine Box':'علبة دواء','Health Product':'منتج صحي','Spice Tin':'علبة بهارات','Lunch Box':'علبة غداء','Other Food Tins':'علب أطعمة أخرى','Coin Bank':'حصالة','Candle Tin':'علبة شمعة','Stationery Box':'علبة قرطاسية','Pen Holder':'حامل أقلام','CD/DVD Box':'علبة CD/DVD','Game Box':'علبة ألعاب','Soap Box':'علبة صابون','Tool Box':'علبة أدوات','Milk Tin':'علبة حليب','Watch Box':'علبة ساعات','Thermometer':'ميزان حرارة','Dial Plate':'قرص','Glasses Case':'علبة نظارات','Tissue Box':'علبة مناديل','Ashtray':'منفضة سجائر','Condom Box':'علبة واقي ذكري','Brooch Tin':'علبة بروش','Badge Tin':'علبة شارة','Coaster':'تحتانية','Metal Plate':'لوح معدني','Lids':'أغطية','Tray':'صينية','Ice Bucket':'دلو ثلج','Paint Bucket':'دلو طلاء','PET Bucket':'دلو PET','Round Tin':'علبة دائرية','Small Round Tin':'علبة دائرية صغيرة','Square Tin':'علبة مربعة','Egg Tin':'علبة بيض','Ball Tin':'علبة كروية','Car Shape Tin':'علبة بشكل سيارة','Book Shape Box':'علبة بشكل كتاب','Heart Shape Tin':'علبة بشكل قلب','Oval Tin':'علبة بيضاوية','Triangle Tin':'علبة مثلثة','Pentagon Tin':'علبة خماسية','Hexagon Tin':'علبة سداسية','Octagon Tin':'علبة ثمانية','Small Tin':'علبة صغيرة','Nesting Tins':'علب متداخلة','Irregular Shape':'شكل غير منتظم','Suitcase & Handle':'حقيبة ومقبض','Drawer Box':'علبة أدراج','Bottle Shape Tin':'علبة بشكل زجاجة','Pull-Tab Tin':'علبة بحلقة سحب','Animal Shape Tin':'علبة بشكل حيوان','Sock Tin':'علبة جوارب','House Shape Tin':'علبة بشكل بيت','Music Tin':'علبة موسيقى','Zipper Tin':'علبة بسحاب','Window Tin':'علبة بنافذة','Magnet Plate':'لوح مغناطيسي','Double Wire Tin':'علبة سلك مزدوج','Galvanized Tin':'علبة مجلفنة','Aluminum Tin':'علبة ألمنيوم','Special Tin':'علبة خاصة','Christmas Tin':'علبة عيد الميلاد','Easter Tin':'علبة عيد الفصح','Promotional Tin':'علبة ترويجية','Gift Tin':'علبة هدايا','Other Holiday':'مناسبات أخرى'},
  ko:{'Chocolate Box':'초콜릿 상자','Candy Box':'사탕 상자','Chewing Gum Box':'껌 상자','Cookie Jar':'쿠키 통','Cigarette Box':'담배 상자','Wine Tin':'와인 통','Tea Tin':'차 통','Coffee Tin':'커피 통','Mooncake Box':'월병 상자','Cosmetics & Perfume':'화장품 및 향수','Medicine Box':'의약품 상자','Health Product':'건강 제품','Spice Tin':'향신료 통','Lunch Box':'도시락','Other Food Tins':'기타 식품 통','Coin Bank':'저금통','Candle Tin':'캔들 통','Stationery Box':'문구 상자','Pen Holder':'펜꽂이','CD/DVD Box':'CD/DVD 상자','Game Box':'게임 상자','Soap Box':'비누 상자','Tool Box':'공구 상자','Milk Tin':'우유 통','Watch Box':'시계 상자','Thermometer':'온도계','Dial Plate':'다이얼 플레이트','Glasses Case':'안경집','Tissue Box':'티슈 상자','Ashtray':'재떨이','Condom Box':'콘돔 상자','Brooch Tin':'브로치 통','Badge Tin':'배지 통','Coaster':'코스터','Metal Plate':'금속판','Lids':'뚜껑','Tray':'트레이','Ice Bucket':'아이스 버킷','Paint Bucket':'페인트 통','PET Bucket':'PET 통','Round Tin':'원형 틴','Small Round Tin':'소형 원형 틴','Square Tin':'사각 틴','Egg Tin':'달걀형 틴','Ball Tin':'공형 틴','Car Shape Tin':'차형 틴','Book Shape Box':'북형 상자','Heart Shape Tin':'하트형 틴','Oval Tin':'타원형 틴','Triangle Tin':'삼각형 틴','Pentagon Tin':'오각형 틴','Hexagon Tin':'육각형 틴','Octagon Tin':'팔각형 틴','Small Tin':'소형 틴','Nesting Tins':'중첩 틴','Irregular Shape':'불규칙형','Suitcase & Handle':'슈트케이스 및 손잡이','Drawer Box':'서랍 상자','Bottle Shape Tin':'보틀형 틴','Pull-Tab Tin':'풀탭 틴','Animal Shape Tin':'동물형 틴','Sock Tin':'양말 통','House Shape Tin':'하우스형 틴','Music Tin':'음악 통','Zipper Tin':'지퍼 통','Window Tin':'창문 통','Magnet Plate':'마그넷 플레이트','Double Wire Tin':'더블 와이어 통','Galvanized Tin':'아연도 통','Aluminum Tin':'알루미늄 통','Special Tin':'특수 통','Christmas Tin':'크리스마스 통','Easter Tin':'부활절 통','Promotional Tin':'프로모션 통','Gift Tin':'선물 통','Other Holiday':'기타 명절'},
  pt:{'Chocolate Box':'Caixa de Chocolate','Candy Box':'Caixa de Doces','Chewing Gum Box':'Caixa de Chiclete','Cookie Jar':'Pote de Biscoitos','Cigarette Box':'Caixa de Cigarros','Wine Tin':'Lata de Vinho','Tea Tin':'Lata de Chá','Coffee Tin':'Lata de Café','Mooncake Box':'Caixa de Bolinho Lunar','Cosmetics & Perfume':'Cosméticos e Perfume','Medicine Box':'Caixa de Medicamento','Health Product':'Produto de Saúde','Spice Tin':'Lata de Especiarias','Lunch Box':'Lancheira','Other Food Tins':'Outras Latas de Alimentos','Coin Bank':'Cofrinho','Candle Tin':'Lata de Vela','Stationery Box':'Caixa de Papelaria','Pen Holder':'Porta-lápis','CD/DVD Box':'Caixa de CD/DVD','Game Box':'Caixa de Jogo','Soap Box':'Caixa de Sabão','Tool Box':'Caixa de Ferramentas','Milk Tin':'Lata de Leite','Watch Box':'Caixa de Relógio','Thermometer':'Termômetro','Dial Plate':'Mostrador','Glasses Case':'Estojo de Óculos','Tissue Box':'Caixa de Lenços','Ashtray':'Cinzeiro','Condom Box':'Caixa de Preservativos','Brooch Tin':'Lata de Broche','Badge Tin':'Lata de Distintivo','Coaster':'Porta-copo','Metal Plate':'Placa de Metal','Lids':'Tampas','Tray':'Bandeja','Ice Bucket':'Balde de Gelo','Paint Bucket':'Balde de Tinta','PET Bucket':'Balde PET','Round Tin':'Lata Redonda','Small Round Tin':'Lata Redonda Pequena','Square Tin':'Lata Quadrada','Egg Tin':'Lata de Ovo','Ball Tin':'Lata Esférica','Car Shape Tin':'Lata Forma de Carro','Book Shape Box':'Caixa Forma de Livro','Heart Shape Tin':'Lata Forma de Coração','Oval Tin':'Lata Ovalada','Triangle Tin':'Lata Triangular','Pentagon Tin':'Lata Pentagonal','Hexagon Tin':'Lata Hexagonal','Octagon Tin':'Lata Octogonal','Small Tin':'Lata Pequena','Nesting Tins':'Latas Encaixadas','Irregular Shape':'Forma Irregular','Suitcase & Handle':'Mala e Alça','Drawer Box':'Caixa de Gaveta','Bottle Shape Tin':'Lata Forma de Garrafa','Pull-Tab Tin':'Lata de Abertura Fácil','Animal Shape Tin':'Lata Forma de Animal','Sock Tin':'Lata de Meia','House Shape Tin':'Lata Forma de Casa','Music Tin':'Lata de Música','Zipper Tin':'Lata com Zíper','Window Tin':'Lata com Janela','Magnet Plate':'Placa de Ímã','Double Wire Tin':'Lata de Arame Duplo','Galvanized Tin':'Lata Galvanizada','Aluminum Tin':'Lata de Alumínio','Special Tin':'Lata Especial','Christmas Tin':'Lata de Natal','Easter Tin':'Lata de Páscoa','Promotional Tin':'Lata Promocional','Gift Tin':'Lata de Presente','Other Holiday':'Outros Feriados'}
};



/* ===== 图片 → 标签映射（基于 product-1..78.webp 实际内容） ===== */
const prodImgTags={
  1:['tea','round'],2:['chocolate','gift','rectangular'],3:['heart','valentine','gift'],
  4:['tea','coffee','round','tall'],5:['gift','rectangular','floral'],
  6:['chocolate','confectionery','book','rectangular'],7:['tea','confectionery','rectangular','ornate'],
  8:['gift','confectionery','rectangular','scenic'],9:['candy','novelty','round'],
  10:['electronics','novelty','round'],11:['candy','confectionery','round'],12:['candy','novelty','round'],
  13:['electronics','novelty','round'],14:['electronics','cosmetic','rectangular'],
  15:['electronics','rectangular'],16:['electronics','cosmetic','rectangular'],
  17:['gift','confectionery','rectangular','beach'],18:['tea','rectangular','tall'],
  19:['tea','coffee','round','tall'],20:['gift','triangular','valentine'],
  21:['spice','round','tall'],22:['spice','round'],23:['holiday','christmas','gift','rectangular'],
  24:['electronics','rectangular'],25:['candy','valentine','round'],
  26:['tea','coffee','rectangular'],27:['electronics','rectangular'],
  28:['chocolate','candy','round'],29:['gift','square'],30:['tea','oval'],
  31:['coffee','round','tall'],32:['food','confectionery','rectangular'],
  33:['holiday','christmas','square'],34:['holiday','chinese','gift','square'],
  35:['coffee','round','tall'],36:['round','generic'],
  37:['coffee','round','tall'],38:['holiday','christmas','small','square'],
  39:['holiday','gift','rectangular'],40:['tea','coffee','round','tall'],
  41:['round','tall','generic'],42:['cosmetic','tall','round'],
  43:['gift','confectionery','square','portrait'],44:['confectionery','candy','rectangular'],
  45:['gift','holiday','chinese','square'],46:['holiday','christmas','round'],
  47:['candy','beverage','round','tall'],48:['novelty','kids','character'],
  49:['gift','holiday','rectangular'],50:['heart','valentine','cosmetic'],
  51:['candy','novelty','round'],52:['electronics','cosmetic','rectangular'],
  53:['novelty','gift','carton'],54:['tea','coffee','cosmetic','round'],
  55:['candy','strawberry','small','oval'],56:['chocolate','confectionery','egg'],
  57:['gift','holiday','basket'],58:['novelty','cosmetic','small'],
  59:['novelty','gift','round','tall'],60:['novelty','kids','character'],
  61:['gift','confectionery','square'],62:['kids','novelty','rectangular'],
  63:['window','gift','rectangular'],64:['kids','lunchbox','rectangular','handle'],
  65:['candy','small','rectangular'],66:['window','round'],
  67:['kids','gift','rectangular','handle'],68:['holiday','christmas','ball','round'],
  69:['window','gift','rectangular'],70:['kids','lunchbox','rectangular','handle'],
  71:['round','tall','generic'],72:['candy','biscuit','round'],
  73:['round','beverage','generic'],74:['round','tall','generic'],
  75:['gift','premium','rectangular','insert'],76:['kids','gift','rectangular','handle'],
  77:['round','tall','generic'],78:['novelty','round','fish']
};
const tagPool={};
Object.keys(prodImgTags).forEach(function(n){
  prodImgTags[n].forEach(function(t){
    if(!tagPool[t]) tagPool[t]=[];
    tagPool[t].push(parseInt(n,10));
  });
});
Object.keys(tagPool).forEach(function(t){ tagPool[t].sort(function(a,b){return a-b;}); });

const catTagMap={
  'Chocolate Box':['chocolate','candy','gift','confectionery'],
  'Candy Box':['candy','gift','chocolate'],
  'Chewing Gum Box':['candy','small','rectangular'],
  'Cookie Jar':['candy','biscuit','round','gift'],
  'Cigarette Box':['rectangular','small','electronics'],
  'Wine Tin':['gift','rectangular','premium'],
  'Tea Tin':['tea','round','tall'],
  'Coffee Tin':['coffee','round','tall'],
  'Mooncake Box':['gift','chinese','square','premium'],
  'Cosmetics & Perfume':['cosmetic','heart','oval'],
  'Medicine Box':['rectangular','small','cosmetic'],
  'Health Product':['rectangular','cosmetic','premium'],
  'Spice Tin':['spice','round','tall'],
  'Lunch Box':['kids','lunchbox','rectangular','handle'],
  'Other Food Tins':['food','tea','coffee','chocolate','candy','round','rectangular'],
  'Coin Bank':['round','novelty','kids'],
  'Candle Tin':['round','tall'],
  'Stationery Box':['rectangular','kids'],
  'Pen Holder':['round','tall'],
  'CD/DVD Box':['rectangular','electronics'],
  'Game Box':['rectangular','electronics','novelty','kids'],
  'Soap Box':['rectangular','cosmetic'],
  'Tool Box':['rectangular'],
  'Milk Tin':['round','tall','beverage'],
  'Watch Box':['rectangular','gift','premium'],
  'Thermometer':['rectangular','small','electronics'],
  'Dial Plate':['round','small','electronics'],
  'Glasses Case':['rectangular','small','premium'],
  'Tissue Box':['rectangular'],
  'Ashtray':['round','small'],
  'Condom Box':['rectangular','small','cosmetic'],
  'Brooch Tin':['small','gift','square'],
  'Badge Tin':['small','round'],
  'Coaster':['round','small'],
  'Metal Plate':['rectangular','small'],
  'Lids':['round','small'],
  'Tray':['rectangular'],
  'Ice Bucket':['round','tall','novelty'],
  'Paint Bucket':['round','tall'],
  'PET Bucket':['round','tall'],
  'Round Tin':['round'],
  'Small Round Tin':['round','small'],
  'Square Tin':['square'],
  'Egg Tin':['chocolate','egg','novelty'],
  'Ball Tin':['round','novelty'],
  'Car Shape Tin':['novelty','kids','character'],
  'Book Shape Box':['rectangular','chocolate','gift','book'],
  'Heart Shape Tin':['heart','valentine','gift'],
  'Oval Tin':['oval'],
  'Triangle Tin':['triangular','gift'],
  'Pentagon Tin':['round','polygon'],
  'Hexagon Tin':['round','polygon'],
  'Octagon Tin':['round','polygon'],
  'Small Tin':['small','round','rectangular'],
  'Nesting Tins':['gift','rectangular','premium'],
  'Irregular Shape':['novelty','character'],
  'Suitcase & Handle':['handle','rectangular','gift','kids'],
  'Drawer Box':['rectangular','gift'],
  'Bottle Shape Tin':['tall','round','beverage'],
  'Pull-Tab Tin':['round','tall','beverage'],
  'Animal Shape Tin':['kids','novelty','character'],
  'Sock Tin':['rectangular'],
  'House Shape Tin':['gift','holiday','novelty'],
  'Music Tin':['novelty','round'],
  'Zipper Tin':['novelty','round','small'],
  'Window Tin':['window','rectangular','gift'],
  'Magnet Plate':['rectangular','small'],
  'Double Wire Tin':['rectangular'],
  'Galvanized Tin':['round','tall'],
  'Aluminum Tin':['round','tall'],
  'Special Tin':['novelty','character'],
  'Christmas Tin':['christmas','holiday','round','square'],
  'Easter Tin':['holiday','egg','gift'],
  'Promotional Tin':['gift','novelty','rectangular'],
  'Gift Tin':['gift','rectangular','square','premium'],
  'Other Holiday':['holiday','gift','novelty']
};

function poolForCat(catEn){
  let tags=catTagMap[catEn];
  if(!tags){
    const lower=catEn.toLowerCase();
    const found=[];
    Object.keys(tagPool).forEach(function(t){ if(lower.indexOf(t)>=0) found.push(t); });
    tags=found.length?found:['round','rectangular'];
  }
  const seen={}; const arr=[];
  tags.forEach(function(t){
    (tagPool[t]||[]).forEach(function(n){ if(!seen[n]){ seen[n]=1; arr.push(n); } });
  });
  if(arr.length<8){
    ['round','rectangular','gift'].forEach(function(t){
      (tagPool[t]||[]).forEach(function(n){ if(!seen[n]){ seen[n]=1; arr.push(n); } });
    });
  }
  return arr.length?arr:[1];
}
function indexToFile(n){ return 'product-'+n+'.webp'; }

function getProductImg(tab, catIdx, sampleIdx, page){
  const cat=prodCats[tab][catIdx];
  const pool=poolForCat(cat[0]);
  return indexToFile(pool[( (page-1)*18 + sampleIdx ) % pool.length]);
}
function getGalleryImgs(tab, catIdx, baseFile){
  const cat=prodCats[tab][catIdx];
  const pool=poolForCat(cat[0]);
  const m=(baseFile||'').match(/product-(\d+)\.webp/);
  const baseN=m?parseInt(m[1],10):pool[0];
  const start=pool.indexOf(baseN); const idx=start>=0?start:0;
  const imgs=[];
  for(let i=0;i<4;i++) imgs.push(indexToFile(pool[(idx+i)%pool.length]));
  return imgs;
}

// 每个分类的产品样本生成器（按分类名 + 序号生成稳定模型/尺寸）
const sampleGenerators={
  industry:function(catIdx,cat){return makeSamples(catIdx,cat);},
  shape:function(catIdx,cat){return makeSamples(catIdx,cat);},
  structure:function(catIdx,cat){return makeSamples(catIdx,cat);},
  holiday:function(catIdx,cat){return makeSamples(catIdx,cat);}
};
const sampleSizePool=['120×80×65 mm','95×95×35 mm','150×100×70 mm','75×75×50 mm','180×120×90 mm','60×60×40 mm','135×85×55 mm','200×150×100 mm','100×100×60 mm','85×55×30 mm','160×110×75 mm','70×70×45 mm','145×95×65 mm','190×140×95 mm','55×55×25 mm','130×80×50 mm','175×115×85 mm','90×90×55 mm','110×70×45 mm','165×105×80 mm'];
function makeSamples(catIdx,cat){
  const base=catName(cat);
  const count=cat[3]||0;
  const arr=[];
  for(let i=0;i<count;i++){
    arr.push([base+' #'+(i+1), sampleSizePool[i%sampleSizePool.length]]);
  }
  return arr;
}

// 获取当前分类的产品列表（根据分页切片）
function getCatSamples(tab, catIdx, cat, page, perPage=18) {
  const gen=sampleGenerators[tab];
  if(!gen) return [];
  const all=gen(catIdx, cat);
  const start=(page-1)*perPage;
  return all.slice(start, start+perPage);
}

let curMainTab='industry',curCat=0;
function catName(c){
  const idx=langIdx[curLang];
  if(idx!==undefined) return c[idx];
  const extra=prodCatExtra[curLang];
  if(extra && extra[c[0]]) return extra[c[0]];
  return c[0];
}
const tabKeyMap={industry:'products.tab1',shape:'products.tab2',structure:'products.tab3',holiday:'products.tab4'};
function renderSidebar(){
  const cats=prodCats[curMainTab];
  const sb=document.getElementById('prodSidebar');
  if(!sb)return;
  const head=tr[curLang][tabKeyMap[curMainTab]]||curMainTab;
  // 更新 sidebar-head 的标题文字和分类数（保留 data-i18n 属性）
  const headEl=document.querySelector('.prod-sidebar-head');
  if(headEl){
    headEl.textContent=head;
    headEl.setAttribute('data-count',cats.length);
  }
  sb.innerHTML=cats.map((c,i)=>`<a class="${i===curCat?'active':''}" onclick="switchCat(${i})">${catName(c)} <span class="cat-count">${c[3]}</span></a>`).join('');
}
function renderMobileSelect(){
  const cats=prodCats[curMainTab];
  const sel=document.getElementById('prodMobileSelect');
  if(!sel)return;
  sel.innerHTML=cats.map((c,i)=>`<option value="${i}"${i===curCat?' selected':''}>${catName(c)} (${c[3]})</option>`).join('');
  sel.onchange=()=>switchCat(parseInt(sel.value));
}
function renderProducts(){
  if(prodSearchQ){renderSearchResults();return;}
  const pgEl=document.querySelector('.prod-pagination');
  if(pgEl)pgEl.style.display='';
  const cats=prodCats[curMainTab];
  const cat=cats[curCat];
  const rb=document.getElementById('prodResultBar');
  if(rb){
    // 根据当前页 curPage 计算真实的 start-end 范围（之前硬编码 1-18，翻到尾页也显示 1-18）
    const perPage=18;
    const start=(curPage-1)*perPage+1;
    const end=Math.min(curPage*perPage, cat[3]);
    let info;
    if(curLang==='zh') info='显示 '+start+'-'+end+'，共 '+cat[3]+' 款';
    else if(curLang==='ja') info=start+'-'+end+'件表示 / 全'+cat[3]+'件';
    else if(curLang==='es') info='Mostrando '+start+'-'+end+' de '+cat[3]+' productos';
    else if(curLang==='ar') info='عرض '+start+'-'+end+' من '+cat[3]+' منتج';
    else if(curLang==='ko') info=start+'-'+end+' / 전체 '+cat[3]+'개 표시';
    else if(curLang==='pt') info='Mostrando '+start+'-'+end+' de '+cat[3]+' produtos';
    else info='Showing '+start+'-'+end+' of '+cat[3]+' products';
    rb.innerHTML='<span class="prod-result-title">'+catName(cat)+'</span><span class="prod-result-count">'+info+'</span>';
  }
  const grid=document.getElementById('prodGrid');
  if(!grid)return;
  // 根据当前分类和分页获取专属产品数据
  const samples=getCatSamples(curMainTab,curCat,cat,curPage);
  grid.innerHTML=samples.map((p,i)=>{
    // 使用基于实际图片内容的标签池，为当前分类匹配最合适的图片（替代伪随机公式错配）
    const imgFile=getProductImg(curMainTab, curCat, i, curPage);
    const href='product-detail.html?tab='+curMainTab+'&cat='+curCat+'&page='+curPage+'&idx='+i+'&model='+encodeURIComponent(p[0])+'&dim='+encodeURIComponent(p[1])+'&img='+encodeURIComponent(imgFile);
    return '<a class="prod-card" href="'+href+'" style="animation-delay:'+(i*0.03)+'s;display:block;text-decoration:none;color:inherit">'+
      '<div class="prod-card-img">'+
        '<img src="assets/'+imgFile+'" alt="'+p[0]+'" loading="lazy" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'assets/product-1.webp\';}">'+
        '<div class="prod-card-arrow">→</div>'+
      '</div>'+
      '<div class="prod-card-body">'+
        '<div class="prod-card-model">'+p[0]+'</div>'+
        '<div class="prod-card-dim">'+p[1]+'</div>'+
      '</div>'+
    '</a>';
  }).join('');
  // 更新分页
  const total=Math.ceil(cat[3]/18);
  const pg=document.querySelector('.prod-pagination');
  if(pg){
    const nums=[];
    for(let i=1;i<=total;i++){
      if(i===1 || i===total || (i>=curPage-1 && i<=curPage+1)){
        nums.push(i);
      } else if(nums[nums.length-1]!=='...'){
        nums.push('...');
      }
    }
    pg.innerHTML=nums.map(n=>{
      if(n==='...') return '<span style="border:none;color:var(--text-3)">...</span>';
      const cls=n===curPage?'class="active"':'';
      return '<a href="javascript:void(0)" '+cls+' onclick="switchPage('+n+');return false">'+n+'</a>';
    }).join('')+
      '<a href="javascript:void(0)" onclick="switchPage('+Math.min(curPage+1,total)+');return false" style="font-size:18px">›</a>'+
      '<a href="javascript:void(0)" onclick="switchPage('+Math.max(curPage-1,1)+');return false" style="font-size:18px">‹</a>';
  }
}
function switchMainTab(tab){
  curMainTab=tab;curCat=0;curPage=1;
  clearProdSearch();
  document.querySelectorAll('.prod-main-tab').forEach(t=>t.classList.toggle('active',t.dataset.maintab===tab));
  renderSidebar();renderMobileSelect();renderProducts();
}
function switchCat(i){
  curCat=i;curPage=1;
  clearProdSearch();
  renderSidebar();renderMobileSelect();renderProducts();
}
function switchPage(n){
  curPage=n;
  renderProducts();
  // 滚动到产品网格顶部
  const grid=document.getElementById("prodGrid");
  if(grid) grid.scrollIntoView({behavior:"smooth",block:"start"});
}

/* ===== 产品搜索（跨分类实时过滤）===== */
let prodSearchQ='';
let prodSearchTimer=null;
const prodSearchInput=document.getElementById('prodSearch');
const prodSearchClearBtn=document.getElementById('prodSearchClear');
function clearProdSearch(){
  prodSearchQ='';
  if(prodSearchInput&&prodSearchInput.value){prodSearchInput.value='';}
  if(prodSearchClearBtn)prodSearchClearBtn.hidden=true;
}
if(prodSearchInput){
  prodSearchInput.addEventListener('input',function(){
    clearTimeout(prodSearchTimer);
    prodSearchTimer=setTimeout(function(){
      prodSearchQ=prodSearchInput.value.trim().toLowerCase();
      prodSearchClearBtn.hidden=!prodSearchInput.value;
      curPage=1;
      renderProducts();
    },200);
  });
  prodSearchInput.addEventListener('keydown',function(e){
    if(e.key==='Escape'){clearProdSearch();renderProducts();}
  });
}
if(prodSearchClearBtn){
  prodSearchClearBtn.addEventListener('click',function(){
    clearProdSearch();prodSearchInput.focus();renderProducts();
  });
}
const SEARCH_MATCH_CAP=200;   // 最多收集的匹配数
const SEARCH_RENDER_CAP=60;   // 最多渲染的卡片数
function renderSearchResults(){
  const rb=document.getElementById('prodResultBar');
  const grid=document.getElementById('prodGrid');
  const pgEl=document.querySelector('.prod-pagination');
  if(pgEl)pgEl.style.display='none';
  if(!grid)return;
  const q=prodSearchQ;
  const matches=[];
  Object.keys(prodCats).forEach(function(tab){
    if(matches.length>=SEARCH_MATCH_CAP)return;
    const gen=sampleGenerators[tab];
    if(!gen)return;
    prodCats[tab].forEach(function(cat,catIdx){
      if(matches.length>=SEARCH_MATCH_CAP)return;
      const cn=catName(cat).toLowerCase();
      const cnEn=String(cat[0]).toLowerCase();
      const catHit=cn.indexOf(q)>=0||cnEn.indexOf(q)>=0;
      const all=gen(catIdx,cat);
      for(let i=0;i<all.length;i++){
        if(matches.length>=SEARCH_MATCH_CAP)break;
        const p=all[i];
        if(catHit||String(p[0]).toLowerCase().indexOf(q)>=0||String(p[1]).toLowerCase().indexOf(q)>=0){
          matches.push({tab:tab,catIdx:catIdx,cat:cat,page:Math.floor(i/18)+1,idx:i%18,p:p});
        }
      }
    });
  });
  if(rb){
    const n=matches.length;
    let info;
    if(curLang==='zh') info='搜索 "'+q+'" — 找到 '+n+' 款'+(n>=SEARCH_MATCH_CAP?'（显示前 '+SEARCH_RENDER_CAP+'）':'');
    else info='Search "'+q+'" — '+n+' matches'+(n>=SEARCH_MATCH_CAP?' (showing first '+SEARCH_RENDER_CAP+')':'');
    rb.innerHTML='<span class="prod-result-title">'+(curLang==='zh'?'搜索结果':'Search Results')+'</span><span class="prod-result-count">'+info+'</span>';
  }
  if(!matches.length){
    const noRes=curLang==='zh'?'没有找到匹配的产品':'No matching products found';
    const noTip=curLang==='zh'?'试试型号前缀（TD、SH、ST、HD）、尺寸（dia.100）或分类名（chocolate、tea、round）':'Try a model prefix (TD, SH, ST, HD), a size (dia.100) or a category (chocolate, tea, round)';
    grid.innerHTML='<div class="prod-search-empty"><b>'+noRes+'</b>'+noTip+'</div>';
    return;
  }
  grid.innerHTML=matches.slice(0,SEARCH_RENDER_CAP).map(function(m,i){
    const imgFile=getProductImg(m.tab,m.catIdx,m.idx,m.page);
    const href='product-detail.html?tab='+m.tab+'&cat='+m.catIdx+'&page='+m.page+'&idx='+m.idx+'&model='+encodeURIComponent(m.p[0])+'&dim='+encodeURIComponent(m.p[1])+'&img='+encodeURIComponent(imgFile);
    return '<a class="prod-card" href="'+href+'" style="animation-delay:'+(i*0.03)+'s;display:block;text-decoration:none;color:inherit">'+
      '<div class="prod-card-img">'+
        '<img src="assets/'+imgFile+'" alt="'+m.p[0]+'" loading="lazy" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'assets/product-1.webp\';}">'+
        '<div class="prod-card-arrow">→</div>'+
      '</div>'+
      '<div class="prod-card-body">'+
        '<div class="prod-card-model">'+m.p[0]+'</div>'+
        '<div class="prod-card-dim">'+catName(m.cat)+' · '+m.p[1]+'</div>'+
      '</div>'+
    '</a>';
  }).join('');
}
document.querySelectorAll('.prod-main-tab').forEach(tab=>{
  tab.addEventListener('click',()=>switchMainTab(tab.dataset.maintab));
});
// Deep-link support: products.html?tab=industry|shape|structure|holiday
(function(){
  const q=new URLSearchParams(location.search);
  const t=q.get('tab');
  if(t&&prodCats[t]){
    switchMainTab(t);
    const grid=document.getElementById('prodGrid');
    if(grid)grid.scrollIntoView({behavior:'auto',block:'start'});
  }
})();
renderSidebar();renderMobileSelect();renderProducts();

/* ===== NO LIMITS TABS ===== */
/* ===== INTERSECTION OBSERVER ===== */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const num = e.target.querySelector('[data-target]') || (e.target.hasAttribute('data-target') ? e.target : null);
      if (num) animateCounter(num);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ===== COUNTER ===== */
function animateCounter(el) {
  if (!el || el.dataset.counted === '1') return;
  el.dataset.counted = '1';
  const target = parseInt(el.dataset.target) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    // keep suffix wrapped in <span> so CSS (.stat-num span{font-size:.55em}) still applies
    el.innerHTML = Math.round(target * eased).toLocaleString() + '<span>' + suffix + '</span>';
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ===== MARQUEE ===== */
const marqueeData={
  en:['UFREEPACK','Premium Tin Box Manufacturer','3000+ Molds Ready','Custom Tin Packaging','ISO 9001 Certified','B2B Wholesale','50+ Countries Served','Sustainable & Eco-Friendly','Food-Grade Safety'],
  zh:['UFREEPACK','高端铁盒定制工厂','3000+ 现成模具','定制铁盒包装','ISO 9001 认证','B2B 批发','服务50+国家','环保可持续','食品安全级'],
  ja:['UFREEPACK','プレミアムティンボックスメーカー','3000+ 既製金型','カスタムティンパッケージング','ISO 9001 認証','B2B 卸売','50+ヶ国にサービス提供','環境配慮型','食品等級安全性'],
  es:['UFREEPACK','Fabricante Premium de Latas','3000+ Moldes Listos','Latas Personalizadas','Certificado ISO 9001','B2B Mayorista','50+ Países Atendidos','Sostenible y Ecológico','Seguridad de Grado Alimentario'],
  ar:['UFREEPACK','مصنّع علب الصفيح الفاخر','3000+ قالب جاهز','علب صفيح مخصصة','معتمد ISO 9001','B2B بالجملة','خدمة 50+ دولة','مستدام وصديق للبيئة','سلامة الدرجة الغذائية'],
  ko:['UFREEPACK','프리미엄 틴 박스 제조업체','3000+ 즉시 사용 가능한 금형','맞춤형 틴 패키징','ISO 9001 인증','B2B 도매','50+개국 서비스','지속가능하고 친환경','식품 등급 안전성'],
  pt:['UFREEPACK','Fabricante Premium de Latas','3000+ Moldes Prontos','Latas Personalizadas','Certificado ISO 9001','B2B Atacado','50+ Países Atendidos','Sustentável e Ecológico','Segurança de Grau Alimentar']
};
function buildMarquee(){
  const track=document.getElementById('marqueeTrack');
  if(!track) return;
  const items=marqueeData[curLang]||marqueeData.en;
  const html=items.map(t=>`<span class="marquee-item"><span class="dot"></span><span class="txt">${t}</span></span>`).join('');
  track.innerHTML=html+html;
}

/* ===== INIT ===== */
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){applyLang(curLang);});}else{applyLang(curLang);}


// Build No Limits grids
const nlData={
  acc:['nl.acc.1','nl.acc.2','nl.acc.3','nl.acc.4','nl.acc.5','nl.acc.6','nl.acc.7'],
  shape:['nl.shape.1','nl.shape.2','nl.shape.3','nl.shape.4','nl.shape.5','nl.shape.6','nl.shape.7'],
  fin:['nl.fin.1','nl.fin.2','nl.fin.3','nl.fin.4','nl.fin.5','nl.fin.6','nl.fin.7'],
  prt:['nl.prt.1','nl.prt.2','nl.prt.3','nl.prt.4','nl.prt.5','nl.prt.6','nl.prt.7'],
  cft:['nl.cft.1','nl.cft.2','nl.cft.3','nl.cft.4','nl.cft.5','nl.cft.6','nl.cft.7'],
  cov:['nl.cov.1','nl.cov.2','nl.cov.3','nl.cov.4','nl.cov.5','nl.cov.6','nl.cov.7']
};
// 6 tabs × 7 items = 42 CURATED images (semantically matched per tab, pool of 78, zero duplicates)
const nlImgs={
  acc:[56,63,69,57,64,70,58],
  shape:[2,44,3,50,12,68,60],
  fin:[74,75,73,45,59,18,54],
  prt:[5,17,33,34,43,49,62],
  cft:[20,28,38,29,22,41,78],
  cov:[4,24,26,52,51,72,66]
};
const nlTabOrder={acc:0,shape:1,fin:2,prt:3,cft:4,cov:5};
function buildNLGrids(){
  Object.keys(nlData).forEach(function(key){
    var grid=document.getElementById('nlGrid-'+key);
    if(!grid) return;
    var items=nlData[key];
    var imgs=(nlImgs[key]||[]).slice();
    grid.innerHTML=items.map(function(k,i){
      var name=(tr[curLang]&&tr[curLang][k])||k;
      var imgN=(imgs[i]!=null)?imgs[i]:(((nlTabOrder[key]|0)*items.length+i)%78+1);
      return '<div class="nolimits-item"><div class="nolimits-item-img"><img src="assets/product-'+imgN+'.webp" alt="'+name+'" loading="lazy" onerror="this.src=\'assets/product-1.webp\';this.onerror=null;"></div><div class="nolimits-item-name">'+name+'</div></div>';
    }).join('');
  });
}
document.querySelectorAll('.nolimits-tab').forEach(function(tab){
  tab.addEventListener('click',function(){
    document.querySelectorAll('.nolimits-tab').forEach(function(t){t.classList.remove('active');});
    tab.classList.add('active');
    document.querySelectorAll('.nolimits-panel').forEach(function(p){p.classList.remove('active');});
    var panel=document.getElementById('nl-'+tab.dataset.nltab);
    if(panel) panel.classList.add('active');
  });
});
buildNLGrids();
// Rebuild on language change
const origApplyLang=applyLang;
applyLang=function(lang){origApplyLang(lang);buildNLGrids();if(typeof renderB2BTexts==='function')renderB2BTexts();};

/* =========================================================
   GLOBAL CONTACT INFO (updated 2026-09-12)
   Company: 上海优芙利工艺礼品有限公司 | UFREEPACK
   Address: 上海市嘉定区安亭镇新源路58号701室J
   Contact: Alex · +86 181 6447 0172 · ufreepacking@gmail.com
   ========================================================= */
var UFREEPACK_INFO={
  companyCn:'上海优芙利工艺礼品有限公司',
  companyEn:'Shanghai Youfuli Crafts & Gifts Co., Ltd.',
  contactPerson:{en:'Alex',zh:'Alex',ja:'Alex',es:'Alex',ar:'أليكس',ko:'Alex',pt:'Alex'},
  mobile:'+86 181 6447 0172',
  mobileRaw:'18164470172',
  tel:'+86-181-6447-0172',
  email:'ufreepacking@gmail.com',
  addrZh:'上海市嘉定区安亭镇新源路58号701室J',
  addrEn:'Room 701J, No.58 Xinyuan Road, Anting Town, Jiading District, Shanghai, China',
  hoursZh:'周一至周五 9:00-18:00 (GMT+8)',
  hoursEn:'Mon-Fri 9:00-18:00 (GMT+8)',
  whatsappLink:'https://wa.me/8618164470172'
};

/* =========================================================
   B2B I18N PATCH — 7 languages + contact + hero/cap/process/etc keys
   ========================================================= */
var B2B_PATCH={
  en:{
    // Contact bar
    'cb.person':'Alex','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'Mon-Fri 9:00-18:00 GMT+8',
    'cb.download':'Download Catalog','cb.sample':'Request Sample','cb.quote':'Get Quote','cb.working':'Business Hours',
    'cb.addr':'Shanghai, China',
    // Hero slider 1 (Factory Capacity)
    'hs1.eyebrow':'Shanghai Youfuli · UFREEPACK · 20 Years in Tin Packaging','hs1.kicker':'One-Stop Tin Box Manufacturer',
    'hs1.title':'Premium Tin Packaging, <em>Crafted</em> for Global Brands',
    'hs1.sub':'From food-grade chocolate tins to luxury gift boxes — 3,000+ ready molds, 3M+ cans per month, direct factory pricing and 15-day rapid sampling. Contact Alex directly.',
    'hs1.cta1':'Start Your Project →','hs1.cta2':'Book a Factory Tour',
    'hs1.m1.b':'3M+','hs1.m1.t':'Cans / Month','hs1.m2.b':'3,000+','hs1.m2.t':'Ready Molds','hs1.m3.b':'15 Days','hs1.m3.t':'Sample Lead Time',
    'hs1.badge.h':'ISO 9001 · FDA · SGS Certified','hs1.badge.p':'Food-grade tinplate + 4-stage full-process quality inspection.',
    // Hero slider 2 (Custom Capability)
    'hs2.eyebrow':'OEM / ODM Bespoke Service','hs2.kicker':'Bespoke Shapes · Printing · Finishes',
    'hs2.title':'Your Vision, <em>Stamped</em> Into Metal',
    'hs2.sub':'20,000㎡ Huainan facility with 60+ servo presses and 10 automated lines. Embossing, gold-stamping, spot UV, matte, soft-touch — every technique under one roof.',
    'hs2.cta1':'Request Custom Quote','hs2.cta2':'Download Capability Deck',
    'hs2.m1.b':'11,000','hs2.m1.t':'㎡ Factory','hs2.m2.b':'300+','hs2.m2.t':'Presses','hs2.m3.b':'20','hs2.m3.t':'Auto Lines',
    'hs2.badge.h':'4-Step Custom Flow','hs2.badge.p':'Brief → 3D → Sample → Mass Production with a dedicated project engineer (Alex).',
    // Hero slider 3 (Global Shipping)
    'hs3.eyebrow':'Global Wholesale · B2B Bulk Orders','hs3.kicker':'Shipping to 50+ Countries',
    'hs3.title':'Reliable <em>Bulk</em> Delivery Worldwide',
    'hs3.sub':'MOQ from 5,000 pcs. FOB Shanghai / Ningbo, DDP to Amazon, flexible Incoterms. WhatsApp Alex — reply within 1 hour.',
    'hs3.cta1':'Send Inquiry Now →','hs3.cta2':'Chat on WhatsApp',
    'hs3.m1.b':'50+','hs3.m1.t':'Countries','hs3.m2.b':'5,000','hs3.m2.t':'MOQ','hs3.m3.b':'1h','hs3.m3.t':'Reply Speed',
    'hs3.badge.h':'Big-Account Friendly','hs3.badge.p':'ISO 9001 certified factory · Full audit-ready documentation for global brand compliance.',
    // Big stats
    'bs.1.n':'28<em>+</em>','bs.1.t':'Years Combined','bs.1.d':'Stamping craftsman expertise',
    'bs.2.n':'3<em>M+</em>','bs.2.t':'Monthly Output','bs.2.d':'Tin cans produced per month',
    'bs.3.n':'3,000<em>+</em>','bs.3.t':'Existing Molds','bs.3.d':'Free to use for repeat orders',
    'bs.4.n':'50<em>+</em>','bs.4.t':'Export Countries','bs.4.d':'EU · US · ME · SEA · LATAM',
    // Brand wall
    'bw.label':'PACKAGING EXPERTISE ACROSS 12 INDUSTRIES · SERVING 200+ GLOBAL BUYERS IN 50+ COUNTRIES',
    // 6 Capability cards
    'cap.01.tag':'01 · END-TO-END','cap.01.t':'One-Stop OEM / ODM Service','cap.01.d':'From artwork to finished tins — structural design, 3D render, tooling, printing, stamping, assembly, inspection and global delivery under one roof.',
    'cap.01.1':'Free structural design & 3D render service','cap.01.2':'In-house tooling: 7–15 day new mold cycle','cap.01.3':'Dedicated project manager per client',
    'cap.02.tag':'02 · MOLD LIBRARY','cap.02.t':'3,000+ Free-Use Molds','cap.02.d':'Round, square, heart, hex, book, ball, house, bottle, animal — skip NRE and tap into 3,000+ ready molds across 76 sub-categories.',
    'cap.02.1':'40 industries · 23 shapes · 8 structures · 5 holidays','cap.02.2':'Low MOQ 5,000 pcs on in-stock molds','cap.02.3':'Mix-and-match lids & paper-pulp inserts',
    'cap.03.tag':'03 · FOOD SAFETY','cap.03.t':'Food-Grade Safety First','cap.03.d':'BA / MA / lacquer interior liners, FDA food-grade tests per GB 4806.9, ISO 9001, SGS material & heavy-metal reports per shipment.',
    'cap.03.1':'FDA · LFGB · RoHS compliant tinplate','cap.03.2':'Full traceability from coil to carton','cap.03.3':'Non-toxic inks & food-grade varnishes',
    'cap.04.tag':'04 · PRINT & FINISH','cap.04.t':'Premium Print & Finishes','cap.04.d':'CMYK offset + Pantone spot, gold/silver hot-stamping, emboss/deboss, spot UV, matte lamination, soft-touch, metallic ink & more.',
    'cap.04.1':'Six-color Heidelberg presses in-house','cap.04.2':'Proof-to-press color matching △E ≤ 2','cap.04.3':'Gold-foil registered embossing available',
    'cap.05.tag':'05 · PRODUCTION','cap.05.t':'Scalable Stamping Lines','cap.05.d':'60+ servo presses across 10 automated lines. Blanking → drawing → forming in sequence; robotic-arm transfer ensures high-volume stable quality.',
    'cap.05.1':'16T–200T press capacity on demand','cap.05.2':'Robotic-arm transfer ±0.03mm tolerance','cap.05.3':'3 shifts · 7-day flexible production',
    'cap.06.tag':'06 · QC & LOGISTICS','cap.06.t':'Four-Stage QC + Global Logistics','cap.06.d':'AQL 2.5 full inspection before packing, 3rd-party audit welcome. FOB / CIF / DDP, EXW Shanghai/Ningbo, Amazon FBA prep & label services.',
    'cap.06.1':'IQC · IPQC · FQC · OQC four-stage QC','cap.06.2':'Sea / Air / Rail multimodal shipping','cap.06.3':'US & EU warehouse drop-shipping',
    // 4-step Procurement
    'ps.1.t':'Send Inquiry & Specs','ps.1.d':'Share dimensions, artwork, target qty and delivery date. We reply in 1 hour.','ps.1.tag':'Step 01 · 1h Reply',
    'ps.2.t':'Mold & Sample Confirm','ps.2.d':'3D render in 24h, white sample in 7 days, printed sample in 15 days.','ps.2.tag':'Step 02 · 15 Days',
    'ps.3.t':'Mass Production','ps.3.d':'Automated lines run 3M+ cans/month. Four-stage QC at every station.','ps.3.tag':'Step 03 · 25–35 Days',
    'ps.4.t':'Inspection & Shipping','ps.4.d':'100% OQC + AQL 2.5. FOB / CIF / DDP global door-to-door delivery.','ps.4.tag':'Step 04 · 15–30 Days',
    // Cert wall
    'cw.label':'Certifications','cw.title':'Globally Recognized <em>Certifications</em>',
    'cw.desc':'We continuously invest in certifications to support your big-brand audits and local-market compliance.',
    'cw.1.h':'ISO 9001','cw.1.p':'QMS Certified','cw.2.h':'ISO 14001','cw.2.p':'Environmental',
    'cw.3.h':'FDA','cw.3.p':'Food Contact','cw.4.h':'LFGB','cw.4.p':'EU Food Grade',
    'cw.5.h':'SGS','cw.5.p':'Material Test','cw.6.h':'SEDEX 4P','cw.6.p':'Ethical Audit',
    // Inquiry band
    'inquiry.h':'Ready to Work With a <em>Reliable Tin Box Factory</em>?',
    'inquiry.d':'Send your packaging drawings, artwork reference or target qty. Alex (our senior sales engineer) will reply within 1 hour with a tailored quotation and DDP shipping options.',
    'inquiry.name':'Your Name','inquiry.email':'Work Email','inquiry.phone':'Phone / WhatsApp','inquiry.company':'Company Name',
    'inquiry.qty':'Target Quantity (pcs)','inquiry.msg':'Tell us about your project — shape, size, printing, target delivery date …','inquiry.submit':'Send Inquiry →',
    'inquiry.b1':'Free Sample Kit on Request','inquiry.b2':'MOQ from 5,000 pcs','inquiry.b3':'1-Hour Reply · 7/24','inquiry.b4':'Book a Factory Video Tour',
    // Quality flow (4 stage)
    'qc.01.tag':'Stage 01 · IQC','qc.01.t':'Raw Material Inspection','qc.01.p':'Tinplate coil, ink & lacquer tested on arrival: thickness, hardness, coating weight, food safety.',
    'qc.02.tag':'Stage 02 · IPQC','qc.02.t':'In-Line Printing QC','qc.02.p':'Every 500 sheets △E color + registration check. Heidelberg auto-register ensures ±0.03mm precision.',
    'qc.03.tag':'Stage 03 · FQC','qc.03.t':'Stamping Finishing QC','qc.03.p':'Pressure test, dimension check, scratch & burr inspection on every press station.',
    'qc.04.tag':'Stage 04 · OQC','qc.04.t':'Final Outgoing QC + AQL','qc.04.p':'100% full inspection before packing + AQL 2.5 level II random inspection.',
    // Global coverage
    'cov.label':'Global Service Network','cov.title':'<em>Shipping</em> to 50+ Countries',
    'cov.desc':'From our factory in Huainan to Amazon warehouses and brand distribution centers across EU, North America, Middle East and Southeast Asia.',
    'cov.1.h':'Europe (EU)','cov.1.s':'Germany · UK · France · Netherlands · Italy',
    'cov.2.h':'North America','cov.2.s':'USA · Canada · Mexico · FBA Prep',
    'cov.3.h':'Middle East','cov.3.s':'UAE · Saudi · Qatar · Kuwait · Turkey',
    'cov.4.h':'Asia Pacific','cov.4.s':'Japan · Korea · SEA · Australia · NZ',
    'cov.5.h':'Latin America','cov.5.s':'Brazil · Chile · Argentina · Colombia',
    'cov.6.h':'Africa','cov.6.s':'South Africa · Nigeria · Kenya · Egypt',
    'cov.map.h':'UFREEPACK Global Coverage','cov.map.sb':'50+ Countries Served',
    // Sales engineers (contact)
    'se.1.n':'Alex','se.1.r':'Senior Sales Engineer · EU · Americas · ME','se.1.a':'WhatsApp · Email · Call',
    'se.2.n':'Lina Chen','se.2.r':'Account Manager · APAC · Latin America','se.2.a':'WhatsApp · Email',
    'se.3.n':'Leo Wang','se.3.r':'Technical Project Manager · Custom Molds','se.3.a':'24/7 Technical Support',
    // Product center B2B bar
    'pb.1.b':'3,000+','pb.1.t':'Free Molds','pb.2.b':'76','pb.2.t':'Sub-Categories','pb.3.b':'5,000','pb.3.t':'MOQ (pcs)','pb.4.b':'15 Days','pb.4.t':'Sample Lead',
    'pb.cta1':'Get Quote','pb.cta2':'Request Sample','pb.cta3':'Download Catalog',
    'sidebar.cta.h':'Need Help Selecting a Mold?','sidebar.cta.p':'Chat with Alex — get the right mold, free sample options and a fast quotation within 1 hour.',
    'sidebar.cta.a1':'Get Free Quote','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'Download Catalog',
    // Footer / contact translations
    'footer.addr':'Room 701J, No.58 Xinyuan Road, Anting Town, Jiading District, Shanghai, China',
    'footer.desc':'Shanghai Youfuli Crafts & Gifts Co., Ltd. (UFREEPACK) — Premium custom tin box manufacturer specializing in metal packaging design, R&D, and manufacturing. Based in Shanghai with manufacturing facilities in Huainan, Anhui, serving 50+ countries worldwide.',
    'nav.about':'About Factory',
    // Procurement process 4 steps (time tags aligned with actual production cycle)
    'ps.1.t':'Send Inquiry & Specs','ps.1.d':'Share dimensions, artwork, target qty and delivery date. We reply in 1 hour.','ps.1.tag':'Step 01 · 1h Reply',
    'ps.2.t':'Mold & Sample Confirm','ps.2.d':'3D render in 24h, white sample in 7 days, printed sample in 15 days.','ps.2.tag':'Step 02 · 20 Days',
    'ps.3.t':'Mass Production','ps.3.d':'Automated lines run 3M+ cans/month. Four-stage QC at every station.','ps.3.tag':'Step 03 · 20–25 Days',
    'ps.4.t':'Inspection & Shipping','ps.4.d':'100% OQC + AQL 2.5. FOB / CIF / DDP global door-to-door delivery.','ps.4.tag':'Step 04 · 25–30 Days'
  },
  zh:{
    'cb.person':'Alex','cb.mobile':'181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'周一至周五 9:00-18:00 (GMT+8)',
    'cb.download':'下载产品目录','cb.sample':'索取免费样品','cb.quote':'获取报价','cb.working':'工作时间','cb.addr':'中国上海',
    'hs1.eyebrow':'上海优芙利工艺礼品有限公司 · UFREEPACK · 20 年铁盒行业积淀','hs1.kicker':'一站式铁盒定制工厂',
    'hs1.title':'为全球品牌打造的<em>高端铁盒</em>包装方案',
    'hs1.sub':'从食品级巧克力罐到高端礼品铁盒——3000+现成模具、月产300万+罐、工厂直供价，15天快速打样。直接联系Alex。',
    'hs1.cta1':'开启项目 →','hs1.cta2':'预约参观工厂',
    'hs1.m1.b':'300万+','hs1.m1.t':'月产量','hs1.m2.b':'3000+','hs1.m2.t':'现成模具','hs1.m3.b':'15天','hs1.m3.t':'样品交期',
    'hs1.badge.h':'ISO 9001 · FDA · SGS 认证','hs1.badge.p':'食品级马口铁，四段式全程质检保障。',
    'hs2.eyebrow':'OEM / ODM 深度定制服务','hs2.kicker':'专属形状 · 印刷 · 表面工艺',
    'hs2.title':'您的创意，<em>冲压成型</em>为金属包装',
    'hs2.sub':'20,000㎡ 淮南生产基地，60+ 台伺服冲压机、10 条自动化产线。凸印、烫金、局部 UV、哑光、触感漆——一站式完成。',
    'hs2.cta1':'定制询价','hs2.cta2':'下载工厂能力手册',
    'hs2.m1.b':'11,000','hs2.m1.t':'㎡ 厂房','hs2.m2.b':'300+','hs2.m2.t':'冲压机台','hs2.m3.b':'20','hs2.m3.t':'自动化产线',
    'hs2.badge.h':'4步定制流程','hs2.badge.p':'需求确认→3D设计→打样→量产，Alex专属项目工程师全程跟进。',
    'hs3.eyebrow':'全球批发 · B2B 大批量采购','hs3.kicker':'出口50+国家和地区',
    'hs3.title':'全球<em>批量交付</em>，稳定可靠',
    'hs3.sub':'起订量低至5000个。上海/宁波FOB、DDP送亚马逊仓、灵活贸易条款。WhatsAppAlex，1小时响应。',
    'hs3.cta1':'立即发送询盘 →','hs3.cta2':'WhatsApp联系Alex',
    'hs3.m1.b':'50+','hs3.m1.t':'出口国家','hs3.m2.b':'5,000','hs3.m2.t':'起订量','hs3.m3.b':'1h','hs3.m3.t':'响应速度',
    'hs3.badge.h':'大客户验厂友好','hs3.badge.p':'ISO 9001 认证工厂 · 完整验厂资料，全面支持全球品牌合规审核。',
    'bs.1.n':'28<em>+</em>','bs.1.t':'年团队经验','bs.1.d':'冲压工艺老师傅经验积累',
    'bs.2.n':'300<em>万+</em>','bs.2.t':'月产量','bs.2.d':'每月铁罐生产能力',
    'bs.3.n':'3,000<em>+</em>','bs.3.t':'现成模具','bs.3.d':'返单免模具费使用',
    'bs.4.n':'50<em>+</em>','bs.4.t':'出口国家','bs.4.d':'欧盟 · 美国 · 中东 · 东南亚 · 拉美',
    'bw.label':'覆盖 12 大行业 · 巧克力 · 茶叶 · 咖啡 · 美妆 · 酒类 · 节日礼盒 · 服务 50+ 国家 200+ 买家',
    'cap.01.tag':'01 · 一站式服务','cap.01.t':'一站式 OEM / ODM 定制','cap.01.d':'从设计图到成品铁盒——结构设计、3D渲染、开模、印刷、冲压、组装、质检、全球出货一站式搞定。',
    'cap.01.1':'免费结构设计与3D渲染服务','cap.01.2':'自有模具车间，新模7-15天','cap.01.3':'每个客户专属项目经理',
    'cap.02.tag':'02 · 模具库','cap.02.t':'3000+免开模现成模具','cap.02.d':'圆形、方形、心形、六角、书本、球形、屋形、瓶形、动物——省去开模费，3000+模具任选，覆盖76个细分品类。',
    'cap.02.1':'40行业·23形状·8结构·5节日','cap.02.2':'现有模具起订低至5,000个','cap.02.3':'盖子、纸浆内托可自由搭配',
    'cap.03.tag':'03 · 食品安全','cap.03.t':'食品级安全第一','cap.03.d':'BA/MA/涂料内壁，FDA食品接触GB 4806.9检测，ISO 9001体系，每批SGS材质+重金属检测报告。',
    'cap.03.1':'FDA · LFGB · RoHS 合规马口铁','cap.03.2':'卷料到外箱全流程可追溯','cap.03.3':'环保无毒油墨+食品级光油',
    'cap.04.tag':'04 · 印刷工艺','cap.04.t':'高端印刷与表面工艺','cap.04.d':'CMYK胶印+潘通专色、金/银烫金、凸/凹压纹、局部UV、哑膜、触感漆、金属油墨等工艺齐全。',
    'cap.04.1':'自有六色海德堡印刷机','cap.04.2':'印刷追色△E ≤ 2','cap.04.3':'支持金箔定位立体烫',
    'cap.05.tag':'05 · 规模量产','cap.05.t':'可扩展冲压生产线','cap.05.d':'60+ 台伺服冲压机分布于 10 条自动化产线，落料→拉伸→成型有序进行；机械臂移送保障大批量稳定品质。',
    'cap.05.1':'按需16T-200T吨位冲压','cap.05.2':'机械手搬运±0.03mm公差','cap.05.3':'三班制·7天柔性生产',
    'cap.06.tag':'06 · 品控与物流','cap.06.t':'四段品控 + 全球物流','cap.06.d':'装箱前AQL 2.5全检，支持第三方验厂。FOB/CIF/DDP、EXW上海/宁波、亚马逊FBA贴标入仓。',
    'cap.06.1':'IQC·IPQC·FQC·OQC 四段品控','cap.06.2':'海运·空运·铁运多式联运','cap.06.3':'美欧海外仓代发',
    'ps.1.t':'发送询盘与规格','ps.1.d':'告知尺寸、图稿、采购量和目标日期，Alex1小时内回覆。','ps.1.tag':'第一步 · 1小时回覆',
    'ps.2.t':'开模与样品确认','ps.2.d':'24小时出3D效果图，7天出白样，15天出印刷实样。','ps.2.tag':'第二步 · 20天',
    'ps.3.t':'批量生产','ps.3.d':'自动化产线月产300万+罐，每工站四段QC追踪。','ps.3.tag':'第三步 · 20–25天',
    'ps.4.t':'验货出运','ps.4.d':'100% OQC终检 + AQL 2.5抽检；FOB/CIF/DDP全球送货上门。','ps.4.tag':'第四步 · 25–30天',
    'cw.label':'认证资质','cw.title':'国际权威<em>认证</em>齐备','cw.desc':'我们持续投入认证体系建设，助力大客户验厂及各国市场合规。',
    'cw.1.h':'ISO 9001','cw.1.p':'质量管理体系','cw.2.h':'ISO 14001','cw.2.p':'环境管理体系',
    'cw.3.h':'FDA','cw.3.p':'食品接触级','cw.4.h':'LFGB','cw.4.p':'欧盟食品级',
    'cw.5.h':'SGS','cw.5.p':'材质检测报告','cw.6.h':'SEDEX 4P','cw.6.p':'社会责任验厂',
    'inquiry.h':'准备好与<em>可靠的铁盒工厂</em>合作了吗？',
    'inquiry.d':'发来您的包装结构图、设计稿或目标采购量，资深销售工程师Alex将在1小时内回传定制报价及DDP物流方案。',
    'inquiry.name':'联系人姓名','inquiry.email':'工作邮箱','inquiry.phone':'电话/微信/WhatsApp','inquiry.company':'公司名称',
    'inquiry.qty':'采购数量（个）','inquiry.msg':'请描述您的项目：形状、尺寸、印刷工艺、目标交货时间……','inquiry.submit':'发送询盘给Alex →',
    'inquiry.b1':'免费样品包（按需提供）','inquiry.b2':'起订低至 5,000 个','inquiry.b3':'1小时回覆 · 7×24在线','inquiry.b4':'预约工厂视频参观',
    'qc.01.tag':'第一阶段 · IQC','qc.01.t':'原材料来料检验','qc.01.p':'马口铁卷料、油墨、涂料到厂即检测：厚度、硬度、涂镀量、食品安全指标。',
    'qc.02.tag':'第二阶段 · IPQC','qc.02.t':'印刷巡检制程控制','qc.02.p':'每500张△E色差+套准检测；海德堡自动套准±0.03mm精度。',
    'qc.03.tag':'第三阶段 · FQC','qc.03.t':'冲压成型品检','qc.03.p':'在线承压、尺寸、划痕及毛刺检查，每台冲压机100%过检。',
    'qc.04.tag':'第四阶段 · OQC','qc.04.t':'终检出货检验 + AQL','qc.04.p':'装箱前100%全检+AQL 2.5二级随机抽检 + 支持第三方验货。',
    'cov.label':'全球服务网络','cov.title':'<em>出口</em>50+国家和地区','cov.desc':'从淮南工厂到欧盟、北美、中东、东南亚各地的品牌分销中心及亚马逊FBA仓。',
    'cov.1.h':'欧洲（欧盟）','cov.1.s':'德国 · 英国 · 法国 · 荷兰 · 意大利',
    'cov.2.h':'北美','cov.2.s':'美国 · 加拿大 · 墨西哥 · FBA代发',
    'cov.3.h':'中东','cov.3.s':'阿联酋 · 沙特 · 卡塔尔 · 科威特 · 土耳其',
    'cov.4.h':'亚太','cov.4.s':'日本 · 韩国 · 东南亚 · 澳新',
    'cov.5.h':'拉美','cov.5.s':'巴西 · 智利 · 阿根廷 · 哥伦比亚',
    'cov.6.h':'非洲','cov.6.s':'南非 · 尼日利亚 · 肯尼亚 · 埃及',
    'cov.map.h':'UFREEPACK 全球服务覆盖','cov.map.sb':'服务 50+ 国家',
    'se.1.n':'Alex','se.1.r':'资深销售工程师 · 欧美中东区','se.1.a':'微信·WhatsApp·电话 全天',
    'se.2.n':'Lina 陈','se.2.r':'客户经理 · 亚太拉美区','se.2.a':'WhatsApp · Email',
    'se.3.n':'Leo 王','se.3.r':'技术项目经理 · 开模定制','se.3.a':'7×24 技术支持',
    'pb.1.b':'3,000+','pb.1.t':'免费模具','pb.2.b':'76','pb.2.t':'细分品类','pb.3.b':'5,000','pb.3.t':'起订量','pb.4.b':'15天','pb.4.t':'样品交期',
    'pb.cta1':'获取报价','pb.cta2':'索取样品','pb.cta3':'下载目录',
    'sidebar.cta.h':'需要帮助选模报价？','sidebar.cta.p':'直接问Alex——帮您挑选合适的模具、免费取样方案及1小时快速报价。',
    'sidebar.cta.a1':'免费获取报价','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'下载完整目录',
    'footer.addr':'上海市嘉定区安亭镇新源路58号701室J',
    'footer.desc':'上海优芙利工艺礼品有限公司（UFREEPACK）——专注金属包装制品设计、研发与制造的高端定制铁盒制造商。总部位于上海，制造基地位于安徽淮南，服务全球50+国家。',
    'nav.about':'关于工厂',
    'nolimits.desc':'从环保配件到形状、表面处理、印刷和工艺——我们提供纸浆模塑、可降解材质与可回收组件，全面对齐可持续包装潮流。'
  }
  // ja/es/ar/ko/pt 精简版翻译补丁在 runtime 自动构建 (key fallback to en)
};
// Build fallback translations for ja/es/ar/ko/pt for keys that would otherwise miss
(function buildB2BFallbacks(){
  var langs=['ja','es','ar','ko','pt'];
  // Compact translations — direct key strings
  var compact={
    ja:{
      // Contact bar
      'cb.person':'Alex','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'月〜金 9:00-18:00 (GMT+8)',
      'cb.download':'カタログDL','cb.sample':'サンプル請求','cb.quote':'見積もり','cb.working':'営業時間','cb.addr':'中国上海',
      // Hero slider 1
      'hs1.eyebrow':'上海優芙利工芸礼品 · UFREEPACK · 缶パッケージ業界20年','hs1.kicker':'ワンストップ缶製造工場',
      'hs1.title':'世界ブランド向け<em>高級ブリキ缶</em>パッケージ',
      'hs1.sub':'食品級チョコ缶からラグジュアリーギフト缶まで——既存金型3,000+、月産300万缶以上、工場直価格、15日迅速サンプル。Alexに直接ご連絡を。',
      'hs1.cta1':'プロジェクト開始 →','hs1.cta2':'工場見学予約',
      'hs1.m1.b':'300万+','hs1.m1.t':'月産','hs1.m2.b':'3,000+','hs1.m2.t':'金型','hs1.m3.b':'15日','hs1.m3.t':'サンプル',
      'hs1.badge.h':'ISO 9001・FDA・SGS','hs1.badge.p':'食品級ブリキ、4段階全工程QC保証。',
      // Hero slider 2
      'hs2.eyebrow':'OEM / ODM フルカスタム','hs2.kicker':'特注形状・印刷・仕上げ',
      'hs2.title':'あなたのアイデアを<em>金属</em>に。',
      'hs2.sub':'20,000㎡ 淮南工場、60台以上サーボプレス機・10条自動ライン。エンボス・箔押し・部分UV・マット・ソフトタッチ——全工法一貫対応。',
      'hs2.cta1':'特注見積り','hs2.cta2':'能力資料DL',
      'hs2.m1.b':'11K','hs2.m1.t':'㎡工場','hs2.m2.b':'300+','hs2.m2.t':'プレス','hs2.m3.b':'20','hs2.m3.t':'自動ライン',
      'hs2.badge.h':'4ステップカスタムフロー','hs2.badge.p':'要件確認→3D→サンプル→量産、専属プロジェクトエンジニア（Alex）が伴走。',
      // Hero slider 3
      'hs3.eyebrow':'世界卸売・B2B大口','hs3.kicker':'50カ国以上に輸出',
      'hs3.title':'世界中へ<em>安定納品</em>',
      'hs3.sub':'最小ロット5,000個〜。上海/寧波FOB、Amazon倉DDP、柔軟インコタームズ。WhatsAppでAlexに——1時間で返信。',
      'hs3.cta1':'今すぐ問合せ →','hs3.cta2':'WhatsAppで話す',
      'hs3.m1.b':'50+','hs3.m1.t':'輸出国','hs3.m2.b':'5,000','hs3.m2.t':'最小ロット','hs3.m3.b':'1h','hs3.m3.t':'回答',
      'hs3.badge.h':'大口お取引に最適','hs3.badge.p':'ネスレ・リンツ・ゴディバ——グローバルブランド監査・コンプライアンス対応済み。',
      // Big stats
      'bs.1.n':'28<em>+</em>','bs.1.t':'年の経験','bs.1.d':'チーム技術経験',
      'bs.2.n':'3<em>M+</em>','bs.2.t':'月産量','bs.2.d':'月間生産缶数',
      'bs.3.n':'3,000<em>+</em>','bs.3.t':'既存金型','bs.3.d':'リピート時無料',
      'bs.4.n':'50<em>+</em>','bs.4.t':'輸出国','bs.4.d':'EU・米・中東・SEA・LATAM',
      // Brand wall
      'bw.label':'12業界のパッケージング専門 · チョコレート · 茶 · コーヒー · 化粧品 · ワイン · ギフト',
      // 6 Capability cards
      'cap.01.tag':'01 · ワンストップ','cap.01.t':'ワンストップ OEM / ODM','cap.01.d':'アートワークから完成缶まで——構造設計・3Dレンダー・金型・印刷・プレス・組立・検査・グローバル納品まで一貫対応。',
      'cap.01.1':'無料の構造設計・3Dレンダー','cap.01.2':'自社工場：新金型7〜15日サイクル','cap.01.3':'顧客別プロジェクトマネージャー',
      'cap.02.tag':'02 · 金型ライブラリ','cap.02.t':'3,000+無料利用金型','cap.02.d':'丸・角・ハート・六角・本・球・家・ボトル・動物——NRE費を省き、76サブカテゴリ・3000+の既存金型を活用。',
      'cap.02.1':'40業種·23形状·8構造·5ホリデー','cap.02.2':'在庫金型は低MOQ 5,000個〜','cap.02.3':'フタ・パルプモールド内装の組み合わせ自由',
      'cap.03.tag':'03 · 食品安全','cap.03.t':'食品級安全ファースト','cap.03.d':'BA/MA/ワニス内面コート、FDA食品試験（GB 4806.9準拠）、ISO 9001、出荷毎のSGS材質・重金属レポート。',
      'cap.03.1':'FDA・LFGB・RoHS適合ブリキ','cap.03.2':'コイルから外箱まで完全トレーサビリティ','cap.03.3':'無毒インキ・食品級ワニス',
      'cap.04.tag':'04 · 印刷・仕上げ','cap.04.t':'プレミアム印刷と仕上げ','cap.04.d':'CMYKオフセット+Pantoneスポット、金/銀箔押し、エンボス/デボス、部分UV、マットラミ、ソフトタッチ、メタリックインク等。',
      'cap.04.1':'自社6色ハイデルベルグ印刷機','cap.04.2':'色見本〜本刷り色合わせ △E ≤ 2','cap.04.3':'位置合わせ金箔エンボス対応可',
      'cap.05.tag':'05 · 量産','cap.05.t':'拡張可能なプレスライン','cap.05.d':'60台以上のサーボプレスを10条自動ラインに配置。ブランキング→絞り→張り出しを順次工程化；ロボットアーム搬送で大量安定品質。',
      'cap.05.1':'16T〜200Tのプレス能力を必要に応じ','cap.05.2':'ロボットアーム搬送±0.03mm公差','cap.05.3':'3交代制·7日間フレキシブル生産',
      'cap.06.tag':'06 · QC・物流','cap.06.t':'4段階QC＋グローバル物流','cap.06.d':'梱包前AQL 2.5全数検査、第三者監査歓迎。FOB/CIF/DDP、上海/寧波EXW、Amazon FBAラベル・納品サービス。',
      'cap.06.1':'IQC·IPQC·FQC·OQC 4段階QC','cap.06.2':'海運·航空·鉄道マルチモーダル','cap.06.3':'米欧海外倉庫ドロップシッピング',
      // 4-step Procurement
      'ps.1.t':'問合せ・仕様送付','ps.1.d':'寸法・アート・目標数量・希望納期をお送りください。1時間以内に返信します。','ps.1.tag':'ステップ01 · 1h返信',
      'ps.2.t':'金型・サンプル確定','ps.2.d':'24h以内に3Dレンダー、7日で白サンプル、15日で印刷サンプル。','ps.2.tag':'ステップ02 · 20日',
      'ps.3.t':'量産','ps.3.d':'自動ラインで月産300万缶以上。各工程で4段階QC追跡。','ps.3.tag':'ステップ03 · 20〜25日',
      'ps.4.t':'検品・出荷','ps.4.d':'100% OQC+ AQL 2.5。FOB/CIF/DDPで世界配送。','ps.4.tag':'ステップ04 · 25〜30日',
      // Cert wall
      'cw.label':'認証','cw.title':'国際的な<em>認証</em>を取得',
      'cw.desc':'大企業監査と各国市場のコンプライアンスを支えるため、認証取得に継続的に投資しています。',
      'cw.1.h':'ISO 9001','cw.1.p':'品質マネジメント','cw.2.h':'ISO 14001','cw.2.p':'環境マネジメント',
      'cw.3.h':'FDA','cw.3.p':'食品接触','cw.4.h':'LFGB','cw.4.p':'EU食品級',
      'cw.5.h':'SGS','cw.5.p':'材質試験','cw.6.h':'SEDEX 4P','cw.6.p':'倫理監査',
      // Inquiry band
      'inquiry.h':'<em>信頼できる缶工場</em>とお仕事しませんか？','inquiry.d':'図面・原稿・目標数量をお送りください。ベテラン営業のAlexが1時間以内に特注見積とDDP案を返信。',
      'inquiry.name':'お名前','inquiry.email':'会社メール','inquiry.phone':'電話/WhatsApp','inquiry.company':'会社名',
      'inquiry.qty':'希望数量','inquiry.msg':'プロジェクト詳細：形状・寸法・印刷・希望納期など …','inquiry.submit':'問合せ送信 →',
      'inquiry.b1':'無料サンプルキット','inquiry.b2':'最小ロット5,000個〜','inquiry.b3':'1時間返信・7/24','inquiry.b4':'工場ビデオ見学予約',
      // Quality flow (4 stage)
      'qc.01.tag':'工程01 · IQC','qc.01.t':'原材料受入検査','qc.01.p':'原反・インキ・塗料入荷時：厚み・硬さ・付着量・食品適合検査。',
      'qc.02.tag':'工程02 · IPQC','qc.02.t':'印刷工程検査','qc.02.p':'500枚毎△E色差＋見当検査。ハイデルベルグ自動見当±0.03mm。',
      'qc.03.tag':'工程03 · FQC','qc.03.t':'プレス最終検査','qc.03.p':'各プレス毎に耐圧・寸法・傷・バリ全数検査。',
      'qc.04.tag':'工程04 · OQC','qc.04.t':'出荷最終検査＋AQL','qc.04.p':'梱包前100%全検＋AQL 2.5レベルII抜取。',
      // Global coverage
      'cov.label':'グローバルサービス','cov.title':'50カ国以上に<em>輸出</em>中','cov.desc':'淮南工場からEU・北米・中東・東南アジアのブランド拠点・Amazon倉庫へ。',
      'cov.1.h':'欧州(EU)','cov.1.s':'ドイツ・英国・フランス・オランダ・イタリア',
      'cov.2.h':'北米','cov.2.s':'米国・カナダ・メキシコ・FBA納品',
      'cov.3.h':'中東','cov.3.s':'UAE・サウジ・カタール・クウェート・トルコ',
      'cov.4.h':'アジア太平洋','cov.4.s':'日本・韓国・SEA・豪州・NZ',
      'cov.5.h':'中南米','cov.5.s':'ブラジル・チリ・アルゼンチン・コロンビア',
      'cov.6.h':'アフリカ','cov.6.s':'南アフリカ・ナイジェリア・ケニア・エジプト',
      'cov.map.h':'UFREEPACK グローバルネットワーク','cov.map.sb':'50カ国以上にサービス中',
      // Sales engineers (contact)
      'se.1.n':'Alex','se.1.r':'シニア営業エンジニア · EU・米州・中東','se.1.a':'WhatsApp・Email・電話',
      'se.2.n':'Lina Chen','se.2.r':'アカウントマネージャー · APAC・中南米','se.2.a':'WhatsApp・Email',
      'se.3.n':'Leo Wang','se.3.r':'技術PM · カスタム金型','se.3.a':'7×24技術サポート',
      // Product center B2B bar
      'pb.1.b':'3,000+','pb.1.t':'金型','pb.2.b':'76','pb.2.t':'カテゴリ','pb.3.b':'5,000','pb.3.t':'最小ロット','pb.4.b':'15日','pb.4.t':'サンプル',
      'pb.cta1':'見積取得','pb.cta2':'サンプル請求','pb.cta3':'カタログDL',
      // Sidebar CTA
      'sidebar.cta.h':'金型選定でお困りですか？','sidebar.cta.p':'Alexにご相談ください——最適金型・無料サンプル・1時間見積もりをご支援。',
      'sidebar.cta.a1':'無料見積もり','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'カタログDL',
      // Footer
      'footer.addr':'中国上海市嘉定区安亭鎮新源路58号701室J',
      'footer.desc':'上海優芙利工芸礼品有限公司（UFREEPACK）——金属パッケージ製品の設計、研究開発、製造を専門とするプレミアムカスタムティンボックスメーカー。中国上海市に本社を置き、安徽省淮南市に製造拠点、50+ヶ国にサービス提供。',
      'nav.about':'工場について'
    },
    es:{
      // Contact bar
      'cb.person':'Alex','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'Lun-Vie 9:00-18:00 GMT+8',
      'cb.download':'Catálogo PDF','cb.sample':'Solicitar Muestra','cb.quote':'Cotización','cb.working':'Horario','cb.addr':'Shanghái, China',
      // Hero slider 1
      'hs1.eyebrow':'Shanghai Youfuli · UFREEPACK · 20 años en packaging metálico','hs1.kicker':'Fábrica Integral de Latas',
      'hs1.title':'Envases de Hojalata <em>Premium</em> para Marcas Globales',
      'hs1.sub':'Desde latas de chocolate grado alimenticio hasta cajas de lujo: 3,000+ moldes listos, 3M+ unidades/mes, precio directo de fábrica, muestreo en 15 días. Contacta directamente a Alex.',
      'hs1.cta1':'Iniciar Proyecto →','hs1.cta2':'Visitar Fábrica',
      'hs1.m1.b':'3M+','hs1.m1.t':'Mes','hs1.m2.b':'3,000+','hs1.m2.t':'Moldes','hs1.m3.b':'15d','hs1.m3.t':'Muestra',
      'hs1.badge.h':'ISO 9001 · FDA · SGS','hs1.badge.p':'Hojalata grado alimenticio + control de calidad de 4 etapas.',
      // Hero slider 2
      'hs2.eyebrow':'OEM / ODM Personalizado','hs2.kicker':'Formas · Impresión · Acabados',
      'hs2.title':'Tu Visión, <em>Estampada</em> en Metal',
      'hs2.sub':'Instalación de 20,000㎡ en Huainan con 60+ prensas servo y 10 líneas automáticas. Relieve, estampado dorado, UV localizado, mate, soft-touch — todo en un solo lugar.',
      'hs2.cta1':'Cotización Personalizada','hs2.cta2':'Descargar Dossier',
      'hs2.m1.b':'11K','hs2.m1.t':'㎡ Planta','hs2.m2.b':'300+','hs2.m2.t':'Prensas','hs2.m3.b':'20','hs2.m3.t':'Líneas',
      'hs2.badge.h':'Flujo Personalizado de 4 Pasos','hs2.badge.p':'Brief → 3D → Muestra → Producción con ingeniero de proyecto dedicado (Alex).',
      // Hero slider 3
      'hs3.eyebrow':'Mayoreo Global · Pedidos B2B','hs3.kicker':'Envío a 50+ Países',
      'hs3.title':'Entrega <em>Masiva</em> Confiable en el Mundo',
      'hs3.sub':'MOQ desde 5,000 pzs. FOB Shanghái / Ningbo, DDP a Amazon e Incoterms flexibles. WhatsApp a Alex — respuesta en 1h.',
      'hs3.cta1':'Enviar Consulta →','hs3.cta2':'WhatsApp',
      'hs3.m1.b':'50+','hs3.m1.t':'Países','hs3.m2.b':'5K','hs3.m2.t':'MOQ','hs3.m3.b':'1h','hs3.m3.t':'Respuesta',
      'hs3.badge.h':'Ideal para Grandes Cuentas','hs3.badge.p':'Fábrica certificada ISO 9001 · Documentación lista para auditorías y cumplimiento de marcas globales.',
      // Big stats
      'bs.1.n':'28<em>+</em>','bs.1.t':'Años','bs.1.d':'Experiencia en estampado',
      'bs.2.n':'3<em>M+</em>','bs.2.t':'Mensual','bs.2.d':'Producción de latas',
      'bs.3.n':'3,000<em>+</em>','bs.3.t':'Moldes','bs.3.d':'Uso gratuito en reordenes',
      'bs.4.n':'50<em>+</em>','bs.4.t':'Países','bs.4.d':'UE · EE.UU · ME · SEA · LATAM',
      // Brand wall
      'bw.label':'Experiencia en 12 industrias · Chocolate · Té · Café · Cosmética · Vino · Regalos',
      // 6 Capability cards
      'cap.01.tag':'01 · INTEGRAL','cap.01.t':'Servicio OEM / ODM Integral','cap.01.d':'Del diseño al producto terminado — diseño estructural, render 3D, troqueles, impresión, estampado, ensamble, inspección y entrega global bajo un mismo techo.',
      'cap.01.1':'Diseño estructural y render 3D gratis','cap.01.2':'Troqueles propios: ciclo de molde nuevo 7–15 días','cap.01.3':'Gerente de proyecto dedicado por cliente',
      'cap.02.tag':'02 · BIBLIOTECA MOLDES','cap.02.t':'3,000+ Moldes de Uso Gratuito','cap.02.d':'Redondo, cuadrado, corazón, hexagonal, libro, bola, casa, botella, animal — evita el NRE y aprovecha 3,000+ moldes listos en 76 subcategorías.',
      'cap.02.1':'40 industrias · 23 formas · 8 estructuras · 5 festividades','cap.02.2':'MOQ bajo de 5,000 pzs en moldes en stock','cap.02.3':'Tapas y insertos de pulpa de papel combinables',
      'cap.03.tag':'03 · SEGURIDAD ALIMENTARIA','cap.03.t':'Seguridad Alimentaria Primero','cap.03.d':'Recubrimientos interiores BA / MA / barniz, pruebas FDA según GB 4806.9, sistema ISO 9001, reportes SGS de material y metales pesados por embarque.',
      'cap.03.1':'Hojalata conforme FDA · LFGB · RoHS','cap.03.2':'Trazabilidad total de bobina a caja','cap.03.3':'Tintas no tóxicas y barnices alimentarios',
      'cap.04.tag':'04 · IMPRESIÓN Y ACABADO','cap.04.t':'Impresión Premium y Acabados','cap.04.d':'Offset CMYK + Pantone spot, hot-stamping dorado/plata, relieve/bajo relieve, UV localizado, laminado mate, soft-touch, tinta metálica y más.',
      'cap.04.1':'Prensas Heidelberg de seis colores in-house','cap.04.2':'Coincidencia de color prueba-a-prensa △E ≤ 2','cap.04.3':'Estampado dorado con relieve registrado disponible',
      'cap.05.tag':'05 · PRODUCCIÓN','cap.05.t':'Líneas de Estampado Escalables','cap.05.d':'60+ prensas servo en 10 líneas automáticas. Recorte → embutido → conformado en secuencia; transferencia con brazo robótico para alta producción estable.',
      'cap.05.1':'Capacidad de prensa 16T–200T bajo demanda','cap.05.2':'Transferencia con brazo robótico tolerancia ±0.03mm','cap.05.3':'3 turnos · producción flexible 7 días',
      'cap.06.tag':'06 · QC Y LOGÍSTICA','cap.06.t':'QC de 4 Etapas + Logística Global','cap.06.d':'Inspección completa AQL 2.5 antes de empacar, auditoría de terceros bienvenida. FOB / CIF / DDP, EXW Shanghái/Ningbo, servicios FBA Amazon.',
      'cap.06.1':'QC de 4 etapas IQC · IPQC · FQC · OQC','cap.06.2':'Envío multimodal marítimo · aéreo · ferrocarril','cap.06.3':'Drop-shipping desde almacenes en EE.UU. y UE',
      // 4-step Procurement
      'ps.1.t':'Envía Consulta y Especificaciones','ps.1.d':'Comparte dimensiones, arte, cantidad objetivo y fecha de entrega. Respondemos en 1 hora.','ps.1.tag':'Paso 01 · Respuesta 1h',
      'ps.2.t':'Confirmación de Molde y Muestra','ps.2.d':'Render 3D en 24h, muestra blanca en 7 días, muestra impresa en 15 días.','ps.2.tag':'Paso 02 · 20 Días',
      'ps.3.t':'Producción en Masa','ps.3.d':'Líneas automatizadas producen 3M+ latas/mes. QC de 4 etapas en cada estación.','ps.3.tag':'Paso 03 · 20–25 Días',
      'ps.4.t':'Inspección y Envío','ps.4.d':'100% OQC + AQL 2.5. Entrega global puerta a puerta FOB / CIF / DDP.','ps.4.tag':'Paso 04 · 25–30 Días',
      // Cert wall
      'cw.label':'Certificaciones','cw.title':'Certificaciones <em>Reconocidas</em>',
      'cw.desc':'Invertimos continuamente en certificaciones para apoyar tus auditorías de grandes marcas y el cumplimiento de cada mercado local.',
      'cw.1.h':'ISO 9001','cw.1.p':'Sistema de Calidad','cw.2.h':'ISO 14001','cw.2.p':'Ambiental',
      'cw.3.h':'FDA','cw.3.p':'Contacto Alimentario','cw.4.h':'LFGB','cw.4.p':'Grado Alimentario UE',
      'cw.5.h':'SGS','cw.5.p':'Prueba de Material','cw.6.h':'SEDEX 4P','cw.6.p':'Auditoría Ética',
      // Inquiry band
      'inquiry.h':'¿Listo para Trabajar con una <em>Fábrica Confiable</em>?','inquiry.d':'Envía tus planos, arte o volumen objetivo. Alex (ingeniero senior) te responde en 1h con cotización y DDP.',
      'inquiry.name':'Nombre','inquiry.email':'Email Corp.','inquiry.phone':'Tel / WhatsApp','inquiry.company':'Empresa',
      'inquiry.qty':'Cantidad','inquiry.msg':'Tu proyecto: forma, tamaño, impresión, fecha entrega …','inquiry.submit':'Enviar Consulta →',
      'inquiry.b1':'Kit de muestras gratis bajo solicitud','inquiry.b2':'MOQ desde 5,000 pzs','inquiry.b3':'Respuesta en 1h · 7/24','inquiry.b4':'Reserva Videotour de Fábrica',
      // Quality flow (4 stage)
      'qc.01.tag':'Etapa 01 · IQC','qc.01.t':'Inspección de Material','qc.01.p':'Bobina de hojalata, tinta y barniz probados al arribo: espesor, dureza, peso de recubrimiento, seguridad alimentaria.',
      'qc.02.tag':'Etapa 02 · IPQC','qc.02.t':'QC de Impresión en Línea','qc.02.p':'Cada 500 hojas control △E de color y registro. Auto-registro Heidelberg ±0.03mm.',
      'qc.03.tag':'Etapa 03 · FQC','qc.03.t':'QC de Estampado Acabado','qc.03.p':'Prueba de presión, revisión de dimensiones, rayas y rebabas en cada estación de prensa.',
      'qc.04.tag':'Etapa 04 · OQC','qc.04.t':'QC Final de Salida + AQL','qc.04.p':'100% inspección completa antes de empacar + inspección aleatoria AQL 2.5 nivel II.',
      // Global coverage
      'cov.label':'Red de Servicio Global','cov.title':'<em>Envío</em> a 50+ Países',
      'cov.desc':'Desde nuestra fábrica en Huainan hacia almacenes de Amazon y centros de distribución de marcas en UE, Norteamérica, Medio Oriente y Sudeste Asiático.',
      'cov.1.h':'Europa (UE)','cov.1.s':'Alemania · UK · Francia · Países Bajos · Italia',
      'cov.2.h':'Norteamérica','cov.2.s':'EE.UU. · Canadá · México · FBA Prep',
      'cov.3.h':'Medio Oriente','cov.3.s':'EAU · Arabia Saudita · Catar · Kuwait · Turquía',
      'cov.4.h':'Asia Pacífico','cov.4.s':'Japón · Corea · SEA · Australia · NZ',
      'cov.5.h':'Latinoamérica','cov.5.s':'Brasil · Chile · Argentina · Colombia',
      'cov.6.h':'África','cov.6.s':'Sudáfrica · Nigeria · Kenia · Egipto',
      'cov.map.h':'Cobertura Global UFREEPACK','cov.map.sb':'50+ Países Servidos',
      // Sales engineers (contact)
      'se.1.n':'Alex','se.1.r':'Ingeniero de Ventas Senior · UE · Américas · ME','se.1.a':'WhatsApp · Email · Llamada',
      'se.2.n':'Lina Chen','se.2.r':'Gerente de Cuenta · APAC · Latinoamérica','se.2.a':'WhatsApp · Email',
      'se.3.n':'Leo Wang','se.3.r':'Gerente de Proyecto Técnico · Troqueles Custom','se.3.a':'Soporte Técnico 7/24',
      // Product center B2B bar
      'pb.1.b':'3,000+','pb.1.t':'Moldes','pb.2.b':'76','pb.2.t':'Categorías','pb.3.b':'5K','pb.3.t':'MOQ','pb.4.b':'15d','pb.4.t':'Muestra',
      'pb.cta1':'Cotización','pb.cta2':'Muestra','pb.cta3':'Catálogo',
      // Sidebar CTA
      'sidebar.cta.h':'¿Ayuda para elegir molde?','sidebar.cta.p':'Habla con Alex — molde ideal, muestra gratuita y cotización en 1h.',
      'sidebar.cta.a1':'Cotización Gratis','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'Descargar Catálogo',
      // Footer
      'footer.addr':'Habitación 701J, N.º 58 Xinyuan Road, Anting Town, Distrito Jiading, Shanghái, China',
      'footer.desc':'Shanghai Youfuli Crafts & Gifts Co., Ltd. (UFREEPACK) — Fabricante premium de latas personalizadas especializado en diseño, I+D y fabricación de envases metálicos. Con sede en Shanghái y planta de fabricación en Huainan, Anhui, atendiendo a más de 50 países en todo el mundo.',
      'nav.about':'La Fábrica'
    },
    ar:{
      // Contact bar
      'cb.person':'أليكس','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'الاثنين–الجمعة 9:00–18:00',
      'cb.download':'الكتالوج','cb.sample':'اطلب عينة','cb.quote':'التسعير','cb.working':'ساعات العمل','cb.addr':'شنغهاي، الصين',
      // Hero slider 1
      'hs1.eyebrow':'شنغهاي يوفولي · UFREEPACK · خبرة 20 عاماً في التغليف المعدني','hs1.kicker':'مصنع متكامل لعلب الصفيح',
      'hs1.title':'علب صفيح <em>فاخرة</em> للعلامات العالمية',
      'hs1.sub':'من علب الشوكولاتة الغذائية إلى صناديق الهدايا الراقية — 3000+ قالب جاهز، 3 ملايين+ علبة شهرياً، سعر المصنع، وجمع عينات خلال 15 يوماً. اتصل مباشرة بأليكس.',
      'hs1.cta1':'ابدأ مشروعك →','hs1.cta2':'احجز زيارة المصنع',
      'hs1.m1.b':'3M+','hs1.m1.t':'شهرياً','hs1.m2.b':'3000+','hs1.m2.t':'قوالب','hs1.m3.b':'15ي','hs1.m3.t':'عينة',
      'hs1.badge.h':'آيزو 9001 · FDA · SGS','hs1.badge.p':'صفيح غذائي مع 4 مراحل لمراقبة الجودة.',
      // Hero slider 2
      'hs2.eyebrow':'خدمة OEM / ODM مخصصة','hs2.kicker':'أشكال · طباعة · تشطيبات',
      'hs2.title':'رؤيتك <em>مطبوعة</em> على المعدن',
      'hs2.sub':'منشأة 20,000م² في هوينان مع 60+ مكبس سيرفو و10 خطوط إنتاج مؤتمتة. بارز · ذهبي مطبوع · UV موضعي · مات · لمس ناعم — كل التقنيات.',
      'hs2.cta1':'تسعير مخصص','hs2.cta2':'تحميل ملف القدرات',
      'hs2.m1.b':'11K','hs2.m1.t':'م²','hs2.m2.b':'300+','hs2.m2.t':'مكابس','hs2.m3.b':'20','hs2.m3.t':'خطوط',
      'hs2.badge.h':'تدفق مخصص من 4 خطوات','hs2.badge.p':'الوصف → 3D → عينة → إنتاج ضخم مع مهندس مشروع مخصص (أليكس).',
      // Hero slider 3
      'hs3.eyebrow':'تجزئة عالمية · طلبات B2B','hs3.kicker':'الشحن 50+ دولة',
      'hs3.title':'توصيل <em>موثوق</em> لكميات كبيرة عالمياً',
      'hs3.sub':'الحد الأدنى 5000 وحدة. FOB شانغهاي/نينغبو، DDP لأمازون، وشروط مرنة. واتساب أليكس — رد خلال ساعة.',
      'hs3.cta1':'أرسل استفسارك →','hs3.cta2':'واتساب',
      'hs3.m1.b':'50+','hs3.m1.t':'دولة','hs3.m2.b':'5K','hs3.m2.t':'حد أدنى','hs3.m3.b':'1س','hs3.m3.t':'الرد',
      'hs3.badge.h':'ملائم للعملاء الكبار','hs3.badge.p':'نستله · ليندت · جوديفا — جاهز للتدقيق والامتثال للعلامات العالمية.',
      // Big stats
      'bs.1.n':'28<em>+</em>','bs.1.t':'سنوات خبرة','bs.1.d':'خبرة حرفيي الضغط',
      'bs.2.n':'3<em>M+</em>','bs.2.t':'الإنتاج الشهري','bs.2.d':'علب منتجة شهرياً',
      'bs.3.n':'3,000<em>+</em>','bs.3.t':'قوالب جاهزة','bs.3.d':'مجانية للطلبات المتكررة',
      'bs.4.n':'50<em>+</em>','bs.4.t':'دول التصدير','bs.4.d':'أوروبا · أمريكا · الشرق الأوسط · آسيا · أمريكا اللاتينية',
      // Brand wall
      'bw.label':'خبرة في 12 صناعة · شوكولاتة · شاي · قهوة · تجميل · نبيذ · هدايا',
      // 6 Capability cards
      'cap.01.tag':'01 · متكامل','cap.01.t':'خدمة OEM / ODM متكاملة','cap.01.d':'من التصميم إلى العلب الجاهزة — تصميم هيكلي، عرض 3D، قوالب، طباعة، ضغط، تجميع، فحص وتسليم عالمي تحت سقف واحد.',
      'cap.01.1':'تصميم هيكلي وعرض 3D مجاني','cap.01.2':'قوالب داخلية: دورة قالب جديد 7–15 يوماً','cap.01.3':'مدير مشروع مخصص لكل عميل',
      'cap.02.tag':'02 · مكتبة القوالب','cap.02.t':'3,000+ قالب مجاني الاستخدام','cap.02.d':'دائري، مربع، قلب، سداسي، كتاب، كرة، منزل، زجاجة، حيوان — تجنب رسوم NRE واستفد من 3000+ قالب جاهز عبر 76 فئة فرعية.',
      'cap.02.1':'40 صناعة · 23 شكلاً · 8 هياكل · 5 أعياد','cap.02.2':'حد أدنى منخفض 5,000 قطعة للقوالب المتوفرة','cap.02.3':'أغطية وحشوات لب الورق قابلة للخلط',
      'cap.03.tag':'03 · سلامة غذائية','cap.03.t':'السلامة الغذائية أولاً','cap.03.d':'بطانة BA / MA / ورنيش داخلية، اختبارات FDA وفق GB 4806.9، نظام آيزو 9001، تقارير SGS للمواد والمعادن الثقيلة لكل شحنة.',
      'cap.03.1':'صفيح متوافق FDA · LFGB · RoHS','cap.03.2':'تتبع كامل من البكرة إلى الكرتونة','cap.03.3':'أحبار غير سامة وورنيشات غذائية',
      'cap.04.tag':'04 · طباعة وتشطيب','cap.04.t':'طباعة فاخرة وتشطيبات','cap.04.d':'أوفست CMYK + Pantone الفاخر، ختم ذهبي/فضي، بارز/غائر، UV موضعي، تصفيح مطفي، لمس ناعم، حبر معدني والمزيد.',
      'cap.04.1':'مكابس هايدلبيرغ سداسية الألوان داخلية','cap.04.2':'مطابقة لون من البرهان للمكبس △E ≤ 2','cap.04.3':'ختم ذهبي بارز مسجل متاح',
      'cap.05.tag':'05 · الإنتاج','cap.05.t':'خطوط ضغط قابلة للتوسع','cap.05.d':'60+ مكبس سيرفو عبر 10 خطوط مؤتمتة. قص → سحب → تشكيل بالتسلسل؛ نقل بالذراع الروبوتية لإنتاج ضخم وجودة مستقرة.',
      'cap.05.1':'قدرة ضغط 16T–200T حسب الطلب','cap.05.2':'نقل ذراع روبوتي بحدود ±0.03mm','cap.05.3':'3 ورديات · إنتاج مرن 7 أيام',
      'cap.06.tag':'06 · مراقبة الجودة واللوجستيات','cap.06.t':'مراقبة جودة من 4 مراحل + لوجستيات عالمية','cap.06.d':'فحص كامل AQL 2.5 قبل التعبئة، تدقيق طرف ثالث مرحب به. FOB / CIF / DDP، EXW شنغهاي/نينغبو، خدمات تحضير وملصقات أمازون FBA.',
      'cap.06.1':'مراقبة جودة من 4 مراحل IQC · IPQC · FQC · OQC','cap.06.2':'شحن بحري · جوي · سكة حديدية متعدد الوسائط','cap.06.3':'شحن من مستودعات أمريكا وأوروبا',
      // 4-step Procurement
      'ps.1.t':'أرسل استفسارك والمواصفات','ps.1.d':'شارك الأبعاد، الرسوم الفنية، الكمية المستهدفة وتاريخ التسليم. نرد خلال ساعة.','ps.1.tag':'الخطوة 01 · رد ساعة',
      'ps.2.t':'تأكيد القالب والعينة','ps.2.d':'عرض 3D خلال 24 ساعة، عينة بيضاء خلال 7 أيام، عينة مطبوعة خلال 15 يوماً.','ps.2.tag':'الخطوة 02 · 20 يوماً',
      'ps.3.t':'الإنتاج الضخم','ps.3.d':'خطوط مؤتمتة تنتج 3M+ علبة شهرياً. مراقبة جودة من 4 مراحل في كل محطة.','ps.3.tag':'الخطوة 03 · 20–25 يوماً',
      'ps.4.t':'الفحص والشحن','ps.4.d':'100% OQC + AQL 2.5. تسليم عالمي من الباب إلى الباب FOB / CIF / DDP.','ps.4.tag':'الخطوة 04 · 25–30 يوماً',
      // Cert wall
      'cw.label':'الشهادات','cw.title':'شهادات <em>معترف بها</em> عالمياً',
      'cw.desc':'نستثمر باستمرار في الشهادات لدعم تدقيق علاماتك الكبرى والامتثال للأسواق المحلية.',
      'cw.1.h':'ISO 9001','cw.1.p':'شهادة نظام الجودة','cw.2.h':'ISO 14001','cw.2.p':'البيئة',
      'cw.3.h':'FDA','cw.3.p':'تماس غذائي','cw.4.h':'LFGB','cw.4.p':'درجة غذائية EU',
      'cw.5.h':'SGS','cw.5.p':'اختبار المواد','cw.6.h':'SEDEX 4P','cw.6.p':'تدقيق أخلاقي',
      // Inquiry band
      'inquiry.h':'هل أنت مستعد للعمل مع <em>مصنع موثوق</em>؟','inquiry.d':'أرسل رسومات التعبئة أو الأعمال الفنية أو الكمية. سيرد أليكس خلال ساعة بعرض سعر مخصص وخطة DDP.',
      'inquiry.name':'الاسم','inquiry.email':'البريد المهني','inquiry.phone':'الهاتف / واتساب','inquiry.company':'الشركة',
      'inquiry.qty':'الكمية','inquiry.msg':'مشروعك: الشكل، الحجم، الطباعة، التاريخ …','inquiry.submit':'إرسال الاستفسار →',
      'inquiry.b1':'حزمة عينات مجانية عند الطلب','inquiry.b2':'حد أدنى من 5,000 قطعة','inquiry.b3':'رد خلال ساعة · 7/24','inquiry.b4':'احجز جولة فيديو للمصنع',
      // Quality flow (4 stage)
      'qc.01.tag':'المرحلة 01 · IQC','qc.01.t':'فحص المواد الخام','qc.01.p':'بكر الصفيح، الحبر والورنيش يُختبران عند الوصول: السمك، الصلابة، وزن الطلاء، السلامة الغذائية.',
      'qc.02.tag':'المرحلة 02 · IPQC','qc.02.t':'مراقبة جودة الطباعة','qc.02.p':'كل 500 ورقة فحص △E للون والتسجيل. تسجيل تلقائي هايدلبيرغ بدقة ±0.03mm.',
      'qc.03.tag':'المرحلة 03 · FQC','qc.03.t':'فحص تشطيب الضغط','qc.03.p':'اختبار الضغط، فحص الأبعاد، الخدوش والنتوءات في كل محطة ضغط.',
      'qc.04.tag':'المرحلة 04 · OQC','qc.04.t':'الفحص النهائي للصادر + AQL','qc.04.p':'فحص كامل 100% قبل التعبئة + فحص عشوائي AQL 2.5 مستوى II.',
      // Global coverage
      'cov.label':'شبكة الخدمة العالمية','cov.title':'<em>شحن</em> إلى 50+ دولة',
      'cov.desc':'من مصنعنا في هوينان إلى مستودعات أمازون ومراكز توزيع العلامات في EU وأمريكا الشمالية والشرق الأوسط وجنوب شرق آسيا.',
      'cov.1.h':'أوروبا (EU)','cov.1.s':'ألمانيا · المملكة المتحدة · فرنسا · هولندا · إيطاليا',
      'cov.2.h':'أمريكا الشمالية','cov.2.s':'USA · كندا · المكسيك · تحضير FBA',
      'cov.3.h':'الشرق الأوسط','cov.3.s':'الإمارات · السعودية · قطر · الكويت · تركيا',
      'cov.4.h':'آسيا والمحيط','cov.4.s':'اليابان · كوريا · SEA · أستراليا · نيوزيلندا',
      'cov.5.h':'أمريكا اللاتينية','cov.5.s':'البرازيل · تشيلي · الأرجنتين · كولومبيا',
      'cov.6.h':'أفريقيا','cov.6.s':'جنوب أفريقيا · نيجيريا · كينيا · مصر',
      'cov.map.h':'تغطية UFREEPACK العالمية','cov.map.sb':'خدمة 50+ دولة',
      // Sales engineers (contact)
      'se.1.n':'أليكس','se.1.r':'مهندس مبيعات أول · EU · الأمريكتين · ME','se.1.a':'واتساب · إيميل · اتصال',
      'se.2.n':'Lina Chen','se.2.r':'مدير حساب · APAC · أمريكا اللاتينية','se.2.a':'واتساب · إيميل',
      'se.3.n':'Leo Wang','se.3.r':'مدير مشروع تقني · قوالب مخصصة','se.3.a':'دعم تقني 7/24',
      // Product center B2B bar
      'pb.1.b':'3,000+','pb.1.t':'قوالب','pb.2.b':'76','pb.2.t':'فئات','pb.3.b':'5K','pb.3.t':'حد أدنى','pb.4.b':'15ي','pb.4.t':'عينة',
      'pb.cta1':'تسعير','pb.cta2':'عينة','pb.cta3':'كتالوج',
      // Sidebar CTA
      'sidebar.cta.h':'تحتاج مساعدة في اختيار القالب؟','sidebar.cta.p':'تحدث مع أليكس — القالب المناسب والعينة المجانية والتسعير خلال ساعة.',
      'sidebar.cta.a1':'تسعير مجاني','sidebar.cta.a2':'واتساب أليكس','sidebar.cta.a3':'تحميل الكتالوج',
      // Footer
      'footer.addr':'غرفة 701J، شارع شينيوان رقم 58، بلدة أنتينغ، منطقة جيادينغ، شنغهاي، الصين',
      'footer.desc':'شركة شنغهاي يوفولي للحرف والهدايا المحدودة (UFREEPACK) — شركة مصنعة فاخرة للعلب المخصصة متخصصة في تصميم تغليف المعادن والبحث والتطوير والتصنيع. مقرها شنغهاي مع منشآت تصنيع في هوينان، آنهوي، تخدم أكثر من 50 دولة حول العالم.',
      'nav.about':'عن المصنع'
    },
    ko:{
      // Contact bar
      'cb.person':'Alex','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'월~금 9:00-18:00 GMT+8',
      'cb.download':'카탈로그 다운','cb.sample':'샘플 요청','cb.quote':'견적','cb.working':'영업시간','cb.addr':'중국 상하이',
      // Hero slider 1
      'hs1.eyebrow':'상하이 유풸리 공예품 · UFREEPACK · 금속 포장 20년','hs1.kicker':'원스톱 주석 상자 공장',
      'hs1.title':'글로벌 브랜드를 위한 <em>프리미엄</em> 주석 포장',
      'hs1.sub':'식품급 초콜릿 캔부터 럭셔리 선물 상자까지——기존 금형 3,000+、월 3M+ 캔、공장 직수 가격、15일 신속 샘플링. Alex에게 직접 문의.',
      'hs1.cta1':'프로젝트 시작 →','hs1.cta2':'공장 견적 예약',
      'hs1.m1.b':'3M+','hs1.m1.t':'월 생산','hs1.m2.b':'3,000+','hs1.m2.t':'금형','hs1.m3.b':'15일','hs1.m3.t':'샘플',
      'hs1.badge.h':'ISO 9001 · FDA · SGS','hs1.badge.p':'식품급 강판 · 4단계 전 공정 QC 보장.',
      // Hero slider 2
      'hs2.eyebrow':'OEM / ODM 맞춤','hs2.kicker':'형태 · 인쇄 · 후가공',
      'hs2.title':'당신의 비전을 금속으로 <em>스탬프</em>',
      'hs2.sub':'20,000㎡ 화이난 공장, 60대 이상 서보 프레스, 10개 자동화 라인. 엠보싱 · 금박 핫스탬핑 · 스팟 UV · 매트 · 소프트 터치——전 공정 원스톱.',
      'hs2.cta1':'커스텀 견적','hs2.cta2':'역량 자료 다운',
      'hs2.m1.b':'11K','hs2.m1.t':'㎡ 공장','hs2.m2.b':'300+','hs2.m2.t':'프레스','hs2.m3.b':'20','hs2.m3.t':'자동라인',
      'hs2.badge.h':'4단계 커스텀 플로우','hs2.badge.p':'요건→3D→샘플→양산, 전담 프로젝트 엔지니어(Alex)가 동행.',
      // Hero slider 3
      'hs3.eyebrow':'글로벌 도매 · B2B 대량','hs3.kicker':'50+ 개국 수출',
      'hs3.title':'전 세계 <em>안정적</em> 대량 납품',
      'hs3.sub':'MOQ 5,000개 부터. 상하이/닝보 FOB, 아마존 DDP, 유연한 인코텀즈. Alex에게 WhatsApp——1시간 응답.',
      'hs3.cta1':'지금 문의 →','hs3.cta2':'WhatsApp 상담',
      'hs3.m1.b':'50+','hs3.m1.t':'수출국','hs3.m2.b':'5K','hs3.m2.t':'MOQ','hs3.m3.b':'1h','hs3.m3.t':'응답',
      'hs3.badge.h':'대형 고객 친화','hs3.badge.p':'ISO 9001 인증 공장 · 글로벌 브랜드 감사·컴플라이언스 대응 완료.',
      // Big stats
      'bs.1.n':'28<em>+</em>','bs.1.t':'연 경험','bs.1.d':'스탬핑 장인 노하우',
      'bs.2.n':'3<em>M+</em>','bs.2.t':'월 생산량','bs.2.d':'월간 캔 생산 수',
      'bs.3.n':'3,000<em>+</em>','bs.3.t':'기존 금형','bs.3.d':'리피트 무료 사용',
      'bs.4.n':'50<em>+</em>','bs.4.t':'수출국','bs.4.d':'EU · 미국 · 중동 · SEA · LATAM',
      // Brand wall
      'bw.label':'12개 산업 패키징 전문 · 초콜릿 · 차 · 커피 · 화장품 · 와인 · 기프트',
      // 6 Capability cards
      'cap.01.tag':'01 · 원스톱','cap.01.t':'원스톱 OEM / ODM 서비스','cap.01.d':'아트워크부터 완성 캔까지——구조 설계·3D 렌더·금형·인쇄·스탬핑·조립·검수·글로벌 납품까지 한 곳에서.',
      'cap.01.1':'무료 구조 설계·3D 렌더','cap.01.2':'자체 금형: 신규 금형 7–15일 사이클','cap.01.3':'고객별 전담 프로젝트 매니저',
      'cap.02.tag':'02 · 금형 라이브러리','cap.02.t':'3,000+ 무료 사용 금형','cap.02.d':'원형·사각·하트·육각·북·구형·하우스·보틀·동물——NRE 비용을 줄이고 76개 세부 카테고리의 3000+ 기존 금형 활용.',
      'cap.02.1':'40업종·23형태·8구조·5명절','cap.02.2':'재고 금형 MOQ 5,000개부터','cap.02.3':'뚜껑·펄프 몰드 삽입 자유 조합',
      'cap.03.tag':'03 · 식품 안전','cap.03.t':'식품급 안전 최우선','cap.03.d':'BA/MA/니스 내면 코팅, FDA 식품 시험(GB 4806.9 준거), ISO 9001, 출하별 SGS 재질·중금속 리포트.',
      'cap.03.1':'FDA·LFGB·RoHS 규격 강판','cap.03.2':'코일부터 박스까지 완전 추적','cap.03.3':'무독성 잉크·식품급 바니시',
      'cap.04.tag':'04 · 인쇄·후가공','cap.04.t':'프리미엄 인쇄·후가공','cap.04.d':'CMYK 오프셋+Pantone 스포트, 금/은 박스탬핑, 엠보/데보스, 스팟 UV, 매트 라미, 소프트 터치, 메탈릭 잉크 등.',
      'cap.04.1':'자체 6색 하이델베르크 인쇄기','cap.04.2':'색견~본인쇄 색맞춤 △E ≤ 2','cap.04.3':'위치맞춤 금박 엠보싱 가능',
      'cap.05.tag':'05 · 생산','cap.05.t':'확장 가능한 스탬핑 라인','cap.05.d':'60대 이상 서보 프레스를 10개 자동화 라인에 배치. 블랭킹→드로잉→포밍 순차 공정; 로봇암 이송으로 대량 안정 품질.',
      'cap.05.1':'16T–200T 프레스 능력 주문형','cap.05.2':'로봇암 이송 ±0.03mm 공차','cap.05.3':'3교대·7일 유연 생산',
      'cap.06.tag':'06 · QC·물류','cap.06.t':'4단계 QC + 글로벌 물류','cap.06.d':'포장 전 AQL 2.5 전수 검사, 제3자 감사 환영. FOB/CIF/DDP, 상하이/닝보 EXW, Amazon FBA 라벨·입고 서비스.',
      'cap.06.1':'IQC·IPQC·FQC·OQC 4단계 QC','cap.06.2':'해운·항공·철도 복합 운송','cap.06.3':'미주·유럽 해외창고 드롭쉽핑',
      // 4-step Procurement
      'ps.1.t':'문의·스펙 전송','ps.1.d':'치수·아트·목표 수량·납기를 알려주세요. 1시간 내 회신합니다.','ps.1.tag':'1단계 · 1시간 회신',
      'ps.2.t':'금형·샘플 확정','ps.2.d':'24시간 내 3D 렌더, 7일 화이트 샘플, 15일 인쇄 샘플.','ps.2.tag':'2단계 · 20일',
      'ps.3.t':'양산','ps.3.d':'자동 라인 월 3M+ 캔 생산. 각 공정 4단계 QC 추적.','ps.3.tag':'3단계 · 20–25일',
      'ps.4.t':'검수·출하','ps.4.d':'100% OQC + AQL 2.5. FOB/CIF/DDP 글로벌 배송.','ps.4.tag':'4단계 · 25–30일',
      // Cert wall
      'cw.label':'인증 현황','cw.title':'글로벌 <em>인증</em> 보유',
      'cw.desc':'대형 브랜드 감사 및 각국 시장 컴플라이언스를 위해 인증 투자를 지속합니다.',
      'cw.1.h':'ISO 9001','cw.1.p':'품질 경영','cw.2.h':'ISO 14001','cw.2.p':'환경 경영',
      'cw.3.h':'FDA','cw.3.p':'식품 접촉','cw.4.h':'LFGB','cw.4.p':'EU 식품급',
      'cw.5.h':'SGS','cw.5.p':'재질 시험','cw.6.h':'SEDEX 4P','cw.6.p':'윤리 감사',
      // Inquiry band
      'inquiry.h':'<em>믿을 수 있는 주석 상자 공장</em>과 협력하시겠습니까？','inquiry.d':'도면、원고、목표 수량을 보내주세요. 베테랑 Alex가 1시간 내 맞춤 견적 및 DDP 방안 회신.',
      'inquiry.name':'이름','inquiry.email':'회사 메일','inquiry.phone':'전화 / WhatsApp','inquiry.company':'회사명',
      'inquiry.qty':'수량','inquiry.msg':'프로젝트: 형태、치수、인쇄、납기일 …','inquiry.submit':'문의 보내기 →',
      'inquiry.b1':'요청 시 무료 샘플 키트','inquiry.b2':'MOQ 5,000개부터','inquiry.b3':'1시간 회신 · 7/24','inquiry.b4':'공장 비디오 투어 예약',
      // Quality flow (4 stage)
      'qc.01.tag':'1단계 · IQC','qc.01.t':'원자재 수입 검사','qc.01.p':'강판 코일·잉크·니스 입고 시 검사: 두께·경도·도금량·식품 안전.',
      'qc.02.tag':'2단계 · IPQC','qc.02.t':'인쇄 공정 검사','qc.02.p':'500장마다 △E 색차+레지스터 검사. 하이델베르크 자동 레지스터 ±0.03mm.',
      'qc.03.tag':'3단계 · FQC','qc.03.t':'스탬핑 마감 검사','qc.03.p':'각 프레스별 내압·치수·스크래치·버 검사.',
      'qc.04.tag':'4단계 · OQC','qc.04.t':'출하 최종 검사 + AQL','qc.04.p':'포장 전 100% 전수 + AQL 2.5 레벨 II 랜덤 검사.',
      // Global coverage
      'cov.label':'글로벌 서비스 망','cov.title':'50+개국에 <em>수출</em> 중',
      'cov.desc':'화이난 공장에서 EU·북미·중동·동남아의 브랜드 거점·아마존 창고까지.',
      'cov.1.h':'유럽(EU)','cov.1.s':'독일·영국·프랑스·네덜란드·이탈리아',
      'cov.2.h':'북미','cov.2.s':'미국·캐나다·멕시코·FBA Prep',
      'cov.3.h':'중동','cov.3.s':'UAE·사우디·카타르·쿠웨이트·터키',
      'cov.4.h':'아시아 태평양','cov.4.s':'일본·한국·SEA·호주·NZ',
      'cov.5.h':'중남미','cov.5.s':'브라질·칠레·아르헨티나·콜롬비아',
      'cov.6.h':'아프리카','cov.6.s':'남아공·나이지리아·케냐·이집트',
      'cov.map.h':'UFREEPACK 글로벌 커버리지','cov.map.sb':'50+개국 서비스 중',
      // Sales engineers (contact)
      'se.1.n':'Alex','se.1.r':'시니어 영업 엔지니어 · EU · 미주 · 중동','se.1.a':'WhatsApp·이메일·전화',
      'se.2.n':'Lina Chen','se.2.r':'계정 매니저 · APAC · 중남미','se.2.a':'WhatsApp·이메일',
      'se.3.n':'Leo Wang','se.3.r':'기술 PM · 커스텀 금형','se.3.a':'7×24 기술 지원',
      // Product center B2B bar
      'pb.1.b':'3,000+','pb.1.t':'금형','pb.2.b':'76','pb.2.t':'카테고리','pb.3.b':'5K','pb.3.t':'MOQ','pb.4.b':'15일','pb.4.t':'샘플',
      'pb.cta1':'견적','pb.cta2':'샘플','pb.cta3':'카탈로그',
      // Sidebar CTA
      'sidebar.cta.h':'금형 선정 도움이 필요하신가요？','sidebar.cta.p':'Alex와 상담——맞춤 금형、무료 샘플、1시간 견적 지원.',
      'sidebar.cta.a1':'무료 견적','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'카탈로그 다운',
      // Footer
      'footer.addr':'중국 상하이시 자딩구 안팅진 신위안로 58호 701J호',
      'footer.desc':'상하이 유푸리 공예품 유한회사 (UFREEPACK) — 금속 패키징 디자인, R&D 및 제조를 전문으로 하는 프리미엄 맞춤형 틴 박스 제조업체. 상하이에 본사를 두고 안후이성 화이난에 제조 시설을 갖추며 전 세계 50여 개국에 서비스를 제공합니다.',
      'nav.about':'공장 소개'
    },
    pt:{
      // Contact bar
      'cb.person':'Alex','cb.mobile':'+86 181 6447 0172','cb.mail':'ufreepacking@gmail.com','cb.hours':'Seg-Sex 9:00-18:00 GMT+8',
      'cb.download':'Catálogo','cb.sample':'Amostra Grátis','cb.quote':'Cotação','cb.working':'Horário','cb.addr':'Shanghái, China',
      // Hero slider 1
      'hs1.eyebrow':'Shanghai Youfuli · UFREEPACK · 20 anos em embalagem metálica','hs1.kicker':'Fábrica Integral de Latas',
      'hs1.title':'Embalagens de Lata <em>Premium</em> para Marcas Globais',
      'hs1.sub':'De latas de chocolate a caixas de presente: 3.000+ moldes, 3M+ unidades/mês, preço direto de fábrica, amostragem em 15 dias. Contate diretamente Alex.',
      'hs1.cta1':'Iniciar Projeto →','hs1.cta2':'Agendar Visita',
      'hs1.m1.b':'3M+','hs1.m1.t':'/Mês','hs1.m2.b':'3,000+','hs1.m2.t':'Moldes','hs1.m3.b':'15d','hs1.m3.t':'Amostra',
      'hs1.badge.h':'ISO 9001 · FDA · SGS','hs1.badge.p':'Lata de grau alimentício + QC de 4 etapas garantido.',
      // Hero slider 2
      'hs2.eyebrow':'OEM / ODM Personalizado','hs2.kicker':'Formas · Impressão · Acabamentos',
      'hs2.title':'Sua Visão, <em>Estampada</em> em Metal',
      'hs2.sub':'Instalação de 20.000㎡ em Huainan com 60+ prensas servo e 10 linhas automáticas. Relevo, hot-stamping dourado, UV localizado, fosco, toque macio——tudo num só lugar.',
      'hs2.cta1':'Cotação Personalizada','hs2.cta2':'Baixar Dossier',
      'hs2.m1.b':'11K','hs2.m1.t':'㎡ Planta','hs2.m2.b':'300+','hs2.m2.t':'Prensas','hs2.m3.b':'20','hs2.m3.t':'Linhas',
      'hs2.badge.h':'Fluxo Custom de 4 Passos','hs2.badge.p':'Briefing → 3D → Amostra → Produção com engenheiro de projeto dedicado (Alex).',
      // Hero slider 3
      'hs3.eyebrow':'Atacado Global · Pedidos B2B','hs3.kicker':'Envio p/ 50+ Países',
      'hs3.title':'Entrega <em>Confiável</em> em Lote Mundial',
      'hs3.sub':'MOQ a partir de 5.000 un. FOB Xangai / Ningbo, DDP até Amazon e Incoterms flexíveis. WhatsApp Alex — resposta em até 1h.',
      'hs3.cta1':'Enviar Consulta →','hs3.cta2':'WhatsApp',
      'hs3.m1.b':'50+','hs3.m1.t':'Países','hs3.m2.b':'5K','hs3.m2.t':'MOQ','hs3.m3.b':'1h','hs3.m3.t':'Resposta',
      'hs3.badge.h':'Ideal para Grandes Contas','hs3.badge.p':'Fábrica certificada ISO 9001 · Documentação pronta para auditorias e conformidade de marcas globais.',
      // Big stats
      'bs.1.n':'28<em>+</em>','bs.1.t':'Anos','bs.1.d':'Experiência em estamparia',
      'bs.2.n':'3<em>M+</em>','bs.2.t':'Mensal','bs.2.d':'Produção de latas',
      'bs.3.n':'3,000<em>+</em>','bs.3.t':'Moldes','bs.3.d':'Uso grátis em repetições',
      'bs.4.n':'50<em>+</em>','bs.4.t':'Países','bs.4.d':'UE · EUA · ME · SEA · LATAM',
      // Brand wall
      'bw.label':'Especialidade em 12 indústrias · Chocolate · Chá · Café · Cosméticos · Vinho · Presentes',
      // 6 Capability cards
      'cap.01.tag':'01 · INTEGRAL','cap.01.t':'Serviço OEM / ODM Integral','cap.01.d':'Do design ao produto final — projeto estrutural, render 3D, moldes, impressão, estamparia, montagem, inspeção e entrega global sob o mesmo teto.',
      'cap.01.1':'Projeto estrutural e render 3D grátis','cap.01.2':'Moldes próprios: ciclo de molde novo 7–15 dias','cap.01.3':'Gerente de projeto dedicado por cliente',
      'cap.02.tag':'02 · BIBLIOTECA MOLDES','cap.02.t':'3.000+ Moldes de Uso Gratuito','cap.02.d':'Redondo, quadrado, coração, hexagonal, livro, esfera, casa, garrafa, animal — evite o NRE e use 3.000+ moldes prontos em 76 subcategorias.',
      'cap.02.1':'40 indústrias · 23 formas · 8 estruturas · 5 festividades','cap.02.2':'MOQ baixo de 5.000 un em moldes em stock','cap.02.3':'Tampas e insertos de polpa de papel combináveis',
      'cap.03.tag':'03 · SEGURANÇA ALIMENTAR','cap.03.t':'Segurança Alimentar Primeiro','cap.03.d':'Revestimentos internos BA / MA / verniz, testes FDA conforme GB 4806.9, sistema ISO 9001, relatórios SGS de material e metais pesados por embarque.',
      'cap.03.1':'Lata conforme FDA · LFGB · RoHS','cap.03.2':'Rastreabilidade total da bobina à caixa','cap.03.3':'Tintas não tóxicas e vernizes alimentícios',
      'cap.04.tag':'04 · IMPRESSÃO E ACABAMENTO','cap.04.t':'Impressão Premium e Acabamentos','cap.04.d':'Offset CMYK + Pantone spot, hot-stamping dourado/prata, relevo/baixo-relevo, UV localizado, laminação fosca, toque macio, tinta metálica e mais.',
      'cap.04.1':'Prensas Heidelberg de seis cores in-house','cap.04.2':'Correspondência de cor prova-prensa △E ≤ 2','cap.04.3':'Hot-stamping dourado com relevo registrado disponível',
      'cap.05.tag':'05 · PRODUÇÃO','cap.05.t':'Linhas de Estampagem Escaláveis','cap.05.d':'60+ prensas servo em 10 linhas automáticas. Recorte → embutido → conformado em sequência; transferência com braço robótico para alto volume e qualidade estável.',
      'cap.05.1':'Capacidade de prensa 16T–200T sob demanda','cap.05.2':'Transferência com braço robótico tolerância ±0.03mm','cap.05.3':'3 turnos · produção flexível 7 dias',
      'cap.06.tag':'06 · QC E LOGÍSTICA','cap.06.t':'QC de 4 Etapas + Logística Global','cap.06.d':'Inspeção completa AQL 2.5 antes de embalar, auditoria de terceiros bem-vinda. FOB / CIF / DDP, EXW Xangai/Ningbo, serviços FBA Amazon.',
      'cap.06.1':'QC de 4 etapas IQC · IPQC · FQC · OQC','cap.06.2':'Envio multimodal marítimo · aéreo · ferroviário','cap.06.3':'Drop-shipping de armazéns nos EUA e UE',
      // 4-step Procurement
      'ps.1.t':'Envie Consulta e Especificações','ps.1.d':'Compartilhe dimensões, arte, quantidade-alvo e data de entrega. Respondemos em 1 hora.','ps.1.tag':'Passo 01 · Resposta 1h',
      'ps.2.t':'Confirmação de Molde e Amostra','ps.2.d':'Render 3D em 24h, amostra branca em 7 dias, amostra impressa em 15 dias.','ps.2.tag':'Passo 02 · 20 Dias',
      'ps.3.t':'Produção em Massa','ps.3.d':'Linhas automatizadas produzem 3M+ latas/mês. QC de 4 etapas em cada estação.','ps.3.tag':'Passo 03 · 20–25 Dias',
      'ps.4.t':'Inspeção e Envio','ps.4.d':'100% OQC + AQL 2.5. Entrega global porta a porta FOB / CIF / DDP.','ps.4.tag':'Passo 04 · 25–30 Dias',
      // Cert wall
      'cw.label':'Certificações','cw.title':'Certificações <em>Reconhecidas</em>',
      'cw.desc':'Investimos continuamente em certificações para apoiar suas auditorias de grandes marcas e a conformidade de cada mercado local.',
      'cw.1.h':'ISO 9001','cw.1.p':'Sistema de Qualidade','cw.2.h':'ISO 14001','cw.2.p':'Ambiental',
      'cw.3.h':'FDA','cw.3.p':'Contato Alimentar','cw.4.h':'LFGB','cw.4.p':'Grau Alimentar UE',
      'cw.5.h':'SGS','cw.5.p':'Teste de Material','cw.6.h':'SEDEX 4P','cw.6.p':'Auditoria Ética',
      // Inquiry band
      'inquiry.h':'Pronto para Trabalhar com uma <em>Fábrica Confiável</em>？','inquiry.d':'Envie desenhos, arte ou volume. Alex (engenheiro sênior) responde em 1h com cotação e DDP.',
      'inquiry.name':'Nome','inquiry.email':'Email Corp.','inquiry.phone':'Tel / WhatsApp','inquiry.company':'Empresa',
      'inquiry.qty':'Quantidade','inquiry.msg':'Projeto: forma, tamanho, impressão, data …','inquiry.submit':'Enviar Consulta →',
      'inquiry.b1':'Kit de amostras grátis sob solicitação','inquiry.b2':'MOQ a partir de 5.000 un','inquiry.b3':'Resposta em 1h · 7/24','inquiry.b4':'Reserve Vídeotour da Fábrica',
      // Quality flow (4 stage)
      'qc.01.tag':'Etapa 01 · IQC','qc.01.t':'Inspeção de Material','qc.01.p':'Bobina de lata, tinta e verniz testados na chegada: espessura, dureza, peso de revestimento, segurança alimentar.',
      'qc.02.tag':'Etapa 02 · IPQC','qc.02.t':'QC de Impressão em Linha','qc.02.p':'A cada 500 folhas controle △E de cor e registro. Auto-registro Heidelberg ±0.03mm.',
      'qc.03.tag':'Etapa 03 · FQC','qc.03.t':'QC de Estampagem Acabada','qc.03.p':'Teste de pressão, conferência de dimensões, arranhões e rebarbas em cada estação de prensa.',
      'qc.04.tag':'Etapa 04 · OQC','qc.04.t':'QC Final de Saída + AQL','qc.04.p':'100% inspeção completa antes de embalar + inspeção aleatória AQL 2.5 nível II.',
      // Global coverage
      'cov.label':'Rede de Serviço Global','cov.title':'<em>Envio</em> para 50+ Países',
      'cov.desc':'Da nossa fábrica em Huainan até armazéns da Amazon e centros de distribuição de marcas na UE, América do Norte, Oriente Médio e Sudeste Asiático.',
      'cov.1.h':'Europa (UE)','cov.1.s':'Alemanha · Reino Unido · França · Países Baixos · Itália',
      'cov.2.h':'América do Norte','cov.2.s':'EUA · Canadá · México · FBA Prep',
      'cov.3.h':'Oriente Médio','cov.3.s':'EAU · Arábia Saudita · Catar · Kuwait · Turquia',
      'cov.4.h':'Ásia Pacífico','cov.4.s':'Japão · Coreia · SEA · Austrália · NZ',
      'cov.5.h':'América Latina','cov.5.s':'Brasil · Chile · Argentina · Colômbia',
      'cov.6.h':'África','cov.6.s':'África do Sul · Nigéria · Quênia · Egito',
      'cov.map.h':'Cobertura Global UFREEPACK','cov.map.sb':'50+ Países Atendidos',
      // Sales engineers (contact)
      'se.1.n':'Alex','se.1.r':'Engenheiro de Vendas Sênior · UE · Américas · ME','se.1.a':'WhatsApp · Email · Telefone',
      'se.2.n':'Lina Chen','se.2.r':'Gerente de Conta · APAC · América Latina','se.2.a':'WhatsApp · Email',
      'se.3.n':'Leo Wang','se.3.r':'Gerente de Projeto Técnico · Moldes Custom','se.3.a':'Suporte Técnico 7/24',
      // Product center B2B bar
      'pb.1.b':'3,000+','pb.1.t':'Moldes','pb.2.b':'76','pb.2.t':'Categorias','pb.3.b':'5K','pb.3.t':'MOQ','pb.4.b':'15d','pb.4.t':'Amostra',
      'pb.cta1':'Cotação','pb.cta2':'Amostra','pb.cta3':'Catálogo',
      // Sidebar CTA
      'sidebar.cta.h':'Precisa de Ajuda p/ molde？','sidebar.cta.p':'Fale com Alex — molde ideal, amostra grátis e cotação em 1h.',
      'sidebar.cta.a1':'Cotação Grátis','sidebar.cta.a2':'WhatsApp Alex','sidebar.cta.a3':'Baixar Catálogo',
      // Footer
      'footer.addr':'Sala 701J, N.º 58 Xinyuan Road, Anting Town, Distrito de Jiading, Xangai, China',
      'footer.desc':'Shanghai Youfuli Crafts & Gifts Co., Ltd. (UFREEPACK) — Fabricante premium de latas de estanho personalizadas, especializada em design, P&D e fabricação de embalagens metálicas. Sediada em Xangai com instalações de fabricação em Huainan, Anhui, atendendo 50+ países em todo o mundo.',
      'nav.about':'Sobre a Fábrica'
    }
  };
  // Merge compact into B2B_PATCH
  Object.keys(compact).forEach(function(lang){ B2B_PATCH[lang]=compact[lang]; });
})();

// Merge B2B_PATCH into global tr
(function mergeB2BPatch(){
  Object.keys(B2B_PATCH).forEach(function(lang){
    if(!tr[lang]) tr[lang]={};
    var p=B2B_PATCH[lang];
    Object.keys(p).forEach(function(k){ tr[lang][k]=p[k]; });
  });
})();

// Section-header i18n for the "Why UFREEPACK" capability section (label/title/desc)
(function(){
  var sec={
    en:{label:'Why UFREEPACK · Core Advantages',t:'Built for <em>Global B2B Buyers</em> & Big-Account Audits',d:'Six core pillars that make UFREEPACK the reliable packaging partner for 200+ buyers across 50+ countries.'},
    zh:{label:'Why UFREEPACK · 核心优势',t:'为<em>全球大客户</em>与大厂验厂而建',d:'六大核心支柱，让 UFREEPACK 成为 50+ 国家 200+ 买家的可靠包装合作伙伴。'},
    ja:{label:'Why UFREEPACK · コア優位性',t:'<em>グローバルB2Bバイヤー</em>と大口監査に耐える設計',d:'UFREEPACK を 50カ国・200社以上のバイヤーから信頼させる 6 つのコア支柱。'},
    es:{label:'Why UFREEPACK · Ventajas Clave',t:'Diseñado para <em>Compradores B2B Globales</em> y Auditorías de Grandes Cuentas',d:'Seis pilares centrales que hacen de UFREEPACK el socio de embalaje confiable para +200 compradores en 50+ países.'},
    ar:{label:'Why UFREEPACK · المزايا الأساسية',t:'مصمَّم لـ <em>مشتري B2B عالميين</em> ومراجعة الحسابات الكبرى',d:'ستّ ركائز أساسية تجعل UFREEPACK الشريك الموثوق للتعبئة لـ +200 مشترٍ في 50+ دولة.'},
    ko:{label:'Why UFREEPACK · 핵심 우위',t:'<em>글로벌 B2B 바이어</em>와 대형 계정 감사를 위한 설계',d:'UFREEPACK를 50+개국 200+ 바이어의 믿을 수 있는 포장 파트너로 만드는 6대 핵심 기둥.'},
    pt:{label:'Why UFREEPACK · Vantagens-Chave',t:'Feito para <em>Compradores B2B Globais</em> e Auditorias de Grandes Contas',d:'Seis pilares centrais que fazem da UFREEPACK a parceira de embalagem confiável para +200 compradores em 50+ países.'}
  };
  Object.keys(sec).forEach(function(l){
    if(!tr[l]) tr[l]={};
    tr[l]['cap.sec.label']=sec[l].label;
    tr[l]['cap.sec.t']=sec[l].t;
    tr[l]['cap.sec.d']=sec[l].d;
  });
})();

// i18n for the accessibility skip-link and the 404 page block.
// (breadcrumb "Home" reuses nav.home; 404 CTA/chip reuse about.hero.cta2 + footer.p4)
(function(){
  var ex={
    en:{'a11y.skip':'Skip to main content','nf.kicker':'Error — Page Not Found','nf.title':'This tin came back <em>empty</em>','nf.text':"The page you requested doesn't exist or may have been moved. Let's get you back to what matters — premium custom tin packaging.",'nf.back':'Back to Home','nf.c1':'Food Tins','nf.c2':'Gift Tins','nf.c4':'Contact Us'},
    zh:{'a11y.skip':'跳转到主要内容','nf.kicker':'错误 — 页面未找到','nf.title':'这个罐子回来时<em>空空如也</em>','nf.text':'您访问的页面不存在或已被移动。让我们带您回到重点 —— 高端定制马口铁包装。','nf.back':'返回首页','nf.c1':'食品罐','nf.c2':'礼品罐','nf.c4':'联系我们'},
    ja:{'a11y.skip':'メインコンテンツへスキップ','nf.kicker':'エラー — ページが見つかりません','nf.title':'この缶は<em>空</em>のまま戻ってきました','nf.text':'ご覧のページは存在しないか、移動された可能性があります。重要なものへお戻りください — プレミアムなカスタム缶パッケージング。','nf.back':'ホームへ戻る','nf.c1':'フード缶','nf.c2':'ギフト缶','nf.c4':'お問い合わせ'},
    es:{'a11y.skip':'Saltar al contenido principal','nf.kicker':'Error — Página no encontrada','nf.title':'Esta lata volvió <em>vacía</em>','nf.text':'La página solicitada no existe o puede haber sido movida. Volvamos a lo importante: envases de hojalata personalizados premium.','nf.back':'Volver al inicio','nf.c1':'Latas de alimentos','nf.c2':'Latas de regalo','nf.c4':'Contáctanos'},
    ar:{'a11y.skip':'تخطَّ إلى المحتوى الرئيسي','nf.kicker':'خطأ — الصفحة غير موجودة','nf.title':'عادت هذه العلبة <em>فارغة</em>','nf.text':'الصفحة المطلوبة غير موجودة أو ربما تم نقلها. لنعُد بك إلى ما يهم — تعبئة معدنية مخصّصة فاخرة.','nf.back':'العودة إلى الرئيسية','nf.c1':'علب الأطعمة','nf.c2':'علب الهدايا','nf.c4':'اتصل بنا'},
    ko:{'a11y.skip':'본문으로 건너뛰기','nf.kicker':'오류 — 페이지를 찾을 수 없습니다','nf.title':'이 틴은 <em>텅 빈</em> 채로 돌아왔습니다','nf.text':'요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 중요한 것으로 돌아가죠 — 프리미엄 맞춤형 주석 포장.','nf.back':'홈으로 돌아가기','nf.c1':'식품 틴','nf.c2':'선물 틴','nf.c4':'문의하기'},
    pt:{'a11y.skip':'Pular para o conteúdo principal','nf.kicker':'Erro — Página não encontrada','nf.title':'Esta lata voltou <em>vazia</em>','nf.text':'A página solicitada não existe ou pode ter sido movida. Vamos voltar ao que importa — embalagens de folha de flandres personalizadas premium.','nf.back':'Voltar ao início','nf.c1':'Latas de alimentos','nf.c2':'Latas de presente','nf.c4':'Fale conosco'}
  };
  Object.keys(ex).forEach(function(l){
    if(!tr[l]) tr[l]={};
    Object.keys(ex[l]).forEach(function(k){ tr[l][k]=ex[l][k]; });
  });
})();

// Safe translate helpers
function T(k){return (tr[curLang] && tr[curLang][k]) || (tr.en && tr.en[k]) || k;}
function setSafeHtml(el,k){
  if(!el)return;
  var raw=T(k);
  // Allow only <em> tag
  el.innerHTML=String(raw).replace(/<(?!\/?em\b)[^>]+>/ig,'');
}
function renderB2BTexts(){
  document.querySelectorAll('[data-b2b]').forEach(function(el){setSafeHtml(el,el.getAttribute('data-b2b'));});
  document.querySelectorAll('[data-b2b-txt]').forEach(function(el){el.textContent=T(el.getAttribute('data-b2b-txt'));});
  document.querySelectorAll('[data-b2b-attr]').forEach(function(el){
    var pairs=(el.getAttribute('data-b2b-attr')||'').split('|');
    for(var i=0;i<pairs.length;i++){
      var kv=pairs[i].split(':');
      if(kv[0] && kv[1]) el.setAttribute(kv[0], T(kv[1]));
    }
  });
  // Inject company contact URLs where needed
  var wa=document.querySelectorAll('[data-wa-link]');
  wa.forEach(function(el){ el.setAttribute('href', UFREEPACK_INFO.whatsappLink || 'https://wa.me/8618164470172'); el.setAttribute('target','_blank'); el.setAttribute('rel','noopener'); });
  var tel=document.querySelectorAll('[data-tel-link]');
  tel.forEach(function(el){ el.setAttribute('href','tel:+8618164470172'); });
  var mail=document.querySelectorAll('[data-mail-link]');
  mail.forEach(function(el){ el.setAttribute('href','mailto:ufreepacking@gmail.com'); });
}

/* =========================================================
   HERO SLIDER (auto 7s, arrows, dots, touch swipe, hover pause)
   ========================================================= */
function initHeroSlider(){
  var slider=document.querySelector('.hero-slider');
  if(!slider) return;
  var slides=slider.querySelectorAll('.hero-slide');
  if(!slides.length) return;
  var dotsWrap=slider.querySelector('.hero-dots');
  var idx=0,timer=null,DELAY=7000;
  if(dotsWrap){
    dotsWrap.innerHTML='';
    for(var i=0;i<slides.length;i++){
      var d=document.createElement('button');d.className='hero-dot'+(i===0?' active':'');
      d.setAttribute('data-idx',i);
      d.setAttribute('aria-label','Go to slide '+(i+1));
      d.setAttribute('type','button');
      (function(_i){d.addEventListener('click',function(){go(_i,true);});})(i);
      dotsWrap.appendChild(d);
    }
  }
  var dots=slider.querySelectorAll('.hero-dot');
  var prev=slider.querySelector('.hero-arrow.prev');
  var next=slider.querySelector('.hero-arrow.next');
  if(prev) prev.addEventListener('click',function(){go((idx-1+slides.length)%slides.length,true);});
  if(next) next.addEventListener('click',function(){go((idx+1)%slides.length,true);});
  function go(n,manual){
    slides[idx].classList.remove('active');
    if(dots[idx]) dots[idx].classList.remove('active');
    idx=(n+slides.length)%slides.length;
    slides[idx].classList.add('active');
    if(dots[idx]) dots[idx].classList.add('active');
    if(manual){stop();start();}
  }
  function start(){stop();timer=setInterval(function(){go((idx+1)%slides.length);},DELAY);}
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  slider.addEventListener('mouseenter',stop);
  slider.addEventListener('mouseleave',start);
  // Touch swipe
  var sx=0,dx=0;
  slider.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;dx=0;stop();},{passive:true});
  slider.addEventListener('touchmove',function(e){dx=e.touches[0].clientX-sx;},{passive:true});
  slider.addEventListener('touchend',function(){
    if(Math.abs(dx)>60){go(dx<0?(idx+1):(idx-1),true);} else {start();}
  });
  start();
}

/* =========================================================
   GLOBAL NAVIGATION RACE GUARD
   Eliminates net::ERR_ABORTED caused by double-click / rapid-click
   nav links issuing 2 competing document requests (Chrome aborts #1).
   Strategy A: once beforeunload fires → block all extra same-tab nav clicks 3s
   Strategy B: same-URL clicked twice within 300ms → suppress the 2nd click
   ========================================================= */
(function navGuard(){
  var leaving=false,leaveTimer=null;
  function lockLeaving(){
    leaving=true;
    if(leaveTimer)clearTimeout(leaveTimer);
    leaveTimer=setTimeout(function(){leaving=false;},3000);
  }
  if(window.addEventListener) window.addEventListener('beforeunload',lockLeaving);
  // A: Page already leaving → ignore extra same-frame nav clicks during pending load
  document.addEventListener('click',function(e){
    if(!leaving)return;
    var a=e.target; while(a&&a.tagName!=='A')a=a.parentElement;
    if(!a||a.tagName!=='A')return;
    var h=a.getAttribute('href')||'';
    if(a.target&&a.target!=='_self')return;
    if(/^(javascript:|mailto:|tel:|whatsapp:|sms:|#)/i.test(h))return;
    e.preventDefault();
    if(e.stopImmediatePropagation)e.stopImmediatePropagation();
  },true);
  // B: Debounce same-URL double-click (< 300ms) even BEFORE first navigation begins
  var lastAt=0,lastUrl='';
  document.addEventListener('click',function(e){
    var a=e.target; while(a&&a.tagName!=='A')a=a.parentElement;
    if(!a||a.tagName!=='A')return;
    var h=a.getAttribute('href')||'';
    if(/^(javascript:|mailto:|tel:|whatsapp:|sms:|#)/i.test(h))return;
    if(a.target&&a.target!=='_self')return;
    try{
      var u=new URL(a.href,location.href); var key=u.pathname+u.search;
      var now=Date.now();
      if(now-lastAt<300&&key===lastUrl){
        e.preventDefault();
        if(e.stopImmediatePropagation)e.stopImmediatePropagation();
        return;
      }
      lastAt=now; lastUrl=key;
    }catch(_){}
  },true);
})();

/* =========================================================
   PAGE DOM READY
   ========================================================= */
(function pageInit(){
  function boot(){
    applyLang(curLang);
    renderB2BTexts();
    initHeroSlider();
    // Scroll reveals are driven by the IntersectionObserver above (.reveal → .visible).
    // Do NOT force .visible here — that killed the staggered entrance animations.
    // Counters: only boot-animate those NOT inside a .reveal container;
    // the ones inside .reveal animate when they scroll into view.
    document.querySelectorAll('[data-target]').forEach(function(el){
      if (el.closest('.reveal')) return;
      animateCounter(el);
    });
    if(typeof buildMarquee==='function') buildMarquee();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();

/* ===== INQUIRY FORM SUBMIT → WhatsApp Deep Link (so inquiries actually GO somewhere) =====
   Replaces the old fake alert() submit. Collects name/email/phone/company/qty/msg,
   packages them as a pre-filled WhatsApp message to Alex (+86 181 6447 0172),
   opens wa.me in a new tab, and shows a localized success toast. */
function submitInquiry(form){
  if(!form) return;
  // 先按 name 属性取值（custom.html 结构B 有 name）；若没值则回退：前 5 个 .inquiry-input 位置索引 + .inquiry-textarea（index/products 结构A 没有 name 属性）
  var inputs=form.querySelectorAll('.inquiry-input');
  var ta=form.querySelector('.inquiry-textarea');
  function v(a,b){var s=((a||'')||(b||'')).trim();return s;}
  function byName(n){var el=form.querySelector('[name="'+n+'"]');return el&&el.value?el.value:'';}
  var name=v(byName('name'),inputs[0]&&inputs[0].value);
  var email=v(byName('email'),inputs[1]&&inputs[1].value);
  var phone=v(byName('phone'),inputs[2]&&inputs[2].value);
  var company=v(byName('company'),inputs[3]&&inputs[3].value);
  var qty=v(byName('qty'),inputs[4]&&inputs[4].value);
  // msg 三退补：name="msg" ｜ .inquiry-textarea ｜ inputs[5]（结构B 6 个 inquiry-input，第 6 个是 msg textarea）
  var msg=v(byName('msg'),v(ta&&ta.value,inputs[5]&&inputs[5].value));
  // 必填校验（name + email）
  if(!name||!email){
    var needName={'en':'Please fill in your Name and Email.','zh':'请填写姓名和工作邮箱。','ja':'お名前とメールを入力してください。','es':'Por favor, completa Nombre y Email.','ar':'يرجى ملء الاسم والبريد الإلكتروني.','ko':'이름과 이메일을 입력해주세요.','pt':'Preencha Nome e Email.'};
    alert(needName[curLang]||needName.en);
    return;
  }
  // 多语言消息模板
  var L={
    en:{h:'🔔 New Inquiry — UFREEPACK Website',n:'Name',e:'Email',p:'Phone',c:'Company',q:'Qty',m:'Project',t:'✅ Opening WhatsApp… Alex will reply within 1 hour.',src:'Source'},
    zh:{h:'🔔 新询盘 — UFREEPACK 官网',n:'姓名',e:'邮箱',p:'电话',c:'公司',q:'数量',m:'项目描述',t:'✅ 正在打开 WhatsApp…Alex 1 小时内回复您。',src:'来源'},
    ja:{h:'🔔 新規お問合せ — UFREEPACK ウェブ',n:'名前',e:'メール',p:'電話',c:'会社',q:'数量',m:'プロジェクト',t:'✅ WhatsAppを開いています…Alexが1時間以内に返信します。',src:'参照元'},
    es:{h:'🔔 Nueva consulta — Web UFREEPACK',n:'Nombre',e:'Email',p:'Tel',c:'Empresa',q:'Cant',m:'Proyecto',t:'✅ Abriendo WhatsApp… Alex responde en 1h.',src:'Origen'},
    ar:{h:'🔔 استفسار جديد — موقع UFREEPACK',n:'الاسم',e:'البريد',p:'الهاتف',c:'الشركة',q:'الكمية',m:'المشروع',t:'✅ جارٍ فتح واتساب… أليكس يرد خلال ساعة.',src:'المصدر'},
    ko:{h:'🔔 새 문의 — UFREEPACK 웹사이트',n:'이름',e:'이메일',p:'전화',c:'회사',q:'수량',m:'프로젝트',t:'✅ WhatsApp 여는 중… Alex 1시간 내 회신.',src:'출처'},
    pt:{h:'🔔 Nova consulta — Site UFREEPACK',n:'Nome',e:'Email',p:'Tel',c:'Empresa',q:'Qtd',m:'Projeto',t:'✅ Abrindo WhatsApp… Alex responde em 1h.',src:'Origem'}
  };
  var l=L[curLang]||L.en;
  var lines=[l.h,'————————————————'];
  lines.push(l.n+': '+name);
  lines.push(l.e+': '+email);
  if(phone)   lines.push(l.p+': '+phone);
  if(company) lines.push(l.c+': '+company);
  if(qty)     lines.push(l.q+': '+qty);
  if(msg)     lines.push(l.m+': '+msg);
  lines.push('————————————————');
  lines.push(l.src+': '+location.pathname+' '+location.search);
  var text=lines.join('\n');
  var url='https://wa.me/8618164470172?text='+encodeURIComponent(text);
  // 双通道：同步把询盘写入后端 DB（fire-and-forget，绝不阻塞 WhatsApp）
  try {
    if (window.fetch && location.protocol.indexOf('http') === 0) {
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name, email: email, phone: phone, company: company, qty: qty,
          message: msg, lang: (typeof curLang !== 'undefined' ? curLang : 'en'),
          source_url: location.pathname + location.search, wa_sent: 1
        })
      }).catch(function(){ /* 静默：API 失败不影响 WhatsApp 跳转 */ });
    }
  } catch (e) { /* 静默 */ }
  window.open(url,'_blank','noopener');
  alert(l.t);
  form.reset();
}


// Circular-economy carousel: auto-rotate slides, pause on hover, click dots to jump
(function(){
  var cars = document.querySelectorAll('[data-carousel]');
  if(!cars.length) return;
  for(var i=0;i<cars.length;i++){
    (function(car){
      var slides = car.querySelectorAll('.cf-slide');
      var dots = car.querySelectorAll('.cf-dot');
      if(slides.length < 2) return;
      var idx = 0, timer = null;
      function go(n){
        if(slides[idx]) slides[idx].classList.remove('active');
        if(dots[idx]) dots[idx].classList.remove('active');
        idx = (n + slides.length) % slides.length;
        if(slides[idx]) slides[idx].classList.add('active');
        if(dots[idx]) dots[idx].classList.add('active');
      }
      function next(){ go(idx+1); }
      function start(){ timer = setInterval(next, 4000); }
      function stop(){ if(timer){ clearInterval(timer); timer=null; } }
      start();
      car.addEventListener('mouseenter', stop);
      car.addEventListener('mouseleave', start);
      for(var d=0; d<dots.length; d++){
        (function(dot, di){ dot.addEventListener('click', function(){ go(di); stop(); start(); }); })(dots[d], d);
      }
    })(cars[i]);
  }
})();

// ===== Material & Process: auto-advancing flow =====
(function(){
  var root = document.getElementById('matFlow');
  if(!root) return;
  var dots = root.querySelectorAll('.mat-dot');
  var stages = root.querySelectorAll('.mat-stage');
  var fill = root.querySelector('.mat-flow-fill');
  var idx = 0, N = stages.length, timer = null;
  function setFill(i){ if(fill) fill.style.height = (N<=1?100:(i/(N-1))*100) + '%'; }
  function go(n){
    if(stages[idx]) stages[idx].classList.remove('active');
    if(dots[idx]) dots[idx].classList.remove('active');
    idx = (n + N) % N;
    if(stages[idx]) stages[idx].classList.add('active');
    if(dots[idx]) dots[idx].classList.add('active');
    setFill(idx);
  }
  function next(){ go(idx+1); }
  function start(){ timer = setInterval(next, 2800); }
  function stop(){ if(timer){ clearInterval(timer); timer=null; } }
  setFill(0);
  start();
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  for(var d=0; d<dots.length; d++){
    (function(dot, di){ dot.addEventListener('click', function(){ go(di); stop(); start(); }); })(dots[d], d);
  }
})();
