import { Link } from "react-router";
import heroImg from "../assets/hero-img.jpg";
import { glasses } from "../DUMMY_PRODUCTS";
import "./HomePage.css";

export default function HomePage() {
  const featuredProducts = glasses.slice(0, 6);

  return (
    <>
      <section id="hero">
        <div className="container-lg">
          <div className="hero-description">
            <h1>See everything with Clarity</h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.Buying eyewear should leave you happy and
              good-looking, with money in your pocket. Glasses, sunglasses, and
              contacts—we’ve got your eyes covered.
            </p>
            <Link to="/shop">Shop now</Link>
          </div>

          <div className="hero-img">
            <img src={heroImg} alt="girl with glasses" />
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container-lg">
          <h3>Featured Products</h3>
          <Link to="/shop">See all</Link>
        </div>

        <div className="container-lg">
          <ul className="featured-product-list">
            {featuredProducts.map((item) => (
              <li key={item.name}>
                <Link to={`/product/${item.name}`}>
                  <div className="featured-product-container">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.brand}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
