import { StockList } from "../components";

const Home = () => {
  return (
    <>
      <section className="bg-[#59B17A] pt-[172px] pb-[246px] md:pt-[161px] md:pb-[258px] lg:pt-[47px] lg:pb-[146px]">
        <div className="container">
          <div className="pt-[19px] md:pt-[140px] md:pl-[31px] md:pr-[83px] bg-img h-[312px] w-[331px] sm-max:w-[280px] md:h-[508px] md:w-auto lg:w-[749px] mx-auto">
            <h1 className="w-[293px] md:w-[609px] font-semibold text-[50px] md:text-[74px] leading-[1] text-white mb-[20px] md:mb-[24px]">
              Your medication delivered
            </h1>
            <p className="w-[156px] md:w-[207px] font-normal text-[12px] md:text-[16px] leading-[1.25] text-white ml-auto">
              Say goodbye to all your healthcare worries with us
            </p>
          </div>
        </div>
      </section>
      <StockList />
    </>
  );
};

export default Home;
