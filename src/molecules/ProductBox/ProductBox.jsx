const ProductBox = () => {
  return (
    <div className="w-productBox-width h-productBox-height list_div-productBox">
      <a href="#" className="a__product">
        <div className="relative">
          <div className="mb-4 h-80">
            <img
              src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/tpwo5fbl3kse9ss/thumb1_CYmlaTJ49L.jpg"
              className="h-full w-full object-cover"
              alt="오징어"
            />
          </div>
          <div className="info flex flex-col gap-2">
            <span className="text-l-sm text-gray-400">샛별배송</span>
            <p className="text-p-base text-content">[KF365] 간편한 국산 손질 오징어 1kg</p>
            <div className="flex gap-2">
              <p className="text-l-lg text-accent-yellow">
                2<span>%</span>
              </p>
              <p className="text-l-lg text-content">
                21,070
                <span>원</span>
              </p>
            </div>
            <span className="text-p-sm text-gray-400 line-through">21,500 원</span>
            <p className="text-p-sm text-gray-400">바로 요리할 수 있어 간편</p>
            <div className="flex gap-2">
              <span className="rounded bg-gray-100 p-1 text-l-sm text-primary">Karly Only</span>
              <span className="rounded bg-gray-100 p-1 text-l-sm text-content">한정수량</span>
            </div>
          </div>
          <button
            type="button"
            aria-label="장바구니 버튼"
            className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute"
          >
            <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
              <use href="/icons/_sprite.svg#cart"></use>
            </svg>
          </button>
        </div>
      </a>
    </div>
  );
};

export default ProductBox;
