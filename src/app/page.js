"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaShoppingCart,
  FaLeaf,
  FaTruck,
  FaUsers,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import groceries from "../../public/groc.jpg";
import Logo from "../../public/uplift.png";

import auntyBSpagetti from "../../public/auntybspagetti.png";
import goldenpennySphagetti from "../../public/goldenpennyspagetti.png";
import rice from "../../public/Longgrainrice.png";
import bean from "../../public/oloyinbean.png";
import garri from "../../public/whitegarri.png";
import macaroni from "../../public/macaroni.png";
import tomatopasta from "../../public/tomatopasta.png";
import ginotomatopasta from "../../public/ginopeppenopionpasta.png";
import dericapasta from "../../public/dericapasta.png";
import palmoil75cl from "../../public/palmoil75cl.png";
import palmoil150cl from "../../public/palmoil1.5l.png";
import vegetableoil from "../../public/vegetableoil.png";
import indomitable70g from "../../public/indomitable70g.png";
import indomitable70gpack from "../../public/indomitable70gpack.png";
import indomiesuper from "../../public/indomiesuper.png";
import indomiesuperpack from "../../public/Indomiesuperpack.png";
import salt from "../../public/salt.png";
import sugar from "../../public/sugar.png";
import milo from "../../public/milo.png";
import semovita from "../../public/semovita.png";
import milo3in1 from "../../public/milo3in1.png";
import danomilk from "../../public/danomilk.png";
import peakmilk from "../../public/peakmilk.png";

const productdata = [
  {
    name: "Aunty B Sphagetti(3 x 500g)",
    marketPrice: "₦2400.00",
    salePrice: "₦2200.00",
    image: { src: auntyBSpagetti, alt: "food-image" },
  },
  {
    name: "Golden Penny Sphagetti(3 x 500g)",
    marketPrice: "₦2850.00",
    salePrice: "₦2600.00",
    image: { src: goldenpennySphagetti, alt: "food-image" },
  },
  {
    name: "1 congo of Rice",
    marketPrice: "₦2800.00",
    salePrice: "₦2500.00",
    image: { src: rice, alt: "food-image" },
  },
  {
    name: "1 congo of oloyin Bean",
    marketPrice: "₦4400.00",
    salePrice: "₦4200.00",
    image: { src: bean, alt: "food-image" },
  },
  {
    name: "1 congo of white garri",
    marketPrice: "₦1200.00",
    salePrice: "₦1100.00",
    image: { src: garri, alt: "food-image" },
  },

  {
    name: "Gino tomato paste (5 sachets)",
    marketPrice: "₦1000.00",
    salePrice: "₦850.00",
    image: { src: tomatopasta, alt: "food-image" },
  },
  {
    name: "Gino peppe and onion paste (5 sachets)",
    marketPrice: "₦1000.00",
    salePrice: "₦850.00",
    image: { src: ginotomatopasta, alt: "food-image" },
  },
  {
    name: "Derica tomato paste (5 sachets)",
    marketPrice: "₦1000.00",
    salePrice: "₦850.00",
    image: { src: dericapasta, alt: "food-image" },
  },
  {
    name: "palm oil (75CL)",
    marketPrice: "₦1000.00",
    salePrice: "₦950.00",
    image: { src: palmoil75cl, alt: "food-image" },
  },
  {
    name: "palm oil (1.5L)",
    marketPrice: "₦2000.00",
    salePrice: "₦1800.00",
    image: { src: palmoil150cl, alt: "food-image" },
  },
  {
    name: "vegetable oil (75CL)",
    marketPrice: "₦1600.00",
    salePrice: "₦1500.00",
    image: { src: vegetableoil, alt: "food-image" },
  },
  {
    name: "Indomitables(70g x 10)",
    marketPrice: "₦2500.00",
    salePrice: "₦2200.00",
    image: { src: indomitable70g, alt: "food-image" },
  },
  {
    name: "Indomitables(70g x full cartoon)",
    marketPrice: "₦8500.00",
    salePrice: "₦8300.00",
    image: { src: indomitable70gpack, alt: "food-image" },
  },
  {
    name: "Indomie Super pack(120g x 10)",
    marketPrice: "₦4000.00",
    salePrice: "₦3500.00",
    image: { src: indomiesuper, alt: "food-image" },
  },
  {
    name: "Indomie Super pack(120g x full cartoon)",
    marketPrice: "₦9400.00",
    salePrice: "₦8000.00",
    image: { src: indomiesuperpack, alt: "food-image" },
  },
  {
    name: "Golden Penny macaroni(5 x 500g)",
    marketPrice: "₦4750.00",
    salePrice: "₦4300.00",
    image: { src: macaroni, alt: "food-image" },
  },
  {
    name: "Golden Penny semovita (1kg)",
    marketPrice: "₦1900.00",
    salePrice: "₦1800.00",
    image: { src: semovita, alt: "food-image" },
  },
  {
    name: "Mr chef salt(500g)",
    marketPrice: "₦200.00",
    salePrice: "₦180.00",
    image: { src: salt, alt: "food-image" },
  },
  {
    name: "Sugar (1 cup)",
    marketPrice: "₦350.00",
    salePrice: "₦310.00",
    image: { src: sugar, alt: "food-image" },
  },
  {
    name: "Milo sachet (1 roll)",
    marketPrice: "₦1500.00",
    salePrice: "₦1400.00",
    image: { src: milo, alt: "food-image" },
  },
  {
    name: "Milo 3 in 1 sachet (1 roll)",
    marketPrice: "₦2100.00",
    salePrice: "₦2000.00",
    image: { src: milo3in1, alt: "food-image" },
  },
  {
    name: "Dano cool cow milk (1 roll)",
    marketPrice: "₦1100.00",
    salePrice: "₦1000.00",
    image: { src: danomilk, alt: "food-image" },
  },
  {
    name: "Peak full cream milk (1 roll)",
    marketPrice: "₦1400.00",
    salePrice: "₦1300.00",
    image: { src: peakmilk, alt: "food-image" },
  },
];

const iconConfigs = [
  {
    icon: FaShoppingCart,
    name: "bulkSavings",
    description: "Enjoy significant discounts by buying groceries in bulk.",
  },
  {
    icon: FaLeaf,
    name: "freshness",
    description:
      "High-quality, fresh products sourced directly from trusted suppliers.",
  },
  {
    icon: FaTruck,
    name: "convenience",
    description: "Easy online ordering with delivery to your doorstep.",
  },
  {
    icon: FaUsers,
    name: "community",
    description:
      "Join a community of smart shoppers making healthy, affordable choices.",
  },
];

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const upliftControls = useAnimation();
  const workControls = useAnimation();
  const offerControls = useAnimation();
  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const upliftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const steps = [
    {
      title: "Sign Up",
      description: "Join our platform for free.",
    },
    {
      title: "Choose Your Products",
      description: "Select from our wide range of groceries.",
    },
    {
      title: "Group Up",
      description: "We pool your order with others to get the best prices.",
    },
    {
      title: "Enjoy",
      description: "Receive your fresh groceries delivered to your home.",
    },
  ];

  return (
    <main className="w-full h-full flex flex-col bg-background overflow-hidden">
      <div className="relative flex flex-col items-center bg-secondary h-[640px] md:h-[640px]">
        <div className="w-full h-[400px] lg:h-[480px]">
          <Image
            src={groceries}
            alt="Groceries"
            className="w-full h-full object-cover lg:object-left-bottom"
            height={5000}
            width={5000}
          />
        </div>
        <div className="absolute top-0 right-0 w-5/6 md:w-1/3">
          <div className="bg-secondary h-28 w-full flex items-center justify-center clip-trapezium-right-upside-down">
            <div className="bg-white h-full w-full ml-2 mb-4 pr-4 flex flex-col items-end justify-center clip-trapezium-right-upside-down">
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={160}
                className="object-contain"
              />
              <p className="text-secondary pt-2 lg:text-xl">
                Save More, Eat Better Together!
              </p>
            </div>
          </div>
        </div>
        {/*uplift component*/}
        <InView
          as="div"
          onChange={(inView) => {
            if (inView) {
              upliftControls.start("visible");
            }
          }}
        >
          <motion.div
            className="absolute top-40 md:top-28 flex lg:pr-[900px] left-0 right-0 justify-center items-center mt-8"
            initial="hidden"
            animate={upliftControls}
            variants={upliftVariants}
          >
            <div className="relative w-[320px] h-[320px] lg:h-[440px] lg:w-[440px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-transparent flex items-center justify-center">
                <div className="h-[200px] w-[200px] lg:w-[240px] lg:h-[240px] bg-primary rounded-full flex items-center justify-center">
                  <h2 className="text-md lg:text-2xl font-bold text-white text-center">
                    Why Choose Uplift?
                  </h2>
                </div>
              </div>
              {iconConfigs.map((config, index) => (
                <div
                  key={config.name}
                  className={`absolute origin-center bg-primary rounded-full p-3 items-center flex transform ${
                    index === 0 ? "top-0" : ""
                  } ${index === 1 ? "bottom-0" : ""} ${
                    index === 2 ? "left-0" : ""
                  } ${index === 3 ? "right-0" : ""}`}
                  onClick={() => handleIconClick(config.name)}
                >
                  <div className="rounded-full">
                    <config.icon className="text-2xl md:text-4xl text-white cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </InView>

        {selectedIcon && (
          <div className="lg:pl-20 lg:py-6 bg-secondary lg:clip-trapezium-right text-white w-2/3  lg:w-1/2 lg:text-lg text-center absolute sm:right-0 top-[560px] md:top-[440px]">
            {
              iconConfigs.find((config) => config.name === selectedIcon)
                .description
            }
          </div>
        )}
      </div>
      {/*offer component*/}
      <InView
        as="div"
        onChange={(inView) => {
          if (inView) {
            offerControls.start((i) => ({
              opacity: 1,
              transition: { delay: i * 0.3 },
            }));
          }
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 p-2 py-10">
          <div className="">
            <h1 className="underline underline-offset-8 text-4xl font-semibold text-text">
              What We Offer
            </h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                840: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 4,
                },
                1320: {
                  slidesPerView: 5,
                },
              }}
            >
              {productdata.map((product, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    custom={index}
                    initial={{ opacity: 0 }}
                    animate={offerControls}
                    className="flex flex-col items-center group"
                  >
                    <div className="relative overflow-hidden rounded-full shadow-2xl h-[180px] w-[180px] mx-auto">
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        className="w-full object-contain duration-300 transition-all ease-in-out group-hover:scale-[1.2]"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="p-4 bg-accent group-hover:bg-primary rounded-t-2xl">
                      <h3 className="text-sm text-white capitalize font-bold">
                        {product.name}
                      </h3>
                    </div>
                    <div className="absolute top-9 right-2 bg-black text-white p-1 rounded-md text-sm">
                      {product.salePrice}
                    </div>
                    <div className="absolute top-1 right-2 bg-red-500 text-white p-1 rounded-md text-sm line-through">
                      {product.marketPrice}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </InView>
      <InView
        as="div"
        onChange={(inView) => {
          if (inView) {
            workControls.start((i) => ({
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.3 },
            }));
          }
        }}
      >
        <div className="w-full md:flex-row flex flex-col justify-between">
          {/*work component*/}
          <div className="h-full w-full md:w-1/2 flex flex-col items-center py-4">
            <h1 className="text-2xl font-extrabold text-primary uppercase">
              How It Works
            </h1>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={workControls}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-lg font-medium text-secondary">
                    <span className="font-semibold text-text">
                      {step.title}:
                    </span>{" "}
                    {step.description}
                  </div>
                  {index < steps.length - 1 && (
                    <FiArrowDown className="text-xl text-primary" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex flex-col gap-3 items-center py-4 md:clip-trapezium-right-upside-down px-16 bg-primary">
            <div className="text-2xl font-bold text-white uppercase">
              Join Uplift Today!
            </div>
            <div className=" text-white">click now for more information</div>
            {/*contact component*/}
            <div className="text-white uppercase flex flex-col items-start gap-2">
              <div className="flex items-center py-3">
                <FaWhatsapp className="mr-4 text-2xl" />
                <p className="text-xl">09130912078</p>
              </div>
            </div>
            <div className="text-4xl font-extrabold text-secondary animate-pulse ease-in-out duration-300">
              Don&apos;t Miss Out!
            </div>
            <div className="text-xl font-medium text-center text-white">
              Start saving and eating better with Uplift. Join the community
              today and make a difference in your grocery shopping!
            </div>
          </div>
        </div>
      </InView>
      <div className="w-full py-4 bg-secondary flex items-center justify-center">
        <p className="text-xs text-gray-800">
          © 2024 Uplift. All rights reserved.
        </p>
      </div>
    </main>
  );
}
