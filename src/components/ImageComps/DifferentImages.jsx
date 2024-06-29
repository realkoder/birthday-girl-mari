import Image from "next/image";
import { toast } from "sonner";

const DifferentImages = () => {
  return (
    <>
      <Image
        src="https://i.etsystatic.com/24605473/r/il/3cebc7/5187952890/il_1588xN.5187952890_8cen.jpg"
        alt="Grand danois wearing costume"
        width={400}
        height={400}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("WOOF! 🐈")}
      />
      <Image
        src="https://cress.gigsalad.com/s3/d/divinity_stables_spring_hill/5cbda8ddc6ae8_300_sq"
        alt="Horse"
        width={400}
        height={400}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("RIDNING!")}
      />
      <Image
        src="https://i.ebayimg.com/images/g/PkoAAOSwDcBjaTdM/s-l1600.jpg"
        alt="Birthday hat"
        width={400}
        height={400}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("Du har fået fødselsdags-hat på!")}
      />
    </>
  );
};

export default DifferentImages;
