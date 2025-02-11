import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";

const StoreFront = () => {
  return (
    <div className="w-full flex my-6 justify-center">
      <div className="flex gap-4">
        <img src={img1} className="w-96 h-auto" />
        <img src={img2} className="w-96 h-auto" />
        <img src={img3} className="w-96 h-auto" />
        <img src={img4} className="w-96 h-auto" />
      </div>
    </div>
  );
};

export default StoreFront;
