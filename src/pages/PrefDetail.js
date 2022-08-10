import { useParams } from "react-router-dom";
import banner from "../images/banner1.png";
import { Link } from "react-router-dom";
import { prefData, supermarkets } from "../data";

const PrefDetail = () => {
  const { prefId } = useParams();
  const prefList = Object.values(prefData).flat();
  const prefName = prefList.find((v) => v.id === prefId).name;

  return (
    <div className="prefDetail">
      <img
        src={banner}
        className="prefDetail__banner"
        alt="トマトの日キャンペーン"
      />
      <h1 className="prefDetail__title">{prefName}のスーパー一覧</h1>
      <p className="prefDetail__desc">
        下記スーパー名をタップして、キャンペーン詳細をご確認ください。
      </p>
      <ul className="prefDetail__list">
        {supermarkets.map((v) => (
          <li>
            <Link to={"shopdetail/" + v.id}>{v.name}</Link>
          </li>
        ))}
      </ul>
      <button className="prefDetail__button">
        <Link to="/">都道府県選択に戻る</Link>
      </button>
    </div>
  );
};

export default PrefDetail;
