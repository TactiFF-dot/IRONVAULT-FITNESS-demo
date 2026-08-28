const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const nav=$('#nav'),progress=$('#progress');
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>30);const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+'%'});
$$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'});$('#mobileMenu').classList.remove('show')}));
$('#menu').addEventListener('click',()=>$('#mobileMenu').classList.toggle('show'));
$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>$('#mobileMenu').classList.remove('show')));
const modal=$('#modal');
$$('.join').forEach(b=>b.addEventListener('click',()=>{$('#modalSub').innerHTML='Selected plan: <b>'+b.dataset.plan+'</b>';modal.classList.add('show')}));
$('#close').onclick=()=>modal.classList.remove('show');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
$('#form').addEventListener('submit',e=>{e.preventDefault();modal.classList.remove('show');showToast('APPLICATION RECEIVED — WELCOME TO THE VAULT');e.target.reset()});
$$('[data-program]').forEach(b=>b.addEventListener('click',()=>{showToast(b.dataset.program+' PROGRAM SELECTED');document.querySelector('#membership').scrollIntoView({behavior:'smooth'})}));
$('#play').addEventListener('click',()=>showToast('CINEMATIC TOUR — DEMO PREVIEW'));$('#tour').addEventListener('click',()=>showToast('VAULT TOUR — DEMO MODE'));
let tt;function showToast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>x.classList.remove('show'),2200)}
let meter=87,dir=1;setInterval(()=>{meter+=dir;if(meter>=94||meter<=84)dir*=-1;$('#meter').textContent=meter},1800);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(25px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,fill:'forwards',easing:'cubic-bezier(.2,.8,.2,1)'});io.unobserve(e.target)}}),{threshold:.12});
$$('.program,.price,.featureList>div,.facilityGrid>div').forEach(x=>io.observe(x));