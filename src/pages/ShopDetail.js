import { useNavigate, useParams } from "react-router-dom";
import { supermarkets } from "../data";

const ShopDetail = () => {
  const { shopId } = useParams();
  const shop = supermarkets.find((v) => v.id === shopId);
  const navigate = useNavigate();

  return (
    <div className="shopDetail">
      <h1 className="shopDetail__title">{shop.name}</h1>
      <ul className="shopDetail__imageList">
        {shop.image1 && (
          <li>
            <img src={"/images/" + shop.image1} alt="" />
          </li>
        )}
        {shop.image2 && (
          <li>
            <img src={"/images/" + shop.image2} alt="" />
          </li>
        )}
      </ul>
      <p className="shopDetail__description">{shop.description}</p>
      <button className="shopDetail__button">
        <a href={shop.campaignLink}>キャンペーンはこちら</a>
      </button>
      <button className="shopDetail__back" onClick={() => navigate(-1)}>
        スーパー名一覧に戻る
      </button>
    </div>
  );
};

export default ShopDetail;
