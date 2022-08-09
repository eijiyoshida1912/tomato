import React from "react";
import AreaList from "../components/AreaList";
import { prefData } from "../data";

const Home = () => {
  console.log(prefData.tohoku);
  return (
    <div className="top">
      <h1 className="top__title">■都道府県を選択してください</h1>
      <dl>
        <AreaList title="北海道・東北エリア" data={prefData.tohoku} />
        <AreaList title="関東エリア" data={prefData.kanto} />
        <AreaList title="甲信越・北陸エリア" data={prefData.koshinetsu} />
        <AreaList title="東海エリア" data={prefData.tokai} />
        <AreaList title="近畿エリア" data={prefData.kinki} />
        <AreaList title="中国・四国エリア" data={prefData.chugoku} />
        <AreaList title="九州・沖縄エリア" data={prefData.kyushu} />
      </dl>
    </div>
  );
};

export default Home;
