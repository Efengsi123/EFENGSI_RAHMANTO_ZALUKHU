

fetch("https://drakorin.vercel.app/api/movie/get-all")
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {

    const images = [
      {
          url: 'url("https://pic4.iqiyipic.com/image/20240706/7d/a9/a_100474264_m_601_en_720_405.jpg")',
          detail: {
              title: "Her Fantastic Adventures",
              rating: 9.7,
              age: "13+",
              year: 2024, 
              episodes: 36,
              categories: ["Drama Korea", "Percintaan", "Komedi", "Persahabatan", "Remaja"],
              director: "Zhang Wei Ke",
              cast: ["Ireine Song", "Song Yi", "Chen Yao", "Cheng Lei", "Huang Ri Ying", "Gu Zi Cheng"],
              description: `"Her Fantastic Adventures" adalah drama kolosal romantis yang disutradarai oleh Zhong Zhong "Love is Sweet", dibintangi oleh Luo Yunxi "Ashes of Love" dan Song Yi "Joy of Life 1". Drama ini bercerita tentang ...`,
              vipPrice: "Rp19,000 untuk bulan pertama"
          }
      },
      {
          url: 'url("https://pic1.iqiyipic.com/image/20210429/2c/3f/a_100451529_m_601_en_1013_569.jpg")',
          detail: {
            title: "Dark Hole",
            rating: 8.7,
            age: "18+",
            year: 2021,
            episodes: 12,
            categories: ["Drama Korea", "Horor", "Laga", "Petualangan", "Fiksi ilmiah", "Ketegangan", "Misteri"],
            director: "zeru tao",
            cast: ["Kim Ok-vin", "Oh Yoo-jin", "Lee Joon-hyuk", "liang jing", "Kong Lin", "Dong Yong"],
            description: "Dark Hole adalah seri televisi Korea Selatan tahun 2021 yang dibintangi oleh Kim Ok-vin dan Lee Joon-hyuk. Dark Hole merupakan seri kelima dari proyek Dramatic Cinema",
            vipPrice: "Rp19,000 untuk bulan pertama"
          }
      },
      {
        url: 'url("https://www.viu.com/ott/id/articles/wp-content/uploads/2024/02/nonton-streaming-pyramid-game-sub-indo-slide-banner-viu-1.jpg")',
        detail: {
          title: "Pyramid Game",
          rating: 8.5,
          age: "18+",
          year: 2024,
          episodes: 10,
          categories: ["Drama Korea", "Cerita Seru Psikologis", "Misteri", "Drama"],
          director: "Park So-yeon",
          cast: ["Jang Da-a", "Bona", "Ryu Da-bin", "shin seul ki", "Kang Na Eon", "Ha Yul-ri"],
          description: "Pyramid Game adalah seri televisi penjaliran cerita seru psikologis Korea Selatan yang dibuat oleh Lee Jae-gyun, ditulis oleh Choi Soo-i, disutradarai oleh Park So-yeon",
          vipPrice: "Rp19,000 untuk bulan pertama"
        }
    },
    {
      url: 'url("https://mgmall.s3.amazonaws.com/img/052023/7edb9f7477f725ecf58d57aed10862a649df7976.jpg")',
      detail: {
        title: "One Ordinary Day",
        rating: 9.5,
        age: "15+",
        year: 2021,
        episodes: 8,
        categories: ["Drama Korea",  "Misteri", "Cerita Seru", "Drama Ruang Pengadilan", "Fiksi Kriminal"],
        director: "Peter Moffat",
        cast: ["Kim Soo-hyun", "Cha Seung-won","Kim Yoo-jung","Hwang Se On","Kim Sung-kyu","Lee Seol","Moon Ye-won"],
        description: "One Ordinary Day adalah seri web Korea Selatan yang dibintangi oleh Kim Soo-hyun dan Cha Seung-won. Seri televisi ini didasarkan pada seri televisi Inggris Criminal Justice yang ditulis oleh Peter Moffat.",
        vipPrice: "Rp19,000 untuk bulan pertama"
      }
    },
    {
      url: 'url("https://unifers.unifa.ac.id/zg-content/uploads/B1000606-Cover-Sinopsis-Daily-Dose-of-Sunshine.jpg")',
      detail: {
        title: "Daily Dose of Sunshine",
        rating: 8.9,
        age: "18+",
        year: 2023,
        episodes: 12,
        categories: ["Drama Korea",  "Drama", "Film Komedi", "Drama Medis"],
        director: "Lee Jae-gyu",
        cast: ["Park Bo-young", "Yeon Woo-jin", "Jang Dong-yoon", "Lee Jung-eun"],
        description: "Daily Dose of Sunshine adalah seri televisi streaming Korea Selatan yang disutradarai oleh Lee Jae-gyu, dan dibintangi oleh Park Bo-young, Yeon Woo-jin, Jang Dong-yoon, dan Lee Jung-eun.",
        vipPrice: "Rp19,000 untuk bulan pertama"
      }
    },
    {
      url: 'url("https://cdns.klimg.com/kapanlagi.com/p/coverdramakorealovealarm.jpg")',
      detail: {
        title: "Love Alarm",
        rating: 9.8,
        age: "18+",
        year: 2019,
        episodes: 14,
        categories: ["Drama Korea", "Roman", "Acara realitas", "Horor", "Laga", "Film Komedi"],
        director: "Chon Kye-young",
        cast: ["Kim So-hyun", "Song Kang", "Jung Ga-ram","Go Min-si","Song Geon-hee","Kim Si-eun","Shin Seung-ho"],
        description: "Love Alarm adalah seri televisi romantis Korea Selatan. Seri ini berdasarkan pada webtoon dengan judul yang sama karya Chon Kye-young. Dibintangi oleh Kim So-hyun, Song Kang, dan Jung Ga-ram",
        vipPrice: "Rp19,000 untuk bulan pertama"
      }
    }
  ];
  // images.classList.add("cover");

    
  
    let ulangi = 0;
    const header = document.querySelector('.header-bg');
    const headerContent = document.querySelector(".header-content");
  
    function ubahLatarBelakangDanDetail() {
      header.style.backgroundImage = images[ulangi].url;
      const detail = images[ulangi].detail;

      //Membersihkan isi 
      headerContent.textContent = '';

      // Buat elemen untuk judul
      const titleBackground = document.createElement('h1');
      titleBackground.classList.add('title-background');
      titleBackground.textContent = detail.title;
      headerContent.appendChild(titleBackground);

      // Buat elemen untuk kotak rating
      const kotakrating = document.createElement('div');
      kotakrating.classList.add('kotak-rating');

      // Buat elemen untuk bintang
      const bintang = document.createElement('i');
      bintang.classList.add('bx');
      bintang.classList.add('bx-star');
      kotakrating.appendChild(bintang);

      // Buat elemen untuk rating
      const rating = document.createElement('span');
      rating.classList.add('rating');
      rating.textContent = detail.rating;
      kotakrating.appendChild(rating);

      // Buat elemen untuk garis [ | ] pertama
      const garisLurusSatu = document.createElement('span');
      garisLurusSatu.classList.add('garis-lurus-satu');
      garisLurusSatu.textContent = '|';
      kotakrating.appendChild(garisLurusSatu);

      // Buat elemen untuk age
      const umur = document.createElement('span');
      umur.classList.add('umur');
      umur.textContent = detail.age;
      kotakrating.appendChild(umur);

      // Buat elemen untuk garis [ | ] kedua
      const garisLurusDua = document.createElement('span');
      garisLurusDua.classList.add('garis-lurus-dua');
      garisLurusDua.textContent = '|';
      kotakrating.appendChild(garisLurusDua);

      // Buat elemen untuk Tahun
      const tahun = document.createElement('span');
      tahun.classList.add('tahun');
      tahun.textContent = detail.year;
      kotakrating.appendChild(tahun);

      // Buat elemen untuk garis [ | ] kedua
      const garisLurusTiga = document.createElement('span');
      garisLurusTiga.classList.add('garis-lurus-dua');
      garisLurusTiga.textContent = '|';
      kotakrating.appendChild(garisLurusTiga);

      // Buat elemen untuk Tahun
      const episode = document.createElement('span');
      episode.classList.add('episode');
      episode.textContent = detail.episodes;
      kotakrating.appendChild(episode);

      // Buat elemen untuk teks Episode
      const episodeText = document.createElement('span');
      episodeText.classList.add('episodeText-text');
      episodeText.textContent = 'Episode';
      kotakrating.appendChild(episodeText);
      headerContent.appendChild(kotakrating);

      // Buat elemen untuk kotak gendre
      const gendre = document.createElement('div');
      gendre.classList.add('gendre');
      // Buat perulangan untuk menampilkan categories
      detail.categories.forEach(category => {
        const textCategory = document.createElement('span');
        textCategory.textContent = category;
        textCategory.classList.add('text-category');
        gendre.appendChild(textCategory);
      });
      headerContent.appendChild(gendre);

      // Buat elemen untuk kotak harga
      const kotakHarga = document.createElement('div');
      kotakHarga.classList.add('kotak-harga');

      // Buat elemen untuk harga
      const harga = document.createElement('p');
      harga.classList.add('harga');
      harga.textContent = `VIP standar hanya ${detail.vipPrice}`;
      kotakHarga.appendChild(harga);
      headerContent.appendChild(kotakHarga);

      // Buat elemen untuk director
      const director = document.createElement('p');
      director.classList.add('director');
      director.textContent = `Sutradara : ${detail.director}`;
      headerContent.appendChild(director);

      // Buat elemen untuk pemeran utama
      const actor = document.createElement('p');
      actor.classList.add('actor');
      actor.textContent = `Pemeran utama : ${detail.cast.join(", ")}`;
      headerContent.appendChild(actor);

      // Buat elemen untuk deskripsi
      const deskripsi = document.createElement('p');
      deskripsi.classList.add('deskripsi');
      deskripsi.textContent = `Deskripsi : ${detail.description}`;
      headerContent.appendChild(deskripsi);


      // Update index untuk gambar dan detail berikutnya
      ulangi = (ulangi + 1) % images.length;
    }
  
    // Ganti background setiap 5 detik
    setInterval(ubahLatarBelakangDanDetail, 5000);
    // Memanggil fungsi pertama kali untuk mengatur background saat halaman dimuat
    ubahLatarBelakangDanDetail();


    // Ambil 5 drama Trending (index 0-4)
    displayTrendingContent(res.data.slice(0, 5));

    // Ambil 5 drama Populer (index 20-24)
    displayPopulerContent(res.data.slice(15, 20));

    // Ambil 5 drama Romance (index 30-34)
    displayRomanceContent(res.data.slice(30, 35));

    // Ambil 5 drama Action (index 40-44)
    displayActionContent(res.data.slice(45, 50));

  });


// ==================== Klik ==============================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
  });

});

//===========================================================================================//
//=========================== Fungsi untuk menampilkan konten Trending =======================//
//============================================================================================//
function displayTrendingContent(data) {
  let content = document.querySelector('.content');

  // Tambahkan judul kategori Trending
  let categoryTrending = document.querySelector('.categoryTrending');
  let trending = document.createElement('h1');
  trending.classList.add("trending");
  trending.textContent = "Trending";
  categoryTrending.appendChild(trending);

  // Tambahkan tombol "Lead More" untuk Trending
  let moreTrending = document.querySelector('.moreTrending');
  let leadMoreTrend = document.createElement('a');
  leadMoreTrend.classList.add("leadMoreTrend");
  leadMoreTrend.textContent = "Lead More";
  moreTrending.appendChild(leadMoreTrend);

  // Loop untuk menampilkan drama Trending
  data.forEach(function(drama, index) {
    let box = document.createElement('div');
    box.classList.add("box");

    let img = document.createElement('img');
    img.setAttribute("src", drama.poster);
    img.classList.add('poster');
    
    let gradasi = document.createElement('div');
    gradasi.classList.add('gradasi');

    let nama = document.createElement('p');
    nama.classList.add('kualitas');
    nama.textContent = 'Trending';

    // Buat elemen p untuk title
    const title = document.createElement('p');
    title.classList.add('title');

    // Array indeks yang ingin di style;
    let arrayIndex = [0, 2];
    let arrayIndexDua = [1, 3];
    let arrayIndexTiga = [4];

    // Tengahkan judul jika indeks ada di dalam centeredIndexes
    // Tambahkan kelas CSS berdasarkan indeks
  if (arrayIndex.includes(index)) {
    title.classList.add('teks-one-trending');
  } else if (arrayIndexDua.includes(index)) {
    title.classList.add('teks-two-trending');
  } else if (arrayIndexTiga.includes(index)) {
    title.classList.add('teks-three-trending');
  }


    if (index === 4 ) {
        // Potong title menjadi dua bagian pada index ke-4
        const titlePart1 = drama.title.substring(0, 19);
        const titlePart2 = drama.title.substring(20, 34);

        // Buat elemen p untuk bagian pertama
        const part1 = document.createElement('p');
        part1.textContent = titlePart1;

        // Buat elemen p untuk bagian kedua
        const part2 = document.createElement('p');
        part2.textContent = titlePart2;

        // Tambahkan kedua elemen p ke dalam elemen title
        title.appendChild(part1);
        title.appendChild(part2);
    } else {
        title.textContent = drama.title;
    }

   
    const icon = document.createElement('i')
    icon.classList.add('bx')
    icon.classList.add('bxs-right-arrow')
    icon.style.display = 'none'

    box.addEventListener('mouseover', ()=> {
      icon.style.display = 'flex';
    });

    box.addEventListener('mouseout', ()=> {
      icon.style.display = 'none'
    });

    const circle = document.createElement('i');
    circle.classList.add('bx');
    circle.classList.add('bx-x');
    circle.style.display = 'none'
    
    // URL trailer dari drama
    let trailerUrl = drama.trailer;
    let videoId;

    // Fungsi untuk mengambil ID video dari URL YouTube
    function getYoutubeVideoId(url) {
      if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
      } else if (url.includes('watch?v=')) {
        return url.split('watch?v=').pop().split('&')[0];
      }
      return null;
    }

     // Event listener pada icon untuk memutar video
     icon.addEventListener('click', ()=> {
      // Hapus iframe sebelumnya jika ada
      if (box.querySelector('iframe')) {
        box.removeChild(box.querySelector('iframe'));
      }

      // Buat iframe baru untuk video yang dipilih
      const iframe = document.createElement("iframe");
      iframe.classList.add('video');
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", true);

      // Ambil video ID dari URL trailer
      videoId = getYoutubeVideoId(trailerUrl);

      // Set sumber iframe untuk video yang dipilih
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);

      // Tampilkan iframe dan ikon close, sembunyikan gambar dan judul
      iframe.style.display = 'block';
      circle.style.display = 'block';
      img.style.display = 'none';
      title.style.display = 'none';
      nama.style.display = 'none';
      icon.style.color = 'transparent';
      
      // Tambahkan iframe ke dalam box
      box.appendChild(iframe);
    });
    
     // Event listener pada icon untuk menutup video
     circle.addEventListener('click', ()=> {
      // Hapus iframe yang sedang ditampilkan
      box.removeChild(box.querySelector('iframe'));
      
      // Tampilkan kembali gambar dan judul
      icon.style.color = 'yellow';
      img.style.display = 'block';
      title.style.display = 'block';
      circle.style.display = 'none';
      nama.style.display = 'block';
    });

    // Memasukkan elemen ke dalam box
    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(nama);
    box.appendChild(img);
    box.appendChild(gradasi);
    box.appendChild(circle);
    content.appendChild(box);
  });
}

//===========================================================================================//
//=========================== Fungsi untuk menampilkan konten New Releases =======================//
//===========================================================================================//

function displayPopulerContent(data) {
  let contentPopuler = document.querySelector('.contentPopuler');

  // Tambahkan judul kategori Populer
  let categoryPopuler = document.querySelector('.categoryPopuler');
  let populer = document.createElement('h1');
  populer.classList.add("populer");
  populer.textContent = "New Releases";
  categoryPopuler.appendChild(populer);

  // Tambahkan tombol "Lead More" untuk New Releases
  let morePopuler = document.querySelector('.morePopuler');
  let leadMorePopuler = document.createElement('a');
  leadMorePopuler.classList.add("leadMorePopuler");
  leadMorePopuler.textContent = "Lead More";
  morePopuler.appendChild(leadMorePopuler);

  // Loop untuk menampilkan drama Populer
  data.forEach(function(drama, index) {
    let box = document.createElement('div');
    box.classList.add("box");

    let img = document.createElement('img');
    img.setAttribute("src", drama.poster);
    img.classList.add('imgDua');
    
    let gradasi = document.createElement('div');
    gradasi.classList.add('gradasiDua');

    let nama = document.createElement('p');
    nama.classList.add('kualitasDua');
    nama.textContent = 'Original';

    // Buat elemen p untuk title
    const title = document.createElement('p');
    title.classList.add('titleDua');

     // Array indeks yang ingin di style;
     let arrayIndex = [1];
     let arrayIndexDua = [2];
     let arrayIndexTiga = [3];
     let arrayIndexEmpat = [4];
     let arrayIndexNol = [0];

    // Tengahkan judul jika indeks ada di dalam centeredIndexes
    // Tambahkan kelas CSS berdasarkan indeks
  if (arrayIndex.includes(index)) {
    title.classList.add('teks-one-releases');
  } else if (arrayIndexDua.includes(index)) {
    title.classList.add('teks-two-releases');
  } else if (arrayIndexTiga.includes(index)) {
    title.classList.add('teks-three-releases');
  }else if (arrayIndexEmpat.includes(index)) {
    title.classList.add('teks-for-releases');
  }else if (arrayIndexNol.includes(index)) {
    title.classList.add('teks-five-releases');
  }

     if (index === 3  ) {
      // Potong title menjadi dua bagian pada index ke-4
      const titlePart1 = drama.title.substring(0, 13);
      const titlePart2 = drama.title.substring(13, 29);

      // Buat elemen p untuk bagian pertama
      const part1 = document.createElement('p');
      part1.textContent = titlePart1;

      // Buat elemen p untuk bagian kedua
      const part2 = document.createElement('p');
      part2.textContent = titlePart2;

      // Tambahkan kedua elemen p ke dalam elemen title
      title.appendChild(part1);
      title.appendChild(part2);
      } else {
          title.textContent = drama.title;
      }
 
    const icon = document.createElement('i')
    icon.classList.add('bx')
    icon.classList.add('bxs-right-arrow')
    icon.style.display = 'none'

    box.addEventListener('mouseover', ()=> {
      icon.style.display = 'flex';
    });

    box.addEventListener('mouseout', ()=> {
      icon.style.display = 'none'
    });

    const circle = document.createElement('i');
    circle.classList.add('bx');
    circle.classList.add('bx-x');
    circle.style.display = 'none'

    
    // URL trailer dari drama
    let trailerUrl = drama.trailer;
    let videoId;

    // Fungsi untuk mengambil ID video dari URL YouTube
    function getYoutubeVideoId(url) {
      if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
      } else if (url.includes('watch?v=')) {
        return url.split('watch?v=').pop().split('&')[0];
      }
      return null;
    }

     // Event listener pada icon untuk memutar video
     icon.addEventListener('click', ()=> {
      // Hapus iframe sebelumnya jika ada
      if (box.querySelector('iframe')) {
        box.removeChild(box.querySelector('iframe'));
      }

      // Buat iframe baru untuk video yang dipilih
      const iframe = document.createElement("iframe");
      iframe.classList.add('video');
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", true);

      // Ambil video ID dari URL trailer
      videoId = getYoutubeVideoId(trailerUrl);

      // Set sumber iframe untuk video yang dipilih
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);

      // Tampilkan iframe dan ikon close, sembunyikan gambar dan judul
      iframe.style.display = 'block';
      circle.style.display = 'block';
      img.style.display = 'none';
      title.style.display = 'none';
      nama.style.display = 'none';
      icon.style.color = 'transparent';
      
      // Tambahkan iframe ke dalam box
      box.appendChild(iframe);
    });
    
     // Event listener pada icon untuk menutup video
     circle.addEventListener('click', ()=> {
      // Hapus iframe yang sedang ditampilkan
      box.removeChild(box.querySelector('iframe'));
      
      // Tampilkan kembali gambar dan judul
      icon.style.color = 'yellow';
      img.style.display = 'block';
      title.style.display = 'block';
      circle.style.display = 'none';
      nama.style.display = 'block';
    });

    // Memasukkan elemen ke dalam box
    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(nama);
    box.appendChild(img);
    box.appendChild(gradasi);
    box.appendChild(circle);
    contentPopuler.appendChild(box);
  });
}

//===========================================================================================//
//=========================== Fungsi untuk menampilkan konten Top Picks =======================//
//===========================================================================================//
function displayRomanceContent(data) {
  let contentRomance = document.querySelector('.contentRomance');

  // Tambahkan judul kategori Romance
  let categoryRomance = document.querySelector('.categoryRomance');
  let romance = document.createElement('h1');
  romance.classList.add("romance");
  romance.textContent = "Top Picks";
  categoryRomance.appendChild(romance);

  // Tambahkan tombol "Lead More" untuk Romance
  let moreRomance = document.querySelector('.moreRomance');
  let leadMoreRomance = document.createElement('a');
  leadMoreRomance.classList.add("leadMoreRomance");
  leadMoreRomance.textContent = "Lead More";
  moreRomance.appendChild(leadMoreRomance);

  // Loop untuk menampilkan drama Romance
  data.forEach(function(drama, index) {
    let box = document.createElement('div');
    box.classList.add("box");

    let img = document.createElement('img');
    img.setAttribute("src", drama.poster);
    img.classList.add('imgTiga');
    
    let gradasi = document.createElement('div');
    gradasi.classList.add('gradasiDua');

    let nama = document.createElement('p');
    nama.classList.add('kualitasTiga');
    nama.textContent = 'Top Picks';

    // Buat elemen p untuk title
    const title = document.createElement('p');
    title.classList.add('titleTiga');

    // Array indeks yang ingin di style;
    let arrayIndexSatu = [0];

    // Tengahkan judul jika indeks ada di dalam centeredIndexes
    if (arrayIndexSatu.includes(index)) {
      title.style.color = "red";
      title.style.marginLeft = "22px";
    }

    // Array indeks yang ingin di style
    let arrayIndex = [1];
    let arrayIndexDua = [2];
    let arrayIndexTiga = [3, 4];

    //Tengahkan judul jika indeks ada di dalam centeredIndexes
    // Tambahkan kelas CSS berdasarkan indeks
    if (arrayIndex.includes(index)) {
      title.classList.add('teks-one-top');
    } else if (arrayIndexDua.includes(index)) {
      title.classList.add('teks-two-top');
    } else if (arrayIndexTiga.includes(index)) {
      title.classList.add('teks-three-top');
    }

    if (index === 3 || index === 4) {
      // Potong title menjadi dua bagian pada 3
      const titlePart1 = drama.title.substring(0, 13);
      const titlePart2 = drama.title.substring(14, 23);

      // Buat elemen p untuk bagian pertama
      const part1 = document.createElement('p');
      part1.textContent = titlePart1;

      // Buat elemen p untuk bagian kedua
      const part2 = document.createElement('p');
      part2.textContent = titlePart2;

      // Tambahkan kedua elemen p ke dalam elemen title
      title.appendChild(part1);
      title.appendChild(part2);
  } else {
      title.textContent = drama.title;
  }

    
    const icon = document.createElement('i')
    icon.classList.add('bx')
    icon.classList.add('bxs-right-arrow')
    icon.style.display = 'none'

    box.addEventListener('mouseover', ()=> {
      icon.style.display = 'flex';
    });

    box.addEventListener('mouseout', ()=> {
      icon.style.display = 'none'
    });

    const circle = document.createElement('i');
    circle.classList.add('bx');
    circle.classList.add('bx-x');
    circle.style.display = 'none'

    
    // URL trailer dari drama
    let trailerUrl = drama.trailer;
    let videoId;

    // Fungsi untuk mengambil ID video dari URL YouTube
    function getYoutubeVideoId(url) {
      if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
      } else if (url.includes('watch?v=')) {
        return url.split('watch?v=').pop().split('&')[0];
      }
      return null;
    }

     // Event listener pada icon untuk memutar video
     icon.addEventListener('click', ()=> {
      // Hapus iframe sebelumnya jika ada
      if (box.querySelector('iframe')) {
        box.removeChild(box.querySelector('iframe'));
      }

      // Buat iframe baru untuk video yang dipilih
      const iframe = document.createElement("iframe");
      iframe.classList.add('video');
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", true);

      // Ambil video ID dari URL trailer
      videoId = getYoutubeVideoId(trailerUrl);

      // Set sumber iframe untuk video yang dipilih
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);

      // Tampilkan iframe dan ikon close, sembunyikan gambar dan judul
      iframe.style.display = 'block';
      circle.style.display = 'block';
      img.style.display = 'none';
      title.style.display = 'none';
      nama.style.display = 'none';
      icon.style.color = 'transparent';
      
      // Tambahkan iframe ke dalam box
      box.appendChild(iframe);
    });
    
     // Event listener pada icon untuk menutup video
     circle.addEventListener('click', ()=> {
      // Hapus iframe yang sedang ditampilkan
      box.removeChild(box.querySelector('iframe'));
      
      // Tampilkan kembali gambar dan judul
      icon.style.color = 'yellow';
      img.style.display = 'block';
      title.style.display = 'block';
      circle.style.display = 'none';
      nama.style.display = 'block';
    });

    // Memasukkan elemen ke dalam box
    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(nama);
    box.appendChild(img);
    box.appendChild(gradasi);
    box.appendChild(circle);
    contentRomance.appendChild(box);
  });
}

//===========================================================================================//
//=========================== Fungsi untuk menampilkan konten Recommended for You ==========//
//===========================================================================================//
function displayActionContent(data) {
  let contentAction = document.querySelector('.contentAction');

  // Tambahkan judul kategori Romance
  let categoryAction = document.querySelector('.categoryAction');
  let action = document.createElement('h1');
  action.classList.add("action");
  action.textContent = "Recommended for You";
  categoryAction.appendChild(action);

  // Tambahkan tombol "Lead More" untuk Romance
  let moreAction = document.querySelector('.moreAction');
  let leadMoreAction = document.createElement('a');
  leadMoreAction.classList.add("leadMoreAction");
  leadMoreAction.textContent = "Lead More";
  moreAction.appendChild(leadMoreAction);

  // Loop untuk menampilkan drama Romance
  data.forEach(function(drama, index) {
    let box = document.createElement('div');
    box.classList.add("box");

    let img = document.createElement('img');
    img.setAttribute("src", drama.poster);
    img.classList.add('imgEmpat');
    
    let gradasi = document.createElement('div');
    gradasi.classList.add('gradasiDua');

    let nama = document.createElement('p');
    nama.classList.add('kualitasEmpat');
    nama.textContent = 'Gratis';

    // Buat elemen p untuk title
    const title = document.createElement('p');
    title.classList.add('titleEmpat');

    let arrayIndex = [0 ];
    let arrayIndexDua = [1 ];
    let arrayIndexTiga = [2 ]
    let arrayIndexEmpat = [ 3];

    if (arrayIndex.includes(index)) {
      title.classList.add('teks-one-recom');
    } else if (arrayIndexDua.includes(index)) {
      title.classList.add('teks-two-recom');
    } else if (arrayIndexTiga.includes(index)) {
      title.classList.add('teks-three-recom');
    }else if (arrayIndexEmpat.includes(index)) {
      title.classList.add('teks-for-recom');
    }

    if (index === 2) {
      // Potong title menjadi dua bagian pada index ke-4
      const titlePart1 = drama.title.substring(0, 11);
      const titlePart2 = drama.title.substring(11, 22);

      // Buat elemen p untuk bagian pertama
      const part1 = document.createElement('p');
      part1.textContent = titlePart1;

      // Buat elemen p untuk bagian kedua
      const part2 = document.createElement('p');
      part2.textContent = titlePart2;

      // Tambahkan kedua elemen p ke dalam elemen title
      title.appendChild(part1);
      title.appendChild(part2);
  } else {
      title.textContent = drama.title;
  }


    const icon = document.createElement('i')
    icon.classList.add('bx')
    icon.classList.add('bxs-right-arrow')
    icon.style.display = 'none'

    box.addEventListener('mouseover', ()=> {
      icon.style.display = 'flex';
    });

    box.addEventListener('mouseout', ()=> {
      icon.style.display = 'none'
    });

    const circle = document.createElement('i');
    circle.classList.add('bx');
    circle.classList.add('bx-x');
    circle.style.display = 'none'

    
    // URL trailer dari drama
    let trailerUrl = drama.trailer;
    let videoId;

    // Fungsi untuk mengambil ID video dari URL YouTube
    function getYoutubeVideoId(url) {
      if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
      } else if (url.includes('watch?v=')) {
        return url.split('watch?v=').pop().split('&')[0];
      }
      return null;
    }

     // Event listener pada icon untuk memutar video
     icon.addEventListener('click', ()=> {
      // Hapus iframe sebelumnya jika ada
      if (box.querySelector('iframe')) {
        box.removeChild(box.querySelector('iframe'));
      }

      // Buat iframe baru untuk video yang dipilih
      const iframe = document.createElement("iframe");
      iframe.classList.add('video');
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", true);

      // Ambil video ID dari URL trailer
      videoId = getYoutubeVideoId(trailerUrl);

      // Set sumber iframe untuk video yang dipilih
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);

      // Tampilkan iframe dan ikon close, sembunyikan gambar dan judul
      iframe.style.display = 'block';
      circle.style.display = 'block';
      img.style.display = 'none';
      title.style.display = 'none';
      nama.style.display = 'none';
      icon.style.color = 'transparent';
      
      // Tambahkan iframe ke dalam box
      box.appendChild(iframe);
    });
    
     // Event listener pada icon untuk menutup video
     circle.addEventListener('click', ()=> {
      // Hapus iframe yang sedang ditampilkan
      box.removeChild(box.querySelector('iframe'));
      
      // Tampilkan kembali gambar dan judul
      icon.style.color = 'yellow';
      img.style.display = 'block';
      title.style.display = 'block';
      circle.style.display = 'none';
      nama.style.display = 'block';
    });

    // Memasukkan elemen ke dalam box
    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(nama);
    box.appendChild(img);
    box.appendChild(gradasi);
    box.appendChild(circle);
    contentAction.appendChild(box);
  });
}