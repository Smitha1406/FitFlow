// main.js — simple interactivity for nav, modal and canvas
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const openModal = document.getElementById('open-modal');
  const openModal2 = document.getElementById('open-modal-2');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('close-modal');

  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('hidden');
      navLinks.classList.toggle('hidden');
    });
  }
  if(openModal) openModal.addEventListener('click', ()=> modal.classList.remove('hidden'));
  if(openModal2) openModal2.addEventListener('click', ()=> modal.classList.remove('hidden'));
  if(closeModal) closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));

  // close modal on backdrop click
  modal.addEventListener('click', (e)=>{
    if(e.target === modal) modal.classList.add('hidden');
  });

  // Canvas: pulse animation
  const canvas = document.getElementById('pulseCanvas');
  if(canvas){
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth * devicePixelRatio;
    let height = canvas.height = 200 * devicePixelRatio;
    let t = 0;

    function resize(){ 
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = 200 * devicePixelRatio;
    }
    window.addEventListener('resize', resize);

    function draw(){
      ctx.clearRect(0,0,width,height);
      // background bar
      ctx.fillStyle = 'rgba(99,102,241,0.06)';
      ctx.fillRect(0,0,width,height);
      // pulsating circles
      const cx = width / 2, cy = height / 2;
      for(let i=0;i<4;i++){
        const radius = 20 + (Math.sin(t + i*0.9) + 1) * 24 + i*6;
        ctx.beginPath();
        ctx.arc(cx,cy,radius,0,Math.PI*2);
        ctx.strokeStyle = 'rgba(34,197,94,' + (0.5 - i*0.1) + ')';
        ctx.lineWidth = 6 - i;
        ctx.stroke();
      }
      t += 0.03;
      requestAnimationFrame(draw);
    }
    draw();
  }
});
