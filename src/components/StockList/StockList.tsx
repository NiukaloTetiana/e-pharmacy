export const StockList = () => {
  return (
    <section className="pt-10 md:pt-[64px] pb-[80px] md:pb-[120px]">
      <div className="container">
        <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-center gap-[16px] md:gap-[28px]">
          <li className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">1</span>Huge Sale
            </p>
            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              70%
              <button
                type="button"
                className="font-normal text-[13px] leading-[1.4] text-[#93939a] ml-[28px]"
              >
                Shop now
              </button>
            </p>
          </li>
          <li className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">2</span>Secure delivery
            </p>

            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              100%
              <button
                type="button"
                className="font-normal text-[13px] text-[#93939a] leading-[1.4] ml-[28px]"
              >
                Read more
              </button>
            </p>
          </li>
          <li className="li-home">
            <p className="flex gap-[14px] items-center mb-[14px]">
              <span className="span-home">3</span>Off
            </p>
            <p className="font-medium text-[24px] md:text-[36px] leading-[1.4] text-[#252539]">
              35%
              <button
                type="button"
                className="font-normal text-[13px] text-[#93939a] leading-[1.4] ml-[28px]"
              >
                Shop now
              </button>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
