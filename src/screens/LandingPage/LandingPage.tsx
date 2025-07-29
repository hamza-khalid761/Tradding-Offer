import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { ChevronDown } from "lucide-react";

export const LandingPage = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    { question: "How Do I Get Paid?", answer: "" },
    { question: "Is this legit?", answer: "" },
    { question: "Do I need any experience?", answer: "" },
    { question: "What is the first step?", answer: "" },
    { question: "Can I do this part-time?", answer: "" },
  ];

  // Trading account data
  const tradingAccounts = [
    {
      size: "$10,000 Trading Account",
      price: "Evaluation price is $85",
      discountPrice: "$63.75!",
      iconSrc: "/dollar-acc.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$25,000 Trading Account",
      price: "Evaluation price is $189",
      discountPrice: "$141.75",
      iconSrc: "/acc-one.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$50,000 Trading Account",
      price: "Evaluation price is $349",
      discountPrice: "$261.75",
      iconSrc: "/acc-2.png",
      lineSrc: "/Cross.png",
    },
    {
      size: "$100,000 Trading Account",
      price: "Evaluation price is $549",
      discountPrice: "$411.75",
      iconSrc: "/acc-3.png",
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

  // Countdown timer data
  const countdownData = [
    { value: "00", label: "Days" },
    { value: "01", label: "Hours" },
    { value: "47", label: "Minutes" },
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
<section className="relative w-full min-h-screen  pb-24 px-4 sm:px-6 md:px-12 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url(/background-effect.png)] bg-cover bg-no-repeat bg-center z-0" />

  {/* Heading */}
  <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight max-w-4xl mx-auto mt-12">
    The Side Hustle Helping Traders Earn <br className="hidden sm:block" />
    $1,500–$9,500 per month
  </h1>

  {/* Hero Image Box */}
  <div className="relative z-10 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1258px] mx-auto mt-12 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10">
    <div className="relative w-full aspect-[5/4] sm:aspect-[5/3] md:aspect-[16/9] rounded-2xl overflow-hidden">
      <img
        src="/Hero-image.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* CTA Button */}
  <div className="relative z-10 flex justify-center mt-12">
    <Button className="w-[71%] mx-auto lg:w-1/3 py-5 lg:py-10 bg-[#9af5bd] hover:bg-[#8ae5ad] rounded-full">
      <span className="text-[#042720] text-base sm:text-lg md:text-2xl font-bold">
        GET 25% OFF NOW
      </span>
    </Button>
  </div>
</section>





        {/* Trading Without Risk Section */}
        <section className="mt-20 px-4">
          <h2 className="text-center  text-white text-[21px] lg:text-[35px] font-extrabold [font-family:'Sequel_Sans-BoldBody',Helvetica] sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 max-w-4xl mx-auto">
            Find out how you can trade Stocks, Forex <br className="hidden md:block" />
            and Crypto without risking your own money
          </h2>
          <p className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto">
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
        <section className="mt-16 px-4">
          <h3 className="mx-auto text-center font-medium text-white text-[22px] sm:text-[49px] md:text-[49px] lg:text-[49px] leading-tight max-w-2xl mb-8">
            Real payouts, paid through <br className="block md:hidden" /> the world’s leaders
          </h3>
          <div className="
            grid 
            grid-cols-2 grid-rows-3 
            gap-x-8 gap-y-6 
            max-w-xs mx-auto
            md:max-w-5xl md:mx-auto
            md:grid-cols-6 md:grid-rows-1 md:gap-x-12 md:gap-y-0 
            ">
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto" src="/visa.png" alt="Visa" />
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto" src="/revo.png" alt="Revolut" />
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  " src="/paypal.png" alt="PayPal" />
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  " src="/master.png" alt="Mastercard" />
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  " src="/stripe.png" alt="Stripe" />
            <img className="w-[80px] h-[30px] lg:w-[120px] lg:h-[43px] opacity-35 object-contain mx-auto  " src="/american.png" alt="American Express" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-32 px-4">
          <h2 className="text-center font-medium text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-12">
            What Leveraged’s Traders Are Saying
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            <img src="/Frame-1.png" alt="Testimonial 1" className="w-full rounded-xl shadow-lg" />
            <img src="/Frame-2.png" alt="Testimonial 2" className="w-full rounded-xl shadow-lg" />
            <img src="/Frame-3.png" alt="Testimonial 3" className="w-full rounded-xl shadow-lg" />
            <img src="/Frame-4.png" alt="Testimonial 4" className="w-full rounded-xl shadow-lg" />
            <img src="/Frame-5.png" alt="Testimonial 5" className="w-full rounded-xl shadow-lg" />
            <img src="/Frame-6.png" alt="Testimonial 6" className="w-full rounded-xl shadow-lg" />
          </div>
        </section>

        {/* Trading Account Options */}
        <section className="mt-32 px-4">
        <h2 className="text-center [font-family:'Sequel_Sans-MediumBody',Helvetica] font-bold text-white text-[28px] md:text-5xl lg:text-6xl tracking-[0] leading-[normal] whitespace-normal break-words">
  Choose Your Trading Account Size
</h2>

<p className="mx-auto max-w-[1112px] mt-4 md:mt-6 [font-family:'Inter',Helvetica] font-light text-[#ffffffcc] text-base md:text-xl lg:text-[32px] text-center tracking-[0.20px] leading-snug whitespace-normal break-words">
  All accounts include access to exclusive AI tools, live webinars, a comprehensive eBook, expert coaching, and more!
</p>

  <div className="flex flex-col max-w-[1200px] mx-auto gap-12 mt-16">
    {/* Cards row 1 */}
    <div className="flex flex-col md:flex-row items-center gap-9 w-full">
      {tradingAccounts.slice(0, 2).map((account, index) => (
        <Card
          key={`account-${index}`}
          className="flex flex-col items-center gap-6 flex-1 bg-transparent border-none"
        >
          <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
            <img
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[156px] lg:h-[156px]"
              alt="Account icon"
              src={account.iconSrc}
            />
            <div className="flex flex-col items-center gap-5 w-full">
              <h3 className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[normal]">
                {account.size}
              </h3>
              <div className="flex items-center justify-center w-full relative mt-2">
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#d5d5d5] text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                  {account.price}
                </p>
                <img
                  className="absolute top-0 left-[83%] lg:left-[73%] -translate-x-1/2 w-[30px] md:w-[47px] h-[20px] md:h-[25px]"
                  alt="Line"
                  src={account.lineSrc}
                />
              </div>
              <p className="[font-family:'Inter',Helvetica] text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
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
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[156px] lg:h-[156px]"
              alt="Account icon"
              src={account.iconSrc}
            />
            <div className="flex flex-col items-center gap-5 w-full">
              <h3 className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-[normal]">
                {account.size}
              </h3>
              <div className="flex items-center justify-center w-full relative mt-2">
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#d5d5d5] text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
                  {account.price}
                </p>
                <img
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[30px] md:w-[66px] h-[20px] md:h-[25px]"
                  alt="Line"
                  src={account.lineSrc}
                />
              </div>
              <p className="[font-family:'Inter',Helvetica] text-[20px] md:text-[24px] text-center tracking-[-0.24px] leading-6">
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
          className="max-w-4xl w-full py-3 px-3 mx-auto mt-16 rounded-[12px] flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0 border"
          style={{
            border: '0.9px solid rgba(255,255,255,0.08)'
          }}
        >
          <p className="flex-1 text-white text-[19px] md:text-xl text-center items-center md:text-left font-medium leading-snug md:leading-normal m-2">
            Get an exclusive 25% discount with code “TOFFERS”!
          </p>
          <button
            className="w-[250px] lg:w-[180px] lg:h-[60px]  rounded-lg text-white font-normal text-xl tracking-wide transition border-none"
            style={{
              border: '0.9px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 13.44px 4.48px #9af5bd inset',
              background: 'linear-gradient(180deg, rgba(154,245,189,0.18) 0%, #101828 100%)',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontWeight: 400
            }}
          >
            “TOFFERS”
          </button>
        </div>

        {/* How It Works Section */}
       <section className="mt-20 md:mt-32 px-4 md:px-6 lg:px-8">
  <h2 className="text-center [font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-[normal]">
    How Does It Work?
  </h2>

  {/* Mobile & Tablet View (Left Aligned) */}
  <div className="lg:hidden mt-8 md:mt-12 flex flex-col items-start gap-8 md:gap-10">
    {workSteps.map((step, index) => (
      <div key={`mobile-step-${index}`} className="flex items-start gap-4 w-full">
        {/* Number with connecting line */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-[#9af5bd] rounded-full">
            <span className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-[#03051c] text-lg">
              {step.number}
            </span>
          </div>
          {index < workSteps.length - 1 && (
            <div className="w-px h-8 md:h-12 mt-2 bg-[#042720]"></div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-xl md:text-2xl text-left leading-tight">
            {step.title}
          </h3>
          <p className="mt-2 md:mt-3 opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-base text-left leading-normal">
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
              index === 0 ? "left-0" : 
              index === 1 ? "left-[50%] transform -translate-x-1/2" : 
              "right-0"
            } bg-[#9af5bd] rounded-full`}
          >
            <div className="absolute h-6 top-[3px] left-1/2 transform -translate-x-1/2 [font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-[#03051c] text-base text-center leading-6">
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
            <h3 className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-2xl lg:text-3xl text-center leading-tight">
              {step.title}
            </h3>
            <p className="mt-4 lg:mt-6 opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-sm lg:text-base text-center leading-normal">
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
      <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl xl:text-2xl text-left tracking-[0.20px] leading-normal">
For example, if you pass a $50,000 Evaluation, and make a 10% trading profit = your commission is $4,000!      </p>
    </CardContent>
  </Card>
</section>

        {/* FAQ Section */}
        <section className="mt-32 relative w-full overflow-hidden min-h-[70vh] pb-[350px] lg:pb-[190px]">
  {/* Background decoration - left side (exactly as in screenshot) */}
  <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
    <img
      className="absolute left-[-150px] md:left-[-50px] top-[50px] w-[700px] h-[700px]"
      alt="Background decoration"
      src="/decoration-effect.png"
    />
  </div>

  <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* FAQ Title - Left Side */}
      <h2 className="w-full lg:w-auto [font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-6xl md:text-7xl lg:text-[80px] tracking-tight leading-[1.1]">
        FAQ
      </h2>

      {/* FAQ Items - Right Side */}
      <div className="flex flex-col w-full lg:w-[592.41px] items-start gap-6 md:gap-8 lg:gap-11">
        <Accordion type="single" collapsible className="w-full">
          {[
            "How Do I Get Paid?",
            "Is this legit?",
            "Do I need any experience?",
            "What is the first step?",
            "Can I do this part-time?"
          ].map((question, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="border-b border-[#ffffff1c]"
            >
              <AccordionTrigger className="flex items-center justify-between w-full py-6 [font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-white text-2xl tracking-[0.20px] leading-[1.3] hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 [font-family:'Inter',Helvetica] font-normal text-white text-opacity-70 text-lg">
                More information will be provided here.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>

  {/* Sticky Footer */}
  <div className="w-full px-4 py-6 md:py-8 fixed bottom-0 left-0 bg-[#03051c] border-t border-[#9af5bd66] z-50">
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full max-w-[1200px] mx-auto text-center">
      {/* Icon */}
      <img
        className="w-12 h-12 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px]"
        alt="Timer icon"
        src="/footer.png"
      />

      {/* Text */}
      <div className="flex-1 max-w-[500px]">
        <p className="[font-family:'Sequel_Sans-SemiBoldBody',Helvetica] font-semibold text-white text-xl md:text-2xl leading-tight">
          Our exclusive 25% discount "TOFFERS" is valid for a limited time only - Offer ends in:
        </p>
      </div>

      {/* Timer */}
      <div className="flex items-center gap-6 justify-center w-full md:w-auto">
        {[
          { value: "00", label: "Days" },
          { value: "01", label: "Hours" },
          { value: "47", label: "Minutes" }
        ].map((item, index) => (
          <div key={`countdown-${index}`} className="flex flex-col items-center">
            <p className="[font-family:'Sequel_Sans-MediumBody',Helvetica] font-medium text-[#9af5bd] text-3xl md:text-4xl">
              {item.value}
            </p>
            <p className="opacity-70 [font-family:'Inter',Helvetica] font-normal text-white text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <Button className="mt-4 md:mt-0 px-8 py-4 bg-[#042720] rounded-[100px] border border-solid border-[#9af5bd] hover:bg-[#053a2d] min-w-[200px]">
        <span className="[font-family:'Sequel_Sans-SemiBoldBody',Helvetica] font-semibold text-[#9af5bd] text-xl">
          Get 25% Off Now!
        </span>
      </Button>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
