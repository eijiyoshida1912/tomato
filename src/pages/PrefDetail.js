import { useParams } from "react-router-dom";
import banner from "../images/banner1.png";
import { Link } from "react-router-dom";

const PrefDetail = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="prefDetail">
      <img
        src={banner}
        className="prefDetail__banner"
        alt="トマトの日キャンペーン"
      />
      <h1 className="prefDetail__title">東京都のスーパー一覧</h1>
      <p className="prefDetail__desc">
        下記スーパー名をタップして、キャンペーン詳細をご確認ください。
      </p>
      <ul className="prefDetail__list">
        <li>
          <Link to="#">フレスタ渋谷店</Link>
        </li>
        <li>
          <Link to="#">ライフ渋谷東店</Link>
        </li>
        <li>
          <Link to="#">マルエツプチ</Link>
        </li>
        <li>
          <Link to="#">フレスタ渋谷店</Link>
        </li>
        <li>
          <Link to="#">ライフ渋谷東店</Link>
        </li>
        <li>
          <Link to="#">マルエツプチ</Link>
        </li>
        <li>
          <Link to="#">フレスタ渋谷店</Link>
        </li>
        <li>
          <Link to="#">ライフ渋谷東店</Link>
        </li>
        <li>
          <Link to="#">マルエツプチ</Link>
        </li>
      </ul>
    </div>
  );
};

export default PrefDetail;
