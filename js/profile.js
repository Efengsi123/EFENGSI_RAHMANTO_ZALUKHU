document.addEventListener("DOMContentLoaded", () => {
   const switchToSignup = document.getElementById('switch-to-signup');
   const switchToSignin = document.getElementById('signIn');
   const container = document.querySelector('.container');
   const loginForm = document.getElementById('login-form');
   const signupForm = document.getElementById('signup-form');

   switchToSignup.addEventListener('click', () => {
       container.classList.add("right-panel-active");
   });

   switchToSignin.addEventListener('click', () => {
       container.classList.remove("right-panel-active");
   });

   signupForm.addEventListener('submit', (e) => {
       e.preventDefault();

       const name = document.getElementById('signup-name').value;
       const email = document.getElementById('signup-email').value;
       const password = document.getElementById('signup-password').value;

       // Simpan data pengguna 
       localStorage.setItem('signupName', name);
       localStorage.setItem('signupEmail', email);
       localStorage.setItem('signupPassword', password);

       alert('Selamat, Anda telah berhasil mendaftar!');
   });

   loginForm.addEventListener('submit', (e) => {
       e.preventDefault();

       const email = document.getElementById('login-email').value;
       const password = document.getElementById('login-password').value;

       // Validasi login (contoh sederhana, sebaiknya menggunakan server)
       const signupEmail = localStorage.getItem('signupEmail');
       const signupPassword = localStorage.getItem('signupPassword');

       if (email === 'penterzozo5@gmail.com' && password === '#panter1234Zooo') {
           window.location.href = "../html/index.html";
       } else {
           alert('Email atau password salah!');
       }
   });
});
