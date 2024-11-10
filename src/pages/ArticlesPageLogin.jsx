import Navbar from '../components/NavbarLogin.jsx';
import gambarSelada from '../assets/selada.png';
import gambarBayam from '../assets/bayam.png';
import gambarKale from '../assets/kale.png';
import gambarArigula from '../assets/arigula.png';
import gambarPakcoi from '../assets/pakcoi.png';
import gambarArtikel from '../assets/tomat.png';
import gambarCabai from '../assets/cabai.png';
import gambarTimun from '../assets/timun.png';
import gambarPaprika from '../assets/paprika.png';
import gambarBanner from '../assets/hero-section.png';
import Footer from '../components/Footer';
import Card from '../components/Card.jsx';

const articlesData = [
  {
    id: 1,
    title: 'Hama pada Tanaman Selada',
    // author: "kang asep", // Penulis ditambahkan
    date: 'Minggu, 24 Oktober 2024',
    img: gambarSelada,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman selada.',
    content: 'tanaman selada.',
  },
  {
    id: 2,
    title: 'Hama Pada Tanaman Bayam',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarBayam,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman bayam.',
    content: 'tanaman bayam. ',
  },
  {
    id: 3,
    title: 'Hama pada Tanaman Kale',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarKale,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman Kale.',
    content: 'Tanaman Kale.',
  },
  {
    id: 4,
    title: 'Hama pada Tanaman Arigula',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarArigula,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman Arigula.',
    content: 'tanaman Arigula.',
  },
  {
    id: 5,
    title: 'Hama pada Tanaman pak choi',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarPakcoi,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman pak choi.',
    content: 'Tanaman pak choi.',
  },
  {
    id: 6,
    title: 'Hama pada buah tomat',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarArtikel,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang buah tomat.',
    content:
      'Menyiram tanaman hias tidak boleh sembarangan karena dapat menyebabkan akar busuk jika terlalu banyak air, atau tanaman layu jika kurang air. Tips utama dalam menyiram tanaman adalah memperhatikan jenis tanah dan pot yang digunakan. Gunakan pot yang memiliki lubang drainase, dan siram tanaman ketika lapisan atas tanah mulai kering. Tanaman hias yang berada di dalam ruangan umumnya membutuhkan lebih sedikit air dibandingkan tanaman yang ditempatkan di luar ruangan. Pastikan untuk mengecek kebutuhan air tanaman Anda sesuai dengan jenis dan lingkungannya.',
  },
  {
    id: 7,
    title: 'Hama pada Tanaman cabai',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarCabai,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman cabai.',
    content: 'tanaman cabai.',
  },
  {
    id: 8,
    title: 'Hama pada Tanaman Timun',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarTimun,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman timun.',
    content: 'tanaman timun.',
  },
  {
    id: 9,
    title: 'Hama pada buah paprika',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarPaprika,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang buah paprika.',
    content: 'tanaman paprika.',
  },
];

function ArticlesPage() {
  return (
    <div className="min-h-screen mx-auto">
      <Navbar />
      <div
        className="relative bg-cover bg-center h-72 flex items-center justify-center"
        style={{
          backgroundImage: `url(${gambarBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
        <h1 className="text-white text-center text-3xl font-semibold relative z-10">
          Temukan artikel dan perawatan untuk <br />
          meningkatkan kualitas tanaman anda!
        </h1>
      </div>

      <h1 className="text-center text-4xl font-bold py-4">Artikel Penyakit & Hama</h1>
      <p className="text-center text-xl font-regular">Artikel Penyakit & Hama pada tanaman</p>
      <div className="flex flex-row flex-wrap gap-10 pt-8 mx-20 justify-center py-6">
        {articlesData.length > 0 ? articlesData.map((article) => <Card article={article} key={article.id} />) : <p className="text-center text-gray-700">Tidak ada artikel tersedia</p>}
      </div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
