class Pendaftar {
    constructor(nama, umur, uangSaku) {
        this.nama = nama;
        this.umur = umur;
        this.uangSaku = uangSaku;
    }
}

class PendaftarList {
    constructor() {
        this.pendaftar = [];
    }

    tambahPendaftar(pendaftar) {
        this.pendaftar.push(pendaftar);
    }

    hitungRataRata() {
        const totalUangSaku = this.pendaftar.reduce((total, pendaftar) => total + pendaftar.uangSaku, 0);
        const totalUmur = this.pendaftar.reduce((total, pendaftar) => total + pendaftar.umur, 0);

        const rataRataUangSaku = totalUangSaku / this.pendaftar.length;
        const rataRataUmur = totalUmur / this.pendaftar.length;

        return {
            rataRataUangSaku,
            rataRataUmur
        };
    }
}

const pendaftarList = new PendaftarList();

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(tabName).style.display = 'block';
}

function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSaku = parseInt(document.getElementById('uangSaku').value);

    if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 1000000) {
        alert('Data tidak memenuhi kriteria.');
        return;
    }

    const pendaftar = new Pendaftar(nama, umur, uangSaku);
    pendaftarList.tambahPendaftar(pendaftar);

    // Menampilkan data pendaftar di tabel
    const table = document.getElementById('pendaftar-table');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = nama;
    cell2.textContent = umur;
}