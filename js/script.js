// ملف script.js أو داخل <script> في آخر الـ HTML

// نحدد جميع روابط "عرض المزيد"
const serviceLinks = document.querySelectorAll('a#services-link');

serviceLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    alert('تفاصيل الخدمة سيتم إضافتها لاحقًا ✨');
  });
});
// ملف script.js أو داخل <script>

const sec2 = document.getElementById('sec2');

window.addEventListener('scroll', () => {
  const sec2Position = sec2.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sec2Position < screenPosition) {
    sec2.style.background = 'linear-gradient(to left, #f6d365, #fda085)';
    sec2.style.transition = 'background 1s ease';
  } else {
    sec2.style.background = ''; 
  }
});
// ملف script.js أو داخل <script>

const navLinks = document.querySelectorAll('nav ul.links li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
