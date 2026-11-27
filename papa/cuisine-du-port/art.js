/* Dessins vectoriels de Cuisine du Port — v2 « pro » : dégradés de volume, contours teintés, reflets, détails. viewBox 0 0 100 100 */
(function(){
const R=(id,a,b,c,cx,cy,r)=>`<radialGradient id="${id}" cx="${cx||'35%'}" cy="${cy||'30%'}" r="${r||'75%'}"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>`;
const L=(id,a,b,c,x1,y1,x2,y2)=>`<linearGradient id="${id}" x1="${x1||0}" y1="${y1||0}" x2="${x2===undefined?0:x2}" y2="${y2===undefined?1:y2}"><stop offset="0" stop-color="${a}"/><stop offset=".5" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient>`;
const BASE=`<filter id="flou" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="2.2"/></filter>
<linearGradient id="gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`;
const ombre=(rx)=>`<ellipse cx="50" cy="91" rx="${rx||30}" ry="5" fill="#2b1a0e" opacity=".28" filter="url(#flou)"/>`;
const k=(c,w)=>`stroke="${c}" stroke-width="${w||3}" stroke-linejoin="round" stroke-linecap="round"`;
const brille=(x,y,rx,ry,r)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#gl)" transform="rotate(${r||-30} ${x} ${y})"/>`;
const etoile=(x,y,t)=>`<path d="M${x} ${y-t} Q${x} ${y} ${x+t} ${y} Q${x} ${y} ${x} ${y+t} Q${x} ${y} ${x-t} ${y} Q${x} ${y} ${x} ${y-t}Z" fill="#fff"/>`;
const goutte=(x,y,t)=>`<path d="M${x} ${y-t*1.6} Q${x+t} ${y-t*.2} ${x} ${y+t*.6} Q${x-t} ${y-t*.2} ${x} ${y-t*1.6}Z" fill="#d6f3ff" ${k('#5aa7cf',1.2)} opacity=".95"/><circle cx="${x-t*.3}" cy="${y-t*.4}" r="${t*.28}" fill="#fff"/>`;
const svg=(defs,inner)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs>${BASE}${defs}</defs>${inner}</svg>`;
const ART={};

/* ---------- 1. Pousse ---------- */
ART['legume:1']=svg(R('sol','#b07a48','#8a5530','#5e3518','45%','20%')+L('tige','#8be06a','#4caf3f','#2e7d32',0,0,1,0)+L('f1','#c5f28f','#7ccf4f','#3d9a35',0,0,1,1)+L('f2','#d4f7a0','#8bdc5a','#45a83a',1,0,0,1),
 `${ombre(32)}
  <path d="M14 88 Q20 66 50 64 Q80 66 86 88 Z" fill="url(#sol)" ${k('#4a2a12',3)}/>
  <g fill="#6b4022"><circle cx="30" cy="80" r="2.2"/><circle cx="64" cy="78" r="1.8"/><circle cx="72" cy="84" r="2.4"/><circle cx="42" cy="84" r="1.5"/></g>
  <g fill="#c99a6a"><circle cx="38" cy="74" r="1.6"/><circle cx="58" cy="72" r="1.3"/><ellipse cx="24" cy="85" rx="3" ry="1.8"/></g>
  <path d="M28 72 Q50 64 70 70" fill="none" stroke="#c99263" stroke-width="2" opacity=".7"/>
  <path d="M50 70 C49 60 49 54 51 44" fill="none" ${k('#245f1d',7)}/><path d="M50 70 C49 60 49 54 51 44" fill="none" stroke="url(#tige)" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M50 54 C42 38 26 42 12 30 C30 18 50 30 50 54 Z" fill="url(#f1)" ${k('#2a6a1f',2.6)}/>
  <path d="M48 50 C42 40 30 34 20 30" fill="none" stroke="#e4ffc0" stroke-width="1.8" opacity=".85"/>
  <path d="M51 48 C56 26 74 28 90 14 C94 38 76 54 51 48 Z" fill="url(#f2)" ${k('#2a6a1f',2.6)}/>
  <path d="M55 44 C64 36 74 28 84 21" fill="none" stroke="#efffd6" stroke-width="1.8" opacity=".85"/>
  ${brille(28,32,6,2.4,-30)}${brille(70,28,6,2.2,-40)}${goutte(78,36,3.2)}${etoile(20,20,3.5)}`);

/* ---------- 2. Laitue ---------- */
ART['legume:2']=svg(R('l1','#6fc46a','#3f9a43','#1f6a28','40%','30%')+R('l2','#c3ec8c','#86cc58','#4e9a38','45%','35%')+R('l3','#f1ffd6','#cdeea0','#9fd170','50%','40%'),
 `${ombre(32)}
  <path d="M18 68 Q6 52 18 40 Q14 22 32 20 Q38 4 55 11 Q73 6 78 24 Q95 28 88 46 Q98 60 85 72 Q80 90 60 89 L40 89 Q19 89 18 68 Z" fill="url(#l1)" ${k('#174f1f',3)}/>
  <path d="M24 46 Q30 40 26 32 M74 30 Q70 38 76 44 M50 16 Q48 22 52 26" fill="none" stroke="#9de08a" stroke-width="2" opacity=".7"/>
  <path d="M25 72 Q15 58 27 49 Q26 34 41 33 Q50 22 63 31 Q78 31 76 46 Q87 57 77 71 Q73 86 56 86 L44 86 Q27 86 25 72 Z" fill="url(#l2)" ${k('#2e6e22',2.6)}/>
  <path d="M35 74 Q30 64 37 58 Q38 48 48 48 Q56 42 63 50 Q70 54 66 64 Q70 74 62 80 Q52 85 44 82 Q36 80 35 74 Z" fill="url(#l3)" ${k('#4f8f33',2.2)}/>
  <path d="M50 84 Q49 70 50 50 M50 72 Q42 66 36 60 M50 64 Q58 58 63 54 M50 78 Q58 73 64 69" fill="none" stroke="#fff" stroke-width="2.2" opacity=".8"/>
  ${brille(30,30,8,3)}${brille(40,52,5,2.2)}${goutte(70,56,3)}${etoile(82,20,3.5)}`);

/* ---------- 3. Concombre ---------- */
ART['legume:3']=svg(L('cb','#1b5e20','#5cbf5a','#1b5e20',0,0,0,1)+R('tr','#f5ffe6','#c8eea0','#8ccf62','50%','50%','60%'),
 `${ombre(34)}
  <g transform="rotate(-36 52 50)">
    <rect x="10" y="36" width="80" height="30" rx="15" fill="url(#cb)" ${k('#0f3d14',3)}/>
    <rect x="20" y="40" width="58" height="6" rx="3" fill="#b9f39a" opacity=".75"/>
    <g fill="#0f3d14" opacity=".55"><circle cx="24" cy="58" r="1.6"/><circle cx="36" cy="61" r="1.6"/><circle cx="50" cy="58" r="1.6"/><circle cx="64" cy="61" r="1.6"/><circle cx="76" cy="57" r="1.6"/></g>
    <g fill="#e6ffd0"><circle cx="30" cy="51" r="1.5"/><circle cx="44" cy="53" r="1.5"/><circle cx="58" cy="51" r="1.5"/><circle cx="70" cy="53" r="1.5"/></g>
    <path d="M90 49 l8 -5 l-1 8 l5 4 l-9 0 z" fill="#ffd54f" ${k('#a07812',1.6)}/>
    <path d="M10 51 l-6 -2" ${k('#2e5b18',3)}/>
  </g>
  <ellipse cx="30" cy="74" rx="15" ry="11" fill="#2e7d32" ${k('#0f3d14',2.6)}/>
  <ellipse cx="30" cy="73" rx="12" ry="8.6" fill="url(#tr)"/>
  <g fill="#f8fff0" stroke="#9ccf73" stroke-width=".8"><ellipse cx="26" cy="71" rx="1.6" ry="2.4"/><ellipse cx="34" cy="71" rx="1.6" ry="2.4"/><ellipse cx="30" cy="77" rx="2.4" ry="1.6"/></g>
  ${brille(36,40,7,2.4,-36)}${etoile(80,22,3.5)}`);

/* ---------- 4. Tomate ---------- */
ART['legume:4']=svg(R('to','#ff9a7a','#e8392c','#9e1a14','34%','30%')+L('cx','#9be36f','#4caf3f','#2b7a22'),
 `${ombre(32)}
  <path d="M50 26 C78 24 86 44 84 60 C82 80 66 90 50 90 C34 90 18 80 16 60 C14 44 22 24 50 26 Z" fill="url(#to)" ${k('#6e120d',3)}/>
  <path d="M50 30 C44 50 44 70 50 88 M34 34 C28 50 30 72 38 86 M66 34 C72 50 70 72 62 86" fill="none" stroke="#a31d15" stroke-width="1.6" opacity=".35"/>
  <path d="M50 30 L58 20 L60 30 L72 27 L64 36 L72 43 L59 41 L52 49 L48 41 L34 44 L40 36 L30 27 L42 30 L42 20 Z" fill="url(#cx)" ${k('#1d5717',2.4)}/>
  <path d="M50 31 Q52 20 58 13" fill="none" ${k('#1d5717',7)}/><path d="M50 31 Q52 20 58 13" fill="none" stroke="#5cb84a" stroke-width="3.2" stroke-linecap="round"/>
  ${brille(32,48,10,6,-35)}<circle cx="42" cy="38" r="2.6" fill="#fff" opacity=".9"/>${goutte(70,64,3.4)}${etoile(20,30,4)}`);

/* ---------- 5. Salade composée ---------- */
ART['legume:5']=svg(L('bol','#e8f5ff','#5fb0ee','#1f6fc0')+R('int','#2a5d8a','#3c78ad','#5a9ad0','50%','10%')+R('tm','#ff8a70','#e53b2f','#a8221a')+R('fe','#ffffff','#f7f3e6','#e2dccb'),
 `${ombre(36)}
  <path d="M11 52 H89 Q87 86 50 89 Q13 86 11 52 Z" fill="url(#bol)" ${k('#123f73',3)}/>
  <g fill="#fff" opacity=".85"><circle cx="24" cy="66" r="2"/><circle cx="36" cy="72" r="2"/><circle cx="50" cy="74" r="2"/><circle cx="64" cy="72" r="2"/><circle cx="76" cy="66" r="2"/></g>
  <path d="M16 62 Q50 70 84 62" fill="none" stroke="#fff" stroke-width="2.4" opacity=".8"/>
  <ellipse cx="50" cy="52" rx="39" ry="7" fill="url(#int)" ${k('#123f73',2.6)}/>
  <path d="M16 52 Q18 36 32 38 Q36 26 50 30 Q62 24 70 36 Q84 34 84 52 Z" fill="#5fbf4c" ${k('#1f5f1c',2.4)}/>
  <path d="M22 48 Q30 40 38 44 M58 40 Q66 34 74 42" fill="none" stroke="#bdf28f" stroke-width="2"/>
  <path d="M30 50 L36 36 L44 50 Z" fill="url(#tm)" ${k('#6e120d',2)}/><path d="M60 50 L66 34 L74 50 Z" fill="url(#tm)" ${k('#6e120d',2)}/>
  <g fill="#ffe7b0"><circle cx="37" cy="45" r="1.2"/><circle cx="67" cy="44" r="1.2"/></g>
  <circle cx="50" cy="44" r="7" fill="#2e7d32" ${k('#0f3d14',2)}/><circle cx="50" cy="44" r="5" fill="#d8f7b0"/><circle cx="50" cy="44" r="1.6" fill="#8cc96a"/>
  <rect x="40" y="46" width="7" height="6" rx="1.2" fill="url(#fe)" ${k('#b8ad8f',1.4)} transform="rotate(-12 43 49)"/><rect x="54" y="47" width="7" height="6" rx="1.2" fill="url(#fe)" ${k('#b8ad8f',1.4)} transform="rotate(10 57 50)"/>
  <ellipse cx="26" cy="46" rx="3.6" ry="2.8" fill="#2a2a33"/><ellipse cx="25" cy="45" rx="1.1" ry=".8" fill="#fff" opacity=".7"/>
  <ellipse cx="76" cy="48" rx="3.6" ry="2.8" fill="#2a2a33"/><ellipse cx="75" cy="47" rx="1.1" ry=".8" fill="#fff" opacity=".7"/>
  ${brille(22,64,6,3,-15)}${etoile(84,24,3.8)}`);

/* ---------- 6. Soupe du jour ---------- */
ART['legume:6']=svg(L('bc','#fffaf0','#f6e3c2','#d7b98c')+R('sp','#ffc56b','#f4902c','#c8641a','45%','35%')+L('vap','#ffffff','#ffffff','#ffffff')+L('cu','#e9b06a','#c9853f','#9a5e28',0,0,1,0),
 `${ombre(36)}
  <g opacity=".85"><path d="M38 34 q-7 -8 0 -15 q7 -7 0 -15" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><path d="M54 32 q-7 -8 0 -15 q7 -7 0 -15" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".8"/><path d="M68 36 q-5 -6 0 -11 q5 -5 0 -10" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".6"/></g>
  <path d="M74 50 L92 30" ${k('#5a3415',7)}/><path d="M74 50 L92 30" stroke="url(#cu)" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M11 52 H89 Q87 88 50 90 Q13 88 11 52 Z" fill="url(#bc)" ${k('#6b4a22',3)}/>
  <path d="M14 64 Q50 74 86 64" fill="none" stroke="#e5533c" stroke-width="5"/><path d="M16 72 Q50 81 84 72" fill="none" stroke="#e5533c" stroke-width="2" opacity=".7"/>
  <ellipse cx="50" cy="52" rx="39" ry="10" fill="url(#sp)" ${k('#7a3e0c',2.6)}/>
  <path d="M38 52 q4 -5 10 -2 q6 3 2 6 q-4 2 -7 -1" fill="none" stroke="#fff6e0" stroke-width="2.2" stroke-linecap="round"/>
  <rect x="26" y="47" width="7" height="6" rx="1.4" fill="#e6b968" ${k('#8a5a22',1.4)} transform="rotate(-10 29 50)"/><rect x="62" y="49" width="7" height="6" rx="1.4" fill="#e6b968" ${k('#8a5a22',1.4)} transform="rotate(14 65 52)"/>
  <g fill="#3f9a3a"><ellipse cx="56" cy="47" rx="2.2" ry="1.2" transform="rotate(30 56 47)"/><ellipse cx="44" cy="57" rx="2.2" ry="1.2" transform="rotate(-20 44 57)"/><ellipse cx="72" cy="54" rx="2" ry="1.1"/></g>
  <circle cx="34" cy="56" r="1.4" fill="#2a2a2a" opacity=".6"/><circle cx="66" cy="45" r="1.2" fill="#2a2a2a" opacity=".6"/>
  ${brille(22,70,6,3,-15)}${brille(36,48,8,2.2,-5)}`);

/* ---------- 7. Paella ---------- */
ART['legume:7']=svg(R('pan','#5b5b6b','#2c2c38','#15151c','40%','30%')+R('riz','#ffe27a','#ffbf2e','#e08a12','45%','40%')+L('cr','#ffb08a','#ff7a4a','#d84f22')+R('ci','#fff7a8','#ffe14d','#e9b80f'),
 `${ombre(42)}
  <rect x="1" y="54" width="20" height="10" rx="5" fill="#26262f" ${k('#0c0c10',2.4)}/><rect x="79" y="54" width="20" height="10" rx="5" fill="#26262f" ${k('#0c0c10',2.4)}/>
  <ellipse cx="50" cy="60" rx="41" ry="26" fill="url(#pan)" ${k('#0c0c10',3)}/>
  <path d="M14 54 Q50 32 86 54" fill="none" stroke="#8a8aa0" stroke-width="2" opacity=".6"/>
  <ellipse cx="50" cy="58" rx="35" ry="20" fill="url(#riz)" ${k('#9a5a08',2)}/>
  <g fill="#fff3b8" opacity=".8">${[[30,52],[38,62],[46,50],[56,66],[64,54],[72,62],[42,70],[60,46],[26,60],[52,58],[68,48],[34,46]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="1.6" ry=".8" transform="rotate(${x*7} ${x} ${y})"/>`).join('')}</g>
  <g fill="#c87a0a" opacity=".5">${[[36,56],[50,64],[62,60],[44,46],[70,56],[30,64]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.2"/>`).join('')}</g>
  <path d="M24 58 Q22 46 34 46 Q42 48 40 56" fill="none" ${k('#7a2a10',7.5)}/><path d="M24 58 Q22 46 34 46 Q42 48 40 56" fill="none" stroke="url(#cr)" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M26 49 l2 2 M30 46.5 l1 2.4 M35 46.8 l-.4 2.4" stroke="#fff3e6" stroke-width="1.2" stroke-linecap="round"/><path d="M40 56 l4 3 l-1 -5 z" fill="#ff6a3a" ${k('#7a2a10',1.4)}/>
  <path d="M58 66 Q58 54 70 54 Q78 56 76 64" fill="none" ${k('#7a2a10',7.5)}/><path d="M58 66 Q58 54 70 54 Q78 56 76 64" fill="none" stroke="url(#cr)" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M61 57 l2 2 M65 54.5 l1 2.4 M70 54.8 l-.4 2.4" stroke="#fff3e6" stroke-width="1.2" stroke-linecap="round"/><path d="M76 64 l4 3 l-1 -5 z" fill="#ff6a3a" ${k('#7a2a10',1.4)}/>
  <path d="M44 66 Q50 58 56 66 Q50 72 44 66 Z" fill="#1d1d2a" ${k('#000',1.6)}/><path d="M46 66 Q50 61 54 66" fill="none" stroke="#ff9a4a" stroke-width="2.2"/>
  <path d="M48 44 L66 44 A9 9 0 0 1 48 44 Z" fill="url(#ci)" ${k('#a8800a',2)}/><path d="M57 44 L57 52 M57 44 L51 49 M57 44 L63 49" stroke="#fff9cf" stroke-width="1.2"/>
  <g ${k('#1d5717',1.4)} fill="#7ed957"><circle cx="40" cy="52" r="2.6"/><circle cx="52" cy="54" r="2.6"/><circle cx="66" cy="50" r="2.6"/><circle cx="34" cy="66" r="2.6"/><circle cx="70" cy="68" r="2.6"/></g>
  <g stroke="#e53b2f" stroke-width="2.8" stroke-linecap="round"><path d="M44 74 l8 -2"/><path d="M28 52 l5 4"/><path d="M74 46 l-5 4"/></g>
  ${brille(24,48,6,2.4,-30)}${etoile(88,30,4)}${etoile(14,36,3)}`);

/* ---------- Appareil : panier du potager ---------- */
ART['gen:legume']=svg(L('osier','#f2c48a','#d0904e','#9a5f28')+L('anse','#e8b072','#c4844a','#8a5424',0,0,1,0)+R('to2','#ff9a7a','#e8392c','#9e1a14')+R('sa','#a6e27a','#5fb84a','#2e7d32')+L('ca','#ffb04a','#f7841e','#c85a0a',0,0,1,0),
 `${ombre(38)}
  <path d="M26 48 Q50 0 74 48" fill="none" ${k('#5a3415',9)}/><path d="M26 48 Q50 0 74 48" fill="none" stroke="url(#anse)" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M30 40 Q50 6 70 40" fill="none" stroke="#ffe0b0" stroke-width="1.2" opacity=".6"/>
  <circle cx="38" cy="44" r="13" fill="url(#sa)" ${k('#1f5f1c',2.6)}/><path d="M32 40 Q38 34 44 40" fill="none" stroke="#d4f7a0" stroke-width="1.8"/>
  <circle cx="58" cy="46" r="11" fill="url(#to2)" ${k('#6e120d',2.6)}/><path d="M58 36 l3 -4 M58 36 l-3 -4 M58 36 l4 1" stroke="#2b7a22" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M64 46 L84 18 L74 48 Z" fill="url(#ca)" ${k('#7a3a06',2.4)}/><path d="M72 36 l4 1 M75 30 l4 1" stroke="#c85a0a" stroke-width="1.4"/>
  <path d="M82 20 q-2 -9 4 -12 M82 20 q5 -7 11 -6 M82 20 q6 -2 9 3" fill="none" stroke="#3f9a3a" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M12 48 H88 L77 89 H23 Z" fill="url(#osier)" ${k('#5a3415',3)}/>
  <g stroke="#8a5424" stroke-width="2.4" fill="none" opacity=".9"><path d="M16 60 H84"/><path d="M19 71 H81"/><path d="M21 81 H79"/><path d="M33 52 L35 87"/><path d="M50 52 V88"/><path d="M67 52 L65 87"/></g>
  <g fill="#ffe2b8" opacity=".55"><rect x="20" y="62" width="10" height="3" rx="1.5"/><rect x="38" y="62" width="10" height="3" rx="1.5"/><rect x="56" y="73" width="10" height="3" rx="1.5"/><rect x="24" y="83" width="8" height="2.4" rx="1.2"/></g>
  <path d="M18 50 L30 50 L26 62 Z" fill="#fff" ${k('#a8221a',1.6)}/><path d="M20 52 h3 v3 h-3z M25 52 h3 v3 h-3z M22 56 h3 v3 h-3z" fill="#e53b2f"/>
  <rect x="9" y="43" width="82" height="10" rx="5" fill="url(#anse)" ${k('#5a3415',2.6)}/>
  ${brille(22,46,8,2,-5)}${brille(50,40,4,2,-30)}${etoile(14,26,4)}`);

/* ---------- outils communs ---------- */
const assiette=(cy,rx,ry)=>`<ellipse cx="50" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#as)" ${k('#7d8a99',2.6)}/><ellipse cx="50" cy="${cy-1}" rx="${rx*.72}" ry="${ry*.62}" fill="#f4f8fc" stroke="#d3dce6" stroke-width="1.4"/>`;
const AS=L('as','#ffffff','#eef3f8','#c9d4df');
const paille=(x1,y1,x2,y2,c)=>`<path d="M${x1} ${y1} L${x2} ${y2}" ${k('#3b2a1e',6)}/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
const glacon=(x,y,t,r)=>`<rect x="${x}" y="${y}" width="${t}" height="${t}" rx="2" fill="#eaf8ff" opacity=".85" ${k('#8cc4e0',1.4)} transform="rotate(${r||0} ${x+t/2} ${y+t/2})"/><rect x="${x+1.5}" y="${y+1.5}" width="${t*.35}" height="${t*.2}" fill="#fff" transform="rotate(${r||0} ${x+t/2} ${y+t/2})"/>`;

/* ================= BOISSONS ================= */
ART['boisson:1']=svg(R('eau','#e9fbff','#7fd0f5','#2b8fd0','38%','35%'),
 `${ombre(24)}<path d="M50 12 C62 32 78 46 78 64 C78 80 66 90 50 90 C34 90 22 80 22 64 C22 46 38 32 50 12 Z" fill="url(#eau)" ${k('#1a5f96',3)}/>
  <path d="M34 66 C34 76 42 82 50 82" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
  ${brille(40,46,6,10,20)}<circle cx="60" cy="40" r="2.4" fill="#fff" opacity=".9"/>${etoile(78,26,4)}${etoile(20,40,3)}`);
ART['boisson:2']=svg(L('bo','#ffcc66','#ff9f1c','#e06d06',0,0,1,0)+L('bh','#fff3d1','#ffe08a','#f5b93a',0,0,1,0),
 `${ombre(26)}${paille(58,22,70,6,'#ff5a8a')}
  <path d="M28 30 L64 30 L72 24 L36 24 Z" fill="url(#bh)" ${k('#8a4a04',2.6)}/><path d="M64 30 L72 24 L72 82 L64 88 Z" fill="#d06a0a" ${k('#8a4a04',2.6)}/>
  <rect x="28" y="30" width="36" height="58" rx="2" fill="url(#bo)" ${k('#8a4a04',3)}/>
  <circle cx="46" cy="58" r="11" fill="#ffb238" ${k('#b05a06',2)}/><path d="M46 47 V69 M35 58 H57 M38 50 L54 66 M54 50 L38 66" stroke="#ffe08a" stroke-width="1.6"/>
  <path d="M44 46 q2 -6 8 -6 q-2 6 -8 6" fill="#5fb84a" ${k('#2b7a22',1.4)}/>
  <rect x="31" y="76" width="30" height="7" rx="2" fill="#fff" opacity=".85"/>
  ${brille(34,40,3,9,0)}${etoile(80,40,3.5)}`);
ART['boisson:3']=svg(L('tasse','#ffffff','#f1ece4','#c9bfae',0,0,1,0)+R('caf','#c98a54','#7a4520','#4a260e','50%','40%'),
 `${ombre(34)}<ellipse cx="50" cy="82" rx="36" ry="8" fill="url(#tasse)" ${k('#8a7a62',2.6)}/>
  <path d="M74 52 q16 0 14 12 q-2 10 -16 8" fill="none" ${k('#8a7a62',8)}/><path d="M74 52 q16 0 14 12 q-2 10 -16 8" fill="none" stroke="#f4efe7" stroke-width="4"/>
  <path d="M22 44 H78 L74 70 Q72 82 50 82 Q28 82 26 70 Z" fill="url(#tasse)" ${k('#8a7a62',3)}/>
  <path d="M26 58 Q50 64 76 58" fill="none" stroke="#e86a4a" stroke-width="3"/>
  <ellipse cx="50" cy="44" rx="28" ry="7" fill="url(#caf)" ${k('#3a1c08',2.4)}/>
  <path d="M50 40 q-6 2 -4 5 q2 2 4 0 q2 2 4 0 q2 -3 -4 -5" fill="#f3d9b4"/>
  <g opacity=".8"><path d="M42 34 q-5 -6 0 -11 q5 -5 0 -10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M58 34 q-5 -6 0 -11 q5 -5 0 -10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/></g>
  ${brille(32,56,3.5,8,10)}`);
ART['boisson:4']=svg(R('th','#fff6e6','#f3dfc0','#c9a77a')+R('the','#e8c06a','#b5832a','#7a5212','50%','40%')+L('vt','#a6e27a','#5fb84a','#2e7d32'),
 `${ombre(36)}
  <path d="M78 46 q14 -6 12 8 q-2 10 -14 10" fill="none" ${k('#7a5a32',7)}/><path d="M78 46 q14 -6 12 8 q-2 10 -14 10" fill="none" stroke="#f3dfc0" stroke-width="3.4"/>
  <path d="M20 40 Q20 86 50 88 Q80 86 80 40 Z" fill="url(#th)" ${k('#7a5a32',3)}/>
  <path d="M30 60 q8 -8 16 0 q8 8 16 0" fill="none" stroke="#4caf50" stroke-width="2.6"/><circle cx="38" cy="56" r="2.4" fill="#ef6a8a"/><circle cx="62" cy="64" r="2.4" fill="#ef6a8a"/>
  <ellipse cx="50" cy="40" rx="30" ry="8" fill="url(#the)" ${k('#5a3a10',2.4)}/>
  <path d="M60 40 Q66 26 70 16" fill="none" stroke="#f5f0e6" stroke-width="1.6"/><rect x="66" y="8" width="11" height="10" rx="1.5" fill="url(#vt)" ${k('#1f5f1c',1.6)} transform="rotate(12 71 13)"/>
  <path d="M38 38 q6 -3 10 1" fill="none" stroke="#f9e0a6" stroke-width="1.8" opacity=".8"/>
  ${brille(28,56,4,10,10)}${etoile(16,26,3.5)}`);
ART['boisson:5']=svg(L('smo','#ffc1d9','#ff6f9f','#d63a72')+L('dome','#ffffff','#e9f6ff','#bfe0f5'),
 `${ombre(26)}${paille(52,30,62,6,'#7ed957')}
  <path d="M26 34 Q50 14 74 34 Z" fill="url(#dome)" opacity=".9" ${k('#6a9ab8',2.4)}/>
  <circle cx="44" cy="28" r="5" fill="#ff5a6a" ${k('#8a1020',1.6)}/><path d="M44 23 q2 -4 5 -4" stroke="#2b7a22" stroke-width="1.8" fill="none"/>
  <path d="M24 36 H76 L68 88 H32 Z" fill="url(#smo)" ${k('#8a1a46',3)}/>
  <rect x="21" y="32" width="58" height="7" rx="3.5" fill="#fff" ${k('#6a9ab8',2.2)}/>
  <path d="M30 52 Q50 58 70 52" fill="none" stroke="#fff" stroke-width="2.4" opacity=".7"/>
  <g fill="#fff" opacity=".6"><circle cx="40" cy="66" r="2"/><circle cx="58" cy="72" r="1.6"/><circle cx="50" cy="60" r="1.4"/></g>
  ${brille(32,58,3.2,12,6)}${etoile(82,46,3.5)}`);
ART['boisson:6']=svg(L('verre','#e9f8ff','#bfe6f7','#8cc8e6',0,0,1,0)+L('tg','#ffd27a','#f2a33a','#c86d10')+R('ci2','#fff7a8','#ffe14d','#e9b80f','50%','50%'),
 `${ombre(26)}${paille(56,30,66,4,'#ff8a3a')}
  <path d="M28 22 H72 L66 88 H34 Z" fill="url(#verre)" opacity=".55" ${k('#4d8fb3',3)}/>
  <path d="M30 40 H70 L66 86 H34 Z" fill="url(#tg)" opacity=".92"/>
  ${glacon(36,42,12,12)}${glacon(52,52,11,-15)}${glacon(40,64,10,8)}
  <circle cx="70" cy="28" r="12" fill="url(#ci2)" ${k('#a8800a',2.2)}/><circle cx="70" cy="28" r="8" fill="none" stroke="#fff9cf" stroke-width="1.4"/><path d="M70 20 V36 M62 28 H78 M64 22 L76 34 M76 22 L64 34" stroke="#fff9cf" stroke-width="1.2"/>
  <path d="M38 50 q3 2 2 6" stroke="#fff" stroke-width="1.4" fill="none" opacity=".7"/>
  ${brille(33,54,2.8,14,4)}${etoile(18,34,3.5)}`);
ART['boisson:7']=svg(L('ck','#ffe066','#ff8a3a','#e5334f')+R('or','#ffd08a','#ff9a2a','#d86a0a','50%','50%')+L('pa','#ff9ac0','#ff5a8a','#c8306a'),
 `${ombre(24)}<path d="M36 88 H64" ${k('#4d8fb3',4)}/><path d="M50 60 V88" ${k('#4d8fb3',3.4)}/>
  <path d="M16 22 H84 L56 62 Q50 66 44 62 Z" fill="#e9f8ff" opacity=".45" ${k('#4d8fb3',3)}/>
  <path d="M22 28 H78 L55 58 Q50 61 45 58 Z" fill="url(#ck)"/>
  <path d="M30 32 Q50 38 70 32" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>
  <circle cx="24" cy="22" r="11" fill="url(#or)" ${k('#a8500a',2.2)}/><path d="M24 14 V30 M16 22 H32 M18 16 L30 28 M30 16 L18 28" stroke="#ffe0b0" stroke-width="1.2"/>
  <path d="M60 24 L74 4" ${k('#5a3415',2.4)}/><path d="M62 10 Q74 -2 88 10 Z" fill="url(#pa)" ${k('#8a1a46',2)}/><path d="M68 7 L74 4 L80 7" fill="none" stroke="#ffd1e2" stroke-width="1.2"/>
  <circle cx="64" cy="30" r="4" fill="#e5334f" ${k('#7a0e1e',1.4)}/><path d="M64 26 q3 -6 7 -7" stroke="#2b7a22" stroke-width="1.6" fill="none"/>
  ${brille(36,34,8,2.4,-10)}${etoile(86,40,3.5)}`);
ART['gen:boisson']=svg(L('bt','#c9f0ff','#6cc6f0','#2b8fd0',0,0,1,0)+L('pied','#ffffff','#e3ebf2','#aab8c6',0,0,1,0),
 `${ombre(30)}
  <path d="M34 8 H66 Q70 8 70 14 V40 Q70 46 64 46 H36 Q30 46 30 40 V14 Q30 8 34 8 Z" fill="url(#bt)" opacity=".9" ${k('#1a5f96',3)}/>
  <path d="M34 22 H66 M34 32 H66" stroke="#2b8fd0" stroke-width="2" opacity=".6"/><rect x="44" y="46" width="12" height="6" fill="#9ad8f5" ${k('#1a5f96',2)}/>
  <rect x="24" y="52" width="52" height="36" rx="6" fill="url(#pied)" ${k('#4a5a6a',3)}/>
  <rect x="32" y="60" width="9" height="7" rx="2" fill="#4aa3f0" ${k('#1a4f86',1.8)}/><rect x="59" y="60" width="9" height="7" rx="2" fill="#ef5b5b" ${k('#8a1a1a',1.8)}/>
  <path d="M36 67 V72 M63 67 V72" stroke="#4a5a6a" stroke-width="2.4"/>
  <rect x="30" y="76" width="40" height="5" rx="2" fill="#c9d4df" ${k('#4a5a6a',1.6)}/>
  <circle cx="36" cy="75" r="1.6" fill="#4aa3f0"/>
  ${brille(38,20,3,9,0)}${etoile(80,20,4)}${goutte(18,40,3.4)}`);

/* ================= BOULANGERIE ================= */
ART['pain:1']=svg(L('ble','#ffe9a8','#f2c14e','#c88a1a',0,0,1,0),
 `${ombre(22)}
  ${[[-22,0],[0,-4],[22,0]].map(([a,dy])=>`<g transform="rotate(${a} 50 88)"><path d="M50 88 V${30+dy}" ${k('#8a5a10',5)}/><path d="M50 88 V${30+dy}" stroke="#e8b84a" stroke-width="2.4"/>
    ${[0,1,2,3,4].map(i=>`<ellipse cx="${45}" cy="${36+dy+i*8}" rx="4" ry="6.5" fill="url(#ble)" ${k('#8a5a10',1.8)} transform="rotate(-25 45 ${36+dy+i*8})"/><ellipse cx="${55}" cy="${36+dy+i*8}" rx="4" ry="6.5" fill="url(#ble)" ${k('#8a5a10',1.8)} transform="rotate(25 55 ${36+dy+i*8})"/>`).join('')}
    <ellipse cx="50" cy="${28+dy}" rx="3.6" ry="6" fill="url(#ble)" ${k('#8a5a10',1.8)}/><path d="M50 ${22+dy} V${12+dy}" stroke="#c88a1a" stroke-width="1.2"/></g>`).join('')}
  <path d="M38 70 Q50 76 62 70 L62 76 Q50 82 38 76 Z" fill="#e5533c" ${k('#7a1a10',2)}/>
  ${etoile(18,24,3.5)}${etoile(84,30,3)}`);
ART['pain:2']=svg(R('bag','#ffd99a','#e09a44','#9a5a1a','40%','30%'),
 `${ombre(34)}<path fill-rule="evenodd" d="M50 22 C74 22 88 38 88 56 C88 74 72 86 50 86 C28 86 12 74 12 56 C12 38 26 22 50 22 Z M50 46 C44 46 40 50 40 55 C40 60 44 64 50 64 C56 64 60 60 60 55 C60 50 56 46 50 46 Z" fill="url(#bag)" ${k('#5e3210',3)}/>
  <path d="M24 46 Q50 30 76 46" fill="none" stroke="#ffe9c4" stroke-width="2.4" opacity=".7"/>
  <g fill="#fff6dd" ${k('#b88a4a',.8)}>${[[30,40],[40,34],[56,32],[68,38],[74,50],[26,54],[34,68],[64,70],[72,62],[46,76],[58,78],[22,62]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="2.4" ry="1.3" transform="rotate(${i*37} ${x} ${y})"/>`).join('')}</g>
  ${brille(30,36,7,3,-30)}${etoile(84,24,3.5)}`);
ART['pain:3']=svg(L('bgt','#ffd99a','#e5a14a','#a8621e',0,0,0,1),
 `${ombre(40)}<g transform="rotate(-32 50 52)"><rect x="4" y="40" width="92" height="24" rx="12" fill="url(#bgt)" ${k('#5e3210',3)}/>
  ${[20,36,52,68].map(x=>`<path d="M${x} 46 Q${x+8} 50 ${x+14} 46" fill="none" ${k('#7a4214',3)}/><path d="M${x+1} 48 Q${x+8} 51 ${x+13} 48" fill="none" stroke="#fff0cf" stroke-width="1.8"/>`).join('')}
  <rect x="12" y="43" width="70" height="4" rx="2" fill="#fff0cf" opacity=".6"/></g>
  <path d="M24 82 L44 80 L40 90 Z" fill="#fff" ${k('#a8221a',1.6)}/>
  ${brille(28,62,8,2.4,-32)}${etoile(82,26,3.8)}`);
ART['pain:4']=svg(R('cro','#ffd88a','#ea9a3a','#a85a14','45%','30%'),
 `${ombre(38)}
  <path d="M10 66 Q8 52 20 50 Q22 62 30 66 Z" fill="url(#cro)" ${k('#5e3210',2.6)}/><path d="M90 66 Q92 52 80 50 Q78 62 70 66 Z" fill="url(#cro)" ${k('#5e3210',2.6)}/>
  <path d="M20 50 Q22 36 34 36 Q38 52 40 68 L30 66 Q22 62 20 50 Z" fill="url(#cro)" ${k('#5e3210',2.6)}/>
  <path d="M80 50 Q78 36 66 36 Q62 52 60 68 L70 66 Q78 62 80 50 Z" fill="url(#cro)" ${k('#5e3210',2.6)}/>
  <path d="M34 36 Q50 22 66 36 Q64 54 60 70 Q50 74 40 70 Q36 54 34 36 Z" fill="url(#cro)" ${k('#5e3210',3)}/>
  <path d="M40 40 Q50 34 60 40 M24 46 Q28 42 32 44 M68 44 Q72 42 76 46" fill="none" stroke="#fff0cf" stroke-width="2" opacity=".8"/>
  ${brille(46,38,6,2.4,-10)}${etoile(86,30,3.5)}`);
ART['pain:5']=svg(R('pate','#ffe0a6','#e9a650','#a8621e','50%','30%')+R('cer','#ff7a8a','#d6243a','#8a0e1e','40%','30%'),
 `${ombre(40)}<ellipse cx="50" cy="62" rx="42" ry="22" fill="url(#pate)" ${k('#5e3210',3)}/>
  <ellipse cx="50" cy="58" rx="34" ry="16" fill="url(#cer)" ${k('#5e0a14',2.2)}/>
  <g fill="#ff9aa8" opacity=".8"><circle cx="38" cy="52" r="2"/><circle cx="60" cy="56" r="2"/><circle cx="48" cy="64" r="1.6"/><circle cx="68" cy="62" r="1.6"/></g>
  <clipPath id="cpt"><ellipse cx="50" cy="58" rx="34" ry="16"/></clipPath>
  <g clip-path="url(#cpt)" fill="url(#pate)" ${k('#5e3210',1.8)}>${[-30,-15,0,15,30].map(x=>`<rect x="${47+x}" y="36" width="7" height="44" rx="3.5"/>`).join('')}${[-8,2,12].map(y=>`<rect x="10" y="${53+y}" width="80" height="6" rx="3"/>`).join('')}</g>
  <path d="M50 74 Q12 74 16 58 Q20 42 50 42 Q80 42 84 58 Q88 74 50 74" fill="none" ${k('#5e3210',2.2)}/>
  ${Array.from({length:16},(_,i)=>{const a=i/16*Math.PI*2,x=50+Math.cos(a)*38,y=60+Math.sin(a)*22;return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.4" fill="url(#pate)" ${k('#5e3210',1.6)}/>`}).join('')}
  ${brille(26,52,8,3,-25)}${etoile(86,30,3.8)}`);
ART['pain:6']=svg(L('gen','#fffaf2','#f6e6cf','#e2c7a3',0,0,1,0)+L('fr','#ff8a9a','#ff4d6a','#c8203e')+R('ff','#ff8a7a','#ef3b4a','#a8102a','40%','30%'),
 `${ombre(36)}
  <path d="M14 58 L58 34 L88 50 L88 76 L44 90 L14 76 Z" fill="url(#gen)" ${k('#7a5a32',3)}/>
  <path d="M14 58 L44 72 L88 50" fill="none" ${k('#7a5a32',2.4)}/><path d="M44 72 V90" ${k('#7a5a32',2.4)}/>
  <path d="M14 66 L44 80 M44 80 L88 60" stroke="url(#fr)" stroke-width="4"/>
  <path d="M14 58 L58 34 L88 50 L44 72 Z" fill="#fff" ${k('#7a5a32',2.4)}/>
  <path d="M26 56 q4 -6 8 0 q4 6 8 0 q4 -6 8 0 q4 6 8 0" fill="none" stroke="#ffd1dc" stroke-width="3"/>
  <path d="M60 34 Q56 24 62 18 Q70 22 66 34 Z" fill="url(#ff)" ${k('#6e0a1a',2)} transform="translate(-6 10)"/>
  <path d="M56 26 q2 -5 6 -6 q0 5 -6 6" fill="#5fb84a" ${k('#2b7a22',1.2)} transform="translate(-6 10)"/>
  <g fill="#ffe7a8"><circle cx="54" cy="32" r=".9"/><circle cx="57" cy="36" r=".9"/></g>
  ${brille(24,64,3,8,20)}${etoile(84,30,3.8)}`);
ART['pain:7']=svg(L('g1','#fff6ea','#ffd6e2','#f2a6be',0,0,1,0)+L('g2','#ffffff','#fde9f0','#f5c2d4',0,0,1,0)+L('bou','#7ad3ff','#3aa6e8','#1f6fc0',0,0,1,0),
 `${ombre(38)}
  <path d="M14 58 V80 Q50 94 86 80 V58 Z" fill="url(#g1)" ${k('#8a3a58',3)}/><ellipse cx="50" cy="58" rx="36" ry="10" fill="#fff" ${k('#8a3a58',2.6)}/>
  <path d="M14 64 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="#ff7aa0" ${k('#8a3a58',1.6)}/>
  <path d="M28 38 V58 Q50 66 72 58 V38 Z" fill="url(#g2)" ${k('#8a3a58',2.6)}/><ellipse cx="50" cy="38" rx="22" ry="6" fill="#fff" ${k('#8a3a58',2.4)}/>
  <g fill="#ff5a8a"><circle cx="34" cy="50" r="2"/><circle cx="46" cy="53" r="2" fill="#7ed957"/><circle cx="58" cy="52" r="2" fill="#ffd23a"/><circle cx="68" cy="49" r="2" fill="#3aa6e8"/></g>
  ${[38,50,62].map((x,i)=>`<rect x="${x-2.2}" y="22" width="4.4" height="14" rx="1.6" fill="url(#bou)" ${k('#123f73',1.4)}/><path d="M${x} 21 q-4 -5 0 -10 q4 5 0 10" fill="#ffcc33" ${k('#c86a0a',1.2)}/><circle cx="${x}" cy="16" r="1.2" fill="#fff"/>`).join('')}
  ${brille(22,70,3,8,10)}${etoile(86,34,3.8)}${etoile(14,40,3)}`);
ART['gen:pain']=svg(L('sac','#f6e2c0','#dcbc8a','#a8844a')+L('cord','#c98a4b','#a46a33','#7a4a1e'),
 `${ombre(34)}
  <path d="M34 26 Q50 10 66 26 Q60 24 50 26 Q40 24 34 26 Z" fill="#fff" ${k('#a8a8a8',2)}/><g fill="#fff"><circle cx="44" cy="18" r="3"/><circle cx="56" cy="16" r="2.4"/><circle cx="50" cy="12" r="2"/></g>
  <path d="M30 30 Q24 60 22 80 Q22 90 50 90 Q78 90 78 80 Q76 60 70 30 Z" fill="url(#sac)" ${k('#6b4a22',3)}/>
  <path d="M30 30 Q50 38 70 30" fill="none" ${k('#6b4a22',2.6)}/><path d="M32 34 Q50 42 68 34" stroke="url(#cord)" stroke-width="4" fill="none"/>
  <path d="M28 52 Q50 46 72 52" fill="none" stroke="#c8a46a" stroke-width="2" opacity=".7"/>
  <circle cx="50" cy="66" r="13" fill="#fff6e0" ${k('#a8844a',2)}/>
  <g transform="translate(50 66)"><path d="M0 9 V-8" stroke="#c88a1a" stroke-width="2"/>${[-6,-1,4].map(y=>`<ellipse cx="-3" cy="${y}" rx="2" ry="3.4" fill="#f2c14e" transform="rotate(-25 -3 ${y})"/><ellipse cx="3" cy="${y}" rx="2" ry="3.4" fill="#f2c14e" transform="rotate(25 3 ${y})"/>`).join('')}</g>
  ${brille(32,46,3,10,8)}${etoile(82,26,4)}`);

/* ================= PÊCHE ================= */
ART['mer:1']=svg(R('co','#fff0f2','#ffb3c0','#e0708a','50%','80%','90%'),
 `${ombre(30)}<path d="M50 86 L14 46 Q18 18 50 14 Q82 18 86 46 Z" fill="url(#co)" ${k('#8a3048',3)}/>
  ${[-30,-18,-6,6,18,30].map(a=>`<path d="M50 84 L${50+a*1.15} 22" stroke="#c85a74" stroke-width="2" opacity=".7"/>`).join('')}
  <path d="M40 86 L36 92 L64 92 L60 86 Z" fill="#ffb3c0" ${k('#8a3048',2.4)}/>
  <path d="M22 40 Q50 30 78 40" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>
  ${brille(34,30,7,3,-25)}<circle cx="70" cy="66" r="4" fill="#fff" ${k('#c8a0aa',1.4)}/><circle cx="69" cy="65" r="1.4" fill="#fff"/>${etoile(84,22,3.5)}`);
ART['mer:2']=svg(L('cv','#ffc0a0','#ff8a5c','#d8552a',0,0,1,1),
 `${ombre(30)}
  <path d="M70 30 Q90 40 86 62 Q80 84 56 86 Q34 86 26 70" fill="none" ${k('#7a2a10',20)}/>
  <path d="M70 30 Q90 40 86 62 Q80 84 56 86 Q34 86 26 70" fill="none" stroke="url(#cv)" stroke-width="15" stroke-linecap="round"/>
  ${[[80,40],[86,56],[80,72],[66,82],[48,84]].map(([x,y])=>`<path d="M${x-5} ${y-5} L${x+5} ${y+5}" stroke="#fff0e6" stroke-width="1.6" opacity=".8"/>`).join('')}
  <path d="M26 70 L12 62 L16 78 L28 80 Z" fill="#ff7a4a" ${k('#7a2a10',2.4)}/>
  <circle cx="72" cy="32" r="3" fill="#1d1d2a"/><circle cx="71" cy="31" r="1" fill="#fff"/>
  <path d="M70 28 Q54 10 30 14 M72 28 Q60 6 40 6" fill="none" stroke="#c8552a" stroke-width="1.6"/>
  <path d="M60 46 l-8 6 M64 52 l-8 6 M66 60 l-8 4" stroke="#d8552a" stroke-width="2.2" stroke-linecap="round"/>
  ${brille(80,46,3,8,20)}${etoile(18,30,3.5)}`);
ART['mer:3']=svg(L('pb','#a8e2ff','#4aa3f0','#1f5fb0',0,0,0,1)+L('ve','#ffffff','#e6f4ff','#b8dcf5',0,0,0,1),
 `${ombre(34)}
  <path d="M74 52 L92 34 L90 52 L92 70 Z" fill="#3a8ae0" ${k('#123f73',2.6)}/>
  <path d="M10 52 Q30 24 62 30 Q80 36 80 52 Q80 68 62 74 Q30 80 10 52 Z" fill="url(#pb)" ${k('#123f73',3)}/>
  <path d="M14 54 Q34 72 64 70 Q78 64 80 54 Q50 62 14 54 Z" fill="url(#ve)" opacity=".9"/>
  <path d="M40 30 Q48 18 58 30" fill="#4aa3f0" ${k('#123f73',2.4)}/>
  <path d="M30 40 Q34 52 30 64" fill="none" ${k('#123f73',2.2)}/>
  <g fill="#7fc4ff" opacity=".8">${[[44,44],[52,40],[60,46],[48,52],[56,54],[66,50]].map(([x,y])=>`<path d="M${x} ${y} q3 3 6 0" stroke="#d6efff" stroke-width="1.4" fill="none"/>`).join('')}</g>
  <circle cx="22" cy="48" r="4.6" fill="#fff" ${k('#123f73',1.8)}/><circle cx="21" cy="48" r="2.2" fill="#1d1d2a"/><circle cx="20" cy="47" r=".8" fill="#fff"/>
  <path d="M14 58 q3 2 6 0" stroke="#123f73" stroke-width="1.8" fill="none"/>
  ${brille(36,38,8,2.6,-20)}<circle cx="86" cy="22" r="3" fill="none" stroke="#9ad8f5" stroke-width="1.6"/><circle cx="80" cy="12" r="2" fill="none" stroke="#9ad8f5" stroke-width="1.4"/>`);
ART['mer:4']=svg(R('cra','#ff9a7a','#e8452e','#a0200f','45%','30%'),
 `${ombre(38)}
  ${[-1,1].map(sx=>`<g transform="translate(50 0) scale(${sx} 1) translate(-50 0)">
    <path d="M28 64 L12 74 L8 86 M30 70 L18 82 L18 90 M34 74 L28 88" fill="none" ${k('#7a1a0c',6)}/><path d="M28 64 L12 74 L8 86 M30 70 L18 82 L18 90 M34 74 L28 88" fill="none" stroke="#e8452e" stroke-width="3"/>
    <path d="M28 50 L16 36" ${k('#7a1a0c',7)}/><path d="M28 50 L16 36" stroke="#e8452e" stroke-width="3.6"/>
    <path d="M18 38 Q4 30 8 16 Q14 24 22 22 Q18 12 26 10 Q30 26 18 38 Z" fill="url(#cra)" ${k('#7a1a0c',2.6)}/></g>`).join('')}
  <ellipse cx="50" cy="60" rx="28" ry="20" fill="url(#cra)" ${k('#7a1a0c',3)}/>
  <path d="M30 56 Q50 46 70 56" fill="none" stroke="#ffb8a0" stroke-width="2" opacity=".8"/>
  <g fill="#ffcf9a" opacity=".7"><circle cx="40" cy="66" r="1.8"/><circle cx="60" cy="66" r="1.8"/><circle cx="50" cy="70" r="1.6"/></g>
  <path d="M42 42 V34 M58 42 V34" ${k('#7a1a0c',2.4)}/><circle cx="42" cy="32" r="4.4" fill="#fff" ${k('#7a1a0c',2)}/><circle cx="58" cy="32" r="4.4" fill="#fff" ${k('#7a1a0c',2)}/>
  <circle cx="43" cy="32" r="2" fill="#1d1d2a"/><circle cx="59" cy="32" r="2" fill="#1d1d2a"/>
  <path d="M44 60 q6 5 12 0" stroke="#7a1a0c" stroke-width="2" fill="none"/>
  ${brille(38,52,7,2.6,-15)}`);
ART['mer:5']=svg(L('hom','#ff8a6a','#d8301e','#8a120a',0,0,1,1),
 `${ombre(40)}
  <path d="M50 30 L50 74" stroke="none"/>
  ${[-1,1].map(sx=>`<g transform="translate(50 0) scale(${sx} 1) translate(-50 0)"><path d="M42 34 Q30 26 24 30" fill="none" ${k('#6e0e06',6)}/><path d="M42 34 Q30 26 24 30" fill="none" stroke="#d8301e" stroke-width="3"/>
    <path d="M26 32 Q6 28 8 12 Q16 18 22 16 Q16 6 26 4 Q34 20 26 32 Z" fill="url(#hom)" ${k('#6e0e06',2.6)}/>
    <path d="M40 56 L28 62 M40 64 L28 72 M42 72 L32 80" ${k('#6e0e06',2.6)}/><path d="M44 22 Q36 8 22 2" fill="none" stroke="#a0200f" stroke-width="1.4"/></g>`).join('')}
  <path d="M38 30 Q50 18 62 30 L64 50 Q50 56 36 50 Z" fill="url(#hom)" ${k('#6e0e06',3)}/>
  ${[0,1,2].map(i=>`<path d="M${38+i*1.6} ${50+i*9} Q50 ${46+i*9} ${62-i*1.6} ${50+i*9} L${61-i*1.6} ${59+i*9} Q50 ${63+i*9} ${39+i*1.6} ${59+i*9} Z" fill="url(#hom)" ${k('#6e0e06',2.4)}/>`).join('')}
  <path d="M42 77 L32 90 L50 86 L68 90 L58 77 Z" fill="#e8452e" ${k('#6e0e06',2.4)}/>
  <circle cx="44" cy="28" r="3" fill="#1d1d2a"/><circle cx="56" cy="28" r="3" fill="#1d1d2a"/><circle cx="43" cy="27" r="1" fill="#fff"/><circle cx="55" cy="27" r="1" fill="#fff"/>
  ${brille(44,38,5,2.2,-20)}${etoile(86,44,3.5)}`);
ART['mer:6']=svg(AS+R('pan','#ffe08a','#f0a83a','#b8661a','40%','30%')+L('cv2','#ffc0a0','#ff7a4a','#d8552a'),
 `${ombre(40)}${assiette(68,40,16)}
  ${[[30,58,-30],[50,52,0],[70,58,30]].map(([x,y,r])=>`<g transform="rotate(${r} ${x} ${y})"><path d="M${x} ${y-18} l-4 -6 l8 0 z" fill="url(#cv2)" ${k('#7a2a10',1.8)}/>
    <path d="M${x-9} ${y-12} Q${x-12} ${y+6} ${x} ${y+14} Q${x+12} ${y+6} ${x+9} ${y-12} Q${x} ${y-20} ${x-9} ${y-12} Z" fill="url(#pan)" ${k('#7a4210',2.4)}/>
    <g fill="#fff2c4" opacity=".85"><circle cx="${x-4}" cy="${y-6}" r="1.6"/><circle cx="${x+3}" cy="${y}" r="1.4"/><circle cx="${x-2}" cy="${y+6}" r="1.2"/><circle cx="${x+4}" cy="${y-9}" r="1.2"/></g></g>`).join('')}
  <path d="M74 74 Q80 70 84 74 Q80 80 74 74 Z" fill="#ffe14d" ${k('#a8800a',1.6)}/>
  <ellipse cx="22" cy="74" rx="7" ry="3.6" fill="#ff5a3a" ${k('#7a1a0c',1.6)}/>
  ${brille(40,44,4,2,-20)}${etoile(86,30,3.8)}`);
ART['mer:7']=svg(L('pl','#e8b072','#c4844a','#8a5424',0,0,0,1)+L('ri','#ffffff','#f6f2ea','#ddd6c8')+L('sau','#ffb08a','#ff7a5a','#e0553a',0,0,1,0)+L('thon','#ff7a8a','#e0405a','#a8203a',0,0,1,0),
 `${ombre(42)}
  <path d="M10 60 L50 44 L92 58 L52 78 Z" fill="url(#pl)" ${k('#5a3415',3)}/><path d="M10 60 L10 66 L52 84 L52 78 Z" fill="#9a6230" ${k('#5a3415',2.6)}/><path d="M52 78 L52 84 L92 64 L92 58 Z" fill="#7a4a1e" ${k('#5a3415',2.6)}/>
  <path d="M20 60 L50 48 M30 64 L60 52 M40 68 L70 56" stroke="#e8b880" stroke-width="1.2" opacity=".6"/>
  ${[[30,54],[48,48]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y+4}" rx="10" ry="5.4" fill="url(#ri)" ${k('#8a8070',2)}/><path d="M${x-11} ${y+1} Q${x} ${y-8} ${x+11} ${y+1} Q${x} ${y+5} ${x-11} ${y+1} Z" fill="url(#${i?'thon':'sau'})" ${k(i?'#6e0e1e':'#8a2a10',2)}/>
    <path d="M${x-6} ${y-1} q4 -2 8 0 M${x-3} ${y+2} q4 -2 8 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".7"/>`).join('')}
  ${[[60,58],[74,56],[67,66]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="6.4" ry="4.8" fill="#1f2a1f" ${k('#0a100a',1.6)}/><ellipse cx="${x}" cy="${y-1.2}" rx="4.8" ry="3.2" fill="#fff"/><ellipse cx="${x}" cy="${y-1.4}" rx="2.4" ry="1.6" fill="#ff7a5a"/>`).join('')}
  <path d="M20 66 q4 -6 10 -3 q-2 6 -10 3" fill="#9ade6a" ${k('#2b7a22',1.6)}/><ellipse cx="82" cy="66" rx="5" ry="3" fill="#ffb8c8" ${k('#c8607a',1.4)}/>
  ${brille(30,50,4,1.8,-10)}${etoile(14,36,3.8)}${etoile(88,38,3)}`);
ART['gen:mer']=svg(L('seau','#9ad8ff','#3aa6e8','#1f6fc0',0,0,1,0)+L('can','#e8b072','#c4844a','#8a5424',0,0,1,0)+L('pois','#a8e2ff','#4aa3f0','#1f5fb0'),
 `${ombre(34)}
  <path d="M30 86 L84 8" ${k('#3a2410',6)}/><path d="M30 86 L84 8" stroke="url(#can)" stroke-width="3" stroke-linecap="round"/>
  <path d="M84 8 Q92 30 88 44" fill="none" stroke="#e9f2f8" stroke-width="1.4"/><path d="M88 44 q-2 4 -5 2" fill="none" stroke="#7d8a99" stroke-width="2"/>
  <circle cx="42" cy="68" r="5" fill="#d0d8e0" ${k('#4a5a6a',2)}/>
  <path d="M38 40 L46 30 L50 40 Z" fill="url(#pois)" ${k('#123f73',2)}/><path d="M50 40 L58 30 L62 40 Z" fill="url(#pois)" ${k('#123f73',2)}/>
  <path d="M20 42 H80 L72 88 H28 Z" fill="url(#seau)" ${k('#123f73',3)}/>
  <path d="M22 56 H78" stroke="#1f5fb0" stroke-width="2.4"/><path d="M26 74 H74" stroke="#1f5fb0" stroke-width="2" opacity=".6"/>
  <rect x="16" y="38" width="68" height="8" rx="4" fill="#7fc8f5" ${k('#123f73',2.6)}/>
  <path d="M20 42 Q50 8 80 42" fill="none" stroke="#7d8a99" stroke-width="2.4"/>
  <path d="M30 40 q10 -6 20 0" fill="none" stroke="#e6f4ff" stroke-width="2" opacity=".8"/>
  ${brille(28,58,3,10,8)}${etoile(12,24,4)}`);

/* ================= CRÊPERIE ================= */
ART['sucre:1']=svg(R('oe','#ffffff','#fbf3e6','#e2cfb0','38%','30%'),
 `${ombre(26)}<path d="M50 12 C70 12 82 40 82 60 C82 78 68 90 50 90 C32 90 18 78 18 60 C18 40 30 12 50 12 Z" fill="url(#oe)" ${k('#8a7050',3)}/>
  <g fill="#e8d6b8" opacity=".7"><circle cx="62" cy="62" r="1.6"/><circle cx="40" cy="72" r="1.2"/><circle cx="58" cy="78" r="1.2"/></g>
  ${brille(38,36,6,11,20)}${etoile(80,22,3.8)}`);
ART['sucre:2']=svg(AS+L('beu','#fff6c4','#ffe27a','#e8b830',0,0,0,1)+L('beu2','#ffeea0','#f5cf50','#c8961a'),
 `${ombre(36)}${assiette(72,40,14)}
  <path d="M24 46 L60 38 L80 50 L44 58 Z" fill="url(#beu)" ${k('#8a6a10',2.6)}/>
  <path d="M24 46 L44 58 L44 74 L24 62 Z" fill="url(#beu2)" ${k('#8a6a10',2.6)}/><path d="M44 58 L80 50 L80 66 L44 74 Z" fill="#e8b830" ${k('#8a6a10',2.6)}/>
  <path d="M52 50 q8 -2 14 2 q-2 4 -10 4" fill="#fff6c4" ${k('#c8a030',1.6)}/>
  <path d="M28 50 L40 56" stroke="#fffbe0" stroke-width="2" opacity=".8"/>
  ${brille(38,46,6,2,-12)}${etoile(84,32,3.8)}`);
ART['sucre:3']=svg(AS+L('cr','#ffe2a6','#f2b25a','#c8782a',0,0,0,1)+L('sir','#d88a2a','#b0601a','#7a3a0a'),
 `${ombre(38)}${assiette(76,40,14)}
  ${[0,1,2,3].map(i=>`<ellipse cx="50" cy="${70-i*9}" rx="32" ry="9" fill="url(#cr)" ${k('#7a4210',2.4)}/>`).join('')}
  <path d="M22 42 Q30 50 26 58 Q34 52 36 62 Q40 50 50 56 Q58 48 64 60 Q68 50 76 54 Q80 46 78 42 Q50 30 22 42 Z" fill="url(#sir)" opacity=".92" ${k('#5a2a06',1.8)}/>
  <rect x="42" y="30" width="16" height="10" rx="2" fill="#ffe27a" ${k('#8a6a10',2)}/><rect x="44" y="31" width="6" height="3" fill="#fff8d0"/>
  <circle cx="30" cy="40" r="3.4" fill="#4a7ae0" ${k('#1a3a86',1.4)}/><circle cx="70" cy="42" r="3.4" fill="#4a7ae0" ${k('#1a3a86',1.4)}/><circle cx="64" cy="36" r="3" fill="#ef3b4a" ${k('#8a102a',1.4)}/>
  ${brille(34,42,6,1.8,-8)}${etoile(86,26,3.8)}`);
ART['sucre:4']=svg(L('gf','#ffd99a','#e9a24a','#a8621e',0,0,1,1)+R('fr2','#ff8a7a','#ef3b4a','#a8102a','40%','30%'),
 `${ombre(36)}
  <rect x="16" y="28" width="68" height="58" rx="10" fill="url(#gf)" ${k('#5e3210',3)}/>
  <g fill="#b8702a" ${k('#7a4214',1.4)}>${[0,1,2,3].map(r=>[0,1,2,3].map(c=>`<rect x="${22+c*15}" y="${34+r*13}" width="11" height="9" rx="2"/>`).join('')).join('')}</g>
  <g fill="#ffe3b4" opacity=".7">${[0,1,2,3].map(r=>[0,1,2,3].map(c=>`<rect x="${23+c*15}" y="${35+r*13}" width="5" height="2" rx="1"/>`).join('')).join('')}</g>
  <path d="M30 36 Q40 20 54 30 Q66 18 74 32 Q80 42 66 44 Q50 50 36 46 Q24 44 30 36 Z" fill="#fff" ${k('#b8a890',2.2)}/>
  <path d="M56 22 Q50 10 58 6 Q68 10 64 22 Z" fill="url(#fr2)" ${k('#6e0a1a',2)}/><path d="M54 10 q4 -6 10 -2" fill="#5fb84a" ${k('#2b7a22',1.4)}/>
  <g fill="#ffe7a8"><circle cx="58" cy="14" r=".9"/><circle cx="61" cy="18" r=".9"/></g>
  ${brille(40,36,6,2.2,-10)}${etoile(14,20,3.8)}`);
ART['sucre:5']=svg(AS+L('fl','#fff2b8','#ffd25a','#e8a020',0,0,0,1)+L('car','#c8661a','#9a4a0e','#6e2e06',0,0,0,1),
 `${ombre(36)}${assiette(78,40,13)}
  <path d="M24 74 L32 36 H68 L76 74 Q50 82 24 74 Z" fill="url(#fl)" ${k('#8a5a10',3)}/>
  <ellipse cx="50" cy="36" rx="18" ry="6" fill="url(#car)" ${k('#4a1e04',2.4)}/>
  <path d="M33 38 Q32 48 36 52 Q38 44 42 40 M64 38 Q66 50 62 56 Q60 46 58 40 M48 42 Q47 50 50 54 Q52 48 52 42" fill="#a8500e" ${k('#4a1e04',1.4)}/>
  <path d="M40 34 q8 -3 16 0" fill="none" stroke="#f2a65a" stroke-width="1.8"/>
  <path d="M30 60 Q50 66 70 60" fill="none" stroke="#fff8d6" stroke-width="2" opacity=".7"/>
  ${brille(36,56,3,10,12)}${etoile(84,30,3.8)}`);
ART['sucre:6']=svg(L('cp','#e9f8ff','#bfe6f7','#8cc8e6',0,0,1,0)+R('v','#fffaf0','#f6e6c6','#d8c08a')+R('fra','#ffd0dc','#ff8aa8','#d64a72')+R('cho','#b07a50','#7a4a2a','#4a2a14')+R('ce','#ff8a8a','#e01e3a','#8a0a1a','40%','30%')+L('gau','#ffe2a6','#e9b25a','#b8782a',0,0,1,0),
 `${ombre(26)}<path d="M36 88 H64" ${k('#4d8fb3',4)}/><path d="M50 70 V88" ${k('#4d8fb3',3.4)}/>
  <path d="M20 56 H80 Q78 74 50 74 Q22 74 20 56 Z" fill="url(#cp)" opacity=".85" ${k('#4d8fb3',3)}/>
  <circle cx="34" cy="50" r="13" fill="url(#fra)" ${k('#8a2a48',2.4)}/><circle cx="66" cy="50" r="13" fill="url(#cho)" ${k('#3a1a08',2.4)}/><circle cx="50" cy="38" r="14" fill="url(#v)" ${k('#8a7050',2.4)}/>
  <g fill="#3a1a08"><circle cx="46" cy="36" r=".9"/><circle cx="54" cy="40" r=".9"/><circle cx="50" cy="32" r=".9"/></g>
  <path d="M42 26 Q50 22 58 28 Q56 34 50 32 Q44 34 42 26 Z" fill="#fff" ${k('#b8a890',1.6)}/>
  <circle cx="50" cy="20" r="5" fill="url(#ce)" ${k('#5a0610',1.6)}/><path d="M50 15 Q52 8 58 6" fill="none" stroke="#2b7a22" stroke-width="1.6"/>
  <rect x="64" y="22" width="7" height="22" rx="2" fill="url(#gau)" ${k('#7a4a14',1.8)} transform="rotate(20 67 33)"/>
  <g fill="#ff5a8a"><rect x="30" y="44" width="2" height="4" rx="1" transform="rotate(30 31 46)"/><rect x="38" y="48" width="2" height="4" rx="1" fill="#7ed957"/><rect x="62" y="44" width="2" height="4" rx="1" fill="#ffd23a" transform="rotate(-30 63 46)"/><rect x="70" y="50" width="2" height="4" rx="1" fill="#3aa6e8"/></g>
  ${brille(28,44,4,2,-30)}${brille(44,32,4,2,-30)}${etoile(86,30,3.8)}`);
ART['sucre:7']=svg(AS+R('fd','#8a5a3a','#5a3420','#2e180a','40%','30%')+R('lave','#c87a3a','#8a4a1a','#5a2a0a','50%','40%')+L('me','#a6e27a','#5fb84a','#2e7d32'),
 `${ombre(38)}${assiette(76,40,14)}
  <path d="M60 74 Q76 76 82 70 Q74 80 56 80 Z" fill="url(#lave)" ${k('#3a1a08',1.8)}/>
  <path d="M26 72 L30 38 Q50 30 70 38 L74 72 Q50 80 26 72 Z" fill="url(#fd)" ${k('#1e0e04',3)}/>
  <ellipse cx="50" cy="38" rx="20" ry="6" fill="#6a4028" ${k('#1e0e04',2.4)}/>
  <path d="M58 56 Q66 62 64 74 L58 76 Q54 64 58 56 Z" fill="url(#lave)" ${k('#3a1a08',1.6)}/>
  <g fill="#fff" opacity=".9">${[[38,36],[46,34],[54,37],[60,35],[44,40],[52,40],[40,30]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.3"/>`).join('')}</g>
  <path d="M48 30 Q44 20 50 16 Q54 22 52 30 Z" fill="url(#me)" ${k('#1f5f1c',1.6)}/><path d="M52 30 Q58 22 64 24 Q60 30 52 30 Z" fill="url(#me)" ${k('#1f5f1c',1.6)}/>
  <circle cx="36" cy="76" r="3.4" fill="#ef3b4a" ${k('#8a102a',1.4)}/><circle cx="30" cy="74" r="2.6" fill="#4a7ae0" ${k('#1a3a86',1.2)}/>
  ${brille(34,52,3,10,10)}${etoile(84,28,3.8)}`);
ART['gen:sucre']=svg(L('mur','#ff8a7a','#e5533c','#a8301e',0,0,0,1)+L('toit','#a46a33','#7a4a1e','#5a3415')+R('pou','#ffffff','#f6f0e6','#d8ccb8','40%','30%'),
 `${ombre(36)}
  <path d="M10 44 L50 12 L90 44 Z" fill="url(#toit)" ${k('#3a2410',3)}/><path d="M20 40 L50 17 L80 40" fill="none" stroke="#c98a4b" stroke-width="2" opacity=".7"/>
  <rect x="18" y="42" width="64" height="46" rx="3" fill="url(#mur)" ${k('#6e1a10',3)}/>
  <path d="M18 54 H82 M18 66 H82 M18 78 H82" stroke="#c8402a" stroke-width="1.6" opacity=".7"/>
  <path d="M36 88 V62 Q50 50 64 62 V88 Z" fill="#3a2410" ${k('#2a1808',2.4)}/>
  <circle cx="50" cy="66" r="12" fill="url(#pou)" ${k('#8a7050',2.4)}/>
  <path d="M44 54 q2 -6 6 -2 q2 -5 6 0 q2 4 -2 6 Z" fill="#ef3b4a" ${k('#8a102a',1.6)}/>
  <path d="M60 66 L68 68 L60 71 Z" fill="#ffb627" ${k('#a8600a',1.4)}/><path d="M58 72 q3 4 0 7 q-3 -3 0 -7" fill="#ef3b4a" ${k('#8a102a',1.2)}/>
  <circle cx="55" cy="63" r="2.2" fill="#1d1d2a"/><circle cx="54.3" cy="62.3" r=".7" fill="#fff"/>
  <ellipse cx="74" cy="84" rx="5" ry="6" fill="#fff6e6" ${k('#8a7050',1.6)}/>
  ${brille(26,50,3,8,10)}${etoile(86,22,4)}`);

/* ================= GRILL ================= */
ART['grill:1']=svg(L('sc','#ff9a7a','#d8503a','#8a2a18',0,0,0,1),
 `${ombre(38)}<g transform="rotate(-28 50 54)"><rect x="8" y="40" width="84" height="26" rx="13" fill="url(#sc)" ${k('#5a1a0a',3)}/>
  ${[26,42,58,74].map(x=>`<path d="M${x} 42 L${x-6} 64" stroke="#5a1a0a" stroke-width="3" stroke-linecap="round" opacity=".8"/>`).join('')}
  <rect x="16" y="44" width="62" height="4" rx="2" fill="#ffc8b0" opacity=".7"/>
  <path d="M8 53 l-5 -3 M92 53 l5 -3" ${k('#5a1a0a',2.6)}/></g>
  <path d="M60 80 q8 -2 14 2 q-6 4 -14 -2" fill="#ffd23a" ${k('#a8800a',1.6)}/>
  ${brille(30,56,8,2.4,-28)}${etoile(84,26,3.8)}`);
ART['grill:2']=svg(R('pi','#ffcf8a','#e08a2a','#9a4a0e','40%','30%')+L('os','#ffffff','#f4ecdc','#d4c4a4'),
 `${ombre(34)}
  <path d="M60 44 L84 22" ${k('#8a7050',10)}/><path d="M60 44 L84 22" stroke="url(#os)" stroke-width="6" stroke-linecap="round"/>
  <circle cx="86" cy="16" r="5.4" fill="url(#os)" ${k('#8a7050',2.4)}/><circle cx="92" cy="22" r="5.4" fill="url(#os)" ${k('#8a7050',2.4)}/>
  <path d="M64 40 C70 60 58 86 34 86 C14 86 8 66 18 50 C28 34 52 28 64 40 Z" fill="url(#pi)" ${k('#5e2a06',3)}/>
  <path d="M26 54 q6 -6 14 -4 M22 66 q8 -4 16 0 M34 76 q8 -2 14 2" fill="none" stroke="#7a3a0a" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>
  <g fill="#3a7a22"><circle cx="44" cy="58" r="1.4"/><circle cx="50" cy="70" r="1.2"/><circle cx="30" cy="70" r="1.2"/></g>
  ${brille(30,48,8,3,-30)}${etoile(14,30,3.8)}`);
ART['grill:3']=svg(AS+R('st','#e07a5a','#a83a22','#5e180a','40%','30%')+L('ro','#a6e27a','#5fb84a','#2e7d32'),
 `${ombre(40)}${assiette(70,42,17)}
  <path d="M18 58 Q16 40 36 38 Q56 34 74 40 Q88 46 84 60 Q80 74 56 74 Q28 76 18 58 Z" fill="url(#st)" ${k('#3a0e04',3)}/>
  <path d="M22 56 Q40 48 80 52" fill="none" stroke="#fff4e6" stroke-width="4" opacity=".8"/>
  ${[30,44,58,72].map(x=>`<path d="M${x} 42 L${x-10} 70" stroke="#3a0e04" stroke-width="3.4" stroke-linecap="round" opacity=".75"/>`).join('')}
  <path d="M70 34 Q76 20 86 14" fill="none" stroke="#5a3a10" stroke-width="1.8"/>${[0,1,2,3,4].map(i=>`<ellipse cx="${72+i*3.2}" cy="${30-i*3.6}" rx="1.2" ry="3.4" fill="url(#ro)" transform="rotate(${-50} ${72+i*3.2} ${30-i*3.6})"/><ellipse cx="${76+i*3.2}" cy="${32-i*3.6}" rx="1.2" ry="3.4" fill="url(#ro)" transform="rotate(${30} ${76+i*3.2} ${32-i*3.6})"/>`).join('')}
  <g fill="#fff"><circle cx="40" cy="46" r="1"/><circle cx="62" cy="62" r="1"/><circle cx="52" cy="50" r=".8"/></g>
  ${brille(30,46,6,2.4,-20)}${etoile(14,30,3.8)}`);
ART['grill:4']=svg(L('pain','#ffd99a','#e9a24a','#b8661e',0,0,0,1)+L('vi','#a85a3a','#6e3018','#3e180a',0,0,0,1)+L('fro','#fff07a','#ffcf2a','#e0a010',0,0,0,1),
 `${ombre(38)}
  <path d="M14 70 Q14 88 50 88 Q86 88 86 70 Z" fill="url(#pain)" ${k('#5e3210',3)}/>
  <path d="M12 62 Q30 70 50 64 Q70 70 88 62 L88 66 Q70 74 50 68 Q30 74 12 66 Z" fill="#6cc04a" ${k('#2b6a1f',2)}/>
  <rect x="14" y="52" width="72" height="13" rx="6.5" fill="url(#vi)" ${k('#2a0e04',2.6)}/>
  <path d="M14 52 L22 62 L30 52 L40 60 L50 52 L60 60 L70 52 L78 62 L86 52 Z" fill="url(#fro)" ${k('#a8800a',1.8)}/>
  <ellipse cx="34" cy="48" rx="10" ry="3.6" fill="#ef3b4a" ${k('#8a102a',1.6)}/><ellipse cx="62" cy="48" rx="10" ry="3.6" fill="#ef3b4a" ${k('#8a102a',1.6)}/>
  <path d="M14 46 Q14 16 50 16 Q86 16 86 46 Z" fill="url(#pain)" ${k('#5e3210',3)}/>
  <g fill="#fff6dd" ${k('#b88a4a',.7)}>${[[34,26],[46,22],[58,24],[68,30],[28,34],[52,30],[40,34],[62,36]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="2.2" ry="1.2" transform="rotate(${i*40} ${x} ${y})"/>`).join('')}</g>
  ${brille(32,28,9,3.4,-20)}${etoile(88,22,3.8)}`);
ART['grill:5']=svg(L('tc','#ffe2a6','#f2c060','#c88a2a',0,0,1,1)+L('vt','#c87a4a','#9a4a22','#5e2a0e'),
 `${ombre(38)}
  <path d="M14 70 Q16 26 50 24 Q84 26 86 70" fill="none" ${k('#3a1a06',17)}/><path d="M14 70 Q16 26 50 24 Q84 26 86 70" fill="none" stroke="url(#vt)" stroke-width="12"/>
  ${[[18,52],[24,38],[34,29],[46,24],[58,25],[70,30],[79,40],[84,54]].map(([x,y],i)=>`<circle cx="${x}" cy="${y-3}" r="6" fill="${i%2?'#7fd35a':'#5fbf4c'}" ${k('#2b6a1f',1.8)}/>`).join('')}
  ${[[28,30],[52,20],[74,30]].map(([x,y])=>`<rect x="${x-4}" y="${y-4}" width="8" height="7" rx="1.6" fill="#ef3b4a" ${k('#8a102a',1.4)}/>`).join('')}
  <g fill="#fff4b8" ${k('#c8a030',1)}><path d="M40 22 l9 -4 l-2 6z"/><path d="M62 22 l9 -2 l-3 6z"/></g>
  <path d="M8 80 Q8 36 50 36 Q92 36 92 80 Q50 86 8 80 Z" fill="url(#tc)" ${k('#7a4a10',3)}/>
  <path d="M18 70 Q20 46 50 44 Q80 46 82 70" fill="none" stroke="#fff6dd" stroke-width="2.4" opacity=".7"/>
  <g fill="#d8a040" opacity=".6"><circle cx="30" cy="66" r="2"/><circle cx="56" cy="58" r="2"/><circle cx="72" cy="70" r="1.6"/><circle cx="44" cy="74" r="1.6"/></g>
  ${brille(26,46,3,9,25)}${etoile(86,22,3.8)}`);
ART['grill:6']=svg(L('tor','#fff2d6','#f2d6a0','#c8a060',0,0,1,1)+L('rem','#ff9a5a','#e0602a','#a8380e'),
 `${ombre(34)}<g transform="rotate(-30 50 52)">
  <rect x="26" y="20" width="48" height="68" rx="22" fill="url(#tor)" ${k('#7a5a22',3)}/>
  <path d="M26 46 Q50 30 74 46" fill="none" stroke="#c8a060" stroke-width="2"/>
  <ellipse cx="50" cy="26" rx="20" ry="10" fill="url(#rem)" ${k('#5a1e04',2.4)}/>
  <path d="M34 24 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0" fill="#6cc04a" ${k('#2b6a1f',1.6)}/>
  <g fill="#ef3b4a"><circle cx="42" cy="28" r="2.4"/><circle cx="58" cy="27" r="2.4"/></g><circle cx="50" cy="30" r="2.2" fill="#ffe27a"/>
  <g fill="#c8963a" opacity=".6"><circle cx="40" cy="60" r="2"/><circle cx="58" cy="70" r="2"/><circle cx="48" cy="78" r="1.6"/></g>
  <rect x="26" y="52" width="48" height="12" fill="#e5533c" opacity=".85" ${k('#7a1a0c',1.6)}/></g>
  ${brille(34,56,3,10,-30)}${etoile(84,24,3.8)}`);
ART['grill:7']=svg(R('pz','#ffe2a6','#f0b050','#b8701e','50%','50%')+R('sauce','#ff8a5a','#e0402a','#a8200e','50%','50%')+R('pep','#ff6a5a','#c8202a','#7a0a10','40%','30%'),
 `${ombre(42)}<circle cx="50" cy="54" r="40" fill="url(#pz)" ${k('#6e3a0a',3)}/>
  <circle cx="50" cy="54" r="32" fill="url(#sauce)" ${k('#7a1a0c',1.8)}/>
  <path d="M24 46 Q30 30 50 26 Q70 28 78 44 Q84 60 72 76 Q56 88 36 80 Q20 70 24 46 Z" fill="#fff4c4" opacity=".95"/>
  <path d="M50 54 L50 14 M50 54 L84 74 M50 54 L16 74" stroke="#c8782a" stroke-width="2" opacity=".8"/>
  ${[[38,40],[62,42],[68,62],[44,70],[30,58],[54,56]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5.4" fill="url(#pep)" ${k('#5a0610',1.6)}/><circle cx="${x-1.6}" cy="${y-1.6}" r="1.2" fill="#ffb0a0"/>`).join('')}
  ${[[50,40],[40,56],[60,68]].map(([x,y])=>`<path d="M${x} ${y} q-5 -6 0 -10 q5 4 0 10 Z" fill="#3fa040" ${k('#1d5717',1.2)}/>`).join('')}
  <g fill="#2a2a2a"><ellipse cx="70" cy="52" rx="2.4" ry="1.6"/><ellipse cx="34" cy="68" rx="2.4" ry="1.6"/></g>
  ${brille(28,36,8,3,-40)}${etoile(90,20,4)}`);
ART['gen:grill']=svg(R('bbq','#5b5b6b','#2c2c38','#15151c','40%','30%')+L('fl','#fff07a','#ff9a2a','#e5334f',0,1,0,0)+L('pi2','#9aa4b0','#6a7480','#3a424c',0,0,1,0),
 `${ombre(32)}
  <path d="M36 70 L24 90 M64 70 L76 90 M50 72 V90" ${k('#15151c',4)}/>
  <circle cx="24" cy="89" r="3.4" fill="#2c2c38" ${k('#0c0c10',1.6)}/><circle cx="76" cy="89" r="3.4" fill="#2c2c38" ${k('#0c0c10',1.6)}/>
  <path d="M30 40 Q34 22 42 30 Q44 14 52 26 Q58 10 62 28 Q70 20 70 40 Z" fill="url(#fl)" ${k('#a8301e',2)}/>
  <path d="M40 40 Q44 30 48 36 Q52 26 56 36 Q60 30 60 40 Z" fill="#fff6a0" opacity=".9"/>
  <path d="M14 42 H86 Q84 74 50 76 Q16 74 14 42 Z" fill="url(#bbq)" ${k('#0c0c10',3)}/>
  <rect x="10" y="38" width="80" height="7" rx="3.5" fill="url(#pi2)" ${k('#0c0c10',2.4)}/>
  <path d="M22 41 H78" stroke="#c8d0d8" stroke-width="1.2" opacity=".7"/>
  <circle cx="50" cy="60" r="5" fill="#6a7480" ${k('#0c0c10',1.8)}/><path d="M47 60 h6" stroke="#0c0c10" stroke-width="1.6"/>
  <path d="M22 50 Q30 66 46 70" fill="none" stroke="#8a8aa0" stroke-width="2" opacity=".6"/>
  ${etoile(86,22,4)}${etoile(14,26,3)}`);

/* ================= VERGER (nouvelle gamme) ================= */
ART['verger:1']=svg(R('ce','#ff8a9a','#e0203a','#8a0a1e','35%','30%')+L('tq','#8be06a','#4caf3f','#2e7d32',0,0,1,0),
 `${ombre(30)}
  <path d="M34 60 Q40 30 58 14 M66 64 Q62 34 58 14" fill="none" ${k('#2a4a10',6)}/><path d="M34 60 Q40 30 58 14 M66 64 Q62 34 58 14" fill="none" stroke="#7a9a2a" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M58 16 C66 6 82 8 88 16 C78 24 66 24 58 16 Z" fill="url(#tq)" ${k('#1d5717',2.2)}/><path d="M62 16 Q74 13 84 15" fill="none" stroke="#d4f7a0" stroke-width="1.4"/>
  <circle cx="32" cy="70" r="18" fill="url(#ce)" ${k('#5a0614',3)}/><circle cx="68" cy="72" r="17" fill="url(#ce)" ${k('#5a0614',3)}/>
  <path d="M32 54 q-2 3 0 5 M68 57 q-2 3 0 5" fill="none" stroke="#5a0614" stroke-width="1.6"/>
  ${brille(25,63,6,3.6,-35)}${brille(61,65,5,3.2,-35)}<circle cx="38" cy="78" r="1.6" fill="#ffd0d8" opacity=".7"/>${etoile(16,30,3.6)}`);
ART['verger:2']=svg(R('fr','#ff9a8a','#e8303a','#a0101e','40%','30%')+L('sep','#a6e27a','#4caf3f','#2b7a22'),
 `${ombre(30)}
  <path d="M50 92 C30 84 14 62 16 44 C18 30 30 26 50 30 C70 26 82 30 84 44 C86 62 70 84 50 92 Z" fill="url(#fr)" ${k('#6e0a14',3)}/>
  <g fill="#ffe27a" stroke="#c8901a" stroke-width=".6">${[[30,46],[44,42],[58,42],[70,46],[26,58],[40,56],[54,56],[68,58],[34,70],[48,70],[62,70],[42,82],[56,82]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="1.4" ry="2.1"/>`).join('')}</g>
  <path d="M50 34 L36 22 L44 34 L28 32 L42 40 L50 38 L58 40 L72 32 L56 34 L64 22 Z" fill="url(#sep)" ${k('#1d5717',2.2)}/>
  <path d="M50 34 Q50 20 54 12" fill="none" ${k('#1d5717',6)}/><path d="M50 34 Q50 20 54 12" fill="none" stroke="#6cc04a" stroke-width="2.6" stroke-linecap="round"/>
  ${brille(30,50,7,4,-30)}${etoile(84,22,3.8)}`);
ART['verger:3']=svg(R('pe','#ffe0a0','#ff9a6a','#d8506a','35%','30%')+L('fe2','#a6e27a','#5fb84a','#2e7d32',0,0,1,1),
 `${ombre(32)}
  <path d="M50 26 C80 22 88 46 86 62 C84 82 66 90 50 90 C34 90 16 82 14 62 C12 46 20 22 50 26 Z" fill="url(#pe)" ${k('#8a2a2e',3)}/>
  <path d="M50 28 C40 46 42 70 50 88" fill="none" stroke="#c8405a" stroke-width="2.4" opacity=".55"/>
  <path d="M50 28 Q50 18 46 12" fill="none" ${k('#4a2a10',5)}/>
  <path d="M50 22 C58 8 76 8 82 14 C74 24 60 28 50 22 Z" fill="url(#fe2)" ${k('#1d5717',2.2)}/><path d="M54 20 Q66 14 78 14" fill="none" stroke="#d4f7a0" stroke-width="1.4"/>
  ${brille(30,46,9,6,-35)}<ellipse cx="66" cy="74" rx="10" ry="6" fill="#ff6a8a" opacity=".25"/>${etoile(18,28,3.8)}`);
ART['verger:4']=svg(R('an','#ffe27a','#f2a52a','#b8661a','40%','35%')+L('cou','#a6e27a','#3f9a3a','#1f6a28'),
 `${ombre(28)}
  <g fill="url(#cou)" ${k('#124a14',2.2)}><path d="M50 40 Q36 26 30 6 Q46 18 50 34 Z"/><path d="M50 40 Q66 26 72 6 Q56 18 50 34 Z"/><path d="M50 40 Q42 18 50 2 Q58 18 50 40 Z"/><path d="M50 42 Q28 34 18 22 Q38 26 50 38 Z"/><path d="M50 42 Q72 34 82 22 Q62 26 50 38 Z"/></g>
  <ellipse cx="50" cy="66" rx="25" ry="26" fill="url(#an)" ${k('#6e3a0a',3)}/>
  <g stroke="#a8601a" stroke-width="1.6" opacity=".8" fill="none"><path d="M30 50 L66 90 M28 64 L54 92 M36 42 L74 82 M48 40 L76 70"/><path d="M70 50 L34 90 M72 64 L46 92 M64 42 L26 82 M52 40 L24 70"/></g>
  <g fill="#fff3b8">${[[50,52],[40,62],[60,62],[50,72],[40,82],[60,82],[32,72],[68,72]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.4"/>`).join('')}</g>
  ${brille(38,54,5,9,20)}${etoile(84,40,3.8)}`);
ART['verger:5']=svg(L('osv','#f2c48a','#d0904e','#9a5f28')+R('pom','#ff9a7a','#e8392c','#9e1a14')+L('ban','#fff59a','#ffd23f','#d8a010',0,0,1,1)+R('rai','#c9a0ff','#8a4ad8','#4a1a8a','35%','30%'),
 `${ombre(38)}
  <path d="M26 50 Q50 10 74 50" fill="none" ${k('#5a3415',8)}/><path d="M26 50 Q50 10 74 50" fill="none" stroke="#d0904e" stroke-width="4" stroke-linecap="round"/>
  <path d="M20 52 Q30 22 62 30 Q54 40 30 54 Z" fill="url(#ban)" ${k('#8a6008',2.4)}/><path d="M60 30 l5 -3" ${k('#5a3a08',3)}/>
  <circle cx="40" cy="48" r="12" fill="url(#pom)" ${k('#6e120d',2.6)}/><path d="M40 37 q1 -5 4 -6" fill="none" stroke="#4a2a10" stroke-width="2"/>
  <g fill="url(#rai)" ${k('#2a0a5a',1.6)}>${[[60,40],[68,40],[56,48],[64,48],[72,48],[60,56],[68,56]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5"/>`).join('')}</g>
  <path d="M12 52 H88 L78 88 H22 Z" fill="url(#osv)" ${k('#5a3415',3)}/>
  <g stroke="#8a5424" stroke-width="2.2" fill="none" opacity=".9"><path d="M16 64 H84"/><path d="M19 76 H81"/><path d="M34 54 L36 87"/><path d="M50 54 V88"/><path d="M66 54 L64 87"/></g>
  <rect x="9" y="47" width="82" height="9" rx="4.5" fill="#e8b072" ${k('#5a3415',2.4)}/>
  ${brille(36,44,4,2,-30)}${brille(22,50,7,2,-5)}${etoile(88,22,3.8)}`);
ART['verger:6']=svg(L('cp','#e9f8ff','#bfe6f7','#8cc8e6',0,0,1,0)+R('s1','#ffd0e0','#ff7aa8','#d8407a')+R('s2','#fff7b0','#ffd84a','#e0a010')+R('s3','#d8ffc0','#8ee06a','#4caf3f'),
 `${ombre(26)}
  <path d="M40 74 L60 74 L58 84 L66 88 L34 88 L42 84 Z" fill="url(#cp)" ${k('#4a8ab0',2.4)}/>
  <path d="M18 52 Q50 52 82 52 Q76 76 50 76 Q24 76 18 52 Z" fill="url(#cp)" ${k('#4a8ab0',2.6)}/>
  <circle cx="34" cy="46" r="14" fill="url(#s2)" ${k('#8a6008',2.4)}/><circle cx="66" cy="46" r="14" fill="url(#s3)" ${k('#2b6a1f',2.4)}/><circle cx="50" cy="32" r="15" fill="url(#s1)" ${k('#8a1a4a',2.4)}/>
  <path d="M22 50 q6 4 12 0 q6 4 12 0 M54 50 q6 4 12 0 q6 4 12 0" fill="none" stroke="#fff" stroke-width="1.6" opacity=".7"/>
  <path d="M50 18 C56 8 66 8 70 12 C64 18 56 20 50 18 Z" fill="#4caf3f" ${k('#1d5717',1.8)}/><circle cx="44" cy="18" r="4" fill="#e0203a" ${k('#5a0614',1.6)}/>
  ${brille(44,26,4,2.4,-30)}${brille(26,62,6,2.4,-10)}${etoile(86,24,3.8)}`);
ART['verger:7']=svg(R('chou','#ffe2a6','#e8a24a','#a8621e','40%','30%')+L('car','#ffd27a','#e8901a','#a85a0a')+L('pl7','#ffffff','#eef3f8','#c9d4df'),
 `${ombre(40)}
  <ellipse cx="50" cy="86" rx="40" ry="7" fill="url(#pl7)" ${k('#7d8a99',2.4)}/>
  ${[[22,78],[36,80],[50,81],[64,80],[78,78],[29,66],[43,68],[57,68],[71,66],[36,54],[50,56],[64,54],[43,42],[57,42],[50,30]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="url(#chou)" ${k('#6e3a0a',2)}/><circle cx="${x-2.5}" cy="${y-3}" r="2" fill="#fff6dd" opacity=".8"/>`).join('')}
  <path d="M20 72 Q50 62 80 72 M26 60 Q50 50 74 60 M34 48 Q50 40 66 48" fill="none" ${k('#a85a0a',1.6)} opacity=".9"/>
  <path d="M22 74 Q40 58 60 66 Q74 52 78 72 M30 50 Q50 34 70 50" fill="none" stroke="#ffd27a" stroke-width="1.4"/>
  <path d="M50 22 L46 8 L50 12 L54 8 Z" fill="#ff7aa8" ${k('#8a1a4a',1.6)}/><circle cx="50" cy="20" r="3" fill="#e0203a" ${k('#5a0614',1.4)}/>
  ${etoile(16,30,4)}${etoile(86,36,3.4)}${etoile(80,14,2.6)}`);
ART['gen:verger']=svg(R('feu','#b8f08a','#5fb84a','#2a7a2a','40%','30%')+L('tr','#a8703a','#7a4a20','#4a2a10',0,0,1,0)+L('pot','#ff9a6a','#d8642a','#9a3a10')+R('pv','#ff9a8a','#e0203a','#8a0a1e'),
 `${ombre(30)}
  <path d="M46 70 L46 50 Q40 44 34 42 M54 70 L54 48 Q62 42 66 40" fill="none" ${k('#3a1e08',8)}/><path d="M46 70 L46 50 Q40 44 34 42 M54 70 L54 48 Q62 42 66 40" fill="none" stroke="url(#tr)" stroke-width="4.4" stroke-linecap="round"/>
  <path d="M50 8 C70 6 86 18 86 34 C92 46 80 58 66 54 C58 62 42 62 34 54 C18 58 8 46 14 34 C14 18 30 6 50 8 Z" fill="url(#feu)" ${k('#1d5717',3)}/>
  <path d="M26 22 Q34 14 44 16 M60 14 Q72 14 78 24" fill="none" stroke="#e4ffc0" stroke-width="2" opacity=".85"/>
  ${[[30,36],[50,28],[70,36],[40,48],[62,48],[56,16]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5.4" fill="url(#pv)" ${k('#5a0614',1.6)}/><circle cx="${x-1.6}" cy="${y-1.8}" r="1.3" fill="#fff" opacity=".85"/>`).join('')}
  <path d="M28 68 H72 L66 92 H34 Z" fill="url(#pot)" ${k('#5a1e04',3)}/><rect x="24" y="64" width="52" height="9" rx="3" fill="#ff8a4a" ${k('#5a1e04',2.4)}/>
  ${brille(30,24,7,3,-30)}${etoile(90,14,3.6)}`);

/* ================= FROMAGERIE (nouvelle gamme) ================= */
ART['fromage:1']=svg(L('vb','#ffffff','#eef6fb','#c8dbe8',0,0,1,0)+L('cap','#7ac0ff','#2b8fd0','#1a5f96'),
 `${ombre(22)}
  <path d="M40 10 H60 V24 Q74 34 74 50 V84 Q74 90 68 90 H32 Q26 90 26 84 V50 Q26 34 40 24 Z" fill="url(#vb)" ${k('#5a7a92',3)}/>
  <rect x="38" y="6" width="24" height="9" rx="3" fill="url(#cap)" ${k('#123f73',2.4)}/>
  <rect x="30" y="54" width="40" height="22" rx="4" fill="#2b8fd0" ${k('#123f73',2)}/>
  <path d="M36 66 q4 -6 8 0 q4 6 8 0 q4 -6 8 0" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="50" cy="60" r="2" fill="#fff"/>
  ${brille(34,40,4,14,0)}${etoile(80,24,3.8)}`);
ART['fromage:2']=svg(L('yp','#ffffff','#f2f6fa','#c8d4de',0,0,1,0)+L('yo','#ffe0ec','#ffb0cc','#e8709a')+L('cu2','#e9eef4','#b8c4d0','#7d8a99',0,0,1,0),
 `${ombre(28)}
  <path d="M22 40 L78 40 L72 88 H28 Z" fill="url(#yp)" ${k('#6a7a8a',3)}/>
  <path d="M25 58 L75 58 L73 72 L27 72 Z" fill="#ff7aa8"/><path d="M34 65 l4 -3 l4 3 l-4 3 Z M58 65 l4 -3 l4 3 l-4 3 Z" fill="#fff"/>
  <ellipse cx="50" cy="40" rx="28" ry="7" fill="url(#yo)" ${k('#8a2a4a',2.4)}/>
  <path d="M74 38 Q86 26 82 14 L90 18 Q92 32 78 42 Z" fill="#dfe6ee" ${k('#6a7a8a',2)}/>
  <path d="M46 42 L62 6" ${k('#4a5a6a',6)}/><path d="M46 42 L62 6" stroke="url(#cu2)" stroke-width="3" stroke-linecap="round"/><ellipse cx="44" cy="44" rx="6" ry="4" fill="#dfe6ee" ${k('#4a5a6a',1.8)} transform="rotate(-25 44 44)"/>
  ${brille(30,52,3,10,8)}${etoile(16,26,3.6)}`);
ART['fromage:3']=svg(L('fro2','#fff4a0','#ffd23f','#e0a010',0,0,1,1)+L('fc','#ffe066','#f2b82a','#c8880a',0,0,1,0),
 `${ombre(36)}
  <path d="M10 56 L80 26 L90 46 L90 80 L10 86 Z" fill="url(#fc)" ${k('#7a5208',3)}/>
  <path d="M10 56 L80 26 L90 46 L22 62 Z" fill="url(#fro2)" ${k('#7a5208',2.6)}/>
  <path d="M22 62 L90 46" fill="none" stroke="#7a5208" stroke-width="2.4"/>
  <g fill="#d89a1a" ${k('#9a6a08',1.4)}><circle cx="34" cy="74" r="5"/><circle cx="58" cy="66" r="3.6"/><circle cx="74" cy="76" r="4.4"/><circle cx="50" cy="80" r="2.4"/><ellipse cx="48" cy="48" rx="4" ry="2"/><ellipse cx="68" cy="40" rx="3" ry="1.5"/></g>
  ${brille(36,50,10,2.4,-22)}${etoile(84,14,3.8)}`);
ART['fromage:4']=svg(L('toa','#ffe2a6','#e9a24a','#b8661e',0,0,1,1)+L('fon','#fff4a0','#ffd23f','#e0a010')+AS,
 `${ombre(38)}${assiette(80,40,9)}
  <path d="M14 72 L50 34 L86 72 Z" fill="url(#toa)" ${k('#6e3a0a',3)}/>
  <path d="M18 68 L50 36 L82 68" fill="none" stroke="#f9d9a0" stroke-width="2"/>
  <path d="M12 64 L50 26 L88 64 L84 66 L80 74 L76 66 L60 66 L56 76 L52 66 L36 66 L32 74 L28 66 Z" fill="url(#fon)" ${k('#9a6a08',2.4)}/>
  <path d="M16 62 L50 28 L84 62" fill="none" stroke="#ff9aa8" stroke-width="4" opacity=".85"/>
  <path d="M16 58 L50 22 L84 58 L50 22 Z" fill="none" stroke="#6e3a0a" stroke-width="2.6"/>
  <path d="M18 56 L50 20 L82 56 Z" fill="url(#toa)" ${k('#6e3a0a',3)}/>
  <g fill="#8a4a14" opacity=".6"><path d="M40 40 l8 4 M50 34 l8 4 M38 48 l8 4 M54 44 l8 4" stroke="#8a4a14" stroke-width="2.2" stroke-linecap="round"/></g>
  ${brille(36,40,6,2.4,-45)}${etoile(88,20,3.8)}`);
ART['fromage:5']=svg(R('pdt','#ffe0a0','#d8a050','#8a5a20','40%','30%')+L('fon2','#fff6b0','#ffd23f','#e8a010')+AS,
 `${ombre(38)}${assiette(78,40,10)}
  <ellipse cx="34" cy="66" rx="16" ry="12" fill="url(#pdt)" ${k('#5a3410',2.6)}/><ellipse cx="64" cy="64" rx="18" ry="13" fill="url(#pdt)" ${k('#5a3410',2.6)}/>
  <g fill="#8a5a20" opacity=".6"><circle cx="28" cy="64" r="1.3"/><circle cx="40" cy="70" r="1.1"/><circle cx="70" cy="68" r="1.3"/></g>
  <path d="M46 54 Q60 44 80 54 Q82 62 76 62 Q74 72 70 64 Q66 66 64 76 Q60 66 56 64 Q52 70 50 62 Q44 62 46 54 Z" fill="url(#fon2)" ${k('#9a6a08',2.2)}/>
  <path d="M18 60 Q30 50 46 58 Q46 66 42 64 Q40 72 36 66 Q32 70 30 64 Q24 66 22 62 Z" fill="url(#fon2)" ${k('#9a6a08',2)}/>
  <path d="M50 30 q-5 -6 0 -12 M62 32 q-5 -6 0 -12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"/>
  <g fill="#7a3a6a"><ellipse cx="84" cy="74" rx="4" ry="2.4"/><ellipse cx="16" cy="76" rx="3.4" ry="2"/></g>
  ${brille(56,52,6,2,-10)}${etoile(86,22,3.8)}`);
ART['fromage:6']=svg(R('caq','#ff8a6a','#d8342a','#8a120e','40%','25%')+L('fon3','#fff6b0','#ffd23f','#e8a010')+L('pa2','#ffd99a','#e5a14a','#a8621e'),
 `${ombre(36)}
  <path d="M22 84 L18 92 M78 84 L82 92" ${k('#2c2c38',4)}/>
  <path d="M14 46 H86 Q86 86 50 88 Q14 86 14 46 Z" fill="url(#caq)" ${k('#5a0a06',3)}/>
  <path d="M86 52 Q96 52 96 60" fill="none" ${k('#5a0a06',5)}/>
  <ellipse cx="50" cy="46" rx="36" ry="9" fill="url(#fon3)" ${k('#9a6a08',2.4)}/>
  <path d="M30 46 q6 -4 12 0 M54 44 q6 -3 12 1" fill="none" stroke="#fffbd8" stroke-width="2"/>
  <g fill="#fff" opacity=".85"><circle cx="30" cy="66" r="3"/><circle cx="50" cy="72" r="3"/><circle cx="70" cy="66" r="3"/></g>
  <path d="M60 44 L80 6" ${k('#3a3a48',4)}/><path d="M60 44 L80 6" stroke="#c8d0d8" stroke-width="1.8" stroke-linecap="round"/>
  <rect x="68" y="12" width="13" height="12" rx="3" fill="url(#pa2)" ${k('#6e3a0a',2)} transform="rotate(28 74 18)"/>
  <path d="M68 28 Q66 36 70 38 Q72 32 70 28 Z" fill="#ffd23f" ${k('#9a6a08',1.2)}/>
  ${brille(22,58,3,10,10)}${etoile(14,24,3.8)}`);
ART['fromage:7']=svg(L('bois','#e8b072','#c4844a','#8a5424')+L('fr7','#fff4a0','#ffd23f','#e0a010',0,0,1,1)+R('cam','#ffffff','#f6f0e0','#d8cfb8')+R('ra7','#c9ffa0','#7ccf4f','#3d9a35')+L('bl','#e8f0f8','#c8d8e8','#98a8c0'),
 `${ombre(42)}
  <rect x="6" y="54" width="88" height="30" rx="10" fill="url(#bois)" ${k('#5a3415',3)}/>
  <path d="M12 64 H88 M14 74 H86" stroke="#a8703a" stroke-width="1.4" opacity=".7"/><circle cx="86" cy="62" r="3" fill="#5a3415"/>
  <path d="M12 62 L44 46 L50 56 L50 70 L12 72 Z" fill="url(#fr7)" ${k('#7a5208',2.4)}/><g fill="#d89a1a"><circle cx="24" cy="66" r="2.4"/><circle cx="38" cy="62" r="2"/></g>
  <ellipse cx="66" cy="58" rx="20" ry="9" fill="url(#cam)" ${k('#8a7a5a',2.4)}/><path d="M46 58 V66 Q66 76 86 66 V58" fill="#efe6d0" ${k('#8a7a5a',2.4)}/><path d="M66 58 L86 54 L84 62 Z" fill="#fff6c0" ${k('#c8a030',1.4)}/>
  <path d="M40 44 L60 40 L58 52 L42 54 Z" fill="url(#bl)" ${k('#4a5a7a',2)}/><g fill="#3a5a9a" opacity=".7"><circle cx="46" cy="46" r="1.4"/><circle cx="54" cy="47" r="1.2"/><circle cx="50" cy="50" r="1"/></g>
  <g fill="url(#ra7)" ${k('#1d5717',1.4)}>${[[22,44],[30,44],[26,38],[18,38],[34,38],[26,50]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4.4"/>`).join('')}</g>
  <path d="M26 34 q2 -6 6 -8" fill="none" stroke="#4a2a10" stroke-width="2"/>
  ${brille(24,58,8,2,-20)}${etoile(86,24,4)}${etoile(10,24,3)}`);
ART['gen:fromage']=svg(L('bid','#f2f6fa','#b8c4d0','#7d8a99',0,0,1,0)+L('bid2','#dfe6ee','#a0acb8','#6a7480',0,0,1,0),
 `${ombre(30)}
  <path d="M30 34 L36 24 H64 L70 34 Z" fill="url(#bid2)" ${k('#3a424c',2.6)}/>
  <rect x="38" y="10" width="24" height="14" rx="5" fill="url(#bid2)" ${k('#3a424c',2.6)}/><rect x="44" y="5" width="12" height="7" rx="3" fill="#8a96a2" ${k('#3a424c',2)}/>
  <path d="M28 34 H72 Q76 34 76 40 V84 Q76 90 70 90 H30 Q24 90 24 84 V40 Q24 34 28 34 Z" fill="url(#bid)" ${k('#3a424c',3)}/>
  <path d="M24 46 H76 M24 78 H76" stroke="#6a7480" stroke-width="2.4"/>
  <path d="M24 50 Q12 50 12 60 Q12 68 24 68 M76 50 Q88 50 88 60 Q88 68 76 68" fill="none" ${k('#3a424c',4)}/>
  <rect x="36" y="54" width="28" height="18" rx="4" fill="#fff" ${k('#2b8fd0',2)}/><path d="M42 66 q4 -6 8 0 q4 6 8 0" fill="none" stroke="#2b8fd0" stroke-width="2"/>
  ${brille(32,58,3,14,0)}${etoile(86,22,4)}`);

/* ================= CUISINE D'ASIE (nouvelle gamme) ================= */
ART['asie:1']=svg(L('bla','#e8f5ff','#5fb0ee','#1f6fc0')+R('riz2','#ffffff','#f6f6f0','#d8d8cc','45%','30%'),
 `${ombre(34)}
  <path d="M54 30 L92 10 M58 34 L94 18" ${k('#5a3415',4.4)}/><path d="M54 30 L92 10 M58 34 L94 18" stroke="#d8a060" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 52 Q20 26 50 24 Q80 26 82 52 Z" fill="url(#riz2)" ${k('#9a9a8a',2.6)}/>
  <g fill="#fff" stroke="#c8c8b8" stroke-width=".7">${[[32,44],[40,36],[50,32],[60,36],[68,44],[44,46],[56,46],[36,50],[64,50],[50,40]].map(([x,y],i)=>`<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.4" transform="rotate(${i*36} ${x} ${y})"/>`).join('')}</g>
  <path d="M12 52 H88 Q86 86 50 88 Q14 86 12 52 Z" fill="url(#bla)" ${k('#123f73',3)}/>
  <path d="M20 64 Q30 58 40 64 Q50 70 60 64 Q70 58 80 64" fill="none" stroke="#fff" stroke-width="2.4" opacity=".85"/>
  ${brille(22,70,6,3,-15)}${etoile(16,26,3.8)}`);
ART['asie:2']=svg(R('oni','#ffffff','#f6f6f0','#d0d0c4','45%','30%')+L('nori','#3a4a3a','#1e2a1e','#0c140c'),
 `${ombre(32)}
  <path d="M50 12 Q58 12 70 34 L86 64 Q92 82 74 86 H26 Q8 82 14 64 L30 34 Q42 12 50 12 Z" fill="url(#oni)" ${k('#8a8a7a',3)}/>
  <rect x="34" y="62" width="32" height="26" rx="3" fill="url(#nori)" ${k('#000',2)}/><path d="M38 66 H62 M38 72 H62" stroke="#4a6a4a" stroke-width="1" opacity=".7"/>
  <g fill="#2a2a2a"><ellipse cx="40" cy="48" rx="2.6" ry="3.4"/><ellipse cx="60" cy="48" rx="2.6" ry="3.4"/></g><g fill="#fff"><circle cx="41" cy="47" r="1"/><circle cx="61" cy="47" r="1"/></g>
  <path d="M46 54 Q50 58 54 54" fill="none" stroke="#2a2a2a" stroke-width="2" stroke-linecap="round"/>
  <g fill="#ff8aa8" opacity=".6"><ellipse cx="33" cy="55" rx="4" ry="2.4"/><ellipse cx="67" cy="55" rx="4" ry="2.4"/></g>
  <g fill="#e8e8dc">${[[44,26],[56,30],[28,58],[72,60],[50,36]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="2" ry="1.1"/>`).join('')}</g>
  ${brille(38,26,5,2.4,-50)}${etoile(84,24,3.8)}`);
ART['asie:3']=svg(R('pou','#ffc070','#d0702a','#7a3a0e','40%','30%')+L('bro','#f2d6a0','#c8a060','#8a6a2a',0,0,1,0),
 `${ombre(34)}
  <path d="M14 90 L86 14" ${k('#5a4010',5)}/><path d="M14 90 L86 14" stroke="url(#bro)" stroke-width="2.6" stroke-linecap="round"/>
  ${[[30,72],[50,52],[70,32]].map(([x,y])=>`<rect x="${x-11}" y="${y-10}" width="22" height="20" rx="7" fill="url(#pou)" ${k('#4a1e04',2.6)} transform="rotate(-45 ${x} ${y})"/><path d="M${x-6} ${y-2} q6 -5 10 -1" fill="none" stroke="#ffe0a0" stroke-width="1.6"/>`).join('')}
  ${[[40,62],[60,42]].map(([x,y])=>`<rect x="${x-4}" y="${y-7}" width="8" height="14" rx="3" fill="#8ee06a" ${k('#2b6a1f',2)} transform="rotate(-45 ${x} ${y})"/><path d="M${x-2} ${y+2} l4 -4" stroke="#e4ffc0" stroke-width="1.4"/>`).join('')}
  <g fill="#fff"><circle cx="32" cy="70" r="1"/><circle cx="52" cy="50" r="1"/><circle cx="72" cy="30" r="1"/></g><g fill="#2a2a2a" opacity=".6"><circle cx="28" cy="76" r=".9"/><circle cx="54" cy="54" r=".9"/><circle cx="68" cy="36" r=".9"/></g>
  ${brille(26,66,5,2,-45)}${etoile(20,30,3.8)}`);
ART['asie:4']=svg(R('ra4','#ffffff','#f6efe0','#d8c8a8','45%','30%')+AS,
 `${ombre(38)}${assiette(76,40,11)}
  ${[[30,62,-10],[70,62,10],[50,52,0]].map(([x,y,r])=>`<g transform="rotate(${r} ${x} ${y})"><path d="M${x-18} ${y+8} Q${x-18} ${y-16} ${x} ${y-16} Q${x+18} ${y-16} ${x+18} ${y+8} Q${x} ${y+14} ${x-18} ${y+8} Z" fill="url(#ra4)" ${k('#8a7a5a',2.6)}/><path d="M${x-12} ${y-10} q4 6 0 12 M${x-4} ${y-14} q3 6 0 14 M${x+4} ${y-14} q-3 6 0 14 M${x+12} ${y-10} q-4 6 0 12" fill="none" stroke="#c8b898" stroke-width="1.6"/><path d="M${x-14} ${y-6} Q${x} ${y-20} ${x+14} ${y-6}" fill="none" stroke="#8a7a5a" stroke-width="2"/></g>`).join('')}
  <g fill="#4caf3f"><circle cx="50" cy="38" r="2.4"/><circle cx="30" cy="48" r="2"/><circle cx="70" cy="48" r="2"/></g>
  <ellipse cx="84" cy="78" rx="6" ry="3" fill="#5a2a0a" ${k('#2a1004',1.4)}/>
  ${brille(42,44,5,2,-20)}${etoile(14,26,3.8)}`);
ART['asie:5']=svg(L('bra','#ff8a6a','#d8342a','#8a120e')+R('bou','#ffe0a0','#e8a24a','#b8661e','50%','30%')+R('oeu','#fff8a0','#ffb627','#e07a0a','50%','50%'),
 `${ombre(38)}
  <path d="M40 40 L84 4 M46 42 L90 10" ${k('#3a1e08',4.4)}/><path d="M40 40 L84 4 M46 42 L90 10" stroke="#e8b072" stroke-width="2" stroke-linecap="round"/>
  <path d="M10 46 H90 Q88 88 50 90 Q12 88 10 46 Z" fill="url(#bra)" ${k('#5a0a06',3)}/>
  <path d="M18 62 Q24 56 30 62 T42 62 T54 62 T66 62 T78 62" fill="none" stroke="#fff" stroke-width="2.2" opacity=".8"/>
  <ellipse cx="50" cy="46" rx="40" ry="10" fill="url(#bou)" ${k('#7a3e0c',2.6)}/>
  <path d="M20 46 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0 q6 -6 10 -2" fill="none" stroke="#fff2b8" stroke-width="2.4"/>
  <rect x="62" y="30" width="14" height="18" rx="1.6" fill="#1e2a1e" ${k('#000',1.6)} transform="rotate(12 69 39)"/>
  <ellipse cx="32" cy="44" rx="9" ry="6" fill="#fff" ${k('#c8b898',1.6)}/><circle cx="32" cy="44" r="4" fill="url(#oeu)"/>
  <circle cx="52" cy="48" r="5.4" fill="#fff" ${k('#e0b0c0',1.4)}/><path d="M49 48 q3 -3 6 0 q-3 3 -6 0" fill="none" stroke="#ff6a9a" stroke-width="1.4"/>
  <g fill="#6cc04a"><circle cx="44" cy="42" r="1.6"/><circle cx="58" cy="44" r="1.4"/><circle cx="40" cy="50" r="1.4"/></g>
  ${brille(18,62,3,9,10)}${etoile(14,26,3.8)}`);
ART['asie:6']=svg(L('box','#2c2c38','#15151c','#000000')+L('rbx','#ff6a5a','#d8202a','#8a0a10'),
 `${ombre(42)}
  <rect x="8" y="26" width="84" height="62" rx="8" fill="url(#rbx)" ${k('#4a0608',3)}/>
  <rect x="14" y="32" width="72" height="50" rx="4" fill="#1e1e26" ${k('#000',1.6)}/>
  <path d="M50 32 V82 M50 57 H86" stroke="#d8202a" stroke-width="3"/>
  <rect x="16" y="34" width="32" height="46" rx="3" fill="#fbfbf4"/><g fill="#e8e8dc">${[[22,42],[30,50],[38,40],[26,62],[40,66],[34,74],[22,72]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="2.2" ry="1.2"/>`).join('')}</g><circle cx="32" cy="56" r="4.4" fill="#e0203a" ${k('#5a0614',1.2)}/>
  <rect x="53" y="35" width="30" height="20" rx="3" fill="#ff9a6a"/><path d="M56 40 L80 40 M56 46 L80 46 M56 52 L80 52" stroke="#fff" stroke-width="1.6" opacity=".8"/>
  ${[[60,66],[70,72],[62,76]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#4caf3f" ${k('#1d5717',1.4)}/>`).join('')}<rect x="72" y="60" width="11" height="9" rx="2" fill="#ffe27a" ${k('#c8901a',1.2)}/>
  ${brille(18,32,8,2,-5)}${etoile(90,18,4)}`);
ART['asie:7']=svg(L('bam','#f2d6a0','#d8b070','#9a7a3a',0,0,1,0)+L('bam2','#e8c888','#c8a060','#8a6a2a',0,0,1,0)+R('ra5','#ffffff','#f6efe0','#d8c8a8','45%','30%')+R('ra6','#ffe0ec','#ffb0cc','#e07aa0','45%','30%'),
 `${ombre(42)}
  <g opacity=".85"><path d="M30 26 q-6 -7 0 -13 q6 -6 0 -12" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><path d="M70 26 q-6 -7 0 -13 q6 -6 0 -12" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>
  <path d="M10 66 H90 V82 Q50 92 10 82 Z" fill="url(#bam)" ${k('#5a4010',3)}/><path d="M10 72 Q50 80 90 72" fill="none" stroke="#9a7a3a" stroke-width="1.8"/>
  <ellipse cx="50" cy="66" rx="40" ry="9" fill="url(#bam2)" ${k('#5a4010',2.6)}/>
  <path d="M8 48 H92 V60 Q50 70 8 60 Z" fill="url(#bam)" ${k('#5a4010',3)}/>
  <ellipse cx="50" cy="48" rx="42" ry="10" fill="#6a5020" ${k('#5a4010',2.4)}/>
  ${[[28,44,'ra5'],[50,40,'ra6'],[72,44,'ra5'],[39,50,'ra6'],[61,50,'ra5']].map(([x,y,g])=>`<path d="M${x-9} ${y+4} Q${x-9} ${y-10} ${x} ${y-10} Q${x+9} ${y-10} ${x+9} ${y+4} Z" fill="url(#${g})" ${k('#8a7a5a',2)}/><path d="M${x-4} ${y-8} q${4} 4 ${8} 0" fill="none" stroke="#c8b898" stroke-width="1.4"/><circle cx="${x}" cy="${y-10}" r="1.6" fill="${g==='ra6'?'#e0203a':'#4caf3f'}"/>`).join('')}
  <path d="M62 24 Q82 18 94 30 L90 36 Q78 26 64 30 Z" fill="url(#bam2)" ${k('#5a4010',2.2)}/>
  ${brille(18,54,6,2,-5)}${etoile(10,30,3.6)}${etoile(90,52,3)}`);
ART['gen:asie']=svg(L('cui','#ffffff','#eef2f6','#b8c4d0',0,0,1,0)+L('cuc','#ff8a9a','#e0405a','#a01a30'),
 `${ombre(34)}
  <path d="M16 46 H84 V80 Q84 90 74 90 H26 Q16 90 16 80 Z" fill="url(#cui)" ${k('#5a6a7a',3)}/>
  <path d="M14 46 Q14 22 50 22 Q86 22 86 46 Z" fill="url(#cuc)" ${k('#5a0a1a',3)}/>
  <rect x="40" y="14" width="20" height="9" rx="4" fill="#5a6a7a" ${k('#2a3440',2)}/>
  <rect x="10" y="44" width="80" height="7" rx="3.5" fill="#dfe6ee" ${k('#5a6a7a',2.2)}/>
  <rect x="34" y="60" width="32" height="18" rx="5" fill="#2c2c38" ${k('#0c0c10',2)}/><circle cx="42" cy="69" r="3" fill="#7bd389"/><path d="M50 66 H60 M50 72 H58" stroke="#8adaff" stroke-width="2"/>
  <path d="M40 12 q-4 -5 0 -10 M60 12 q-4 -5 0 -10" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".9"/>
  ${brille(28,32,8,3,-25)}${brille(22,64,3,10,0)}${etoile(90,20,4)}`);

/* ================= Trésor du chef (2 plats niveau max fusionnés) ================= */
ART['tresor']=svg(L('cof','#c87a4a','#8a4a22','#5a2a0e',0,0,0,1)+L('orc','#fff3a0','#ffc93a','#d8900a')+R('hal','#fff7c0','#ffd84a','#ffb627','50%','50%','50%'),
 `<circle cx="50" cy="50" r="46" fill="url(#hal)" opacity=".45"/>
  ${[0,45,90,135,180,225,270,315].map(a=>`<path d="M50 50 L${50+48*Math.cos((a-8)*Math.PI/180)} ${50+48*Math.sin((a-8)*Math.PI/180)} L${50+48*Math.cos((a+8)*Math.PI/180)} ${50+48*Math.sin((a+8)*Math.PI/180)} Z" fill="#fff6c0" opacity=".45"/>`).join('')}
  ${ombre(32)}
  <path d="M18 56 H82 V84 Q82 88 78 88 H22 Q18 88 18 84 Z" fill="url(#cof)" ${k('#3a1806',3)}/>
  <path d="M16 56 Q16 30 50 30 Q84 30 84 56 Z" fill="url(#cof)" ${k('#3a1806',3)}/>
  <path d="M28 33 V88 M72 33 V88" stroke="url(#orc)" stroke-width="6"/><path d="M28 33 V88 M72 33 V88" stroke="#8a5a08" stroke-width="1" opacity=".6"/>
  <rect x="14" y="52" width="72" height="8" rx="2" fill="url(#orc)" ${k('#8a5a08',2)}/>
  <rect x="42" y="54" width="16" height="16" rx="3" fill="url(#orc)" ${k('#8a5a08',2)}/><circle cx="50" cy="61" r="2.4" fill="#5a2a0e"/><path d="M50 62 V66" stroke="#5a2a0e" stroke-width="2"/>
  <path d="M50 8 L54 18 L65 18 L56 24 L60 35 L50 28 L40 35 L44 24 L35 18 L46 18 Z" fill="url(#orc)" ${k('#a8700a',2)}/>
  ${brille(30,40,8,2.6,-20)}${etoile(14,22,4)}${etoile(86,26,4)}${etoile(80,80,3)}`);

/* ================= CLIENTS : portraits (même ordre que CLIENTS dans le jeu) ================= */
const perso=o=>{const P=o.peau,H=o.cheveux||'#5a3415',E=o.enfant;
  const hr=E?24:22,hy=E?46:44;
  const defs=R('pp',o.peauC||'#fff',P,o.peauF||P,'40%','30%','80%')+L('hb',o.habitC||'#fff',o.habit,o.habitF||o.habit)+R('hh',o.cheveuxC||H,H,o.cheveuxF||H,'35%','25%','85%');
  const kc=o.contour||'#4a2a14';
  let derriere='',devant='',acc='';
  switch(o.style){
    case'long':derriere=`<path d="M25 46 Q22 16 50 17 Q78 16 75 46 L80 82 Q64 88 50 86 Q36 88 20 82 Z" fill="url(#hh)" ${k(kc,2.6)}/>`;devant=`<path d="M28 42 Q28 19 50 19 Q72 19 72 42 Q66 30 56 29 Q50 34 40 29 Q32 32 28 42 Z" fill="url(#hh)" ${k(kc,2.4)}/>`;break;
    case'carre':derriere=`<path d="M24 46 Q22 16 50 17 Q78 16 76 46 L77 64 Q66 68 60 62 L40 62 Q34 68 23 64 Z" fill="url(#hh)" ${k(kc,2.6)}/>`;devant=`<path d="M27 44 Q27 19 50 19 Q73 19 73 44 Q72 30 50 30 Q30 30 27 44 Z" fill="url(#hh)" ${k(kc,2.4)}/>`;break;
    case'chignon':derriere=`<circle cx="50" cy="17" r="10" fill="url(#hh)" ${k(kc,2.4)}/>`;devant=`<path d="M28 42 Q27 21 50 21 Q73 21 72 42 Q68 28 50 28 Q32 28 28 42 Z" fill="url(#hh)" ${k(kc,2.4)}/><path d="M42 16 Q50 12 58 16" fill="none" stroke="#fff" stroke-width="1.4" opacity=".6"/>`;break;
    case'queue':derriere=`<path d="M70 30 Q90 34 86 62 Q84 72 78 76 Q80 58 70 44 Z" fill="url(#hh)" ${k(kc,2.4)}/><circle cx="72" cy="30" r="4" fill="#ff5d9e" ${k('#8a1a4a',1.4)}/>`;devant=`<path d="M27 44 Q26 19 50 19 Q74 19 73 44 Q68 28 52 28 Q40 30 27 44 Z" fill="url(#hh)" ${k(kc,2.4)}/>`;break;
    case'boucle':devant=[[30,34],[36,24],[46,19],[56,19],[66,24],[71,34],[28,44],[72,44]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="url(#hh)" ${k(kc,2)}/>`).join('');break;
    case'herisse':devant=`<path d="M27 44 L24 26 L33 30 L34 14 L43 24 L50 10 L56 24 L66 14 L67 30 L77 26 L73 44 Q68 30 50 31 Q32 30 27 44 Z" fill="url(#hh)" ${k(kc,2.4)}/>`;break;
    case'chauve':devant=`<path d="M27 50 Q24 36 32 30 Q30 42 33 50 Z M73 50 Q76 36 68 30 Q70 42 67 50 Z" fill="url(#hh)" ${k(kc,2)}/>`;break;
    case'aucun':break;
    default:devant=`<path d="M27 44 Q26 19 50 19 Q74 19 73 44 Q70 31 60 30 Q52 35 42 30 Q32 32 27 44 Z" fill="url(#hh)" ${k(kc,2.4)}/>`;}
  const yy=hy+2,ex=E?10:9;
  const yeux=`<g fill="#2a1a12"><ellipse cx="${50-ex}" cy="${yy}" rx="${E?3.2:2.7}" ry="${E?4:3.4}"/><ellipse cx="${50+ex}" cy="${yy}" rx="${E?3.2:2.7}" ry="${E?4:3.4}"/></g><g fill="#fff"><circle cx="${50-ex+1}" cy="${yy-1.4}" r="1.1"/><circle cx="${50+ex+1}" cy="${yy-1.4}" r="1.1"/></g>`;
  const sourcils=`<path d="M${50-ex-4} ${yy-7} q4 -2.4 8 0 M${50+ex-4} ${yy-7} q4 -2.4 8 0" fill="none" stroke="${o.sourcils||H}" stroke-width="2" stroke-linecap="round"/>`;
  const joues=`<g fill="#ff7a8a" opacity=".38"><ellipse cx="${50-ex-5}" cy="${yy+7}" rx="4.4" ry="2.6"/><ellipse cx="${50+ex+5}" cy="${yy+7}" rx="4.4" ry="2.6"/></g>`;
  const bouche=o.bouche==='o'?`<ellipse cx="50" cy="${yy+11}" rx="3" ry="3.6" fill="#8a2a2a"/>`:`<path d="M44 ${yy+9} Q50 ${yy+15.5} 56 ${yy+9} Z" fill="#8a2a2a" ${k('#5a1a14',1.4)}/><path d="M46.5 ${yy+11.6} Q50 ${yy+13.6} 53.5 ${yy+11.6}" fill="none" stroke="#ff8a9a" stroke-width="1.6"/>`;
  (o.acc||[]).forEach(a=>{switch(a){
    case'lunettes':acc+=`<g fill="#fff" fill-opacity=".25" ${k('#3a2a5a',2)}><circle cx="${50-ex}" cy="${yy}" r="6.4"/><circle cx="${50+ex}" cy="${yy}" r="6.4"/></g><path d="M${50-ex+6.4} ${yy} h${2*ex-12.8}" ${k('#3a2a5a',2)}/>`;break;
    case'barbe':acc+=`<path d="M29 50 Q30 74 50 76 Q70 74 71 50 Q66 62 58 60 Q50 66 42 60 Q34 62 29 50 Z" fill="url(#hh)" ${k(kc,2.2)}/>`;break;
    case'moustache':acc+=`<path d="M40 ${yy+8} Q46 ${yy+4} 50 ${yy+7} Q54 ${yy+4} 60 ${yy+8} Q56 ${yy+11} 50 ${yy+9} Q44 ${yy+11} 40 ${yy+8} Z" fill="${o.moustache||H}" ${k(kc,1.4)}/>`;break;
    case'rides':acc+=`<path d="M${50-ex-8} ${yy-1} l-3 -1 M${50+ex+8} ${yy-1} l3 -1 M44 ${yy-12} h12" stroke="#b07a5a" stroke-width="1.3" stroke-linecap="round" opacity=".7"/>`;break;
    case'police':acc+=`<path d="M24 30 Q26 12 50 12 Q74 12 76 30 Z" fill="#1f3a6e" ${k('#0c1a3a',2.4)}/><path d="M20 30 H80 Q78 36 50 36 Q22 36 20 30 Z" fill="#14264a" ${k('#0c1a3a',2.2)}/><path d="M50 16 l3 5 h5 l-4 3 l2 5 l-6 -3 l-6 3 l2 -5 l-4 -3 h5 Z" fill="#ffd23f" ${k('#8a6008',1)}/>`;break;
    case'capitaine':acc+=`<path d="M22 28 Q24 10 50 10 Q76 10 78 28 Z" fill="#fff" ${k('#3a4a5a',2.4)}/><path d="M22 28 H78 V33 H22 Z" fill="#1f3a6e" ${k('#0c1a3a',2)}/><path d="M24 33 Q50 42 76 33 Q66 38 50 38 Q34 38 24 33 Z" fill="#14264a"/><path d="M44 18 Q50 12 56 18 Q50 24 44 18 Z" fill="#ffd23f" ${k('#8a6008',1.2)}/>`;break;
    case'toque':acc+=`<path d="M30 30 V20 Q22 18 24 10 Q26 2 36 6 Q40 -2 50 2 Q60 -2 64 6 Q74 2 76 10 Q78 18 70 20 V30 Z" fill="#fff" ${k('#8a96a2',2.4)}/><path d="M30 25 H70" stroke="#c8d0d8" stroke-width="2"/>`;break;
    case'couronne':acc+=`<path d="M32 26 L30 10 L40 18 L50 6 L60 18 L70 10 L68 26 Z" fill="#ffd23f" ${k('#a8700a',2.2)}/><g fill="#ff4d7a"><circle cx="50" cy="18" r="2.6"/><circle cx="38" cy="21" r="1.8"/><circle cx="62" cy="21" r="1.8"/></g><circle cx="50" cy="6" r="2.2" fill="#7ac0ff"/>`;break;
    case'beret':acc+=`<path d="M24 30 Q22 14 46 12 Q72 10 78 24 Q76 32 50 30 Q34 32 24 30 Z" fill="#e0303a" ${k('#6a0a10',2.4)}/><path d="M48 12 l2 -6" ${k('#6a0a10',2.4)}/>`;break;
    case'casque':acc+=`<path d="M24 46 Q24 14 50 14 Q76 14 76 46" fill="none" ${k('#1a1a24',5)}/><rect x="18" y="40" width="11" height="16" rx="5" fill="#ff4d7a" ${k('#5a0a24',2)}/><rect x="71" y="40" width="11" height="16" rx="5" fill="#ff4d7a" ${k('#5a0a24',2)}/>`;break;
    case'casquette':acc+=`<path d="M26 30 Q28 13 50 13 Q72 13 74 30 Z" fill="${o.casquette||'#2b8fd0'}" ${k('#123f73',2.4)}/><path d="M24 30 Q50 26 84 32 Q82 37 70 36 Q50 32 26 34 Z" fill="${o.casquette||'#2b8fd0'}" ${k('#123f73',2)}/><circle cx="50" cy="14" r="2" fill="#123f73"/>`;break;
    case'gavroche':acc+=`<path d="M24 32 Q24 14 50 14 Q76 14 76 32 Q60 28 50 30 Q36 28 24 32 Z" fill="#7a6a5a" ${k('#3a2a1a',2.4)}/><path d="M26 32 Q50 40 74 32" fill="none" ${k('#3a2a1a',2.4)}/>`;break;
    case'noeud':acc+=`<path d="M50 74 L42 70 L42 80 Z M50 74 L58 70 L58 80 Z" fill="#e0303a" ${k('#6a0a10',1.6)}/><circle cx="50" cy="75" r="2.4" fill="#ff5d6a"/>`;break;
    case'rayures':acc+=`<path d="M18 84 Q50 80 82 84 M16 92 Q50 88 84 92" stroke="#fff" stroke-width="3.4" fill="none" opacity=".9"/>`;break;
    case'salopette':acc+=`<path d="M34 78 L36 100 M66 78 L64 100" ${k('#123f73',5)}/><rect x="38" y="84" width="24" height="16" rx="3" fill="#2b6fc0" ${k('#123f73',2)}/><circle cx="36" cy="82" r="2" fill="#ffd23f"/><circle cx="64" cy="82" r="2" fill="#ffd23f"/>`;break;
    case'galons':acc+=`<path d="M20 86 l10 -3 M70 83 l10 3" ${k('#ffd23f',3)}/><circle cx="50" cy="86" r="2" fill="#ffd23f"/><circle cx="50" cy="94" r="2" fill="#ffd23f"/>`;break;
    case'veste_chef':acc+=`<g fill="#c8d0d8"><circle cx="44" cy="84" r="2"/><circle cx="56" cy="84" r="2"/><circle cx="44" cy="93" r="2"/><circle cx="56" cy="93" r="2"/></g>`;break;
    case'collier':acc+=`<path d="M38 74 Q50 84 62 74" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="0.1 4" stroke-linecap="round"/>`;break;
  }});
  return svg(defs,`<circle cx="50" cy="52" r="47" fill="${o.fond||'#ffe9c8'}"/>
  ${derriere}
  <path d="M12 104 Q12 74 50 72 Q88 74 88 104 Z" fill="url(#hb)" ${k('#2a1a10',2.6)}/>
  <path d="M42 64 H58 V76 Q50 80 42 76 Z" fill="url(#pp)" ${k(kc,2)}/>
  <circle cx="${50-hr}" cy="${hy+3}" r="5.4" fill="url(#pp)" ${k(kc,2.2)}/><circle cx="${50+hr}" cy="${hy+3}" r="5.4" fill="url(#pp)" ${k(kc,2.2)}/>
  <circle cx="50" cy="${hy}" r="${hr}" fill="url(#pp)" ${k(kc,2.6)}/>
  ${devant}${sourcils}${yeux}${joues}${bouche}${acc}
  ${brille(38,hy-12,6,2.4,-30)}`)};
const CLIENTS_ART=[
  {peau:'#f5c7a0',peauC:'#fff0e0',cheveux:'#e8e4e0',cheveuxC:'#ffffff',cheveuxF:'#b8b0a8',style:'chignon',habit:'#ff8ab0',habitF:'#d84a7a',acc:['lunettes','rides','collier'],fond:'#ffe0ec',sourcils:'#b8b0a8'},
  {peau:'#e0a878',peauC:'#ffe0c0',cheveux:'#5a3415',style:'court',habit:'#4caf50',habitF:'#2b7a22',acc:['barbe'],fond:'#dff5d8'},
  {peau:'#ffd6b8',peauC:'#fff4ea',cheveux:'#e0562a',cheveuxC:'#ff9a5a',cheveuxF:'#a8300e',style:'long',habit:'#3a9ad6',habitF:'#1f6fa8',fond:'#dff0ff'},
  {peau:'#f0bc94',peauC:'#ffe8d4',cheveux:'#e8e4e0',cheveuxC:'#ffffff',cheveuxF:'#b0a8a0',style:'chauve',habit:'#a0703a',habitF:'#6a4418',acc:['moustache','rides','noeud'],moustache:'#e8e4e0',fond:'#f5e6d0',sourcils:'#c8c0b8'},
  {peau:'#ffd6b8',peauC:'#fff4ea',cheveux:'#9a4ad8',cheveuxC:'#d0a0ff',cheveuxF:'#5a1a9a',style:'herisse',habit:'#2c2c38',habitC:'#5a5a6a',acc:['casque'],fond:'#efe0ff'},
  {peau:'#c88a5a',peauC:'#f0c49a',cheveux:'#2a1a10',style:'court',habit:'#1f3a6e',habitC:'#4a6aa0',acc:['police','galons'],fond:'#dfe8ff'},
  {peau:'#f0c49a',peauC:'#fff0e0',cheveux:'#8a8a8a',cheveuxC:'#d0d0d0',style:'court',habit:'#1f3a6e',habitC:'#4a6aa0',acc:['barbe','capitaine','galons'],fond:'#d8f0ff'},
  {peau:'#a8704a',peauC:'#d8a078',cheveux:'#1a1010',style:'carre',habit:'#ffffff',habitF:'#c8d0d8',acc:['toque','veste_chef'],fond:'#fff0d0'},
  {peau:'#ffd6b8',peauC:'#fff4ea',cheveux:'#7a4a20',style:'court',habit:'#ffd23f',habitF:'#e0a010',enfant:true,bouche:'o',fond:'#fff6c8'},
  {peau:'#ffe0c8',peauC:'#fff8f0',cheveux:'#ffd060',cheveuxC:'#fff0a8',cheveuxF:'#d8a020',style:'queue',habit:'#ff7aa8',habitF:'#d8407a',fond:'#ffe0ec',sourcils:'#c89020'},
  {peau:'#8a5a3a',peauC:'#b8865e',cheveux:'#1a1010',cheveuxC:'#3a2a20',style:'boucle',habit:'#ff9a2a',habitF:'#d86a0a',fond:'#ffe8cc'},
  {peau:'#f0bc94',peauC:'#ffe8d4',cheveux:'#f0f0f0',cheveuxC:'#ffffff',cheveuxF:'#c0c0c0',style:'chauve',habit:'#d8342a',habitF:'#8a120e',acc:['barbe','gavroche','lunettes'],fond:'#ffe0d8',sourcils:'#c0c0c0'},
  {peau:'#ffd6b8',peauC:'#fff4ea',cheveux:'#6a3a1a',style:'carre',habit:'#2b6fc0',acc:['beret','rayures'],fond:'#e0ecff'},
  {peau:'#e0a878',peauC:'#ffe0c0',cheveux:'#3a2a1a',style:'court',habit:'#5a8ac8',habitF:'#2b5a98',acc:['casquette','moustache','salopette'],casquette:'#ff9a2a',fond:'#e8f0f8'},
  {peau:'#ffe0c8',peauC:'#fff8f0',cheveux:'#ffd060',cheveuxC:'#fff0a8',cheveuxF:'#d8a020',style:'long',habit:'#c8a0ff',habitF:'#8a5ad8',acc:['couronne','collier'],fond:'#f3e6ff',sourcils:'#c89020'}];
CLIENTS_ART.forEach((o,i)=>{ART['client:'+i]=perso(o)});

/* ================= DÉCOR DU PORT (fond de la scène) ================= */
ART['scene']=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><defs>
  <linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc8f5"/><stop offset="1" stop-color="#e4f7ff"/></linearGradient>
  <linearGradient id="mer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fc0ee"/><stop offset="1" stop-color="#1f7fc0"/></linearGradient>
  <linearGradient id="quai" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0a464"/><stop offset="1" stop-color="#a8682e"/></linearGradient>
  <radialGradient id="sol2" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff7b0"/><stop offset=".6" stop-color="#ffd23f"/><stop offset="1" stop-color="#ffb627"/></radialGradient>
  <radialGradient id="halo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff6c0" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c0" stop-opacity="0"/></radialGradient>
  <linearGradient id="col" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ad87a"/><stop offset="1" stop-color="#5aa84a"/></linearGradient></defs>
  <rect width="400" height="150" fill="url(#ciel)"/>
  <circle cx="362" cy="24" r="30" fill="url(#halo)"/><circle cx="362" cy="24" r="14" fill="url(#sol2)" stroke="#e8900a" stroke-width="2"/>
  <g fill="#fff" opacity=".95"><g transform="translate(46 18)"><circle r="8"/><circle cx="10" cy="-3" r="10"/><circle cx="22" cy="1" r="7"/><rect x="-8" y="0" width="38" height="8" rx="4"/></g>
  <g transform="translate(190 12) scale(.8)"><circle r="8"/><circle cx="10" cy="-3" r="10"/><circle cx="22" cy="1" r="7"/><rect x="-8" y="0" width="38" height="8" rx="4"/></g>
  <g transform="translate(278 34) scale(.6)"><circle r="8"/><circle cx="10" cy="-3" r="10"/><circle cx="22" cy="1" r="7"/><rect x="-8" y="0" width="38" height="8" rx="4"/></g></g>
  <path d="M0 74 Q40 52 90 62 Q140 48 190 64 Q240 56 270 66 Q330 50 400 64 V80 H0 Z" fill="url(#col)" stroke="#3f8a3a" stroke-width="1.6"/>
  ${[[24,58,'#ff8a6a'],[40,54,'#ffd23f'],[56,60,'#7ac0ff'],[110,56,'#fff'],[126,52,'#ff9ac0'],[142,58,'#ffb627'],[300,56,'#fff'],[316,60,'#ff8a6a']].map(([x,y,c])=>`<rect x="${x}" y="${y}" width="14" height="14" fill="${c}" stroke="#7a4a2a" stroke-width="1.2"/><path d="M${x-2} ${y} L${x+7} ${y-7} L${x+16} ${y} Z" fill="#d8503a" stroke="#7a2a1a" stroke-width="1.2"/><rect x="${x+4}" y="${y+4}" width="5" height="5" fill="#8adaff" stroke="#7a4a2a" stroke-width=".8"/>`).join('')}
  <rect y="72" width="400" height="34" fill="url(#mer)"/>
  <g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".75"><path d="M20 82 q6 -4 12 0 q6 4 12 0"/><path d="M120 90 q6 -4 12 0 q6 4 12 0"/><path d="M230 80 q6 -4 12 0 q6 4 12 0"/><path d="M330 92 q6 -4 12 0 q6 4 12 0"/><path d="M70 98 q5 -3 10 0"/><path d="M280 99 q5 -3 10 0"/></g>
  <rect y="104" width="400" height="46" fill="url(#quai)"/>
  <path d="M0 104 H400" stroke="#6a3a14" stroke-width="3"/>
  <g stroke="#9a5a24" stroke-width="1.4" opacity=".75"><path d="M0 116 H400 M0 128 H400 M0 140 H400"/>${Array.from({length:14},(_,i)=>`<path d="M${i*30+(i%2)*15} 104 v12 M${i*30+15-(i%2)*15} 116 v12 M${i*30+(i%2)*15} 128 v12"/>`).join('')}</g>
  ${[30,130,230,330].map(x=>`<rect x="${x}" y="96" width="9" height="14" rx="3" fill="#7a4a20" stroke="#3a1e08" stroke-width="1.6"/>`).join('')}
</svg>`;

/* ================= DÉCORATIONS DE RÉNOVATION ================= */
ART['deco:t1']=svg(L('par','#ff6a6a','#e0303a','#a01020',0,0,1,0),
 `${ombre(18)}<path d="M50 30 V90" ${k('#5a3415',4)}/>
  <path d="M8 40 Q50 0 92 40 Q81 34 71 40 Q60 34 50 40 Q40 34 29 40 Q19 34 8 40 Z" fill="url(#par)" ${k('#6a0a10',2.6)}/>
  <path d="M29 40 Q36 14 50 9 Q42 20 40 37 Z M71 40 Q64 14 50 9 Q58 20 60 37 Z" fill="#fff"/>${brille(30,26,8,2,-30)}`);
ART['deco:t2']=svg(R('pl2','#a6e27a','#4caf3f','#1f6a28')+L('pt2','#ff9a6a','#d8642a','#9a3a10'),
 `${ombre(22)}
  ${[[-40,30],[-15,20],[10,22],[35,30],[-28,10],[22,12]].map(([a,l])=>`<path d="M50 62 Q${50+a*.4} ${40-l*.2} ${50+a} ${50-l-10} Q${50+a*.8} ${55-l*.5} 50 62 Z" fill="url(#pl2)" ${k('#1d5717',2)}/>`).join('')}
  <path d="M30 60 H70 L64 90 H36 Z" fill="url(#pt2)" ${k('#5a1e04',2.6)}/><rect x="27" y="56" width="46" height="8" rx="3" fill="#ff8a4a" ${k('#5a1e04',2.2)}/>`);
ART['deco:t3']=svg('',`<path d="M2 20 Q50 46 98 20" fill="none" ${k('#5a3415',2)}/>
  ${[[8,24,'#ff5d73'],[22,31,'#ffd23f'],[36,36,'#3ec1d3'],[50,38,'#7bd389'],[64,36,'#a66bff'],[78,31,'#ff9f1c'],[92,24,'#ff5d73']].map(([x,y,c])=>`<path d="M${x-6} ${y-2} L${x+6} ${y-2} L${x} ${y+14} Z" fill="${c}" ${k('#3a2a1e',1.6)}/>`).join('')}`);
ART['deco:t4']=svg('',`${ombre(26)}<circle cx="50" cy="52" r="32" fill="#fff" ${k('#7a1010',3)}/>
  ${[0,90,180,270].map(a=>`<path d="M50 52 L${50+40*Math.cos((a-22)*Math.PI/180)} ${52+40*Math.sin((a-22)*Math.PI/180)} A40 40 0 0 1 ${50+40*Math.cos((a+22)*Math.PI/180)} ${52+40*Math.sin((a+22)*Math.PI/180)} Z" fill="#e0303a"/>`).join('')}
  <circle cx="50" cy="52" r="32" fill="none" ${k('#7a1010',3)}/><circle cx="50" cy="52" r="15" fill="#5fb6e6" ${k('#7a1010',3)}/>${brille(36,34,8,3,-35)}`);
ART['deco:t5']=svg(L('bq','#c87a4a','#8a4a22','#5a2a0e'),
 `<path d="M6 54 Q50 50 94 54 L84 76 Q50 84 16 76 Z" fill="url(#bq)" ${k('#3a1806',3)}/>
  <path d="M10 60 Q50 57 90 60" stroke="#e8b072" stroke-width="2.2" fill="none"/><path d="M14 68 Q50 66 86 68" stroke="#e8b072" stroke-width="1.6" fill="none" opacity=".7"/>
  <path d="M60 52 L84 30" ${k('#5a3415',3.4)}/><ellipse cx="86" cy="28" rx="4" ry="7" fill="#c87a4a" ${k('#3a1806',2)} transform="rotate(45 86 28)"/>
  <path d="M2 84 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0" fill="none" stroke="#fff" stroke-width="2.4" opacity=".8"/>`);
ART['deco:t6']=svg(R('lp','#fff3a0','#ff7a3a','#c8301a','50%','40%'),
 `<path d="M2 14 Q50 34 98 14" fill="none" ${k('#3a2a1e',2)}/>
  ${[[20,22],[50,28],[80,22]].map(([x,y])=>`<path d="M${x} ${y} v6" ${k('#3a2a1e',2)}/><ellipse cx="${x}" cy="${y+22}" rx="13" ry="16" fill="url(#lp)" ${k('#7a1a0a',2.4)}/><path d="M${x-13} ${y+22} h26 M${x-11} ${y+14} h22 M${x-11} ${y+30} h22" stroke="#c8301a" stroke-width="1.2" opacity=".6"/><rect x="${x-6}" y="${y+4}" width="12" height="4" rx="1" fill="#3a2a1e"/><rect x="${x-6}" y="${y+37}" width="12" height="4" rx="1" fill="#3a2a1e"/><path d="M${x} ${y+41} v6" ${k('#ffd23f',2)}/>`).join('')}`);
ART['deco:p1']=svg(L('voi','#ffffff','#f2f6fa','#c8d4de',0,0,1,0),
 `<path d="M50 8 V72" ${k('#5a3415',3.4)}/><path d="M52 10 Q80 40 84 66 H52 Z" fill="url(#voi)" ${k('#5a6a7a',2.4)}/><path d="M48 18 Q28 44 22 66 H48 Z" fill="#ff8a6a" ${k('#7a2a1a',2.4)}/>
  <path d="M10 70 H90 L80 86 Q50 90 20 86 Z" fill="#2b6fc0" ${k('#123f73',3)}/><path d="M14 75 H86" stroke="#fff" stroke-width="2.4"/>
  <path d="M50 8 l10 4 l-10 4" fill="#e0303a" ${k('#6a0a10',1.4)}/>`);
ART['deco:p2']=svg(L('tro','#c8a060','#9a7030','#6a4818',0,0,1,0)+L('pal','#a6e27a','#4caf3f','#1f6a28'),
 `${ombre(18)}<path d="M50 90 Q46 60 54 30" fill="none" ${k('#3a2008',10)}/><path d="M50 90 Q46 60 54 30" fill="none" stroke="url(#tro)" stroke-width="6.4"/>
  <path d="M47 80 h6 M47 70 h7 M48 60 h7 M50 50 h7 M51 40 h6" stroke="#6a4818" stroke-width="1.6"/>
  ${[[-38,8],[-30,-14],[-6,-24],[22,-18],[38,6],[8,-4]].map(([dx,dy])=>`<path d="M54 30 Q${54+dx*.5} ${30+dy-12} ${54+dx} ${30+dy} Q${54+dx*.6} ${30+dy*.4-2} 54 30 Z" fill="url(#pal)" ${k('#1d5717',2)}/>`).join('')}
  <g fill="#7a4a20" ${k('#3a2008',1.4)}><circle cx="50" cy="34" r="4"/><circle cx="58" cy="35" r="4"/></g>`);
ART['deco:p3']=svg('',`${[[34,40,1],[70,26,.75]].map(([x,y,s])=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-26 -4 Q-14 -18 0 2 Q14 -18 26 -4 Q14 -10 0 8 Q-14 -10 -26 -4 Z" fill="#fff" ${k('#5a6a7a',2.4)}/><path d="M-26 -4 Q-22 -9 -18 -8 M26 -4 Q22 -9 18 -8" ${k('#3a4a5a',2.4)}/><path d="M0 4 l4 2 l-4 1 Z" fill="#ffb627"/></g>`).join('')}`);
ART['deco:p4']=svg(L('ph','#ffffff','#f2f6fa','#c8d4de',0,0,1,0),
 `${ombre(20)}<path d="M38 88 L42 30 H58 L62 88 Z" fill="url(#ph)" ${k('#3a2a2a',2.6)}/>
  <path d="M41 46 H59 L60 58 H40 Z M39 70 H61 L62 82 H38 Z" fill="#e0303a"/>
  <rect x="38" y="18" width="24" height="13" rx="2" fill="#fff7a0" ${k('#3a2a2a',2.4)}/><path d="M36 18 L50 6 L64 18 Z" fill="#e0303a" ${k('#6a0a10',2.4)}/>
  <path d="M38 24 L4 14 L4 34 Z M62 24 L96 14 L96 34 Z" fill="#fff6a0" opacity=".55"/><rect x="34" y="30" width="32" height="4" rx="1" fill="#3a2a2a"/>`);
ART['deco:p5']=svg(L('acc','#ff6a6a','#e0303a','#a01020',0,0,1,0),
 `${ombre(26)}<rect x="12" y="34" width="20" height="38" rx="4" fill="url(#acc)" ${k('#5a0a10',2.6)}/><rect x="68" y="34" width="20" height="38" rx="4" fill="url(#acc)" ${k('#5a0a10',2.6)}/>
  <path d="M32 36 L38 72 L44 36 L50 72 L56 36 L62 72 L68 36 V72 H32 Z" fill="#fff" ${k('#5a6a7a',2)}/>
  <g fill="#fff">${[40,48,56,64].map(y=>`<circle cx="18" cy="${y}" r="2"/><circle cx="26" cy="${y}" r="2"/>`).join('')}</g>
  <path d="M60 20 q4 -8 10 -4 v12 M74 14 q4 -8 10 -4 v12" fill="none" ${k('#3a2a5a',2.4)}/><circle cx="68" cy="28" r="3" fill="#3a2a5a"/><circle cx="82" cy="22" r="3" fill="#3a2a5a"/>`);
ART['deco:p6']=svg('',`${[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>`<path d="M${50+8*Math.cos(a*Math.PI/180)} ${46+8*Math.sin(a*Math.PI/180)} L${50+38*Math.cos(a*Math.PI/180)} ${46+38*Math.sin(a*Math.PI/180)}" stroke="${['#ff5d73','#ffd23f','#3ec1d3','#a66bff'][i%4]}" stroke-width="4" stroke-linecap="round"/><circle cx="${50+42*Math.cos(a*Math.PI/180)}" cy="${46+42*Math.sin(a*Math.PI/180)}" r="3" fill="${['#ff5d73','#ffd23f','#3ec1d3','#a66bff'][i%4]}"/>`).join('')}<circle cx="50" cy="46" r="6" fill="#fff"/>`);
ART['deco:f1']=svg('',`<path d="M50 8 C76 8 86 30 80 48 C76 60 62 66 58 74 H42 C38 66 24 60 20 48 C14 30 24 8 50 8 Z" fill="#ff5d73" ${k('#7a1020',2.6)}/>
  <path d="M50 8 C40 20 38 50 44 74 H56 C62 50 60 20 50 8 Z" fill="#ffd23f"/><path d="M50 8 C30 14 22 40 34 64 L40 70 C34 50 36 24 50 8 Z M50 8 C70 14 78 40 66 64 L60 70 C66 50 64 24 50 8 Z" fill="#3ec1d3"/>
  <path d="M50 8 C76 8 86 30 80 48 C76 60 62 66 58 74 H42 C38 66 24 60 20 48 C14 30 24 8 50 8 Z" fill="none" ${k('#7a1020',2.6)}/>
  <path d="M42 74 L42 82 M58 74 L58 82" ${k('#5a3415',1.6)}/><rect x="40" y="80" width="20" height="12" rx="2" fill="#c87a4a" ${k('#3a1806',2.2)}/>${brille(32,26,8,3,-40)}`);
ART['deco:f2']=svg('',`<path d="M50 50 L28 94 M50 50 L72 94" ${k('#3a4a5a',4)}/>
  <circle cx="50" cy="48" r="36" fill="none" ${k('#e0303a',4)}/><circle cx="50" cy="48" r="28" fill="none" stroke="#ffd23f" stroke-width="2"/>
  ${Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180;return`<path d="M50 48 L${50+36*Math.cos(a)} ${48+36*Math.sin(a)}" stroke="#3a4a5a" stroke-width="1.6"/><rect x="${50+36*Math.cos(a)-6}" y="${48+36*Math.sin(a)-2}" width="12" height="10" rx="3" fill="${['#3ec1d3','#ffd23f','#7bd389','#a66bff'][i%4]}" ${k('#2a2a3a',1.6)}/>`}).join('')}
  <circle cx="50" cy="48" r="5" fill="#ffd23f" ${k('#8a6008',2)}/>`);
ART['deco:f3']=svg(L('dau','#9ad8ff','#4aa0e0','#1f5f9a',0,0,0,1),
 `<path d="M14 66 Q30 18 70 22 Q84 24 90 32 Q80 30 76 34 Q86 46 80 52 Q72 40 60 40 Q40 42 30 70 Z" fill="url(#dau)" ${k('#123f73',2.6)}/>
  <path d="M48 26 Q52 12 62 12 Q58 20 60 24 Z" fill="#4aa0e0" ${k('#123f73',2.2)}/><path d="M20 62 Q10 66 6 76 Q16 72 22 70 Z" fill="#4aa0e0" ${k('#123f73',2.2)}/>
  <circle cx="74" cy="30" r="2" fill="#123f73"/><path d="M34 50 Q46 32 66 30" fill="none" stroke="#e0f4ff" stroke-width="2.4"/>
  <path d="M4 84 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0" fill="none" stroke="#fff" stroke-width="2.6" opacity=".85"/>`);
ART['deco:f4']=svg(L('coq','#ffffff','#eef2f6','#b8c4d0',0,0,1,0),
 `<rect x="54" y="18" width="12" height="20" rx="2" fill="#e0303a" ${k('#5a0a10',2.2)}/><rect x="54" y="18" width="12" height="5" fill="#2c2c38"/>
  <path d="M20 38 H80 V52 H20 Z" fill="url(#coq)" ${k('#3a4a5a',2.4)}/><g fill="#5fb6e6">${[28,38,48,58,68].map(x=>`<circle cx="${x}" cy="45" r="2.6"/>`).join('')}</g>
  <path d="M4 52 H96 L84 74 H16 Z" fill="url(#coq)" ${k('#3a4a5a',2.6)}/><path d="M10 64 H90" stroke="#1f6fc0" stroke-width="4"/>
  <g fill="#3a4a5a">${[18,30,42,54,66,78].map(x=>`<circle cx="${x}" cy="58" r="2"/>`).join('')}</g>
  <path d="M2 82 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0" fill="none" stroke="#fff" stroke-width="2.4" opacity=".8"/>`);
ART['deco:f5']=svg('',`${[[30,34,22,'#ffd23f'],[70,28,16,'#ff5d73'],[62,66,14,'#3ec1d3']].map(([cx,cy,r,c])=>Array.from({length:10},(_,i)=>{const a=i*36*Math.PI/180;return`<path d="M${cx} ${cy} L${cx+r*Math.cos(a)} ${cy+r*Math.sin(a)}" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/><circle cx="${cx+(r+3)*Math.cos(a)}" cy="${cy+(r+3)*Math.sin(a)}" r="1.8" fill="#fff"/>`}).join('')).join('')}${etoile(14,70,5)}${etoile(88,52,4)}`);
ART['deco:f6']=svg(L('st','#fff3a0','#ffc93a','#c8800a')+L('soc','#e8e0d8','#b8b0a8','#7a7068',0,0,1,0),
 `${ombre(26)}<rect x="28" y="72" width="44" height="18" rx="3" fill="url(#soc)" ${k('#3a3430',2.6)}/>
  <path d="M30 18 H70 V30 Q70 54 50 56 Q30 54 30 30 Z" fill="url(#st)" ${k('#7a5208',2.6)}/>
  <path d="M30 24 Q14 24 16 36 Q18 46 32 46 M70 24 Q86 24 84 36 Q82 46 68 46" fill="none" ${k('#7a5208',4)}/>
  <path d="M44 56 H56 V64 H62 V72 H38 V64 H44 Z" fill="url(#st)" ${k('#7a5208',2.4)}/>
  <path d="M50 26 l3 6 h6 l-5 4 l2 6 l-6 -4 l-6 4 l2 -6 l-5 -4 h6 Z" fill="#fff6c0"/>${brille(38,30,4,10,10)}${etoile(14,16,4)}${etoile(86,14,4)}`);

/* ================= Décorations rares (fidélité : 1 par semaine de connexion) ================= */
ART['deco:r1']=svg('',`${['#ff5d73','#ff9f1c','#ffd23f','#7bd389','#3ec1d3','#a66bff'].map((c,i)=>`<path d="M${8+i*4} 80 A${42-i*4} ${42-i*4} 0 0 1 ${92-i*4} 80" fill="none" stroke="${c}" stroke-width="4.6"/>`).join('')}
  <g fill="#fff">${[[10,80],[18,84],[4,86],[90,80],[82,84],[96,86]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6"/>`).join('')}</g>${etoile(50,22,4)}`);
ART['deco:r2']=svg(L('car','#ff8ab0','#e0407a','#a01a4a',0,0,1,0)+L('carb','#fff3a0','#ffc93a','#c8800a'),
 `${ombre(36)}<path d="M50 4 V12" ${k('#7a5208',2.4)}/><circle cx="50" cy="5" r="3" fill="#ffd23f" ${k('#7a5208',1.4)}/>
  <path d="M10 34 L50 12 L90 34 Z" fill="url(#car)" ${k('#5a0a24',2.6)}/><path d="M30 23 L50 12 L50 34 Z M70 23 L50 12 L50 34" fill="#fff" opacity=".6"/>
  <path d="M10 34 q10 6 20 0 q10 6 20 0 q10 6 20 0 q10 6 20 0" fill="#ffd23f" ${k('#7a5208',2)}/>
  <path d="M24 38 V78 M50 38 V78 M76 38 V78" ${k('#7a5208',3)}/>
  ${[[24,56,'#7ac0ff'],[50,62,'#7bd389'],[76,54,'#ffb627']].map(([x,y,c])=>`<path d="M${x-10} ${y} Q${x-12} ${y-12} ${x} ${y-10} Q${x+8} ${y-16} ${x+12} ${y-6} L${x+10} ${y+6} H${x-10} Z" fill="${c}" ${k('#2a2a3a',2)}/><circle cx="${x+8}" cy="${y-8}" r="1.4" fill="#2a2a3a"/>`).join('')}
  <ellipse cx="50" cy="82" rx="42" ry="8" fill="url(#carb)" ${k('#7a5208',2.6)}/>`);
ART['deco:r3']=svg(L('fon','#f2f6fa','#c8d4de','#8a96a2',0,0,1,0)+L('eau3','#c8f0ff','#5fb6e6','#1f7fc0'),
 `${ombre(38)}<ellipse cx="50" cy="78" rx="42" ry="12" fill="url(#fon)" ${k('#3a4a5a',2.6)}/><ellipse cx="50" cy="75" rx="34" ry="7" fill="url(#eau3)"/>
  <rect x="44" y="44" width="12" height="32" rx="3" fill="url(#fon)" ${k('#3a4a5a',2.4)}/>
  <ellipse cx="50" cy="44" rx="20" ry="6" fill="url(#fon)" ${k('#3a4a5a',2.4)}/><ellipse cx="50" cy="43" rx="15" ry="3.6" fill="url(#eau3)"/>
  <path d="M50 40 Q50 14 50 12 M50 14 Q34 18 30 40 M50 14 Q66 18 70 40 M50 40 Q30 50 24 72 M50 40 Q70 50 76 72" fill="none" stroke="#7fd0f5" stroke-width="3" stroke-linecap="round"/>
  <g fill="#fff">${[[50,10],[30,40],[70,40],[24,70],[76,70]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2"/>`).join('')}</g>${etoile(84,22,3.6)}`);
ART['deco:r4']=svg(L('kio','#ffffff','#f2ece4','#c8bfae',0,0,1,0)+L('kt','#7bd389','#3f9a3a','#1f6a28'),
 `${ombre(38)}<path d="M8 40 L50 10 L92 40 Z" fill="url(#kt)" ${k('#124a14',2.6)}/><circle cx="50" cy="9" r="3.4" fill="#ffd23f" ${k('#7a5208',1.4)}/>
  <path d="M8 40 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0" fill="#fff" ${k('#5a6a7a',1.6)}/>
  ${[16,38,62,84].map(x=>`<rect x="${x-3}" y="44" width="6" height="34" fill="url(#kio)" ${k('#5a6a7a',2)}/>`).join('')}
  <rect x="6" y="76" width="88" height="10" rx="2" fill="url(#kio)" ${k('#5a6a7a',2.4)}/>
  <path d="M30 66 q4 -10 10 -6 v10 M56 60 q4 -8 10 -4 v12" fill="none" ${k('#3a2a5a',2.2)}/><circle cx="38" cy="70" r="3" fill="#3a2a5a"/><circle cx="64" cy="68" r="3" fill="#3a2a5a"/>`);
ART['deco:r5']=svg(L('mou','#ffe2b8','#e0a46a','#a8682e',0,0,1,0),
 `${ombre(26)}<path d="M36 90 L42 40 H58 L64 90 Z" fill="url(#mou)" ${k('#5a3415',2.6)}/><path d="M38 40 L50 26 L62 40 Z" fill="#e0303a" ${k('#6a0a10',2.4)}/>
  <rect x="45" y="72" width="10" height="18" rx="4" fill="#7a4a20" ${k('#3a1e08',1.8)}/><circle cx="50" cy="56" r="4" fill="#8adaff" ${k('#3a1e08',1.6)}/>
  <g transform="rotate(20 50 36)">${[0,90,180,270].map(a=>`<g transform="rotate(${a} 50 36)"><rect x="47" y="2" width="6" height="32" fill="#fff" ${k('#5a3415',1.8)}/><path d="M53 4 h10 v26 h-10" fill="#f2ece4" ${k('#5a3415',1.6)}/><path d="M53 12 h10 M53 20 h10" stroke="#c8bfae" stroke-width="1.2"/></g>`).join('')}</g>
  <circle cx="50" cy="36" r="4" fill="#5a3415"/>`);
ART['deco:r6']=svg(L('sab','#ffe8b0','#f2c870','#c8963a',0,0,1,0),
 `${ombre(40)}<path d="M6 88 Q8 76 20 76 H80 Q92 76 94 88 Z" fill="url(#sab)" ${k('#8a6020',2.4)}/>
  <rect x="16" y="50" width="20" height="28" fill="url(#sab)" ${k('#8a6020',2.4)}/><rect x="64" y="50" width="20" height="28" fill="url(#sab)" ${k('#8a6020',2.4)}/>
  <rect x="34" y="36" width="32" height="42" fill="url(#sab)" ${k('#8a6020',2.4)}/>
  <path d="M16 50 v-6 h5 v6 h5 v-6 h5 v6 h5 v-6 M64 50 v-6 h5 v6 h5 v-6 h5 v6 h5 v-6 M34 36 v-6 h6 v6 h6 v-6 h8 v6 h6 v-6 h6 v6" fill="url(#sab)" ${k('#8a6020',2)}/>
  <path d="M44 78 V64 Q50 56 56 64 V78 Z" fill="#a8783a" ${k('#6a4818',1.8)}/>
  <path d="M50 30 V12" ${k('#5a3415',2)}/><path d="M50 12 L64 16 L50 20 Z" fill="#ff5d73" ${k('#7a1020',1.6)}/>
  <g fill="#fff"><path d="M14 84 l4 -3 l2 4 z"/><path d="M80 84 l3 -4 l3 3 z" fill="#ff9ac0"/></g>${etoile(86,30,3.6)}`);

/* ================= LIEU 2 : LA PLAGE (chapitres 4 à 6) ================= */
ART['scene2']=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><defs>
  <linearGradient id="c2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ec4f2"/><stop offset="1" stop-color="#d8f6ff"/></linearGradient>
  <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1fa6c8"/><stop offset=".6" stop-color="#3cd0d8"/><stop offset="1" stop-color="#8ef0e0"/></linearGradient>
  <linearGradient id="s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9b0"/><stop offset="1" stop-color="#f2c878"/></linearGradient>
  <radialGradient id="so2" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff7b0"/><stop offset=".6" stop-color="#ffd23f"/><stop offset="1" stop-color="#ffb627"/></radialGradient>
  <radialGradient id="ha2" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff6c0" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c0" stop-opacity="0"/></radialGradient></defs>
  <rect width="400" height="150" fill="url(#c2)"/>
  <circle cx="40" cy="26" r="30" fill="url(#ha2)"/><circle cx="40" cy="26" r="14" fill="url(#so2)" stroke="#e8900a" stroke-width="2"/>
  <g fill="#fff" opacity=".95"><g transform="translate(150 16)"><circle r="8"/><circle cx="10" cy="-3" r="10"/><circle cx="22" cy="1" r="7"/><rect x="-8" y="0" width="38" height="8" rx="4"/></g><g transform="translate(300 28) scale(.7)"><circle r="8"/><circle cx="10" cy="-3" r="10"/><circle cx="22" cy="1" r="7"/><rect x="-8" y="0" width="38" height="8" rx="4"/></g></g>
  <path d="M300 62 Q330 40 360 54 Q385 46 400 56 V64 H300 Z" fill="#6cc04a" stroke="#2b7a22" stroke-width="1.4"/>
  <rect y="60" width="400" height="30" fill="url(#m2)"/>
  <g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"><path d="M30 70 q6 -4 12 0 q6 4 12 0"/><path d="M160 76 q6 -4 12 0 q6 4 12 0"/><path d="M260 68 q6 -4 12 0 q6 4 12 0"/><path d="M350 78 q5 -3 10 0"/></g>
  <path d="M0 88 Q40 82 80 88 T160 88 T240 88 T320 88 T400 88 V150 H0 Z" fill="url(#s2)"/>
  <path d="M0 88 Q40 82 80 88 T160 88 T240 88 T320 88 T400 88" fill="none" stroke="#fff" stroke-width="3.4" opacity=".9"/>
  <g fill="#e0a85a" opacity=".55">${[[30,110],[90,124],[150,104],[210,130],[270,112],[340,126],[380,104],[60,140],[240,142]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="3" ry="1.4"/>`).join('')}</g>
  <g fill="#fff6e6" stroke="#d8a868" stroke-width="1">${[[120,136],[320,140]].map(([x,y])=>`<path d="M${x} ${y} q4 -8 8 0 z"/>`).join('')}</g>
</svg>`;
/* chapitre 4 : la plage */
ART['deco:b1']=svg('',`${ombre(34)}<path d="M8 74 L30 52 H92 L70 74 Z" fill="#3ec1d3" ${k('#14606a',2.6)}/><path d="M18 64 L32 52 H44 L30 64 Z M44 64 L58 52 H70 L56 64 Z M30 74 L42 62 H54 L42 74 Z M56 74 L68 62 H80 L68 74 Z" fill="#fff" opacity=".9"/><path d="M8 74 L30 52 H92 L70 74 Z" fill="none" ${k('#14606a',2.6)}/>`);
ART['deco:b2']=svg(L('seau','#ff9a8a','#e0303a','#a01020',0,0,1,0),
 `${ombre(24)}<path d="M30 40 Q50 18 70 40" fill="none" ${k('#5a0a10',3)}/><path d="M26 40 H74 L66 86 H34 Z" fill="url(#seau)" ${k('#5a0a10',2.8)}/><path d="M28 50 H72" stroke="#ffd23f" stroke-width="4"/>
  <path d="M74 86 L88 30" ${k('#1f5f9a',4)}/><path d="M82 30 Q88 14 96 22 Q94 34 86 34 Z" fill="#3a9ad6" ${k('#123f73',2.2)}/>${brille(38,56,3,10,8)}`);
ART['deco:b3']=svg(L('tra','#7bd389','#3fae5a','#1f7a3a',0,0,1,0),
 `${ombre(36)}<path d="M20 86 L34 56 M80 86 L64 56 M28 86 L76 50" ${k('#7a4a20',4)}/>
  <path d="M16 70 L60 62 L84 28 L90 32 L66 68 L20 78 Z" fill="url(#tra)" ${k('#124a24',2.6)}/><path d="M30 70 L62 64 M68 52 L80 36" stroke="#fff" stroke-width="3" opacity=".85"/>`);
ART['deco:b4']=svg('',`${ombre(26)}<circle cx="50" cy="52" r="34" fill="#fff" ${k('#2a2a3a',3)}/>
  <path d="M50 18 Q30 34 22 70 Q30 80 38 82 Q36 50 50 18 Z" fill="#ff5d73"/><path d="M50 18 Q70 34 78 70 Q70 80 62 82 Q64 50 50 18 Z" fill="#3ec1d3"/><path d="M50 18 Q46 52 50 86 Q54 52 50 18 Z" fill="#ffd23f"/>
  <circle cx="50" cy="52" r="34" fill="none" ${k('#2a2a3a',3)}/><circle cx="50" cy="24" r="5" fill="#fff" ${k('#2a2a3a',2)}/>${brille(36,34,8,4,-35)}`);
ART['deco:b5']=svg('',`${ombre(30)}<path d="M18 36 L50 10 L82 36 Z" fill="#e0303a" ${k('#5a0a10',2.6)}/>
  <rect x="22" y="36" width="56" height="52" fill="#fff" ${k('#3a4a5a',2.6)}/>${[30,46,62].map(x=>`<rect x="${x}" y="36" width="8" height="52" fill="#3a9ad6"/>`).join('')}
  <rect x="22" y="36" width="56" height="52" fill="none" ${k('#3a4a5a',2.6)}/><path d="M42 88 V62 Q50 54 58 62 V88" fill="#ffe2a6" ${k('#3a4a5a',2)}/>`);
ART['deco:b6']=svg(L('surf','#ffe066','#ff9a2a','#e0405a',0,0,1,1),
 `${ombre(18)}<path d="M50 6 Q70 30 64 80 Q60 92 50 92 Q40 92 36 80 Q30 30 50 6 Z" fill="url(#surf)" ${k('#7a2a0a',2.8)}/>
  <path d="M50 10 V88" stroke="#fff" stroke-width="3"/><path d="M38 48 Q50 40 62 48" fill="none" stroke="#3ec1d3" stroke-width="4"/>${brille(42,30,3,12,10)}`);
/* chapitre 5 : la paillote */
ART['deco:c1']=svg(L('pail','#ffe2a0','#e8b85a','#a8782a',0,0,1,0)+L('bpa','#c8864a','#9a5a24','#6a3a10',0,0,1,0),
 `${ombre(40)}<path d="M4 44 L50 8 L96 44 Q90 48 84 44 Q78 50 72 44 Q66 50 60 44 Q54 50 48 44 Q42 50 36 44 Q30 50 24 44 Q18 50 12 44 Q8 48 4 44 Z" fill="url(#pail)" ${k('#6a4818',2.6)}/>
  <path d="M20 40 L50 12 L80 40 M36 42 L50 18 L64 42" fill="none" stroke="#c8963a" stroke-width="1.6"/>
  <path d="M16 46 V88 M84 46 V88" ${k('#3a1e08',5)}/><rect x="14" y="62" width="72" height="12" rx="2" fill="url(#bpa)" ${k('#3a1e08',2.4)}/><rect x="18" y="74" width="64" height="14" fill="url(#bpa)" ${k('#3a1e08',2.4)}/>
  <g>${[[30,56,'#ff5d73'],[44,56,'#ffd23f'],[58,56,'#7bd389']].map(([x,y,c])=>`<path d="M${x-4} ${y-6} H${x+4} L${x+2} ${y+6} H${x-2} Z" fill="${c}" ${k('#3a2a1e',1.4)}/>`).join('')}</g>`);
ART['deco:c2']=svg('',`${ombre(40)}<path d="M10 90 V30 M90 90 V30" ${k('#5a3415',5)}/><path d="M10 34 Q50 82 90 34" fill="none" ${k('#3a2a1e',1.6)}/>
  <path d="M14 38 Q50 86 86 38 Q50 70 14 38 Z" fill="#ff9f1c" ${k('#7a3a06',2.4)}/><path d="M24 48 Q50 74 76 48" fill="none" stroke="#fff" stroke-width="3"/>
  <g fill="#4caf3f" ${k('#1d5717',1.6)}><path d="M10 30 q-10 -6 -8 -16 q8 4 8 16 M10 30 q10 -8 18 -6 q-6 8 -18 6 M90 30 q-10 -8 -18 -6 q6 8 18 6 M90 30 q10 -6 8 -16 q-8 4 -8 16"/></g>`);
ART['deco:c3']=svg(R('flam','#fff7a0','#ffb627','#e0402a','50%','70%'),
 `${ombre(30)}${[30,70].map(x=>`<path d="M${x} 90 V40" ${k('#3a1e08',5)}/><path d="M${x-7} 40 H${x+7} L${x+5} 54 H${x-5} Z" fill="#c8963a" ${k('#5a3415',2)}/><path d="M${x} 38 Q${x-10} 26 ${x-2} 12 Q${x} 22 ${x+4} 16 Q${x+10} 28 ${x} 38 Z" fill="url(#flam)" ${k('#a8301e',1.6)}/>`).join('')}`);
ART['deco:c4']=svg(L('cha','#ffffff','#e9f6ff','#a8c8e0',0,0,1,0),
 `${ombre(38)}<path d="M16 22 Q50 2 84 22 Z" fill="#ff7aa8" ${k('#8a1a4a',2.4)}/><path d="M30 22 V40 M70 22 V40" ${k('#5a6a7a',2.4)}/>
  <rect x="14" y="40" width="72" height="36" rx="4" fill="url(#cha)" ${k('#3a4a6a',2.6)}/>
  ${[[30,'#ffd0e0'],[50,'#fff7b0'],[70,'#d8ffc0']].map(([x,c])=>`<circle cx="${x}" cy="40" r="7" fill="${c}" ${k('#8a6a5a',1.6)}/>`).join('')}
  <circle cx="26" cy="82" r="8" fill="#5a6a7a" ${k('#2a3440',2)}/><circle cx="74" cy="82" r="8" fill="#5a6a7a" ${k('#2a3440',2)}/><path d="M86 52 H96" ${k('#3a4a6a',3)}/>
  <path d="M30 58 l4 10 l4 -10 Z" fill="#e8b072" ${k('#8a5424',1.4)}/><circle cx="34" cy="56" r="4" fill="#ffd0e0"/>`);
ART['deco:c5']=svg(L('jet','#ffe066','#ff9a2a','#e0405a'),
 `<path d="M6 62 Q30 44 70 46 L92 56 Q86 70 60 70 H14 Z" fill="url(#jet)" ${k('#5a1a0a',2.6)}/><path d="M40 46 L54 34 H62 L56 46" fill="#2c2c38" ${k('#0c0c10',2)}/>
  <path d="M14 62 H80" stroke="#fff" stroke-width="3"/><path d="M60 40 L72 30" ${k('#2c2c38',3)}/>
  <path d="M0 74 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0" fill="none" stroke="#fff" stroke-width="2.6" opacity=".9"/><path d="M2 66 q-4 -6 2 -10 M8 66 q-2 -8 4 -12" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>`);
ART['deco:c6']=svg(R('etm','#ffb0a0','#ff6a5a','#c8303a','50%','50%'),
 `${ombre(28)}<path d="M50 10 L60 38 L90 40 L66 58 L76 88 L50 70 L24 88 L34 58 L10 40 L40 38 Z" fill="url(#etm)" stroke="#8a1a1a" stroke-width="3" stroke-linejoin="round"/>
  <g fill="#ffe0d0">${[[50,26],[50,38],[70,46],[60,52],[30,46],[40,52],[64,72],[58,62],[36,72],[42,62],[50,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.8"/>`).join('')}</g>`);
/* chapitre 6 : le festival */
ART['deco:d1']=svg(L('sce','#3a2a5a','#2a1a40','#1a0e2a',0,0,1,0),
 `${ombre(42)}<rect x="6" y="56" width="88" height="30" rx="2" fill="#7a4a20" ${k('#3a1e08',2.6)}/><path d="M6 66 H94 M6 76 H94" stroke="#a8703a" stroke-width="1.4"/>
  <path d="M10 56 V16 H90 V56" fill="url(#sce)" ${k('#0c0618',2.6)}/><path d="M10 16 H90 V24 Q50 30 10 24 Z" fill="#e0303a" ${k('#5a0a10',2)}/>
  <path d="M30 24 L18 56 H42 Z M70 24 L58 56 H82 Z" fill="#fff6a0" opacity=".35"/>
  <rect x="44" y="34" width="12" height="22" rx="2" fill="#2c2c38" ${k('#000',1.4)}/><circle cx="50" cy="40" r="3" fill="#8a8aa0"/><circle cx="50" cy="50" r="4" fill="#8a8aa0"/>
  ${[[22,10,'#ff5d73'],[50,8,'#ffd23f'],[78,10,'#3ec1d3']].map(([x,y,c])=>`<circle cx="${x}" cy="${y+8}" r="4" fill="${c}" ${k('#2a2a3a',1.4)}/>`).join('')}`);
ART['deco:d2']=svg('',`<path d="M2 18 Q50 52 98 18" fill="none" ${k('#3a2a1e',2)}/>
  ${[[10,24],[22,32],[36,38],[50,40],[64,38],[78,32],[90,24]].map(([x,y],i)=>{const c=['#ff5d73','#ffd23f','#3ec1d3','#7bd389','#a66bff','#ff9f1c','#ff5d73'][i];return`<circle cx="${x}" cy="${y+6}" r="9" fill="${c}" opacity=".3"/><path d="M${x-3} ${y} h6 v3 h-6 z" fill="#3a2a1e"/><ellipse cx="${x}" cy="${y+8}" rx="4.4" ry="6" fill="${c}" ${k('#2a2a3a',1.4)}/><circle cx="${x-1.4}" cy="${y+6}" r="1.4" fill="#fff"/>`}).join('')}`);
ART['deco:d3']=svg(R('feu3','#fff7a0','#ffb627','#e0402a','50%','80%'),
 `${ombre(30)}<path d="M50 74 Q26 60 36 36 Q40 50 46 44 Q42 26 54 12 Q56 32 64 34 Q70 26 68 20 Q84 46 64 72 Z" fill="url(#feu3)" ${k('#a8301e',2.4)}/>
  <path d="M50 70 Q40 60 46 50 Q50 58 54 54 Q60 62 50 70 Z" fill="#fff6c0"/>
  <path d="M18 84 L82 70 M18 70 L82 84" ${k('#3a1e08',8)}/><path d="M18 84 L82 70 M18 70 L82 84" stroke="#a8703a" stroke-width="4.4" stroke-linecap="round"/>
  ${[[20,88],[36,90],[64,90],[80,88]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="7" ry="4" fill="#8a96a2" ${k('#3a424c',1.6)}/>`).join('')}`);
ART['deco:d4']=svg('',`<path d="M50 92 Q48 70 30 48 M50 92 Q50 60 52 36 M50 92 Q54 70 72 46 M50 92 Q44 74 26 66 M50 92 Q58 76 76 70" fill="none" stroke="#5a6a7a" stroke-width="1.4"/>
  ${[[30,40,'#ff5d73'],[52,26,'#ffd23f'],[72,38,'#3ec1d3'],[24,60,'#a66bff'],[78,62,'#7bd389']].map(([x,y,c])=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="13" fill="${c}" ${k('#2a2a3a',2.2)}/><path d="M${x-2} ${y+13} l2 3 l2 -3 z" fill="${c}" ${k('#2a2a3a',1.2)}/><ellipse cx="${x-4}" cy="${y-5}" rx="3" ry="4.4" fill="#fff" opacity=".7" transform="rotate(-25 ${x-4} ${y-5})"/>`).join('')}`);
ART['deco:d5']=svg(L('yac','#ffffff','#eef2f6','#b8c4d0',0,0,1,0),
 `<path d="M28 34 L60 34 L70 46 H22 Z" fill="url(#yac)" ${k('#3a4a5a',2.4)}/><path d="M34 38 H62" stroke="#2c2c38" stroke-width="4"/>
  <path d="M4 50 H96 L84 72 H18 Z" fill="url(#yac)" ${k('#3a4a5a',2.6)}/><path d="M8 58 H90" stroke="#1f6fc0" stroke-width="3"/><path d="M14 46 H80 V50 H14 Z" fill="#2c2c38"/>
  <path d="M48 34 V18" ${k('#3a4a5a',2)}/><path d="M48 18 l10 4 l-10 4" fill="#ffd23f" ${k('#8a6008',1.2)}/>
  <path d="M2 80 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0 q8 -5 16 0 q8 5 16 0" fill="none" stroke="#fff" stroke-width="2.4" opacity=".8"/>`);
ART['deco:d6']=svg(L('or6','#fff3a0','#ffc93a','#c8800a')+L('soc6','#e8e0d8','#b8b0a8','#7a7068',0,0,1,0),
 `${ombre(30)}<rect x="26" y="74" width="48" height="16" rx="3" fill="url(#soc6)" ${k('#3a3430',2.6)}/>
  <path d="M30 22 Q24 12 32 6 Q38 0 44 6 Q50 -2 56 6 Q62 0 68 6 Q76 12 70 22 V30 H30 Z" fill="url(#or6)" ${k('#7a5208',2.4)}/>
  <circle cx="50" cy="46" r="16" fill="url(#or6)" ${k('#7a5208',2.4)}/><path d="M30 74 Q30 58 50 60 Q70 58 70 74 Z" fill="url(#or6)" ${k('#7a5208',2.4)}/>
  <g fill="#7a5208"><circle cx="44" cy="44" r="1.8"/><circle cx="56" cy="44" r="1.8"/></g><path d="M44 51 Q50 56 56 51" fill="none" stroke="#7a5208" stroke-width="1.8"/>
  ${brille(40,14,6,2,-20)}${etoile(14,20,4)}${etoile(86,26,4)}`);

/* ================= Tirelire ================= */
ART['tirelire']=svg(R('coch','#ffd0e0','#ff8ab0','#d8407a','40%','30%'),
 `${ombre(32)}<path d="M28 84 V92 M42 86 V94 M60 86 V94 M72 84 V92" ${k('#8a1a4a',6)}/><path d="M28 84 V92 M42 86 V94 M60 86 V94 M72 84 V92" stroke="#ff8ab0" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="50" cy="60" rx="38" ry="28" fill="url(#coch)" ${k('#8a1a4a',3)}/>
  <path d="M30 36 L26 20 L42 32 Z" fill="#ff8ab0" ${k('#8a1a4a',2.6)}/><path d="M66 34 L72 20 L76 38 Z" fill="#ff8ab0" ${k('#8a1a4a',2.6)}/>
  <ellipse cx="84" cy="62" rx="9" ry="10" fill="#ff9ac0" ${k('#8a1a4a',2.6)}/><circle cx="82" cy="60" r="1.8" fill="#8a1a4a"/><circle cx="87" cy="64" r="1.8" fill="#8a1a4a"/>
  <circle cx="68" cy="50" r="3" fill="#3a0a1e"/><circle cx="69" cy="49" r="1" fill="#fff"/>
  <rect x="40" y="31" width="20" height="5" rx="2.5" fill="#5a0a2a"/>
  <path d="M12 58 q-8 -2 -6 -10 q4 6 8 2" fill="none" ${k('#8a1a4a',2.6)}/>
  <circle cx="50" cy="20" r="9" fill="#ffd23f" ${k('#a8700a',2.4)}/><path d="M50 15 V25 M47 17 h5 a2 2 0 0 1 0 4 h-4 a2 2 0 0 0 0 4 h5" fill="none" stroke="#a8700a" stroke-width="1.6"/>
  ${brille(32,46,10,5,-25)}`);
/* ================= Objets spéciaux ================= */
ART['joker']=svg(R('jok','#e8d0ff','#a66bff','#5a1a9a','40%','30%'),
 `${ombre(28)}<circle cx="50" cy="52" r="34" fill="url(#jok)" ${k('#3a0a6a',3)}/>
  <path d="M50 26 L56 42 L74 42 L60 52 L66 70 L50 59 L34 70 L40 52 L26 42 L44 42 Z" fill="#ffd23f" ${k('#a8700a',2.4)}/>
  <path d="M50 26 L54 38" stroke="#fff6c0" stroke-width="2" stroke-linecap="round"/>
  ${[0,72,144,216,288].map(a=>`<circle cx="${50+40*Math.cos((a-90)*Math.PI/180)}" cy="${52+40*Math.sin((a-90)*Math.PI/180)}" r="3" fill="#fff"/>`).join('')}${brille(36,34,8,4,-30)}`);
ART['ciseaux']=svg(L('lam','#ffffff','#d8e0e8','#8a96a2'),
 `${ombre(26)}<path d="M44 52 L80 12 L86 18 L52 58 Z" fill="url(#lam)" ${k('#3a424c',2.4)}/><path d="M56 52 L20 12 L14 18 L48 58 Z" fill="url(#lam)" ${k('#3a424c',2.4)}/>
  <circle cx="50" cy="54" r="3.4" fill="#ffd23f" ${k('#7a5208',1.6)}/>
  <ellipse cx="34" cy="76" rx="13" ry="11" fill="none" ${k('#7a1020',9)}/><ellipse cx="34" cy="76" rx="13" ry="11" fill="none" stroke="#ff5d73" stroke-width="5"/>
  <ellipse cx="66" cy="76" rx="13" ry="11" fill="none" ${k('#7a1020',9)}/><ellipse cx="66" cy="76" rx="13" ry="11" fill="none" stroke="#ff5d73" stroke-width="5"/>
  <path d="M42 62 L36 66 M58 62 L64 66" ${k('#7a1020',5)}/>${etoile(84,40,4)}`);
ART['reveil']=svg(R('rev','#ff9a8a','#e0303a','#a01020','40%','30%'),
 `${ombre(28)}<path d="M28 82 L22 92 M72 82 L78 92" ${k('#3a0a10',4)}/>
  <circle cx="26" cy="22" r="11" fill="#ffd23f" ${k('#a8700a',2.4)}/><circle cx="74" cy="22" r="11" fill="#ffd23f" ${k('#a8700a',2.4)}/>
  <circle cx="50" cy="56" r="32" fill="url(#rev)" ${k('#5a0a10',3)}/><circle cx="50" cy="56" r="24" fill="#fff" ${k('#5a0a10',2.2)}/>
  ${[0,90,180,270].map(a=>`<circle cx="${50+19*Math.cos(a*Math.PI/180)}" cy="${56+19*Math.sin(a*Math.PI/180)}" r="2" fill="#5a0a10"/>`).join('')}
  <path d="M50 56 V40 M50 56 L60 62" ${k('#2a2a3a',3)}/><circle cx="50" cy="56" r="2.6" fill="#e0303a"/>
  <path d="M10 46 l-6 -3 M10 56 h-7 M90 46 l6 -3 M90 56 h7" ${k('#ffd23f',2.6)}/>${brille(36,36,6,3,-30)}`);
/* ================= Événement : fête foraine ================= */
ART['gen:foire']=svg(L('sta','#ff8a8a','#e0303a','#a01020',0,0,1,0),
 `${ombre(38)}<path d="M8 34 L50 8 L92 34 Z" fill="#fff" ${k('#5a0a10',2.6)}/>${[0,1,2,3].map(i=>`<path d="M${50} 8 L${8+i*21} 34 L${18.5+i*21} 34 Z" fill="#e0303a"/>`).join('')}<path d="M8 34 L50 8 L92 34 Z" fill="none" ${k('#5a0a10',2.6)}/>
  <path d="M8 34 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0 q5.25 7 10.5 0" fill="#ffd23f" ${k('#7a5208',1.8)}/>
  <rect x="14" y="44" width="72" height="44" rx="3" fill="url(#sta)" ${k('#5a0a10',2.6)}/><rect x="20" y="52" width="60" height="16" rx="2" fill="#fff6dc" ${k('#5a0a10',2)}/>
  <circle cx="34" cy="60" r="5" fill="#fff" ${k('#c8a060',1.4)}/><circle cx="50" cy="60" r="5" fill="#ff9ac0" ${k('#8a1a4a',1.4)}/><circle cx="66" cy="60" r="5" fill="#e0303a" ${k('#5a0a10',1.4)}/>
  <rect x="20" y="72" width="60" height="10" rx="2" fill="#ffd23f" ${k('#7a5208',1.6)}/><circle cx="50" cy="8" r="3.4" fill="#ffd23f" ${k('#7a5208',1.4)}/>${etoile(88,14,4)}`);
ART['foire:1']=svg(L('mai','#fff59a','#ffd23f','#d8a010',0,0,1,0)+L('fm','#b8f08a','#5fb84a','#2a7a2a'),
 `${ombre(22)}<path d="M50 10 Q66 30 62 70 Q58 86 50 88 Q42 86 38 70 Q34 30 50 10 Z" fill="url(#mai)" ${k('#8a6008',2.6)}/>
  <g fill="#ffe680" stroke="#c8901a" stroke-width=".8">${[22,32,42,52,62,72].map(y=>[-6,0,6].map(x=>`<ellipse cx="${50+x}" cy="${y+(x?3:0)}" rx="2.6" ry="3.4"/>`).join('')).join('')}</g>
  <path d="M50 92 Q30 80 26 46 Q40 60 46 84 Z M50 92 Q70 80 74 46 Q60 60 54 84 Z" fill="url(#fm)" ${k('#1d5717',2.2)}/>${etoile(80,22,3.6)}`);
ART['foire:2']=svg('',`${ombre(28)}${[[36,30],[50,22],[64,30],[42,38],[58,38],[50,32],[30,40],[70,40]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="#fffbe8" ${k('#c8a060',1.6)}/><circle cx="${x-2}" cy="${y-2}" r="3" fill="#ffe8a0"/>`).join('')}
  <path d="M24 42 L32 90 H68 L76 42 Z" fill="#fff" ${k('#7a1020',2.8)}/>${[30,44,58].map(x=>`<path d="M${x} 42 L${x+3} 90 H${x+9} L${x+8} 42 Z" fill="#e0303a"/>`).join('')}
  <path d="M24 42 L32 90 H68 L76 42 Z" fill="none" ${k('#7a1020',2.8)}/>${brille(36,60,3,10,8)}`);
ART['foire:3']=svg('',`${ombre(16)}<path d="M50 52 V94" ${k('#8a7a6a',4)}/><path d="M50 52 V94" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  <circle cx="50" cy="36" r="26" fill="#ff5d9e" ${k('#7a0a3a',3)}/>
  <path d="M50 36 m0 -20 a20 20 0 1 1 -14 6 a14 14 0 1 0 14 -2 a8 8 0 1 1 -6 3" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
  ${brille(38,22,6,3,-30)}`);
ART['foire:4']=svg(R('pam','#ff9a8a','#e0102a','#8a0010','35%','30%'),
 `${ombre(26)}<path d="M50 48 V94" ${k('#5a3415',4)}/><path d="M50 48 V94" stroke="#e8b072" stroke-width="2" stroke-linecap="round"/>
  <path d="M26 66 Q22 40 36 30 Q50 26 50 30 Q50 26 64 30 Q78 40 74 66 Q70 80 50 80 Q30 80 26 66 Z" fill="url(#pam)" ${k('#5a0010',3)}/>
  <path d="M30 70 Q50 86 70 70 L72 78 Q50 92 28 78 Z" fill="#ff3a5a" opacity=".85" ${k('#5a0010',1.6)}/>
  <path d="M50 30 Q52 18 60 14" fill="none" ${k('#4a2a10',3)}/>${brille(36,42,6,10,15)}<circle cx="60" cy="40" r="2.4" fill="#fff"/>`);
ART['foire:5']=svg(R('bap','#ffffff','#ffc0e0','#ff7ab8','40%','35%'),
 `${ombre(18)}<path d="M50 56 V94" ${k('#8a6a4a',4)}/><path d="M50 56 V94" stroke="#f2d6a0" stroke-width="2" stroke-linecap="round"/>
  ${[[50,30,26],[30,38,16],[70,38,16],[40,20,14],[62,20,14],[50,50,16]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#bap)" ${k('#c8407a',2)}/>`).join('')}
  ${[[50,30,22],[30,38,12],[70,38,12],[40,20,10],[62,20,10]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#bap)"/>`).join('')}
  <path d="M36 28 q8 -6 14 0 M54 22 q6 -4 10 0" fill="none" stroke="#fff" stroke-width="2"/>${etoile(84,14,4)}`);
ART['foire:6']=svg(L('chu','#ffd99a','#e5a14a','#a8621e',0,0,1,0),
 `${ombre(30)}<path d="M28 50 L40 92 H60 L72 50 Z" fill="#fff" ${k('#5a6a7a',2.4)}/><path d="M34 70 H66" stroke="#e0303a" stroke-width="4"/>
  ${[[40,-14],[50,-4],[60,10]].map(([x,r])=>`<g transform="rotate(${r} ${x} 50)"><rect x="${x-5}" y="8" width="10" height="56" rx="5" fill="url(#chu)" ${k('#6e3a0a',2.2)}/>${[16,26,36,46].map(y=>`<path d="M${x-4} ${y} h8" stroke="#a8621e" stroke-width="1.6"/>`).join('')}<g fill="#fff">${[14,22,30,40].map(y=>`<circle cx="${x-1}" cy="${y}" r=".9"/><circle cx="${x+2}" cy="${y+4}" r=".9"/>`).join('')}</g></g>`).join('')}
  <ellipse cx="78" cy="78" rx="10" ry="6" fill="#6a3a1a" ${k('#2a1004',2)}/><ellipse cx="76" cy="76" rx="3" ry="1.4" fill="#fff" opacity=".5"/>`);
ART['foire:7']=svg(L('pan7','#ffe2a6','#e8a24a','#a8621e'),
 `${ombre(40)}<path d="M50 30 Q60 8 72 14 Q66 26 56 32 Z" fill="#ff5d9e" ${k('#7a0a3a',2)}/><circle cx="34" cy="26" r="12" fill="#ffc0e0" ${k('#c8407a',2)}/>
  ${[[42,40],[56,38],[66,44],[32,44]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6.4" fill="#fffbe8" ${k('#c8a060',1.4)}/>`).join('')}
  <path d="M74 44 L84 18" ${k('#6e3a0a',6)}/><path d="M74 44 L84 18" stroke="#e5a14a" stroke-width="3" stroke-linecap="round"/>
  <circle cx="26" cy="44" r="9" fill="#e0102a" ${k('#5a0010',2)}/><path d="M26 35 V22" ${k('#5a3415',2)}/>
  <path d="M10 48 H90 L80 90 H20 Z" fill="url(#pan7)" ${k('#5a3415',3)}/><g stroke="#8a5424" stroke-width="2.2" fill="none" opacity=".9"><path d="M14 60 H86 M17 72 H83 M34 50 L36 89 M50 50 V90 M66 50 L64 89"/></g>
  <rect x="8" y="43" width="84" height="9" rx="4.5" fill="#ff5d73" ${k('#7a1020',2.4)}/><path d="M50 52 l6 10 h-12 z" fill="#ffd23f" ${k('#7a5208',1.4)}/>${etoile(90,30,4)}${etoile(10,24,3)}`);
ART['deco:e1']=svg('',`${ombre(42)}<path d="M8 50 L50 8 L92 50 Z" fill="#fff" ${k('#5a0a10',3)}/>${[0,1,2,3,4,5].map(i=>`<path d="M50 8 L${8+i*14} 50 L${15+i*14} 50 Z" fill="#e0303a"/>`).join('')}<path d="M8 50 L50 8 L92 50 Z" fill="none" ${k('#5a0a10',3)}/>
  <rect x="12" y="50" width="76" height="38" fill="#fff" ${k('#5a0a10',2.6)}/>${[12,28,44,60,76].map(x=>`<rect x="${x}" y="50" width="8" height="38" fill="#e0303a"/>`).join('')}
  <rect x="12" y="50" width="76" height="38" fill="none" ${k('#5a0a10',2.6)}/><path d="M38 88 V66 Q50 54 62 66 V88 Z" fill="#3a1a4a" ${k('#1a0a2a',2)}/>
  <path d="M50 8 V-2" ${k('#5a0a10',2)}/><path d="M50 0 l12 4 l-12 4" fill="#ffd23f" ${k('#7a5208',1.4)}/>
  <path d="M8 50 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0 q7 6 14 0" fill="#ffd23f" ${k('#7a5208',1.8)}/>${etoile(14,20,4)}${etoile(88,24,4)}`);

/* ================= Main du tutoriel (bout du doigt en 38,8) ================= */
ART['main']=svg(L('gant','#ffffff','#f4f6fa','#c8d0dc',0,0,1,1),
 `<path d="M31 50 V14 Q31 6 38 6 Q45 6 45 14 V42 Q48 36 55 38 Q60 34 66 38 Q72 35 77 40 Q84 42 84 52 V70 Q84 92 62 94 H52 Q38 94 30 80 L16 60 Q12 52 19 49 Q25 47 31 56 Z" fill="url(#gant)" ${k('#2a2a3a',3.4)}/>
  <path d="M45 42 V54 M60 40 V54 M74 42 V56" fill="none" stroke="#8a94a6" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M36 70 Q56 76 78 70" fill="none" stroke="#c8d0dc" stroke-width="2.4"/>
  <path d="M35 12 Q36 9 39 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`);

window.ART_CUISINE=ART;
})();
