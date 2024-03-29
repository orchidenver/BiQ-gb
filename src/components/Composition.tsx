import Divider from "./Divider";

import "./Composition.css";

export default function Composition() {
  const compositionEls: string[] = [
    "TDS mg/l",
    "550",
    "pH",
    "7.4",
    "Silica",
    "7.2",
    "HCO3",
    "402",
    "Mg",
    "34",
    "Ca",
    "62",
    "Na",
    "<2",
  ];
  return (
    <>
      <div className="container">
        <section className="item item-bold" id="item-head">
          Countries of origin
        </section>
        <div className="item">Serbia</div>
      </div>
      <Divider />
      <div className="container">
        {compositionEls.map((el: string, i: number) => (
          <div className="item item-compos" key={el + i}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
