// Indikator bahwa file JS berhasil dimuat
console.log("JavaSceript Poliban Digicarft Studio siap digunakan.");


/* A. LOGIKA UNTUK HALAMAN PRODUK (produk.html) */

// 1. Fungsi KOnfirmasi Pemesanan Paket Layanan
function pesanpaket (namaPaket, hargaPaket) {
    let konfirmasi = confirm(
        "Anda memilih paket : " + namaPaket + " (" + hargaPaket + ")\n" +
        "Apakah Anda ingin melanjutkan ke halaman formulir kontak?"
    );

    if (konfirmasi) {
        // Redirect ke halaman kontak jika pengguna menyetujui
        window.location.href = "kontak.html";
    }
}

// 2. Fungsi Simulasi Hitung Estimasi Biaya
function hitungEstimasi() {
    let paketSelect = document.getElementById("pilihan-paket");
    let addonSelect = document.getElementById("layanan-tambahan");
    let hasilText = document.getElementById("hasil-estimasi");

    // Validasi pemilihan paket dasar
    if (paketSelect.value) {
        alert("Peringatan: Silahkan pilih salah satu paket layanan terlebih dahulu!");
        return;
    }

    let hargaDasar = parseInt(paketSelect.value);
    let hargaTambahan = parseInt(addonSelect.value);
    let total = hargaDasar + hargaTambahan;

    // Tampilkan hasil ke DOM dengan format Rupiah
    hasilText.innerText = "RP " + total.toLocaleString("id-ID");
    hasilText.style.color = "#008080"; // Aksen warna Teal Poliban
}


/* LOGIKA UNTUK HALAMAN KONTAK (kontak.html) - DYNAMIC FORM INPUT */

// Hitunglah indeks untuk penomoran field dinamis
let jumlahLink = 1;

// Fungsi Menambah Iputan Link referensi Baru
function tambahInputLink () {
    jumlahLink++;

    // 1. Ambil elemen wadah penampung
    let container = document.getElementById ("wadah-referensi");

    // 2. Buat elemen baris wrapper baru  (<div>)
    let divBaru = document.createElement ("div");
    divBaru.className = "dynamic-input-row";
    divBaru.id = "referensi-row-" + jumlahLink;

    // 3. Masukkan template HTML untuk inputan baru beserta tombol hapus
    divBaru.innerHTML = `
        <input type="url" name="referensi_Link[]" placeholder=https://contoh-website-acuan-${jumlahLink}.com" class="input-dynamic">
        <button type="button" class="btn-hapus" onlick="hapusInputLink" ('${divBaru.id}')">Hapus</button>"
    `;

    // 4. Sisipkan elemen baru ke dalam container DOM
    container.appendChild(divBaru);

    console.log("Input link referensi ke-" + jumlahLink + " berhasil ditambahkan.");
}

// Fungsi Menghapus Baris Inputan Tertentu
function hapusInputLink(rowId) {
    let barisTarget = document.getElementById(rowId);
    if (barisTarget) {
        barisTarget.remove ();
        console.log("Elemen " + rowId + " berhasil dihapus.");
    }
}