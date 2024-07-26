
document.addEventListener('DOMContentLoaded', () => {
    const selectedDrama = JSON.parse(localStorage.getItem('selectedDrama'));

    if (selectedDrama) {

        //memenggil query class
        const contentContainer = document.querySelector('.content-container');

        //membuat elemet div
        const contentHeader = document.createElement('div');
        contentHeader.classList.add('content-header');

        // membuat elemen gambar
        const gambarCover = document.createElement('img');
        gambarCover.setAttribute('src', selectedDrama.poster);
        gambarCover.classList.add('gambar-cover');
       
        const trailerUrl = selectedDrama.trailer;
        const videoId = getYoutubeVideoId(trailerUrl);
        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.classList.add('video');
            iframe.id = 'drama-trailer';
            iframe.src = `https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            // kotak.appendChild(iframe);
            contentHeader.appendChild(iframe);
            
        } else {
            console.error('Invalid YouTube URL');
        }
        
        //membuat elemen div
        const headerContent = document.createElement('div');
        //headerContent nanti di masukkan ke  contentHeader
        headerContent.classList.add('header-content-cover');

        //membuat elemen title
        const judul = document.createElement('h1');
        judul.classList.add('judul');
        judul.textContent = selectedDrama.title;
        headerContent.appendChild(judul);

        // ===========================================================================
        //membuat elemen div 
        const badgeContainer = document.createElement('div');
        badgeContainer.classList.add('badge-container');

        //membuat elemen span
        const badge = document.createElement('span');
        badge.classList.add('bedge');
        badge.textContent = 'TOP 1';
        badgeContainer.appendChild(badge);

        //membuat elemen span
        const badge1 = document.createElement('span');
        badge1.classList.add('bedge');
        badge1.textContent = 'Peringkat Popularitas Drama';
        badgeContainer.appendChild(badge1);

        //membuat elemen span
        const badge2 = document.createElement('span');
        badge2.classList.add('bedge-green');
        badge2.textContent = 'Original';
        badgeContainer.appendChild(badge2);
        headerContent.appendChild(badgeContainer);
        // ===================================================================================

        //membuat elemen div 
        const details = document.createElement('div');
        details.classList.add('detail');

        //membuat elemen span
        const rating = document.createElement('span');
        rating.classList.add('ratingg');
        rating.textContent = selectedDrama.rating
        details.appendChild(rating);

        //membuat elemen span
        const spasiOne = document.createElement('span');
        spasiOne.classList.add('spasiOne');
        spasiOne.textContent = ' ';
        details.appendChild(spasiOne);

        //membuat elemen span
        const age = document.createElement('span');
        age.classList.add('age');
        age.textContent = '18+';
        details.appendChild(age);

         //membuat elemen span
         const spasiTwo = document.createElement('span');
         spasiTwo.classList.add('spasiTwo');
         spasiTwo.textContent = ' ';
         details.appendChild(spasiTwo);

        //membuat elemen span
        const year = document.createElement('span');
        year.classList.add('year');
        year.textContent = selectedDrama.year;
        details.appendChild(year);

         //membuat elemen span
         const spasiThree = document.createElement('span');
         spasiThree.classList.add('spasiThree');
         spasiThree.textContent = ' ';
         details.appendChild(spasiThree);

        //membuat elemen span
        const episode = document.createElement('span');
        episode.classList.add('episodee');
        episode.textContent = selectedDrama.runtime
        details.appendChild(episode);
        headerContent.appendChild(details);
        // ===================================================================================

        //membuat elemen div 
        const tags = document.createElement('div');
        tags.classList.add('tags');

        //membuat elemen span
        const gendre = document.createElement('span');
        gendre.classList.add('gendre');
        gendre.textContent = selectedDrama.genre.join(" ");
        tags.appendChild(gendre);
        headerContent.appendChild(tags);
        // ===================================================================================

        //membuat elemen div 
        const vipPrice = document.createElement('div');
        vipPrice.classList.add('vip-price');
        vipPrice.textContent = 'VIP Standard hanya Rp19,000 untuk bulan pertama';
        headerContent.append(vipPrice);

        //membuat elemen p 
        const director = document.createElement('p');
        director.classList.add('directorr');
        director.textContent = `Sutradara: ${selectedDrama.director}`;
        headerContent.appendChild(director);

        //membuat elemen p 
        const cast = document.createElement('p');
        cast.classList.add('cast');
        cast.textContent = `Pemeran utama: ${selectedDrama.actors}`;
        headerContent.appendChild(cast);

        //membuat elemen p 
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = `Deskripsi: ${selectedDrama.plot}`;
        headerContent.appendChild(description);
        // ===================================================================================

        //membuat elemen div 
        const actions = document.createElement('div');
        actions.classList.add('actions');
        
        //membuat elemen button 
        const playButton = document.createElement('button');
        playButton.classList.add('play-button');
        playButton.textContent = 'Putar';
        actions.appendChild(playButton);

        //membuat elemen button 
        const shareButton = document.createElement('button');
        shareButton.classList.add('share-button');
        shareButton.textContent = 'Bagikan';
        actions.append(shareButton);

        //membuat elemen button 
        const appButton = document.createElement('button');
        appButton.classList.add('app-button');
        appButton.textContent = 'APP';
        actions.append(appButton);

        //membuat elemen button 
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        favoriteButton.textContent = 'Favorite';
        actions.appendChild(favoriteButton);
        headerContent.appendChild(actions);
        contentHeader.appendChild(headerContent);
        contentContainer.appendChild(contentHeader);
        // ===================================================================================

        //membuat elemen div 
        const tabContainer = document.createElement('div');
        tabContainer.classList.add('tab-container');

        //membuat elemen span
        const tab = document.createElement('span');
        tab.classList.add('tab');
        tab.textContent = 'Episode';
        tabContainer.appendChild(tab);

        //membuat elemen span
        const tabTwo = document.createElement('span');
        tabTwo.classList.add('tab');
        tabTwo.textContent = 'Highlight';
        tabContainer.appendChild(tabTwo);

        //membuat elemen span
        const tabThree = document.createElement('span');
        tabThree.classList.add('tab');
        tabThree.textContent = 'Pemeran';
        tabContainer.appendChild(tabThree);
        
        //membuat elemen span
        const tabFor = document.createElement('span');
        tabFor.classList.add('tab');
        tabFor.textContent = 'Koleksi Video';
        tabContainer.appendChild(tabFor);

        //membuat elemen span
        const tabFive = document.createElement('span');
        tabFive.classList.add('tab');
        tabFive.textContent = 'Rekomendasi untuk anda';
        tabContainer.appendChild(tabFive);
        contentContainer.appendChild(tabContainer);


        // document.getElementById('close-video').addEventListener('click', () => {
        //     const iframe = document.getElementById('drama-trailer');
        //     if (iframe) {
        //         iframe.src = '';
        //     }
        // });
    }
});

// Fungsi untuk mengambil ID video dari URL YouTube
function getYoutubeVideoId(url) {
    if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
    } else if (url.includes('watch?v=')) {
        return url.split('watch?v=').pop().split('&')[0];
    }
    return null;
}



// ==================== Klik ==============================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
 
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

 });



 
// ========================== HEADER COVER ==============================
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




let ulangi = 0;
const header = document.querySelector('header');
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