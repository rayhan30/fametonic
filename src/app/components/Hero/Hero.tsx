import Image from "next/image";
import hero from "./Hero.module.scss";
export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8 py-10 md:py-15 pb-[0px] md:max-w-[1440px] mx-auto">
      {/* Left side: Text content */}
      <div className="lg:max-w-[525px] md:max-w-[525px] text-center md:text-left relative -top-[98px] z-[9] md:top-0 md:z-auto relative md:!z-[9999]">
        <h1 className="font-(family-name:--font-urbanist) font-bold text-[25px] md:text-[35px] text-white leading-[120%] md:leading-[115%]pl-[5px] pr-[5px]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p
          className={`${hero["text-shadow-custom"]} mt-[1px] md:mt-0 font-(family-name:--font-urbanist) font-bold text-[25px] md:text-[35px] text-[#00E7F9] leading-[115%]`}
        >
          Discover your way to success with Fametonic:
        </p>
        <ul className="font-(family-name:--font-figtree) list-none not-italic font-semibold text-[16px] leading-[22px] flex flex-col text-left gap-[9.5px] md:gap-[11.5px] mt-[24px] md:mt-[17px] text-white ml-[3px] md:ml-[1px]">
          <li>
            <span className="float-left w-[29px] h-[25px] text-[22px] relative top-[10px] -left-[2px] md:left-[0px] md:top-[0px]">
              ✨
            </span>{" "}
            <span className="content">
              Start growing your influence right away—no waiting required!
            </span>
          </li>
          <li>
            <span className="float-left w-[29px] h-[25px] mt-[0px] md:mt-[8px] text-[22px] relative top-[10px] -left-[2px] md:left-[0px] md:top-[0px]">
              ✨
            </span>{" "}
            <span className="content tracking-[-0.12px] md:tracking-[0px]">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons{" "}
            </span>
          </li>
          <li>
            <span className="float-left w-[29px] h-[25px] text-[22px] relative top-[10px] -left-[2px] md:left-[0px] md:top-[0px]">
              ✨
            </span>{" "}
            <span className="content">
              {" "}
              Use a Personal AI Worker to boost your content{" "}
            </span>
          </li>
          <li>
            <span className="float-left w-[29px] h-[25px] text-[22px] relative top-[10px] -left-[2px] md:left-[0px] md:top-[0px]">
              ✨
            </span>{" "}
            <span className="content tracking-[-0.12px] md:tracking-[0px]">
              {" "}
              Learn from expert-led courses designed for aspiring influencers
            </span>
          </li>
        </ul>
        <div className="flex flex-col-reverse md:flex-col">
          <a
            href="#"
            className="flex items-center justify-center mt-[41px] md:mt-[25px] px-[40px] py-[8px] gap-[10px] w-[351px] md:w-[313px] h-[40px] bg-[#FC004E] shadow-[2px_2px_10px_#00E7F9] rounded-[10px] text-white text-[20px] font-(family-name:--font-figtree) uppercase font-bold"
          >
            Get Started
            <Image
              src="/arrow.svg"
              alt="Phone displaying app interface"
              width={11}
              height={6}
              priority
            />
          </a>
          <p className="mt-[13px] text-white text-[12px] font-(family-name:--font-figtree) font-regular max-w-[100%] md:max-w-[313px] text-center leading-[12px] relative top-[104px] md:top-[0px]">
            1-minute quiz for personalized Insights
          </p>

          <p className="mt:0 md:mt-[33px] text-[#ABABAB] text-[12px] font-(family-name:--font-figtree) font-medium text-center px-[25px] md:px-[0px] md:text-left text-center leading-[100%]">
            By clicking &ldquo;Get Started, you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="mt-[15px] text-[#ABABAB] text-[10px] font-(family-name:--font-figtree) font-medium text-center md:text-left leading-[100%] relative top-[56px] md:top-[0px]">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 flex justify-center relative -top-[38px] md:top-[0px] pl-[14px] pr-[11px]">
        <Image
          className={hero.banner_image}
          src="/hero-image.svg"
          alt="Phone displaying app interface"
          width={666}
          height={679}
          priority
        />
      </div>
    </section>
  );
};
