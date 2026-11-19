/* Menu UJI · Jelajah IPA Kelas 8 (bab Energi). Data soal ada di uji-data.js */
(function(){
const SHOW=true; /* true = tampilkan nama besaran di bawah simbol; false = simbol saja */
const A='ABCD',N=()=>UJI_DATA.length;
const css=document.createElement('style');
css.textContent='.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:10px;margin:14px 0}.sb{border:2px solid #ffffff30;border-radius:14px;padding:10px 8px;background:#ffffff14;color:#fff;font:inherit;cursor:pointer;text-align:center}.sb b{display:block;font:700 24px Consolas,monospace}.sb small{display:block;font-size:11px;opacity:.85;margin-top:2px}.sb.on{background:#ffb81c;color:#3a2a00;border-color:#ffd978}.sb.ok{background:#1b8a46;border-color:#6af0a0}.sb.no{background:#c62f2f;border-color:#ff9a9a}.sb.ms{border:2px dashed #6af0a0}.sb.op{border:2px dashed #6af0a0;background:#1b8a4633}.sb:disabled{cursor:default}.ut{margin:20px 0 4px;font-size:12px;letter-spacing:.08em;color:#ffd978;text-transform:uppercase}.ub{border-radius:12px;padding:12px 14px;margin:10px 0;background:#ffffff1a;border-left:4px solid #ffd978}.ub b{display:block;font-size:12px;letter-spacing:.06em;color:#ffd978;margin-bottom:4px}.ub p{margin:4px 0}.si{max-width:100%;background:#fff;border-radius:12px;padding:6px;margin:10px 0}.rc blockquote{margin:6px 0;padding:2px 12px;border-left:3px solid #1f4aa8;background:#eef3ff;border-radius:6px}.rc blockquote p{margin:4px 0}.rc .underline{text-decoration:underline}.rc img{max-width:100%}.q table,.rc table{border-collapse:collapse;margin:10px 0}.q th,.q td{border:1px solid #ffffff66;padding:6px 14px;text-align:center}.rc th,.rc td{border:1px solid #b9c4dc;padding:6px 12px;text-align:center}.rc th{background:#eef3ff}.q blockquote{margin:8px 0;padding:2px 12px;border-left:3px solid #ffd978;background:#ffffff14;border-radius:6px}.q blockquote p{margin:4px 0}';
document.head.append(css);
let U={nm:null,i:0,a:{}};
const kk=()=>'jipa-uji:'+NM.toLowerCase(),sv=()=>{try{localStorage.setItem(kk(),JSON.stringify(U.a))}catch(e){}},dn=a=>a&&a.a>=0;
function ld(){if(U.nm===NM)return;U.nm=NM;try{U.a=JSON.parse(localStorage.getItem(kk()))||{}}catch(e){U.a={}}let i=0;while(i<N()&&dn(U.a[i]))i++;U.i=role=='guru'?0:i}
const gs=i=>U.a[i]||(U.a[i]={g:UJI_DATA[i].st?0:2,s:[[],[]],c:[0,0],a:-1});
const tk=t=>{const[y,n]=t.split('|');return{y,n:n||SY[y]||''}};
const nm=(d,y)=>{const t=d.o.map(tk).find(x=>x.y==y);return t?t.y+' ('+t.n+')':y};
const ttl=['DIKETAHUI','DITANYA'],ask=['Pilih semua besaran yang <b>diketahui</b> dari soal (ketuk simbolnya, boleh lebih dari satu).','Sekarang pilih besaran yang <b>ditanya</b> pada soal.'];
const kl=d=>d.k.map(y=>nm(d,y)).join(' · ')+(d.p.length?' <small>(boleh juga: '+d.p.map(y=>nm(d,y)).join(', ')+')</small>':'');
const good=(d,s)=>d.k.every(y=>s.includes(y))&&s.every(y=>d.k.includes(y)||d.p.includes(y));
const fb=(d,j,ok)=>'<div class="an '+(ok?'good':'bad')+'">'+(ok?'✔ Tepat! ':'✘ Belum tepat. ')+(j?'Yang ditanya: ':'Yang diketahui: ')+kl(d)+'</div><div class="ub"><b>PEMBAHASAN</b>'+d.n+'</div>';
function chips(d,sel,m){return'<div class="sg">'+d.o.map((t,x)=>{const{y,n}=tk(t),on=sel.includes(y),rq=d.k.includes(y),op=d.p.includes(y);
const c=m==0?(on?'on':''):m==1?(on?(rq||op?'ok':'no'):(rq?'ms':'')):(rq?'ok':op?'op':'');
return'<button class="sb '+c+'" data-a="q_t'+x+'"'+(m?' disabled':'')+'><b>'+y+'</b>'+(SHOW?'<small>'+n+'</small>':'')+'</button>'}).join('')+'</div>'}
const opts=(q,s)=>'<div class="op">'+q.o.map((t,k)=>'<button data-a="q_a'+k+'" class="'+(s!=-1?(k==q.k?'ok':s==k?'no':''):'')+'"'+(s!=-1?' disabled':'')+'><i>'+A[k]+'</i><span>'+t+'</span></button>').join('')+'</div>';
const res=(q,k)=>'<div class="an '+(k==q.k?'good':'bad')+'">'+(k==q.k?'✔ Benar! Jawabannya '+A[q.k]+'.':'✘ Belum tepat. Jawaban yang benar: '+A[q.k]+'.')+'</div>';
const body=(q,g)=>'<div class="rc"><h2>Pembahasan</h2>'+q.pb+'</div>'+(g&&q.ct?'<div class="ub"><b>CATATAN PENGAJAR</b>'+q.ct+'</div>':'');
function view(keep){ld();const g=role=='guru',n=N(),y=VW.scrollTop;base();if(U.i>=n)return fin();
const i=U.i,q=UJI_DATA[i],a=gs(i),H=q.st;
let o='<div class="pg"><i style="width:'+(i/n*100)+'%"></i></div><div class="pill">'+(g?'MODE PENGAJAR':'MODE SISWA')+(H?' · SOAL HITUNGAN':' · SOAL KONSEP')+'</div><h2>Soal '+q.n+'</h2><div class="q">'+q.q+'</div>'+(q.img?'<img class="si" src="/uji/'+q.img+'" alt="Gambar soal '+q.n+'">':'');
if(g){if(H)o+=[0,1].map(j=>'<h3 class="ut">'+(j+1)+' · '+ttl[j]+'</h3>'+chips(H[j],[],2)+'<div class="ub"><b>KUNCI</b>'+kl(H[j])+'<p>'+H[j].n+'</p></div>').join('');o+=(H?'<h3 class="ut">3 · JAWABAN</h3>':'')+opts(q,q.k)+body(q,1)}
else if(a.g<2){const s=a.g,d=H[s],sel=a.s[s],ck=a.c[s];o+='<h3 class="ut">Langkah '+(s+1)+' dari 3 · '+ttl[s]+'</h3><p class="q">'+ask[s]+'</p>'+chips(d,sel,ck?1:0)+(ck?fb(d,s,good(d,sel))+'<button class="pr" data-a="q_g">'+(s?'Lanjut: pilih jawaban ▶':'Lanjut: apa yang ditanya? ▶')+'</button>':(sel.length?'<button class="pr" data-a="q_c">Periksa</button>':'<p class="lm" style="color:#ffffffb0">Pilih minimal satu simbol.</p>'))}
else o+=(H?'<h3 class="ut">Langkah 3 dari 3 · JAWABAN</h3>':'')+opts(q,a.a)+(a.a>=0?res(q,a.a)+body(q,0):'');
o+='<div class="nv">'+(i?'<button data-a="q_p">◀ Soal sebelumnya</button>':'')+((g||dn(a))?'<button class="pr" data-a="q_n">'+(i==n-1?'Selesai':'Soal berikutnya ▶')+'</button>':'')+'</div>';
vw(hd('Uji · Soal '+(i+1)+' dari '+n,'b0')+'<div class="bd">'+o+'</div>');if(keep)VW.scrollTop=y}
function fin(){const n=N(),ok=UJI_DATA.filter((q,i)=>U.a[i]&&U.a[i].a==q.k).length;vw(hd('Uji · Selesai','b0')+'<div class="bd"><h2>🎉 Uji selesai!</h2><p class="q">'+(role=='guru'?'Semua soal dan pembahasan sudah dibahas.':'Jawaban akhirmu benar '+ok+' dari '+n+' soal.')+'</p><button class="pr" data-a="q_r">Ulangi uji</button></div>')}
window.ujiView=()=>view();
window.ujProg=()=>{ld();const n=N(),d=Object.values(U.a).filter(dn).length;return role=='guru'?[n+' soal + pembahasan',0]:[d+' dari '+n+' soal dijawab',d/n*100]};
window.ujAct=a=>{if(a=='q_uji'){go('uji');return 1}if(a.slice(0,2)!='q_')return 0;ld();const i=U.i,q=UJI_DATA[i]||{},c=a.slice(2),s=q.st&&gs(i);
if(c[0]=='t'){const l=s.s[s.g],y=tk(q.st[s.g].o[+c.slice(1)]).y,x=l.indexOf(y);x<0?l.push(y):l.splice(x,1);sv();view(1)}
else if(c=='c'){s.c[s.g]=1;sv();view(1)}else if(c=='g'){s.g++;sv();view()}
else if(c[0]=='a'){gs(i).a=+c[1];sv();view(1)}
else if(c=='p'){U.i--;view()}else if(c=='n'){U.i++;view()}
else if(c=='r'){U.a={};U.i=0;sv();view()}
return 1};
})();
