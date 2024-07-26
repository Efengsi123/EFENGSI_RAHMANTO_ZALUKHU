// memenggil queryselector signup-container
let signupContainer = document.querySelector('.signup-container');
signupContainer.classList.add('container');

// membuat elemen h1 judul daftar
let judulHalaman = document.createElement('h1');
judulHalaman.textContent = 'Daftar DrakorinAja';
signupContainer.appendChild(judulHalaman);

// membuat elemen form
let signupForm = document.createElement('form');
signupForm.id = 'signupForm';
signupContainer.appendChild(signupForm);

// membuat elemen div
let emailGroup = document.createElement('div');
emailGroup.classList.add('input-group');

// membuat elemen label
let emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'signupEmail');
emailLabel.textContent = 'Email';

// membuat elemen input dan type nya
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'signupEmail';
emailInput.required = true;
emailGroup.appendChild(emailLabel);
emailGroup.appendChild(emailInput);
signupForm.appendChild(emailGroup);

// membuat elemen div
let passwordGroup = document.createElement('div');
passwordGroup.classList.add('input-group');

// membuat elemen label
let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'signupPassword');
passwordLabel.textContent = 'Password';

// membuat elemen input dan type nya
let passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'signupPassword';
passwordInput.required = true;
passwordGroup.appendChild(passwordLabel);
passwordGroup.appendChild(passwordInput);
signupForm.appendChild(passwordGroup);

// membuat elemen button
let signupButton = document.createElement('button');
signupButton.type = 'submit';
signupButton.textContent = 'Daftar';
signupForm.appendChild(signupButton);

// membuat elemen p dan ancor untuk menghubungkan kehalamn login
let loginLink = document.createElement('p');
loginLink.classList.add('login-link');
loginLink.textContent = 'Sudah punya akun? ';
let loginAnchor = document.createElement('a');
loginAnchor.href = '#';
loginAnchor.textContent = 'Login di sini';
//Menambahkan event listener ke elemen loginpAnchor yang merupakan tautan untuk login.
//Fungsi callback yang dijalankan ketika tautan diklik.
loginAnchor.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '../html/login.html';
});
loginLink.appendChild(loginAnchor);
signupForm.appendChild(loginLink);

//Menambahkan event listener ke elemen loginForm yang merupakan formulir login.
//ungsi callback yang dijalankan ketika formulir dikirimkan (submit).
signupForm.addEventListener('submit', function(event) {
    //Mencegah perilaku default dari formulir yang biasanya akan mengirimkan data dan memuat ulang halaman.
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Akun berhasil dibuat! Anda akan diarahkan ke halaman utama.');
        window.location.href = '../html/index.html';
    } else {
        alert('Email dan password harus diisi.');
    }
});