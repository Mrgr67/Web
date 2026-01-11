const PASS="admin123";
const KELAS="XII IPS 2";

let data=JSON.parse(localStorage.getItem("kelasData"))||{"XII IPS 2":[]};

function login(){
    if(document.getElementById("pass").value!==PASS) return alert("Salah");
    document.getElementById("panel").classList.remove("hidden");
    render();
}

function tambah(){
    const n=nama.value;
    const v=Number(nilai.value);
    const f=foto.files[0];

    const r=new FileReader();
    r.onload=()=>{
        data[KELAS].push({nama:n,nilai:v,foto:r.result});
        localStorage.setItem("kelasData",JSON.stringify(data));
        render();
    };
    f?r.readAsDataURL(f):r.onload();
}

function render(){
    const t=document.getElementById("data");
    t.innerHTML="";
    data[KELAS].forEach((s,i)=>{
        t.innerHTML+=`<tr><td>${s.nama}</td><td>${s.nilai}</td><td><button onclick="hapus(${i})">X</button></td></tr>`;
    });
}

function hapus(i){
    data[KELAS].splice(i,1);
    localStorage.setItem("kelasData",JSON.stringify(data));
    render();
}