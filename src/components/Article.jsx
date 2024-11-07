import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import gambarArtikel from "../assets/ArticleImageExample.png";

const articlesList = [
  /* Artikel array di sini, sesuai kodingan temanmu */
];

function Article() {
  const { id } = useParams();
  const article = articlesList.find((item) => item.id === parseInt(id));

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  const relatedArticles = articlesList
    .filter((item) => item.id !== parseInt(id))
    .slice(0, 3);

  return (
    <div className="full-width p-6">
      <section className="hero max-w-7xl mx-auto">
        <div className="back flex items-center mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-gray-700 hover:text-gray-900"
          >
            ← Kembali
          </button>
        </div>

        <div className="text-center mb-8">
          <img
            src={article.img}
            alt={article.title}
            className="mx-auto rounded-lg shadow-lg h-72 w-full object-cover"
          />
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            {article.title}
          </h2>
        </div>

        <div className="flex justify-center items-center gap-x-2 mb-6 text-gray-600">
          <p>{article.author || "Penulis Tidak Diketahui"}</p>
          <span>•</span>
          <p>{article.date}</p>
        </div>

        <div className="prose max-w-full text-gray-700 leading-relaxed">
          <p className="mb-4">{article.description}</p>
          <p>{article.content}</p>
        </div>

        <hr className="w-13 h-1 mx-auto m-4 bg-gray-400 border-0 rounded md:my-10" />

        <div>
          <h1 className="text-black text-center font-semibold text-3xl">
            Berita Lainnya
          </h1>
        </div>

        <div className="flex justify-center gap-6 flex-wrap pt-7">
          {relatedArticles.map((relatedArticle) => (
            <Card key={relatedArticle.id} article={relatedArticle} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Article;
