import arrowBlack from "../assets/icons/arrow-black.svg";
import arrowWhite from "../assets/icons/arrow-white.svg";
import article1Img from "../assets/article1.jpg";
import article2Img from "../assets/article2.jpg";
import Cards from "./Cards";

function Article() {
  return (
    <article id="#membership" className="grid-article">
      <div className="article-conten">
        <p className="arrow">
          <img src={arrowBlack} alt="Arrow" className="primera" />

          <img src={arrowWhite} alt="Arrow" className="segunda" />
        </p>
        <h2 className="article-title">SUCCESS STORIES</h2>
        <p className="article-desc">
          Here are three balanced options for your Success Stories section. Like
          the gym cards, these are written to have a similar length and
          structure so they look perfectly symmetrical next to each other in
          your layout.
        </p>
      </div>

      <div className="article-img">
        <img src={article1Img} alt="Foto" />

        <img src={article2Img} alt="Foto" />
      </div>

      <div className="article-cards">
        <Cards />
      </div>
    </article>
  );
}

export default Article;
