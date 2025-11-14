document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // lightbox
  const galleryImgs = Array.from(document.querySelectorAll('#gallery .card img'));
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  function open(img){
    lbImg.src = img.dataset.full || img.src;
    lbImg.alt = img.alt || '';
    lbCaption.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : img.alt || '';
    lb.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function close(){
    lb.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow='';
  }
  galleryImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', ()=> open(img));
    img.addEventListener('keydown', (e)=> { if(e.key==='Enter') open(img); });
    img.tabIndex = 0;
  });
  lbClose.addEventListener('click', close);
  lb.addEventListener('click', (e)=> { if(e.target === lb) close(); });
  document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') close(); });

  // Simple form submission hint (no JS required)
});
