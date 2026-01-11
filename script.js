const KELAS = "XII IPS 2";

const struktur = {
  "Wali Kelas":"Ibu Sari, S.Pd",
  "Ketua":"Andi",
  "Wakil":"Budi",
  "Sekretaris":"Citra"
};

const data = JSON.parse(localStorage.getItem("kelasData")) || {
  "XII IPS 2":[]
};

let siswa = data[KELAS];

const strukturList = document.getElementById("strukturList");
for (let j in struktur) {
    strukturList.innerHTML += `<li>${j}: ${struktur[j]}</li>`;
}

const tabel = document.getElementById("tabelSiswa");
const top = document.getElementById("topSiswa");

function render() {
    tabel.innerHTML = "";
    siswa.forEach((s,i)=>{
        tabel.innerHTML += `<tr><td>${i+1}</td><td>${s.nama}</td><td>${s.nilai}</td></tr>`;
    });

    const top3 = [...siswa].sort((a,b)=>b.nilai-a.nilai).slice(0,3);
    top.innerHTML = "";
    top3.forEach(s=> top.innerHTML += `<li>${s.nama} (${s.nilai})</li>`);

    renderSlider();
}

let index = 0;
function renderSlider() {
    if (!siswa.length) return;
    const s = siswa[index];
    document.getElementById("fotoSlide").src = s.foto || "";
    document.getElementById("namaFoto").textContent = s.nama;
}

function geser(n) {
    if (!siswa.length) return;
    index = (index + n + siswa.length) % siswa.length;
    renderSlider();
}

render();