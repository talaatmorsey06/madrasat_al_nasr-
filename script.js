const data={
 "الأول":["اللغة العربية","الرياضيات","التربية الدينية","اللغة الإنجليزية"],
 "الثاني":["اللغة العربية","الرياضيات","اللغة الإنجليزية","التربية الفنية"],
 "الثالث":["اللغة العربية","الرياضيات","العلوم","اللغة الإنجليزية"],
 "الرابع":["اللغة العربية","الرياضيات","العلوم","الدراسات الاجتماعية","الحاسوب"],
 "الخامس":["اللغة العربية","الرياضيات","العلوم","الدراسات الاجتماعية","الحاسوب"],
 "السادس":["اللغة العربية","الرياضيات","العلوم","الدراسات الاجتماعية","الحاسوب"]
};
const tabs=document.getElementById('tabs'),box=document.getElementById('subjects');
function show(g){
 [...tabs.children].forEach(b=>b.classList.toggle('on',b.dataset.g===g));
 box.innerHTML=data[g].map(s=>'<div class="card"><div class="em">📘</div><h3>'+s+'</h3><p>الصف '+g+' الابتدائي</p></div>').join('');
}
Object.keys(data).forEach(g=>{const b=document.createElement('button');b.className='tab';b.dataset.g=g;b.textContent='الصف '+g;b.onclick=()=>show(g);tabs.appendChild(b)});
show("الأول");

document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));

const root=document.documentElement,tb=document.getElementById('theme');
function dark(){return root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
function sync(){tb.textContent=dark()?'☀️':'🌙'}
tb.onclick=()=>{root.dataset.theme=dark()?'light':'dark';sync()};sync();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.n;let c=0;const t=setInterval(()=>{c+=Math.ceil(n/40);if(c>=n){c=n;clearInterval(t)}el.textContent=c},30);io.unobserve(el)}),{threshold:.5});
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));

document.getElementById('form').onsubmit=e=>{
 e.preventDefault();
 const m=document.getElementById('msg'),n=name.value.trim(),p=phone.value.trim(),t=text.value.trim();
 if(!n||!t||!/^[0-9+\s-]{8,15}$/.test(p)){m.className='msg err';m.textContent='من فضلك أكمل الحقول وأدخل رقم هاتف صحيحًا.';return}
 m.className='msg ok';m.textContent='شكرًا '+n+'، تم استلام رسالتك وسنتواصل معك قريبًا.';e.target.reset();
};
document.getElementById('y').textContent=new Date().getFullYear();