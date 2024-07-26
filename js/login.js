let loginContainer = document.querySelector('.login-container');
loginContainer.classList.add('container');

let judulHalaman = document.createElement('h1');
judulHalaman.textContent = 'DrakorinAja';
loginContainer.appendChild(judulHalaman);

let loginForm = document.createElement('form');
loginForm.id = 'login-form';
loginContainer.appendChild(loginForm);

let emailGroup = document.createElement('div');
emailGroup.classList.add('input-group');
let emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email';
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.required = true;
emailGroup.appendChild(emailLabel);
emailGroup.appendChild(emailInput);
loginForm.appendChild(emailGroup);

let passwordGroup = document.createElement('div');
passwordGroup.classList.add('input-group');
let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password';
let passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.required = true;
passwordGroup.appendChild(passwordLabel);
passwordGroup.appendChild(passwordInput);
loginForm.appendChild(passwordGroup);

let loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Login';
loginForm.appendChild(loginButton);

let signupLink = document.createElement('p');
signupLink.classList.add('signup-link');
signupLink.textContent = 'Belum punya akun? ';
let signupAnchor = document.createElement('a');
signupAnchor.href = '#';
signupAnchor.textContent = 'Daftar sekarang';
//Menambahkan event listener ke elemen signupAnchor yang merupakan tautan untuk pendaftaran.
//Fungsi callback yang dijalankan ketika tautan diklik.
signupAnchor.addEventListener('click', function(event) {
    event.preventDefault();
    //Mengarahkan pengguna ke halaman login.html ketika tautan diklik.
    window.location.href = '../html/daftar.html';
});
signupLink.appendChild(signupAnchor);
loginForm.appendChild(signupLink);

//Menambahkan event listener ke elemen loginForm yang merupakan formulir login.
//ungsi callback yang dijalankan ketika formulir dikirimkan (submit).
loginForm.addEventListener('submit', function(event) {
    //Mencegah perilaku default dari formulir yang biasanya akan mengirimkan data dan memuat ulang halaman.
    event.preventDefault();
    //Mengambil nilai dari input email yang dimasukkan pengguna.
    const email = emailInput.value;
    const password = passwordInput.value;

    //Mengambil email yang tersimpan di localStorage.
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = '../html/index.html';
    } else {
        alert('Email atau password salah atau akun belum terdaftar.');
    }
});