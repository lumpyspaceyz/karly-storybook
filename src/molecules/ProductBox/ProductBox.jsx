import 가격 from './가격';

const ProductImg = () => {
  return (
    <div className="mb-4 h-80">
      <img
        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/tpwo5fbl3kse9ss/thumb1_CYmlaTJ49L.jpg"
        className="h-full w-full object-cover"
        alt="오징어"
      />
    </div>
  );
};

const CartButton = () => {
  return (
    <button
      type="button"
      aria-label="장바구니 버튼"
      className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute"
    >
      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
        <use href="/icons/_sprite.svg#cart"></use>
      </svg>
    </button>
  );
};

const 샛별배송 = () => {
  return <span className="text-l-sm text-gray-400">샛별배송</span>;
};

const 타이틀 = () => {
  return <p className="text-p-base text-content">[KF365] 간편한 국산 손질 오징어 1kg</p>;
};

const 할인률 = () => {
  return (
    <p className="text-l-lg text-accent-yellow">
      2<span>%</span>
    </p>
  );
};

const 할인가격 = () => {
  return <span className="text-p-sm text-gray-400 line-through">21,500 원</span>;
};

const 컬리온리 = () => {
  return <span className="rounded bg-gray-100 p-1 text-l-sm text-primary">Karly Only</span>;
};

const 한정수량 = () => {
  return <span className="rounded bg-gray-100 p-1 text-l-sm text-content">한정수량</span>;
};

/**
 *
 * @param {{
 *  isKalryOnly: boolean
 *  is한정수량: boolean
 *  is샛별배송: boolean,
 * }} props
 * @returns
 */
const ProductBox = (props) => {
  return (
    <div className="w-productBox-width h-productBox-height list_div-productBox">
      <a href="#" className="a__product">
        <div className="relative">
          <ProductImg />
          <div className="info flex flex-col gap-2">
            {props.is샛별배송 && <샛별배송 />}
            <타이틀 />
            <div className="flex gap-2">
              <할인률 />
              <가격 />
            </div>

            <할인가격 />
            <p className="text-p-sm text-gray-400">바로 요리할 수 있어 간편</p>
            <div className="flex gap-2">
              {props.isKalryOnly && <컬리온리 />}
              {props.is한정수량 && <한정수량 />}
            </div>
          </div>
          <CartButton />
        </div>
      </a>
    </div>
  );
};

export default ProductBox;
