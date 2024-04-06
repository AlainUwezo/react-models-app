/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useState } from "react";
import "./Home.css";
import Model1 from "./../assets/img/model1.webp";
import Model2 from "./../assets/img/model2.webp";
import Button from "../common/Button";
import Marque1 from "./../assets/img/nike_files/brands-audi.b29c974.svg";
import Marque2 from "./../assets/img/nike_files/brands-garnier.9caf6aa.svg";
import Marque3 from "./../assets/img/nike_files/brands-ftv.5b33d9c.svg";
import Marque4 from "./../assets/img/nike_files/brands-hm.9e7caae.svg";
import Marque5 from "./../assets/img/nike_files/brands-miss-sixty.2bd4ba0.svg";
import { HomeCarouselImages } from "../data";

const Home: FunctionComponent = () => {
  const [carouselImages, setCarouselImages] = useState<any>();

  useEffect(() => {
    setCarouselImages(HomeCarouselImages);
  }, []);

  return (
    <div>
      <div className="welcome py-10 px-[25px] text-center">
        <span className="py-2 px-3 bg-orange-200 rounded-full text-center">
          +200 mannequins en notre sein
        </span>
        <h1 className="welcome__heading text-center">
          Travaillez avec les meilleurs mannequins du congo
        </h1>
        <div className="max-w-[320px] mx-auto text-gray-700 my-5">
          Engagez les plus performants et les plus expérimentés de nos
          mannequins
        </div>
        <Button
          label="CONTACTEZ-NOUS"
          classNames={`bg-black text-white font-semibold`}
        />
      </div>

      <div className="models-presentation px-[15px] lg:px-[50px] flex flex-col lg:flex-row justify-between py-0 lg:[&_img]:w-[49%]">
        <img src={Model1} alt="" className="w-[100%] rounded-3xl mb-3" />
        <img src={Model2} alt="" className="w-[100%] rounded-3xl mb-3" />
      </div>

      <div className="py-10">
        <h3 className="px-[15px] text-center font-bold text-3xl">
          Nos mannequins
        </h3>
        <p className="text-gray-700 text-center px-[15px] lg:px-[50px] py-3">
          Découvrez l'ensemble de nos mannequins en parcourant diverses de leurs
          oeuvres
        </p>
        <div
          className="inline-flex flex-nowrap overflow-hidden w-full"
          style={{
            background: "transparent",
            maskImage: "",
          }}>
          <div className="py-3 flex items-center justify-center space-x-4 [&_img]:scrolled_img [&_img]:max-w-none animate-infinite-scroll">
            {carouselImages ? (
              carouselImages.map((img: any, index: any) => (
                <img
                  key={index}
                  src={img.src}
                  alt=""
                  className="w-[100%] rounded-3xl mb-3 shadow-sm h-[250px]"
                />
              ))
            ) : (
              <div>Carousel loading...</div>
            )}
          </div>
        </div>
      </div>

      <div className="explore-gallerie">
        <div className="text-center px-[15px]">
          <h3 className="text-4xl text-gray-700">Explorer notre gallerie</h3>
          <p className="text-[20px] text-gray-500">
            Des photos et pauses stimulants l'imagination
          </p>

          <Button
            label="EXPLORER MAINTENANT"
            classNames={`bg-orange-500 mt-3 rounded-full text-white font-bold uppercase`}
          />
        </div>
        <img
          src={Model2}
          className="explore-gallerie__img mt-[-200px] w-[100%]"
          alt=""
        />
      </div>

      <div className="px-[15px] lg:px-[50px] py-10">
        <h2 className="text-2xl font-bold">
          Votre satisfaction est notre priorité
        </h2>
        <div className="pt-5 [&_div]:mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-black h-[60px] w-[60px] rounded-full flex items-center justify-center">
              <i className="material-symbols-outlined text-white">check</i>
            </div>
            <div className="text-gray-500 w-[calc(100%-60px)]">
              Nous assurons d'octroyer une meilleure formation a nos modeles
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black h-[60px] w-[60px] rounded-full flex items-center justify-center">
              <i className="material-symbols-outlined text-white">home</i>
            </div>
            <div className="flex-grow text-gray-500 w-[calc(100%-60px)]">
              Nous assurons d'octroyer une meilleure formation a nos modeles
              Nous assurons d'octroyer une meilleure formation a nos modeles
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black h-[60px] w-[60px] rounded-full flex items-center justify-center">
              <i className="material-symbols-outlined text-white">list</i>
            </div>
            <div className="flex-grow text-gray-500 w-[calc(100%-60px)]">
              Nous assurons d'octroyer une meilleure formation a nos modeles
              Nous assurons d'octroyer une meilleure formation a nos modeles
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 px-[15px] py-20 text-center">
        <h2
          className="text-4xl"
          style={{
            fontFamily: `"Source Serif 4", Georgia, serif`,
          }}>
          Retrouvez votre mannequin
        </h2>
        <p className="text-[20px] px-4 my-[30px] text-gray-700">
          Besoin d'un mannequin ou de nos services pour vos events. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Maiores ut molestias,
          porro, possimus natus ipsum, quasi temporibus laboriosam repudiandae
          inventore amet quam blanditiis provident eligendi unde. Molestiae
          laudantium numquam libero.
        </p>
        <div className="flex justify-center gap-2">
          <Button label="Découvrez-nous" classNames="bg-black text-white" />
          <Button label="Contactez-nous" classNames="bg-white text-black" />
        </div>
        <div className="pt-5">
          <span>
            Êtes-vous mannequin ?{" "}
            <span className="text-blue-500 underline">Rejoignez-nous</span>
          </span>
        </div>
      </div>

      <div className="mx-auto p-6 lg:px-16 max-w-[720px]">
        <div>
          <h2 className="text-5xl font-semibold">Meilleur partenaire</h2>
          <div className="py-3">
            <span className="text-lg font-semibold">Flowagency</span> est votre
            meilleur partenaire d'affaire. J'ai personnellement été émue par la
            qualité des mannequins de cette organisation. Leur sens
            d'intégration laisse beaucoup à désirer
          </div>
          <div className="flex items-center">
            <div className="w-[25%] rounded-full p-1 border-4 border-dotted border-orange-500">
              <img
                className="w-[100%] rounded-full"
                src={Model1}
                alt="portrait picture"
              />
            </div>
            <div className="w-[75%] ps-5">
              <p className="text-lg font-semibold">Daniel Jacob</p>
              <p className="text-gray-700">Sec, Jack & Jill</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <h3 className="text-center text-3xl font-semibold">Nos partenaires</h3>
        <div className="pt-5 flex flex-wrap gap-2">
          <img src={Marque1} alt="" />
          <img src={Marque2} alt="" />
          <img src={Marque3} alt="" />
          <img src={Marque4} alt="" />
          <img src={Marque5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
