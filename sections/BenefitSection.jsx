import ClipPathTitle from "@/components/ClipPathTitle";
import React from "react";

const BenefitSection = () => {
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="text-white">
            Unlock the Advantages: <br />
            Explore the key Benefits of Choosing SPYLT
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf Stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#222123"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p className="text-white">And much more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
