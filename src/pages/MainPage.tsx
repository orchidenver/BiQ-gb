import * as React from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Button from "../components/Button";
import TextBlock from "../components/TextBlock";
import ImgComponent from "../components/ImgComponent";
import Composition from "../components/Composition";
import { Helmet } from "react-helmet";

import "./MainPage.css";

import productImg from "../assets/product-example.jpg";
import productImg2 from "../assets/product-example-2.jpg";
import logo from "../assets/logo.jpg";
import promo from "../assets/promo.jpg";

export default function MainPage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="BiQ Still - is a site about the power of still water"
        />
        <title>BiQ Still</title>
      </Helmet>
      <Banner />
      <main>
        <div className="moto">
          <h1
            style={{
              width: 195,
            }}
          >
            BE QUALITY WATER
          </h1>
        </div>
        <ImgComponent link={promo} altText="promo" banner={false} />
        <Divider />
        <TextBlock header="Distilled from nature" element="DIV">
          {
            <>
              <p className="list-block-paragraph">
                Humanity is rethinking the way we live. In a complex age, we
                strive for pure simplicity in our mental and physical health.
                This return to essentials applies to our planet, too. We can
                only improve our world by preserving the essential beauty that
                already exists in nature. Still water is essential because:
              </p>
              <ul>
                <li>
                  Quality of drinking water affects all parts of human
                  existence.
                </li>
                <li>Still water is balanced correctly for natural being.</li>
                <li>
                  Still water is enriched with the purity of deep sources.
                </li>
              </ul>
              <p className="list-block-paragraph">
                Get closer to your original natural state with still water
                bottled straight from the source.
              </p>
            </>
          }
        </TextBlock>
        <Divider />
        <TextBlock header="All in one bottle">
          One bottle. Nothing but still water inside. And when you know the
          source, you taste the purity even more. From the very beginning, we
          use only specially-selected sources of pure water. Then with science,
          we recreate water cycle as it occurs all over our earth. Throughout
          the entire process — producing glass bottles, designing distribution
          lines, even crafting packaging — we ensure the highest quality,
          bringing purity from nature right to you.
        </TextBlock>
        <ImgComponent link={productImg} altText="water" banner={false} />
        <TextBlock header="Glass container">
          The glass bottle is environmentally friendly and preserves the
          temperature and natural taste of the water inside. The shape of the
          bottle is inspired by a moment of purity: when you see your own
          refection on the water's rippled surface.
        </TextBlock>
        <Divider />
        <TextBlock header="Stone bottle cap">
          The stone bottle cap ensures sustainable use, evokes a sense of
          harmony, and gives the feeling of being alone in the middle of nature
          — totally balanced, just still water and you.
        </TextBlock>
        <Divider />
        <TextBlock header="Sustainable details">
          When water, glass, and stone come together, we only need one
          additional detail: a tamper-evident sticker to ensure your water is
          untouched. The sticker on the bottle is made of tyvek paper, so the
          whole bottle is recyclable and environmentally friendly.
        </TextBlock>
        <ImgComponent link={productImg2} altText="water" banner={false} />
        <div className="product-section">
          <div className="product-info-block">
            <span
              className="product-info-item bold"
              style={{
                fontSize: 20,
              }}
            >
              Still water
            </span>
            <span
              className="product-info-item gray"
              style={{
                fontSize: 20,
              }}
            >
              0.3/0.7/1L
            </span>
          </div>
          <Button height={50} fontSize={20} width="40vw">
            More info
          </Button>
        </div>
        <ImgComponent link={logo} altText="logo" banner={false} />
        <Composition />
      </main>
    </>
  );
}
