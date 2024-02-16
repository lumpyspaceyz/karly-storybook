const Sorting = () => {
  return (
    <div className="list__div-sort col-span-2 text-l-base">
      <form>
        <section className="flex items-center justify-end text-gray-300">
          <span>
            <input name="sort" id="type1" type="radio" className="peer appearance-none" checked />
            <label htmlFor="type1" className="peer-checked:text-content">
              추천순
            </label>
          </span>
          <div className="mx-2 h-2.5 w-0 border border-gray-300"></div>
          <span>
            <input name="sort" id="type2" type="radio" className="peer appearance-none" />
            <label htmlFor="type2" className="peer-checked:text-content">
              신상품순
            </label>
          </span>
          <div className="mx-2 h-2.5 w-0 border border-gray-300"></div>
          <span>
            <input name="sort" id="type3" type="radio" className="peer appearance-none" />
            <label htmlFor="type3" className="peer-checked:text-content">
              판매량순
            </label>
          </span>
          <div className="mx-2 h-2.5 w-0 border border-gray-300"></div>
          <span>
            <input name="sort" id="type4" type="radio" className="peer appearance-none" />
            <label htmlFor="type4" className="peer-checked:text-content">
              혜택순
            </label>
          </span>
          <div className="mx-2 h-2.5 w-0 border border-gray-300"></div>
          <span>
            <input name="sort" id="type5" type="radio" className="peer appearance-none" />
            <label htmlFor="type5" className="peer-checked:text-content">
              낮은 가격순
            </label>
          </span>
          <div className="mx-2 h-2.5 w-0 border border-gray-300"></div>
          <span>
            <input name="sort" id="type6" type="radio" className="peer appearance-none" />
            <label htmlFor="type6" className="peer-checked:text-content">
              높은 가격순
            </label>
          </span>
        </section>
      </form>
    </div>
  );
};

export default Sorting;
