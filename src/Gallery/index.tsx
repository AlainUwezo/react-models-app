/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useState } from "react";
import ResponsiveGallery from "react-responsive-gallery";
import { ResponsiveMedias } from "../data";
import { useNavigate } from "react-router-dom";

const Gallery: FunctionComponent = () => {
  const [activeImg, setActiveImg] = useState<any>(null);

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate(`/about`, {
      state: { id: activeImg.id, name: activeImg.name },
    });
  };

  const changeImdActiveId = (img: any) => {
    setActiveImg(img);
  };

  return (
    <div>
      {activeImg && (
        <div
          className={`${
            !activeImg && "hidden"
          } fixed z-[10000] h-[100vh] bg-[rgba(0,0,0,.5)] w-screen`}>
          <div className="flex items-center justify-center pt-[50px]">
            <div className="p-4 rounded-md flex flex-col bg-white">
              <p
                onClick={() => setActiveImg(null)}
                className="material-symbols-outlined cursor-pointer text-end">
                close
              </p>
              <h4 className="text-xl text-center py-2 font-bold uppercase">
                {activeImg.name}
              </h4>
              <span
                className="material-symbols-outlined p-3"
                onClick={goToAbout}>
                share
              </span>
              <img src={activeImg.src} className="w-80" />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[320px] mx-auto  my-5">
        <p className="mt-5 py-5 font-bold text-[20px] text-center uppercase">
          Notre Gallerie
        </p>
        <p className="text-gray-700 text-center">
          Explorer l'ensemble des photos et découvrer les talents d'
          <span className="text-orange-400">Afrique</span>
        </p>
      </div>
      <ResponsiveGallery
        media={ResponsiveMedias}
        mediaClassName="rounded-xl shadow-md"
        onClick={(id: any) => changeImdActiveId(ResponsiveMedias[id])}
      />
    </div>
  );
};

export default Gallery;
