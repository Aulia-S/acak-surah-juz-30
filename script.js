const acakBtn = document.querySelector('#acak-btn');
const suratCont = document.querySelector('.surat');
let data = [];

//get data
fetch('data1.json')
  .then(res => res.json())
  .then(res => data = res);

//display data
const randomSurah = () => {
  let shuffle = Math.round(Math.random() *  37);
  let surat = `<div class="col">
                <p class="nomor">Surah ke ${data[shuffle].id}</p>
                <h1 class="nama">${data[shuffle].name}</h1>
                <p class="ayat">${data[shuffle].ayat} ayat</p>
              </div>`;
  suratCont.innerHTML = surat;

}

//handle click button acak surah
acakBtn.addEventListener('click' , () => {
    randomSurah();
});


// belajar cara ngefetch dulu baru lanjutin
