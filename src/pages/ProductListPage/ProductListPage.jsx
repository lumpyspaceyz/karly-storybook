import Header from "@/organisms/Header/Header"

const ProductListPage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="fixed right-[39px] top-[440px] z-20 flex h-[223px] w-[76px] flex-col items-center gap-2 border border-gray-200 bg-white p-2">
          <svg role="button" width={18} height={18} viewBox="8 8 18 18" className="button__prev swiper-button-disabled" tabIndex={-1} aria-label="Previous slide" aria-controls="swiper-wrapper-7b6c91721078a9f52" aria-disabled="true">
            <use href="/icons/_sprite.svg#arrows" />
          </svg>
          <p className="text-l-sm text-black">최근 본 상품</p>
          <div className="swiper swiper__sidebar h-[129px] w-10 swiper-initialized swiper-vertical swiper-backface-hidden">
            <div className="swiper-wrapper" id="swiper-wrapper-7b6c91721078a9f52" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 2" style={{ height: '34.4444px', marginBottom: 20 }}>
                <a href="#">
                  <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/js0aa9ql3nzgbep/thumb1_TxZAyGeLuA.jpeg" alt="항정살 구이용" />
                </a>
              </div>
              <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2" style={{ height: '34.4444px', marginBottom: 20 }}>
                <a href="#">
                  <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg" alt="블렌드 원두 4종" />
                </a>
              </div>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
          </div>
          <svg role="button" width={18} height={18} viewBox="8 34 18 18" className="button__next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-7b6c91721078a9f52" aria-disabled="false">
            <use href="/icons/_sprite.svg#arrows" />
          </svg>
        </div>
        <div className="pb-20">
          <h2 className="py-12 text-center text-l-lg text-black">베스트</h2>
          <div className="mx-auto my-0 flex w-innerWrapper justify-between">
            <form>
              <div className="list__div-filter no-scrollbar w-[220px] overflow-y-scroll py-3.5">
                <details className="group border-b border-gray-100">
                  <summary className="flex list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>필터</span>
                    <button className="list__button-reset text-[10px] font-light text-gray-300" type="reset">초기화</button>
                  </summary>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>카테고리</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="list__ul-filter-category pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="면" name="면" defaultValue="면" className="peer appearance-none" />
                      <label htmlFor="면" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="면">면</label>
                      <span className="pl-2 text-p-sm text-gray-300 align-middle">4</span>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="채소" name="채소" defaultValue="채소" className="peer appearance-none" />
                      <label htmlFor="채소" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="채소">채소</label>
                      <span className="pl-2 text-p-sm text-gray-300 align-middle">4</span>
                    </li>
                  </ul>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>브랜드</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="list__ul-filter-brand pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="풀무원" name="풀무원" defaultValue="풀무원" className="peer appearance-none" />
                      <label htmlFor="풀무원" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="풀무원">풀무원</label>
                      <span className="pl-2 text-p-sm text-gray-300 align-middle">3</span>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="투다리" name="투다리" defaultValue="투다리" className="peer appearance-none" />
                      <label htmlFor="투다리" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="투다리">투다리</label>
                      <span className="pl-2 text-p-sm text-gray-300 align-middle">1</span>
                    </li>
                  </ul>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>가격</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="radio" id="price1" name="price" className="peer appearance-none" />
                      <label htmlFor="price1" className="h-6 w-6 bg-input__button bg-radio--no peer-checked:bg-radio--yes mr-2" />
                      <label htmlFor="price1">5,000원 미만</label>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="radio" id="price2" name="price" className="peer appearance-none" />
                      <label htmlFor="price2" className="h-6 w-6 bg-input__button bg-radio--no peer-checked:bg-radio--yes mr-2" />
                      <label htmlFor="price2">5,000원 ~ 10,000원</label>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="radio" id="price3" name="price" className="peer appearance-none" />
                      <label htmlFor="price3" className="h-6 w-6 bg-input__button bg-radio--no peer-checked:bg-radio--yes mr-2" />
                      <label htmlFor="price3">10,001원 ~ 15,000원</label>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="radio" id="price4" name="price" className="peer appearance-none" />
                      <label htmlFor="price4" className="h-6 w-6 bg-input__button bg-radio--no peer-checked:bg-radio--yes mr-2" />
                      <label htmlFor="price4">15,000원 이상</label>
                    </li>
                  </ul>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>혜택</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="discount" name="discount" className="peer appearance-none" />
                      <label htmlFor="discount" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="discount">할인 상품</label>
                    </li>
                  </ul>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>유형</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="karlyOnly" name="karlyOnly" className="peer appearance-none" />
                      <label htmlFor="karlyOnly" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="karlyOnly">Karly Only</label>
                    </li>
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="limited" name="limited" className="peer appearance-none" />
                      <label htmlFor="limited" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="limited">한정수량</label>
                    </li>
                  </ul>
                </details>
                <details className="group border-b border-gray-100" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
                    <span>특정상품 제외</span>
                    <span className="transition group-open:rotate-180">
                      <svg role="img" width={18} height={18} viewBox="8 34 18 18 ">
                        <use href="/icons/_sprite.svg#arrows" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="pl-1 text-[14px]">
                    <li className="flex items-center pb-4 pt-2">
                      <input type="checkbox" id="pet" name="pet" className="peer appearance-none" defaultValue="반려동물" />
                      <label htmlFor="pet" className="h-6 w-6 bg-input__button bg-check--no peer-checked:bg-check--yes mr-2" />
                      <label htmlFor="pet">반려동물 상품</label>
                    </li>
                  </ul>
                </details>
              </div>
            </form>
            <div className="flex flex-col">
              <div className="list__grid mb-6 grid grid-cols-3 gap-x-[18px] gap-y-6">
                <div className="text-l-base text-content">
                  총
                  <span className="list__span-total">18</span>
                  건
                </div>
                <div className="list__div-sort col-span-2 text-l-base">
                  <form>
                    <section className="flex items-center justify-end text-gray-300">
                      <span>
                        <input name="sort" id="type1" type="radio" className="peer appearance-none" defaultChecked />
                        <label htmlFor="type1" className="peer-checked:text-content">추천순</label>
                      </span>
                      <div className="mx-2 h-2.5 w-0 border border-gray-300" />
                      <span>
                        <input name="sort" id="type2" type="radio" className="peer appearance-none" />
                        <label htmlFor="type2" className="peer-checked:text-content">신상품순</label>
                      </span>
                      <div className="mx-2 h-2.5 w-0 border border-gray-300" />
                      <span>
                        <input name="sort" id="type3" type="radio" className="peer appearance-none" />
                        <label htmlFor="type3" className="peer-checked:text-content">판매량순</label>
                      </span>
                      <div className="mx-2 h-2.5 w-0 border border-gray-300" />
                      <span>
                        <input name="sort" id="type4" type="radio" className="peer appearance-none" />
                        <label htmlFor="type4" className="peer-checked:text-content">혜택순</label>
                      </span>
                      <div className="mx-2 h-2.5 w-0 border border-gray-300" />
                      <span>
                        <input name="sort" id="type5" type="radio" className="peer appearance-none" />
                        <label htmlFor="type5" className="peer-checked:text-content">낮은 가격순</label>
                      </span>
                      <div className="mx-2 h-2.5 w-0 border border-gray-300" />
                      <span>
                        <input name="sort" id="type6" type="radio" className="peer appearance-none" />
                        <label htmlFor="type6" className="peer-checked:text-content">높은 가격순</label>
                      </span>
                    </section>
                  </form>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg" className="h-full w-full object-cover" alt="블렌드 원두 4종" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[블루보틀] 블렌드 원두 4종</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-content">
                            25,000
                            <span>원</span>
                          </p>
                        </div>
                        <p className="text-p-sm text-gray-400">섬세하고 다채롭게 풀어낸 향미</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/js0aa9ql3nzgbep/thumb1_TxZAyGeLuA.jpeg" className="h-full w-full object-cover" alt="항정살 구이용" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[도드람한돈] 항정살 구이용 500g (냉장)</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            5
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            27,070
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">28,500 원</span>
                        <p className="text-p-sm text-gray-400">100g당 판매가: 5,700원</p>
                        <div className="flex gap-2">
                          <span className="rounded bg-gray-100 p-1 text-l-sm text-primary">Karly Only</span>
                        </div>
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/tmpp1i69yyi21zq/thumb1_tyTCvTrIZk.jpg" className="h-full w-full object-cover" alt="대패 삼겹살" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[도드람한돈] 대패 삼겹살 300g (냉동)</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            7
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            8,360
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">8,990 원</span>
                        <p className="text-p-sm text-gray-400">100g당 판매가: 2,997원</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/tpwo5fbl3kse9ss/thumb1_CYmlaTJ49L.jpg" className="h-full w-full object-cover" alt="오징어" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[KF365] 간편한 국산 손질 오징어 1kg</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            2
                            <span>%</span>
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
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/g32xoy95y83ty79/thumb1_L5IJ0loSNy.jpg" className="h-full w-full object-cover" alt="갈치" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[포트럭] 제주 손질 갈치 반마리 (왕특대) 220g (생물)</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            20
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            20,720
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">25,900 원</span>
                        <p className="text-p-sm text-gray-400">두툼한 살결이 오롯이 느껴지는</p>
                        <div className="flex gap-2">
                          <span className="rounded bg-gray-100 p-1 text-l-sm text-primary">Karly Only</span>
                          <span className="rounded bg-gray-100 p-1 text-l-sm text-content">한정수량</span>
                        </div>
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/musnud903ufy07p/thumb1_SN80veqJKT.jpg" className="h-full w-full object-cover" alt="홍가리비" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[포트럭] 국산 생물 홍가리비 700g</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-content">
                            7,200
                            <span>원</span>
                          </p>
                        </div>
                        <p className="text-p-sm text-gray-400">제철 맞은 화려한 자태</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/ele9glei84aiu7c/thumb1_n9RK0Et1DI.jpeg" className="h-full w-full object-cover" alt="바나나" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[Dole] 스위티오 바나나 1kg</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            5
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            4,250
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">4,480 원</span>
                        <p className="text-p-sm text-gray-400">고랭지 재배로 더 달고 쫀득한 (1수/1kg내외)</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/om399jm5ck87r8z/thumb1_jSf7XBKemF.jpg" className="h-full w-full object-cover" alt="파인애플" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[Dole] 스위티오 파인애플 청크 400g</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            20
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            6,000
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">7,500 원</span>
                        <p className="text-p-sm text-gray-400">손쉽게 즐기는 조각 파인애플</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="w-productBox-width h-productBox-height list_div-productBox">
                  <a href="#" className="a__product">
                    <div className="relative">
                      <div className="mb-4 h-80">
                        <img src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/ipop83di685lwjb/thumb1_FF16POVoCc.jpg" className="h-full w-full object-cover" alt="브로콜리" />
                      </div>
                      <div className="info flex flex-col gap-2">
                        <span className="text-l-sm text-gray-400">샛별배송</span>
                        <p className="text-p-base text-content">[KF365] 브로콜리 1입</p>
                        <div className="flex gap-2">
                          <p className="text-l-lg text-accent-yellow">
                            10
                            <span>%</span>
                          </p>
                          <p className="text-l-lg text-content">
                            2,330
                            <span>원</span>
                          </p>
                        </div>
                        <span className="text-p-sm text-gray-400 line-through">2,590 원</span>
                        <p className="text-p-sm text-gray-400">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</p>
                        <div className="flex gap-2" />
                      </div>
                      <button type="button" aria-label="장바구니 버튼" className="productBox__cart-button left-productBox-cart-left top-productBox-cart-top absolute">
                        <svg role="img" width={45} height={45} viewBox="0 0 45 45 ">
                          <use href="/icons/_sprite.svg#cart" />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex h-[600px] flex-col items-center justify-center" id="no-item" style={{ display: 'none' }}>
                <svg role="img" width={72} height={72} viewBox="0 0 36 36" aria-label>
                  <use href="/icons/_sprite.svg#search-gray" />
                </svg>
                <p className="text-p-base text-gray-600">해당 상품이 없습니다.</p>
              </div>
              <div className="flex justify-center pt-9 text-center">
                <div className="list__div-pagination flex border-y border-l border-gray-100" style={{ display: 'flex' }}>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                    <svg role="img" width={10} height={10} viewBox="3 3 10 10" aria-label>
                      <use href="/icons/_sprite.svg#arrow-page" />
                    </svg>
                  </button>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                    <svg role="img" width={10} height={10} viewBox="22 3 10 10" aria-label>
                      <use href="/icons/_sprite.svg#arrow-page" />
                    </svg>
                  </button>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 list__button-pageNumber text-p-base text-content hover:bg-gray-200 bg-gray-200 text-primary">
                    1
                  </button>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 list__button-pageNumber text-p-base text-content hover:bg-gray-200">
                    2
                  </button>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200" id="next-arrow">
                    <svg role="img" width={10} height={10} viewBox="35 3 10 10" aria-label>
                      <use href="/icons/_sprite.svg#arrow-page" />
                    </svg>
                  </button>
                  <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                    <svg role="img" width={10} height={10} viewBox="55 3 10 10" aria-label>
                      <use href="/icons/_sprite.svg#arrow-page" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <dialog className="add-cart__popup w-[396px] rounded-2xl px-5 py-6 backdrop:backdrop-brightness-50">
          <form action="#" className="grid auto-rows-min grid-cols-2 gap-x-2 gap-y-7">
            <div className="col-span-2 grid">
              <div className="product__info--template row-start-1">
                <p className="mb-3 text-l-base text-content" data-id="1r8hagdshf2m48s">[블루보틀] 블렌드 원두 4종</p>
                <span className="mt-4 text-l-base leading-[30px]" data-discountprice={25000} id="discountPrice" data-img="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg">
                  25,000원
                </span>
              </div>
              <div className="row-start-1 flex h-[30px] w-[90px] self-end justify-self-end border border-gray-200">
                <button type="button" className="button__minus w-[30px] overflow-hidden">
                  <svg role="img" width={46} height={84} viewBox="8 46 46 84">
                    <use href="/icons/_sprite.svg#minus" />
                  </svg>
                </button>
                <span className="product__amount inline-block w-[30px] text-center align-top leading-[30px]">1</span>
                <button type="button" className="button__plus w-[30px] overflow-hidden">
                  <svg role="img" width={46} height={84} viewBox="8 8 46 84">
                    <use href="/icons/_sprite.svg#plus" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="price__total--template col-span-2 grid gap-y-1">
              <span className="mt-3.5 align-bottom text-l-base">합계</span>
              <span className="text-right text-h-xl">25,000원</span>
              <div className="col-span-2 justify-self-end">
                <span className="rounded-sm bg-accent-yellow px-2 py-[3px] text-l-sm text-white">적립</span>
                <span className="inline-block w-32 text-right align-middle text-l-base leading-none">구매 시 13원 적립</span>
              </div>
            </div>
            <button type="reset" className="add-cart__button--closed button__default h-[54px] border border-gray-400 text-content">
              취소
            </button>
            <button type="button" className="add-cart__button button--purple__big">장바구니 담기</button>
          </form>
        </dialog>
        <footer className="mt-7 border border-t-gray-100">
          <div className="mx-auto my-7 flex w-innerWrapper justify-between text-content">
            <div>
              <h2 className="test text-h-lg">고객행복센터</h2>
              <span className="mt-4 text-h-2xl"><a href="#">1644-1107</a></span>
              <span className="test ml-2 mt-4 inline-block align-top text-l-base">월~토요일 오전 7시 - 오후 6시</span>
              <ul className="my-5">
                <li className="flex">
                  <button type="button" className="button--footer mr-4">카카오톡 문의</button>
                  <div>
                    <p className="text-p-base">월~토요일 | 오전 7시 - 오후 6시</p>
                    <p>일/공휴일 | 오전 7시 - 오후 1시</p>
                  </div>
                </li>
                <li className="my-7 flex">
                  <button type="button" className="button--footer mr-4">1:1 문의</button>
                  <div>
                    <p>365일</p>
                    <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                  </div>
                </li>
                <li className="flex">
                  <a href="#" target="_blank" className="button--footer mr-4 block text-center">대량주문 문의</a>
                  <div>
                    <p>월~금요일 | 오전 9시 - 오후 6시</p>
                    <p>점심시간 | 낮 12시 - 오후 1시</p>
                  </div>
                </li>
              </ul>
              <p>
                비회원 문의 :
                <a href="#" className="text-primary">help@karlycorp.com</a>
              </p>
              <p>
                비회원 대량주문 문의 :
                <a href="#" className="text-primary">help@karlycorp.com</a>
              </p>
            </div>
            <div>
              <nav>
                <ul className="flex gap-x-3 text-p-base">
                  <li>
                    <a href="#">칼리 소개</a>
                  </li>
                  <li>
                    <a href="#">칼리 소개 영상</a>
                  </li>
                  <li>
                    <a href="#">인재 채용</a>
                  </li>
                  <li>
                    <a href="#">이용약관</a>
                  </li>
                  <li>
                    <a href="#">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="#">이용안내</a>
                  </li>
                </ul>
              </nav>
              <address className="my-7 text-p-sm not-italic">
                <div>
                  <span>법인명 (상호) : 주식회사 칼리</span>
                  <span aria-hidden="true">|</span>
                  <span>사업자등록번호 : 261-81-23467</span>
                  <span aria-hidden="true">|</span>
                  <span><a href="#" className="text-primary">사업자정보 확인</a></span>
                </div>
                <div>
                  <span>통신판매업 : 제 2018-서울강남-01646호</span>
                  <span aria-hidden="true">|</span>
                  <span>개인정보보호책임자 : 이원준</span>
                </div>
                <div>
                  <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</span>
                  <span aria-hidden="true">|</span>
                  <span>대표이사 : 김슬아</span>
                </div>
                <div>
                  <span>입점문의 : 입점문의하기</span>
                  <span aria-hidden="true">|</span>
                  <span>
                    제휴문의 :
                    <a href="#" className="text-primary">business@karlycorp.com</a>
                  </span>
                </div>
                <span className="block">
                  채용문의 :
                  <a href="#" className="text-primary">recruit@karlycorp.com</a>
                </span>
                <span>팩스 : 070 - 7500 - 6098</span>
              </address>
              <ul className="flex gap-x-5">
                <li className="w-[30px] overflow-hidden">
                  <a href="#" target="_blank">
                    <svg role="img" width={188} height={30} viewBox="0 0 376 60" aria-label="마켓칼리 네이버블로그 바로가기">
                      <use href="/icons/_sprite.svg#sns" />
                    </svg>
                  </a>
                </li>
                <li className="w-[30px] overflow-hidden">
                  <a href="#" target="_blank">
                    <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓칼리 인스타그램 바로가기" />
                  </a>
                </li>
                <li className="w-[30px] overflow-hidden">
                  <a href="#" target="_blank">
                    <svg role="img" width={188} height={30} viewBox="158 0 376 60" aria-label="마켓칼리 페이스북 바로가기">
                      <use href="/icons/_sprite.svg#sns" />
                    </svg>
                  </a>
                </li>
                <li className="w-[30px] overflow-hidden">
                  <a href="#" target="_blank">
                    <svg role="img" width={188} height={30} viewBox="237 0 376 60" aria-label="마켓칼리 네이버포스트 바로가기">
                      <use href="/icons/_sprite.svg#sns" />
                    </svg>
                  </a>
                </li>
                <li className="w-[30px] overflow-hidden">
                  <a href="#" target="_blank">
                    <svg role="img" width={188} height={30} viewBox="316 0 376 60" aria-label="마켓칼리 유튜브 바로가기">
                      <use href="/icons/_sprite.svg#sns" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mx-auto mt-8 flex w-innerWrapper justify-between border-t border-gray-100 pb-7 pt-6 text-[10px] leading-[160%]">
            <li className="flex gap-x-2">
              <div className="inline-block w-[34px] overflow-hidden">
                <svg role="img" width={277} height={36} viewBox="0 0 277 36" aria-label="isms 로고">
                  <use href="/icons/_sprite.svg#footer" />
                </svg>
              </div>
              <div className="w-[180px]">
                <p>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영(심사받지 않은 물리적 인프라 제외)</p>
                <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div className="inline-block w-[34px] overflow-hidden">
                <svg role="img" width={277} height={36} viewBox="58 0 277 36" aria-label="eprivacy plus 로고">
                  <use href="/icons/_sprite.svg#footer" />
                </svg>
              </div>
              <div className="w-[180px]">
                <p>개인정보보호 우수 웹사이트</p>
                <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div className="inline-block w-[102px] overflow-hidden">
                <svg role="img" width={277} height={36} viewBox="115 0 277 36" aria-label="payments 로고">
                  <use href="/icons/_sprite.svg#footer" />
                </svg>
              </div>
              <div className="w-[135px]">
                <p>토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
              </div>
            </li>
            <li className="flex gap-x-2">
              <div className="inline-block w-[38px] overflow-hidden">
                <svg role="img" width={277} height={36} viewBox="240 0 277 36" aria-label="우리은행 로고">
                  <use href="/icons/_sprite.svg#footer" />
                </svg>
              </div>
              <div className="w-[205px]">
                <p>
                  고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                </p>
              </div>
            </li>
          </ul>
          <div className="min-w-max bg-gray-50 pb-7 pt-5 text-center text-[10px] leading-[160%] text-gray-400">
            <p>
              마켓칼리에서 판매되는 상품 중에는 마켓칼리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이
              포함되어 있습니다.
            </p>
            <p>
              마켓플레이스(오픈마켓) 상품의 경우 칼리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 칼리는 해당 상품의
              주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
            </p>
            <small className="mt-2 capitalize">© karly corp. all rights reserved</small>
          </div>
        </footer>
      </div>

    </>
  )
}

export default ProductListPage