import { FunctionComponent } from "react";
import ResponsiveGallery from "react-responsive-gallery";
import { ResponsiveMedias } from "../data";

const Gallery: FunctionComponent = () => {
  return (
    <div>
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
      />
    </div>
  );
};

export default Gallery;
