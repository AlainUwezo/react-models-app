import { FunctionComponent } from "react";
import CarouselCasting from "./components/Carousel";
import Image1 from "./../assets/img/nike_files/a_final_unique_20shouta-tanaka.jpg";

const Casting: FunctionComponent = () => {
  return (
    <>
      <CarouselCasting />
      <div className="py-10 px-[15px] lg:px-[50px]">
        <h2 className="text-2xl font-bold text-center">Nos castings</h2>

        <div className="rounded-lg shadow-md p-3 mt-3">
          <div className="flex gap-3">
            <img
              src={Image1}
              alt="Image 1"
              className="w-[100px] object-contain rounded-lg"
            />
            <button className="rounded-full py-1 px-5 bg-black h-[55px] text-white">
              Plus de détail
            </button>
          </div>
          <div className="py-3">
            <h2 className="font-bold text-[20px]">
              Show organisé par Jack & Jill
            </h2>
            <div className="py-2">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-md">place</span>
                <span>Salle Polyalente kassapa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined">event</span>
                <span>Date du casting : 21/01/2024</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-orange-500">
                  flag_circle
                </span>
                <span>Habillement et maquillage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-3 mt-3">
          <div className="flex gap-3">
            <img
              src={Image1}
              alt="Image 1"
              className="w-[100px] object-contain rounded-lg"
            />
            <button className="rounded-full py-1 px-5 bg-black h-[55px] text-white">
              Plus de détail
            </button>
          </div>
          <div className="py-3">
            <h2 className="font-bold text-[20px]">
              Show organisé par Jack & Jill
            </h2>
            <div className="py-2">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-md">place</span>
                <span>Salle Polyalente kassapa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined">event</span>
                <span>Date du casting : 21/01/2024</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-orange-500">
                  flag_circle
                </span>
                <span>Habillement et maquillage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-md p-3 mt-3">
          <div className="flex gap-3">
            <img
              src={Image1}
              alt="Image 1"
              className="w-[100px] object-contain rounded-lg"
            />
            <button className="rounded-full py-1 px-5 bg-black h-[55px] text-white">
              Plus de détail
            </button>
          </div>
          <div className="py-3">
            <h2 className="font-bold text-[20px]">
              Show organisé par Jack & Jill
            </h2>
            <div className="py-2">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-md">place</span>
                <span>Salle Polyalente kassapa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined">event</span>
                <span>Date du casting : 21/01/2024</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-orange-500">
                  flag_circle
                </span>
                <span>Habillement et maquillage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casting;
