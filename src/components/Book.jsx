import { useState } from 'react';
import { Heart } from "lucide-react";

const daftarBuku = [
  {
    id: 1,
    judul: "Pulang",
    penulis: "Tere Liye",
    penerbit: "Republika",
    tahun: 2015,
    genre: "Drama",
    sinopsis: "Kisah perjalanan hidup seorang anak muda yang kembali ke akar budaya dan tanah kelahirannya.",
    gambar: "https://inc.mizanstore.com/aassets/img/com_cart/produk/pulang-recover-tere-liye.jpeg"
  },
  {
    id: 2,
    judul: "Dilan 1990",
    penulis: "Pidi Baiq",
    penerbit: "Pastel Books",
    tahun: 2014,
    genre: "Romantis",
    sinopsis: "Cinta remaja antara Dilan dan Milea yang penuh dengan kenangan unik dan manis.",
    gambar: "https://assets.kompasiana.com/items/album/2018/02/02/cover-dilan-1990-5a73ee0fab12ae05a74c4832.jpeg?t=o&v=300"
  },
  {
    id: 3,
    judul: "Rindu",
    penulis: "Tere Liye",
    penerbit: "Republika",
    tahun: 2014,
    genre: "Drama Religi",
    sinopsis: "Sebuah kisah di atas kapal menuju tanah suci yang penuh pertanyaan dan pencarian makna hidup.",
    gambar: "https://leksikabookstore.com/uploads/63c11a2538ee9_20230113154525-1.jpg"
  },
  {
    id: 4,
    judul: "Selamat Tinggal",
    penulis: "Tere Liye",
    penerbit: "Gramedia",
    tahun: 2020,
    genre: "Fiksi",
    sinopsis: "Seorang penulis yang berjuang melawan industri penerbitan yang tidak jujur.",
    gambar: "https://cdn.gramedia.com/uploads/items/selamat_tinggal.jpg"
  },
  {
    id: 5,
    judul: "Bulan",
    penulis: "Tere Liye",
    penerbit: "Gramedia",
    tahun: 2015,
    genre: "Fantasi",
    sinopsis: "Petualangan lanjutan Raib di dunia paralel yang penuh misteri dan bahaya.",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQjWLQrV32AZgmWlLhH-wHPqbeeYrOtZlMg&s"
  },
  {
    id: 6,
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    penerbit: "Gramedia Pustaka Utama",
    tahun: 2009,
    genre: "Inspiratif",
    sinopsis: "Perjuangan enam santri dari berbagai daerah dalam mengejar impian besar mereka dari sebuah pesantren.",
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuM99ZW5klDsyX-jEBOtQ_2IiHceERESqKaA&s"
  },
  {
    id: 7,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    tahun: 2005,
    genre: "Drama Pendidikan",
    sinopsis: "Kisah inspiratif sekelompok anak dari Belitung yang berjuang untuk pendidikan di tengah keterbatasan.",
    gambar: "https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg"
  },
  {
    id: 8,
    judul: "Perahu Kertas",
    penulis: "Dewi Lestari",
    penerbit: "Bentang Pustaka",
    tahun: 2009,
    genre: "Romantis",
    sinopsis: "Kugy dan Keenan menjalani kisah cinta yang tak biasa dalam dunia seni dan sastra.",
    gambar: "https://cdn.gramedia.com/uploads/items/ID_MIZ2016MTH03PKER_C.jpg"
  }
];

function Book() {
  const [statusSuka, setStatusSuka] = useState({});
  const [popup, setPopup] = useState(0);

  const ubahStatusSuka = (idBuku) => {
    setStatusSuka((prev) => ({ ...prev, [idBuku]: !prev[idBuku] }));
  };

  return (
    <div className="buku-container">
      <div className="buku-grid">
        {daftarBuku.map((buku) => (
          <div key={buku.id} className="buku-card">
            <div className="card-header">
              <h2 className="judul-buku">{buku.judul}</h2>
              <button onClick={() => ubahStatusSuka(buku.id)} className="heart-button">
                <Heart className={`heart-icon ${statusSuka[buku.id] ? 'suka' : 'tidak'}`} />
              </button>
            </div>
            <img src={buku.gambar} alt={buku.judul} className="buku-image" />
            <p><strong>Tahun Terbit:</strong> {buku.tahun}</p>
            <button onClick={() => setPopup(buku)} className="info-btn">informasi</button>
          </div>
        ))}
      </div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{popup.judul}</h2>
            <img src={popup.gambar} alt={popup.judul} />
            <p><strong>Penulis:</strong> {popup.penulis}</p>
            <p><strong>Penerbit:</strong> {popup.penerbit}</p>
            <p><strong>Genre:</strong> {popup.genre}</p>
            <p><strong>Tahun Terbit:</strong> {popup.tahun}</p>
            <p><strong>Sinopsis:</strong> {popup.sinopsis}</p>
            <button onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;