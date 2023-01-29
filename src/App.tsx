import hero_img_desktop from "./assets/images/image-web-3-desktop.jpg";
import hero_img_mobile from "./assets/images/image-web-3-mobile.jpg";
import footer_img_1 from "./assets/images/image-retro-pcs.jpg";
import footer_img_2 from "./assets/images/image-top-laptops.jpg";
import footer_img_3 from "./assets/images/image-gaming-growth.jpg";
import Header from "./component/header";
import SidebarContent from "./component/sidebarContent";
import FooterContent from "./component/footerContent";

function App() {
  return (
    <div className="container">
      <div className="page">
        <Header />
        <main className="main">
          <picture className="hero-img">
            <img src={hero_img_desktop} alt="hero" className="hide-on-mobile" />
            <img src={hero_img_mobile} alt="hero" className="hide-on-desktop" />
          </picture>
          <div className="hero-title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="hero-description">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="transparent-button read-more-button">
              <p>Read More</p>
            </button>
          </div>
        </main>
        <aside className="sidebar">
          <h2>New</h2>
          <div className="sidebar-content-container">
            <SidebarContent
              title="Hydrogen VS Electric Cars"
              content="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <hr />
            <SidebarContent
              title="The Downsides of AI Artistry"
              content="What are the possible adverse effects of on-demand AI image
              generation?"
            />
            <hr />
            <SidebarContent
              title="Is VC Funding Drying Up?"
              content="Private funding by VC firms is down 50% YOY."
            />
          </div>
        </aside>
        <div className="footer">
          <FooterContent
            img={footer_img_1}
            alt_img="retro pc"
            order="01"
            title="Reviving Retro PCs"
            content="What happens when old PCs are given modern upgrades?"
          />
          <FooterContent
            img={footer_img_2}
            alt_img="top laptop"
            order="02"
            title="Top 10 Laptops of 2022"
            content="Our best picks for various needs and budgets."
          />
          <FooterContent
            img={footer_img_3}
            alt_img="gaming growth"
            order="03"
            title="The Growth of Gaming"
            content="How the pandemic has sparked fresh opportunities."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
