import { FunctionComponent } from "react";
import MoralValueImg from "./../assets/img/valeur_morale.jpeg";

const About: FunctionComponent = () => {
  return (
    <div>
      <div className="pt-10 px-[15px] lg:px-[50px]">
        <h3 className="text-center text-2xl font-bold">Notre histoire</h3>
        <p className="text-center py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum porro,
          soluta eveniet sunt earum necessitatibus beatae voluptatibus incidunt
          nemo dolor, ad saepe exercitationem, consectetur at ullam aperiam odit
          dignissimos eos.
        </p>
        <p className="text-center py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum porro,
          soluta eveniet sunt earum necessitatibus beatae voluptatibus incidunt
          nemo dolor, ad saepe exercitationem, consectetur at ullam aperiam odit
          dignissimos eos.
        </p>
      </div>

      <div className="pt-10 px-[15px] lg:px-[50px]">
        <img src={MoralValueImg} alt="Moral value img" />
        <h3 className="text-center text-2xl font-bold">Nos valeurs</h3>
        <div className="text-center py-5 text-gray-700">
          <h5 className="font-semibold text-[20px]">Paix</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            cupiditate adipisci consequuntur repudiandae voluptatem quae quaerat
            eveniet quod distinctio exercitationem minima officia cumque
            praesentium, illum error nobis quas maiores? Aliquid!
          </p>
        </div>
        <div className="flex gap-2">
          <div className="text-center py-5 text-gray-700">
            <h5 className="font-semibold text-[20px]">Ambitions</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center py-5 text-gray-700">
            <h5 className="font-semibold text-[20px]">Enthousiasme</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
