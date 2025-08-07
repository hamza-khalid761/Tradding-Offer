import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Player from "@vimeo/player";

export const LandingPage = (): JSX.Element => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      // Initially paused
      player.pause();

      // Listen video state changes
      player.on("play", () => setIsPlaying(true));
      player.on("pause", () => setIsPlaying(false));
    }
  }, []);

  const handleTogglePlayPause = async () => {
    if (playerRef.current) {
      if (isPlaying) {
        await playerRef.current.pause();
      } else {
        await playerRef.current.setVolume(1);
        await playerRef.current.play();
      }
    }
  };
  // Countdown timer state
  // Countdown timer state: only hours, minutes, seconds
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    let totalSeconds =
      timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Remove videoAvailable logic; always show the iframe

  // Trading account data
  const tradingAccounts = [
    {
      size: "$10,000 Trading Account",
      price: "Evaluation price is $85",
      discountPrice: "$63.75!",
      iconSrc: "/10K.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$25,000 Trading Account",
      price: "Evaluation price is $189",
      discountPrice: "$141.75",
      iconSrc: "/2kk.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$50,000 Trading Account",
      price: "Evaluation price is $349",
      discountPrice: "$261.75",
      iconSrc: "/50k.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$100,000 Trading Account",
      price: "Evaluation price is $549",
      discountPrice: "$411.75",
      iconSrc: "/100k.png",
      lineSrc: "/Cross.png",
    },
  ];

  // How it works steps
  const workSteps = [
    {
      number: "1",
      title: "Buy a trading evaluation",
      description:
        "Buy a trading evaluation, and demonstrate your trading skills by meeting the company's criteria:",
    },
    {
      number: "2",
      title: "Pass the trading evaluation",
      description:
        "Once you pass the trading evaluation, Leveraged will give you a trading account for you to trade with.",
    },
    {
      number: "3",
      title: "Buy a trading evaluation",
      description:
        "Leveraged will pay you 80% of the profits you generate as your commission!",
    },
  ];

  return (
    <div className="bg-[#03051C] flex flex-row justify-center w-full">
      <div className="bg-[#03051C] overflow-hidden w-full max-w-[1920px] relative">
        {/* Logo */}
        <div className="flex justify-center items-center ">
          <img
            src="/trading-logo.png"
            alt="Trading Offers Logo"
            className="w-36 md:w-48 lg:w-[200px] h-auto"
          />
        </div>

        {/* Hero Section */}
        <section className="relative w-full  px-6 md:px-12 lg:px-3 overflow-hidden">
          {/* Background image */}
          <div
            style={{
              backgroundPosition: "center 10%", // Adjust this percentage as needed
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            }}
            className="absolute inset-0 bg-[url(/background-effect.png)] bg-cover bg-no-repeat bg-center z-0"
          />

          {/* Heading */}
          <h1 className="relative z-10 text-white font-sequel text-[18px] lg:text-[50.88px] font-bold text-center leading-tight max-w-7xl mx-auto mb-0 lg:mb-8">
            The Side Hustle Helping Traders Earn $1,500-$9,500 per month
          </h1>

          {/* <div className="relative z-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] mx-auto mt-3 lg:mt-12">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md bg-white/10">
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1090860591?h=5e4b7efc9f&autoplay=0&muted=0&loop=1&controls=1&title=0&byline=0&portrait=0&background=1"
                className="absolute top-0  left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />

              <button
                onClick={handleTogglePlayPause}
                className="absolute bottom-4 lg:bottom-6 left-4  z-30 bg-white/90 rounded-full p-2 shadow-xl hover:scale-110 transition"
              >
                {isPlaying ? (
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div> */}

          <div className="relative z-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] mx-auto mt-3 lg:mt-12">
            <div
              style={{ borderRadius: "16px", overflow: "hidden" }}
              className="relative aspect-video overflow-hidden "
            >
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1090860591?h=5e4b7efc9f&autoplay=0&muted=0&loop=1&controls=1&title=0&byline=0&portrait=0&background=0"
                className="absolute top-0  left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 flex justify-center mt-12">
            <Button
              className="
      w-[90%] sm:w-[71%] md:w-[50%] lg:w-[32%] xl:w-[28%] mx-auto
      py-4 md:py-5 lg:py-6 xl:py-8
      bg-[#9af5bd] hover:bg-[#8ae5ad] rounded-full
      transition-all
    "
            >
              <span className="text-[#042720] text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-inter">
                GET 25% OFF NOW
              </span>
            </Button>
          </div>
        </section>

        {/* Trading Without Risk Section */}
        <section className="mt-8 lg:mt-20 px-6 md:px-12 lg:px-32">
          <h2 className="text-center text-white font-sequel text-[19px]  font-extrabold sm:text-3xl md:text-5xl lg:text-[58.88px] leading-tight mb-4 max-w-6xl mx-auto">
            Find out how you can trade Stocks, Forex{" "}
            <br className="hidden md:hodden" />
            and Crypto without risking your own money
          </h2>
          <p className="text-center text-[#ffffffcc] font-inter text-[16px] lg:text-[36px] mb-10 max-w-4xl mx-auto">
            The secret: Use other people’s money and get paid!
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              className="w-full rounded-2xl shadow-lg"
              alt="Richard's certificate"
              src="/Certificate.png"
            />
            <img
              className="w-full rounded-2xl shadow-lg"
              alt="James w certificate"
              src="/Certificate-one.png"
            />
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="mt-16 px-6 md:px-12 lg:px-32">
          <p className="mx-auto text-center font-inter font-medium text-[#ffffffcc] text-[20px] lg:text-[32px]  leading-tight max-w-2xl mb-8">
            Real payouts, paid through the world’s leaders
          </p>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-6 max-w-xs mx-auto md:max-w-5xl md:mx-auto md:grid-cols-6 md:grid-rows-1 md:gap-x-12 md:gap-y-0">
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto"
              src="/visa.png"
              alt="Visa"
            />
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto"
              src="/revo.png"
              alt="Revolut"
            />
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  "
              src="/paypal.png"
              alt="PayPal"
            />
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  "
              src="/master.png"
              alt="Mastercard"
            />
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  "
              src="/stripe.png"
              alt="Stripe"
            />
            <img
              className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  "
              src="/american.png"
              alt="American Express"
            />
          </div>
        </section>

        {/* Testimonials Section */}

        <section className="mt-10 lg:mt-32 px-6 md:px-12 lg:px-32">
          <h2 className="text-center font-sequel font-medium text-white text-[32px] lg:text-[60px] leading-tight mb-12">
            What Leveraged’s Traders Are Saying
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            <img
              src="/Frame-1.png"
              alt="Testimonial 1"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
            <img
              src="/Frame-2.png"
              alt="Testimonial 2"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
            <img
              src="/Frame-3.png"
              alt="Testimonial 3"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
            <img
              src="/Frame-4.png"
              alt="Testimonial 4"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
            <img
              src="/Frame-5.png"
              alt="Testimonial 5"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
            <img
              src="/Frame-6.png"
              alt="Testimonial 6"
              className="w-full rounded-xl shadow-lg cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.trustpilot.com/review/getleveraged.com")
              }
            />
          </div>
        </section>

        {/* Trading Account Options */}
        <section className="mt-10 lg:mt-32 px-6 md:px-12 lg:px-32">
          <h2 className="text-center font-sequel font-bold text-white text-[32px] lg:text-[60px] tracking-[0] leading-[normal] whitespace-normal break-words">
            Choose Your Trading Account Size
          </h2>

          <p className="mx-auto max-w-[1050px] mt-4 md:mt-6 font-inter font-light text-[#ffffffcc] text-[16px] lg:text-[32px] text-center tracking-[0.20px] leading-snug whitespace-normal break-words">
            All accounts include access to exclusive AI tools, live webinars, a
            comprehensive eBook, expert coaching, and more!
          </p>

          <div className="flex flex-col max-w-[1200px] mx-auto gap-12 xl:gap-24 mt-16">
            {/* Cards row 1 */}
            <div className="flex flex-col md:flex-row items-center gap-9 w-full">
              {tradingAccounts.slice(0, 2).map((account, index) => (
                <Card
                  key={`account-${index}`}
                  className="flex flex-col items-center gap-6 flex-1 bg-transparent border-none"
                >
                  <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                    <img
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[126px] lg:h-[126px] cursor-pointer hover:bg-[#053a2d] bg-cover"
                      alt="Account icon"
                      src={account.iconSrc}
                      onClick={() =>
                        (window.location.href = "https://www.wikipedia.org/")
                      }
                    />
                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full">
                      <h3 className="font-sequel font-medium text-white text-[36px] text-center tracking-[0] leading-[normal]">
                        {account.size}
                      </h3>
                      <div className="flex items-center justify-center w-full relative mt-2">
                        <p className="font-inter font-medium text-[#d5d5d5] text-opacity-70 text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                          {account.price}
                        </p>
                        <img
                          className="absolute top-1 left-[72%] lg:left-[66%] sm:left-[83%]  xl:left-[67%] -translate-x-1/3  w-[30px] md:w-[47px] h-[20px] md:h-[25px]"
                          alt="Line"
                          src={account.lineSrc}
                        />
                      </div>
                      <p className="font-inter text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                        <span className="font-medium text-[#d5d5d5] tracking-[-0.06px]">
                          ONLY{" "}
                        </span>
                        <span className="font-extrabold text-[#9af5bd] tracking-[-0.06px]">
                          {account.discountPrice}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cards row 2 */}
            <div className="flex flex-col md:flex-row items-center gap-9 w-full">
              {tradingAccounts.slice(2, 4).map((account, index) => (
                <Card
                  key={`account-${index + 2}`}
                  className="flex flex-col items-center gap-6 flex-1 bg-transparent border-none"
                >
                  <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                    <img
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[126px] lg:h-[126px] cursor-pointer hover:bg-[#053a2d] bg-cover"
                      alt="Account icon"
                      src={account.iconSrc}
                      onClick={() =>
                        (window.location.href = "https://www.wikipedia.org/")
                      }
                    />
                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full">
                      <h3 className="font-sequel font-medium text-white text-[36px]  text-center tracking-[0] leading-[normal]">
                        {account.size}
                      </h3>
                      <div className="flex items-center justify-center w-full relative mt-2">
                        <p className="font-inter font-medium text-[#d5d5d5] text-opacity-70 text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                          {account.price}
                        </p>
                        {/* <img
                          className="absolute top-1 custom-position left-[71%] sm:left-[72%] md:left-[79%] lg:left-[79%] xl:left-[67%] -translate-x-1/3 w-[30px] md:w-[47px] h-[20px] md:h-[25px]"
                          alt="Line"
                          src={account.lineSrc}
                        /> */}
                        <img
                          className="absolute top-1 left-[72%] lg:left-[66%] translate-x-[-30%] w-[30px] md:w-[47px] h-[20px] md:h-[25px] custom-position"
                          alt="Line"
                          src={account.lineSrc}
                        />
                      </div>
                      <p className="font-inter text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                        <span className="font-medium text-[#d5d5d5] tracking-[-0.06px]">
                          ONLY{" "}
                        </span>
                        <span className="font-extrabold text-[#9af5bd] tracking-[-0.06px]">
                          {account.discountPrice}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div
          className="max-w-5xl w-full py-3 px-3 mx-auto mt-16 rounded-[12px] flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0 border"
          style={{
            border: "0.9px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="flex-1 text-white font-inter text-[30px] text-center items-center md:text-left font-medium leading-snug md:leading-normal m-2">
            Get an exclusive 25% discount with code “TOFFERS”!
          </p>
          <button
            className="w-[250px] h-[70px] lg:w-[180px] lg:h-[60px] rounded-lg text-white font-normal text-xl tracking-wide transition border-none font-inter"
            style={{
              border: "0.9px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 13.44px 4.48px #9af5bd78 inset",
              background:
                "linear-gradient(180deg, rgba(154,245,189,0.18) 0%, #101828 100%)",
              fontWeight: 400,
            }}
          >
            "TOFFERS"
          </button>
        </div>

        {/* How It Works Section */}
        <section className="mt-20 md:mt-32 px-6 md:px-12 lg:px-32">
          <h2 className="text-center font-sequel font-medium text-white text-[32px] lg:text-[60px] tracking-[0] leading-[normal]">
            How Does It Work?
          </h2>

          {/* Mobile & Tablet View (Left Aligned) */}
          <div className="lg:hidden mt-8 md:mt-12 flex flex-col items-start gap-8 md:gap-10">
            {workSteps.map((step, index) => (
              <div
                key={`mobile-step-${index}`}
                className="flex items-start gap-4 w-full"
              >
                {/* Number with connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#9af5bd] rounded-full">
                    <span className="font-sequel font-medium text-[#03051c] text-lg">
                      {step.number}
                    </span>
                  </div>
                  {index < workSteps.length - 1 && (
                    <div className="w-px h-8 md:h-12 mt-2 bg-[#042720]"></div>
                  )}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sequel font-medium text-white text-[22.69px] lg:text-[32px] text-left leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 md:mt-3 opacity-50 font-inter font-normal text-white text-[14px] lg:text-[16px] text-left leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View (Timeline Layout) */}
          <div className="hidden lg:block">
            <div className="relative flex flex-col items-center w-full mx-auto mt-12">
              {/* Timeline */}
              <div className="relative w-full max-w-[1000px] h-8">
                <div className="absolute w-full h-px top-4 left-0 bg-[#042720]" />

                {workSteps.map((step, index) => (
                  <div
                    key={`desktop-step-${index}`}
                    className={`absolute w-8 h-8 top-0 ${
                      index === 0
                        ? "left-28"
                        : index === 1
                        ? "left-[50%] transform -translate-x-1/2"
                        : "right-0"
                    } bg-[#9af5bd] rounded-full`}
                  >
                    <div className="absolute h-6 top-[3px] left-1/2 transform -translate-x-1/2 font-sequel font-medium text-[#03051c] text-base text-center leading-6">
                      {step.number}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step descriptions */}
              <div className="flex justify-between w-full max-w-[1000px] mt-12">
                {workSteps.map((step, index) => (
                  <div
                    key={`desktop-desc-${index}`}
                    className={`w-[30%] text-center ${
                      index === 1 ? "px-4" : ""
                    }`}
                  >
                    <h3 className="font-sequel font-medium text-white text-[22.69px] lg:text-[32px] text-center leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 lg:mt-6 opacity-50 font-inter font-normal text-white text-[14px] lg:text-[16px] text-center leading-normal">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example Card */}
          <Card className="w-full max-w-[1000px] mx-auto mt-8 md:mt-16 rounded-[20px] border-[0.9px] border-solid border-[#ffffff14] shadow-[inset_0px_0px_13.44px_4.48px_#9af5bd78] bg-transparent">
            <CardContent className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8 p-4 md:p-6">
              {/* Image top left */}
              <img
                className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                alt="Example icon"
                src="/globe.png"
              />
              {/* Text content */}
              <p className="font-inter font-normal text-white text-base md:text-lg lg:text-xl xl:text-2xl text-left tracking-[0.20px] leading-normal">
                For example, if you pass a $50,000 Evaluation, and make a 10%
                trading profit = your commission is $4,000!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mt-3 lg:mt-32 relative w-full overflow-hidden  pb-[282px] lg:pb-[190px] px-6 md:px-12 lg:px-32">
          {/* Background decoration - left side (exactly as in screenshot) */}
          <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
            <img
              className="absolute left-[-150px] md:left-[-50px] top-[50px] w-[700px] h-[700px]"
              alt="Background decoration"
              src="/decoration-effect.png"
            />
          </div>

          <div className="container mx-auto px-0 md:px-0 lg:px-0 relative z-10 mt-12">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* FAQ Title - Left Side */}
              <h2 className="w-full lg:w-auto font-sequel font-medium text-white text-6xl md:text-7xl lg:text-[80px] tracking-tight leading-[1.1]">
                FAQ
              </h2>

              {/* FAQ Items - Right Side */}
              <div className="flex flex-col w-full lg:w-[592.41px] items-start gap-6 md:gap-8 lg:gap-11 ">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    "How Do I Get Paid?",
                    "Is this legit?",
                    "Do I need any experience?",
                    "What is the first step?",
                    "Can I do this part-time?",
                  ].map((question, index) => (
                    <AccordionItem
                      key={`faq-${index}`}
                      value={`item-${index}`}
                      className="border-b border-[#ffffff1c]"
                    >
                      <AccordionTrigger className="flex items-center justify-between w-full py-6 font-sequel font-medium text-white text-2xl tracking-[0.20px] leading-[1.3] hover:no-underline">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 font-inter font-normal text-white text-opacity-70 text-lg">
                        More information will be provided here.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="w-full py-3 md:py-8 fixed bottom-0 left-0 bg-[#03051c] border-t border-[#9af5bd66] z-50">
            {/* Mobile Layout - Card Style */}
            <div className="md:hidden">
              <div className="w-[320px] h-[220px] sm:w-[344px] sm:h-[231px] mx-auto bg-[#0a0f1f] rounded-2xl p-3 border border-[#9af5bd33] shadow-[0_0_20px_rgba(154,245,189,0.1)]">
                <div className="flex flex-col gap-3 lg:gap-6">
                  {/* Top Row: Icon and Text */}
                  <div className="flex items-start gap-4">
                    {/* Hourglass Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[60px] h-[60px] mt-5"
                        alt="Timer icon"
                        src="/footer.png"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 justify-start">
                      <p className="font-sequel font-medium text-white text-[15px] w-[220px] sm:text-[20px] leading-relaxed">
                        Our exclusive 25% discount "TOFFERS" is valid for a
                        limited time only - Offer ends in:
                      </p>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="flex items-center gap-8 justify-center mt-2">
                    {[
                      {
                        value: timeLeft.hours.toString().padStart(2, "0"),
                        label: "Hours",
                      },
                      {
                        value: timeLeft.minutes.toString().padStart(2, "0"),
                        label: "Minutes",
                      },
                      {
                        value: timeLeft.seconds.toString().padStart(2, "0"),
                        label: "Seconds",
                      },
                    ].map((item, index) => (
                      <div
                        key={`mobile-timer-${index}`}
                        className="flex flex-col items-center"
                      >
                        <span className="font-sequel font-medium text-[#9af5bd] text-3xl">
                          {item.value}
                        </span>
                        <span className="opacity-70 font-inter font-normal text-white text-xs mt-1">
                          {item.label}
                        </span>
                        {/* {index < 2 && (
                          <span className="font-sequel font-medium text-[#9af5bd] text-3xl mx-2">
                            :
                          </span>
                        )} */}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="flex justify-start ">
                    <Button className="w-full max-w-[280px] py-6 bg-[#042720] rounded-full border border-[#9AF5BD] ">
                      <span className="font-inter font-bold text-[#9AF5BD] text-lg">
                        Get 25% Off Now!
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Horizontal Banner */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-8 w-full max-w-[1200px] mx-auto">
                {/* Hourglass Icon */}
                <div className="w-16 h-16  rounded-xl flex items-center justify-center ">
                  <img
                    className="w-[83px] h-[83px] object-contain"
                    alt="Timer icon"
                    src="/footer.png"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-[600px]">
                  <p className="font-sequel  font-semibold text-white sm:text-[21px] lg:text-[22px] xl:text-[30px] leading-tight">
                    Our exclusive 25% discount "TOFFERS" is valid for a limited
                    time only - Offer ends in:
                  </p>
                </div>

                {/* Timer */}
                <div className="flex items-center gap-10 justify-center mt-2">
                  {[
                    {
                      value: timeLeft.hours.toString().padStart(2, "0"),
                      label: "Hours",
                    },
                    {
                      value: timeLeft.minutes.toString().padStart(2, "0"),
                      label: "Minutes",
                    },
                    {
                      value: timeLeft.seconds.toString().padStart(2, "0"),
                      label: "Seconds",
                    },
                  ].map((item, index) => (
                    <div
                      key={`desktop-timer-${index}`}
                      className="flex flex-col items-center"
                    >
                      <span className="font-sequel font-medium text-[#9af5bd] text-4xl">
                        {item.value}
                      </span>
                      <span className="opacity-70 font-inter font-normal text-white text-sm mt-1">
                        {item.label}
                      </span>
                      {/* {index < 2 && (
                        <span className="font-sequel font-medium text-[#9af5bd] text-4xl mx-3">
                          :
                        </span>
                      )} */}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button className="px-8 py-7 bg-[#042720] rounded-full border border-[#9af5bd] hover:bg-[#053a2d] min-w-[200px]">
                  <span className="font-sequel font-semibold text-[#9af5bd] text-xl">
                    Get 25% Off Now!
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
