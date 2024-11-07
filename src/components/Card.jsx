import { Link } from "react-router-dom";

function Card({ article }) {
  return (
    <>
      <Link
        className="w-[346px] rounded-lg overflow-hidden shadow-lg border-2"
        key={article.id}
        to={`/article/${article.id}`}
      >
        <img
          src={article.img}
          alt="Articles Gambar"
          className="w-full h-40 object-cover"
        />
        <div className="p-4 bg-white">
          <p className="text-gray-600 text-sm">
            {article.date || "Tanggal tidak tersedia"}
          </p>
          <h2 className="font-bold text-lg text-gray-800">{article.title}</h2>
          <p className="text-gray-700 text-sm">{article.description}</p>
          {article.author && (
            <p className="text-gray-600 text-sm mt-1">By {article.author}</p>
          )}
        </div>
      </Link>
    </>
  );
}

export default Card;
