import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import Card from '../components/Card.jsx';
import arrowBack from '../assets/arrow-back.svg';
import Author from '../assets/Author.svg';
import gambarSelada from '../assets/selada.png';
import gambarBayam from '../assets/bayam.png';
import gambarKale from '../assets/kale.png';
import gambarArigula from '../assets/arigula.png';
import gambarPakcoi from '../assets/pakcoi.png';
import gambarArtikel from '../assets/tomat.png';
import gambarCabai from '../assets/cabai.png';
import gambarTimun from '../assets/timun.png';
import gambarPaprika from '../assets/paprika.png';

// Artikel saat dibuka
const articlesList = [
  {
    id: 1,
    title: 'Hama pada Tanaman Selada',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarSelada,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman selada.',
    content: (
      <>
        <p>Tanaman selada dalam sistem hidroponik rentan terhadap berbagai jenis hama yang dapat mengganggu pertumbuhannya. Berikut adalah beberapa hama umum yang sering ditemukan pada selada:</p>
        <ol>
          <li>
            1. Aphid (Kutu Daun) <br /> Kutu daun adalah hama kecil yang sering menyerang tanaman berdaun hijau, termasuk selada. Mereka menghisap cairan tanaman, menyebabkan daun menguning, layu, atau keriput. Kutu daun juga bisa
            menyebarkan virus pada tanaman.
          </li>
          <li>
            2. Thrips <br /> Thrips adalah hama kecil yang dapat merusak daun selada dengan meninggalkan bercak-bercak keperakan atau kuning. Serangga ini juga dapat menularkan virus tanaman yang merugikan.
          </li>
          <li>
            3. Whiteflies (Lalat Putih) <br />
            Lalat putih menyerang dengan menghisap cairan dari daun, menyebabkan daun layu dan menguning. Mereka juga meninggalkan embun madu yang dapat memicu pertumbuhan jamur jelaga.
          </li>
          <li>
            4. Ulat Tanah (Cutworm) <br />
            Ulat ini sering memakan daun selada dan batangnya, mengakibatkan kerusakan pada struktur tanaman. Serangan ulat tanah bisa menyebabkan tanaman menjadi layu dan mati.
          </li>
          <li>
            5. Siput dan Bekicot <br /> Siput dan bekicot sering memakan daun selada, meninggalkan lubang-lubang besar dan bekas lendir di permukaan daun. Mereka umumnya muncul pada malam hari atau di area yang lembap.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    title: 'Hama Pada Tanaman Bayam',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarBayam,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman bayam.',
    content: (
      <>
        <p>Tanaman bayam sering kali diserang oleh berbagai jenis hama yang merugikan. Hama-hama ini tidak hanya menghambat pertumbuhan bayam, tetapi juga dapat menurunkan kualitas hasil panen.</p>
        <ol>
          <li>
            1. Ulat Grayak <br /> Ulat ini biasanya memakan daun bayam, menyebabkan kerusakan yang luas pada area daun. Serangan ulat grayak dapat membuat daun bayam berlubang dan merusak tanaman secara keseluruhan.
          </li>
          <li>
            2. Kutu Daun Hijau <br /> Hama ini menghisap cairan dari daun bayam, menyebabkan daun menguning dan keriting. Kutu daun juga dapat menularkan penyakit pada tanaman.
          </li>
          <li>
            3. Siput dan Bekicot <br /> Siput sering memakan daun bayam, terutama di area yang lembap, meninggalkan bekas lendir dan lubang di daun.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    title: 'Hama pada Tanaman Kale',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarKale,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman Kale.',
    content: (
      <>
        <p>Tanaman kale sering kali diserang oleh beberapa jenis hama yang dapat mengganggu pertumbuhannya. Hama-hama ini sering mempengaruhi daun dan kualitas tanaman secara keseluruhan.</p>
        <ol>
          <li>
            1. Kutu Daun <br /> Kutu daun menyerang dengan menghisap cairan dari daun kale, membuat daun berkerut dan layu.
          </li>
          <li>
            2. Ulat Daun <br /> Ulat ini memakan bagian daun kale, sering meninggalkan lubang-lubang besar yang dapat merusak penampilan dan kualitas tanaman.
          </li>
          <li>
            3. Lalat Putih <br /> Serangga ini juga menghisap cairan daun dan bisa menyebabkan daun kale menguning.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: 'Hama pada Tanaman Arigula',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarArigula,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman Arigula.',
    content: (
      <>
        <p>Arigula adalah tanaman yang memiliki cita rasa khas, namun rentan terhadap serangan hama tertentu. Berikut adalah beberapa hama yang sering menyerang tanaman arigula:</p>
        <ol>
          <li>
            1. Kutu Kebul <br /> Serangga ini menyerang daun arigula dengan menghisap cairannya, menyebabkan daun menguning dan layu.
          </li>
          <li>
            2. Thrips <br /> Thrips dapat menyebabkan bercak keperakan pada daun arigula dan merusak kualitasnya.
          </li>
          <li>
            3. Ulat Daun <br /> Ulat ini sering memakan daun arigula, menyebabkan kerusakan yang dapat memengaruhi pertumbuhan tanaman.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 5,
    title: 'Hama pada Tanaman Pak Choi',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarPakcoi,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman pak choi.',
    content: (
      <>
        <p>Tanaman pak choi sering diserang oleh beberapa jenis hama yang dapat menghambat pertumbuhan dan kualitasnya. Berikut adalah beberapa hama yang menyerang pak choi:</p>
        <ol>
          <li>
            1. Kutu Daun <br /> Kutu daun menyerang dengan menghisap cairan dari daun pak choi, menyebabkan daun menjadi keriting dan layu.
          </li>
          <li>
            2. Ulat Tanah <br /> Ulat ini merusak daun dan batang pak choi, menyebabkan tanaman menjadi lemah dan mudah mati.
          </li>
          <li>
            3. Siput <br /> Siput seringkali memakan daun pak choi, terutama di area yang lembap, meninggalkan bekas lendir.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 6,
    title: 'Hama pada Buah Tomat',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarArtikel,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang buah tomat.',
    content: (
      <>
        <p>Buah tomat sering kali menarik hama yang bisa merusak buah dan tanaman secara keseluruhan. Berikut adalah beberapa hama yang sering ditemukan pada tanaman tomat:</p>
        <ol>
          <li>
            1. Lalat Buah <br /> Lalat ini bertelur di dalam buah tomat, dan larvanya dapat merusak daging buah dari dalam.
          </li>
          <li>
            2. Ulat Penggerek Batang <br /> Ulat ini dapat melubangi batang dan buah tomat, menyebabkan kerusakan struktural.
          </li>
          <li>
            3. Kutu Daun <br /> Hama ini menghisap cairan dari daun dan batang, melemahkan tanaman.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 7,
    title: 'Hama pada Tanaman Cabai',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarCabai,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman cabai.',
    content: (
      <>
        <p>Tanaman cabai rentan terhadap berbagai jenis hama yang bisa merusak daun dan buahnya. Berikut adalah beberapa hama yang sering menyerang cabai:</p>
        <ol>
          <li>
            1. Kutu Daun <br /> Kutu daun dapat menghisap cairan dari daun cabai, menyebabkan daun menguning dan keriting.
          </li>
          <li>
            2. Ulat Penggerek <br /> Ulat ini sering kali merusak bagian batang dan buah cabai, mengurangi kualitas dan hasil panen.
          </li>
          <li>
            3. Lalat Buah <br /> Lalat ini bertelur pada buah cabai, dan larvanya merusak buah dari dalam.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 8,
    title: 'Hama pada Tanaman Timun',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarTimun,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang tanaman timun.',
    content: (
      <>
        <p>Tanaman timun juga rentan terhadap berbagai jenis hama yang dapat mengurangi kualitas dan hasil panen. Berikut adalah beberapa hama yang sering ditemukan pada tanaman timun:</p>
        <ol>
          <li>
            1. Kutu Daun <br /> Kutu daun menyerang dengan menghisap cairan dari daun timun, menyebabkan daun menjadi keriput dan menguning.
          </li>
          <li>
            2. Thrips <br /> Thrips adalah hama kecil yang dapat menyebabkan bercak-bercak keperakan pada daun timun dan menurunkan kualitasnya.
          </li>
          <li>
            3. Lalat Putih <br /> Lalat putih menghisap cairan dari daun timun dan menyebabkan daun layu, menguning, dan rentan terhadap penyakit.
          </li>
          <li>
            4. Ulat Daun <br /> Ulat ini memakan daun timun, merusak struktur tanaman dan menyebabkan kerusakan yang dapat mempengaruhi hasil panen.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 9,
    title: 'Hama pada Buah Paprika',
    author: 'kang asep',
    date: 'Minggu, 24 Oktober 2024',
    img: gambarPaprika,
    description: 'Artikel ini membahas berbagai jenis hama yang sering menyerang buah paprika.',
    content: (
      <>
        <p>Tanaman paprika dapat diserang oleh beberapa jenis hama yang berbahaya, yang dapat merusak buah dan tanaman secara keseluruhan. Berikut adalah beberapa hama yang sering menyerang tanaman paprika:</p>
        <ol>
          <li>
            1. Lalat Buah <br /> Lalat buah dapat bertelur di dalam buah paprika dan merusak buah dari dalam saat larva berkembang.
          </li>
          <li>
            2. Kutu Daun <br /> Kutu daun menghisap cairan dari daun paprika, menyebabkan daun menguning, keriting, dan mengurangi daya tahan tanaman terhadap penyakit.
          </li>
          <li>
            3. Ulat Penggerek Batang <br /> Ulat ini melubangi batang dan buah paprika, menyebabkan kerusakan pada struktur tanaman.
          </li>
        </ol>
      </>
    ),
  },
];

function Article(props) {
  const { id } = useParams();
  const article = articlesList.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  const relatedArticles = articlesList.filter((item) => item.id !== parseInt(id)).slice(0, 3);

  return (
    <>
      <main className="w-full min-h-screen bg-gray-100">
        <Navbar />

        <section className="hero w-full mt-8 md:mt-8">
          <div className="flex items-center mb-2 px-4 md:px-16">
            <button onClick={() => window.history.back()} className="text-gray-700 hover:text-gray-900 flex items-center">
              <img src={arrowBack} alt="Kembali" className="mr-2" />
              <p className="font-medium text-xl">Kembali</p>
            </button>
          </div>

          <div className="text-center mb-8 px-4 md:px-16">
            <img src={article.img} alt={article.title} className="mx-auto rounded-lg shadow-lg w-full h-64 md:h-96 object-cover" />
            <h2 className="mt-4 text-3xl font-bold text-gray-800">{article.title}</h2>
          </div>

          <div className="flex justify-center items-center gap-x-2 mb-6 text-gray-600">
            <img src={Author} alt="Penulis" className="h-5 w-5" />
            <p>{article.author || 'Penulis Tidak Diketahui'}</p>
            <span>•</span>
            <p>{article.date}</p>
          </div>

          <div className="prose max-w-full text-gray-700 leading-relaxed text-lg p-6 md:p-16 bg-white shadow-md rounded-lg">{article.content}</div>

          <hr className="w-20 h-1 mx-auto my-10 bg-gray-300 border-0 rounded" />

          <h1 className="text-black text-center font-semibold text-3xl mb-8">Berita Lainnya</h1>

          <div className="flex justify-center gap-6 flex-wrap px-4 pb-10">
            {relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Article;
