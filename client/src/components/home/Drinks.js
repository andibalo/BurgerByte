import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import boba from "../../assets/images/boba.png";
import milkshake from "../../assets/images/milkshake.png";
import sweettea from "../../assets/images/sweettea.png";
import Button from "../Button";

const StyledDrinksCard = styled.div`
  flex: 0 0 0 50%;

  .inner-card {
    min-height: 400px;
    border-radius: var(--border-radius);
    width: 300px;
  }

  .drinksImageCont {
    width: 150px;
  }

  .blu {
    height: 6px;
  }
`;

const Drinks = (props) => {
  return (
    <Section id="drinks">
      <SectionHeader title="Drinks" />
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <StyledDrinksCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card">
              <div className="drinksImageCont -mt-16 ml-12">
                <img src={milkshake} alt="drink1" className="drinksImage" />
              </div>
              <div>
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Kruskal Milkshake
                </h1>
                <hr className="blu bg-primary" />
                <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  maximus erat mattis ligula luctus, nec facilisis orci porta.
                  Morbi a scelerisque massa. Phasellus at ultrices dolor. Duis
                  ac bibendum est. Sed rhoncus est elit, blandit tincidunt mi
                  bibendum in. Mauris pretium dolor vel ultricies sagittis.
                  Aenean eget magna ac lacus ultricies varius.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 22.000
                </p>
                <div className="text-center">
                  <Button title="Add To Cart" />
                </div>
              </div>
            </div>
          </StyledDrinksCard>
          <StyledDrinksCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card">
              <div className="drinksImageCont -mt-16 ml-12">
                <img src={sweettea} alt="drink2" className="drinksimage" />
              </div>
              <div>
                <h1 className="text-white text-center text-dosis text-bold text2xl mt-8 mb-2">
                  Prims Sweet Tea
                </h1>
                <hr className="blu bg-primary" />
                <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  maximus erat mattis ligula luctus, nec facilisis orci porta.
                  Morbi a scelerisque massa. Phasellus at ultrices dolor. Duis
                  ac bibendum est. Sed rhoncus est elit, blandit tincidunt mi
                  bibendum in. Mauris pretium dolor vel ultricies sagittis.
                  Aenean eget magna ac lacus ultricies varius.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 12.000
                </p>
                <div className="text-center">
                  <Button title="Add To Cart" />
                </div>
              </div>
            </div>
          </StyledDrinksCard>
          <StyledDrinksCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card">
              <div className="drinksImageCont -mt-16 ml-12">
                <img src={boba} alt="drink3" className="drinksImage" />
              </div>
              <div>
                <h1 className="text-white text-center text-dosis text-bold text2xl mt-8 mb-2">
                  Dynamic Boba
                </h1>
                <hr className="blu bg-primary" />
                <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  maximus erat mattis ligula luctus, nec facilisis orci porta.
                  Morbi a scelerisque massa. Phasellus at ultrices dolor. Duis
                  ac bibendum est. Sed rhoncus est elit, blandit tincidunt mi
                  bibendum in. Mauris pretium dolor vel ultricies sagittis.
                  Aenean eget magna ac lacus ultricies varius.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 18.000
                </p>
                <div className="text-center">
                  <Button title="Add To Cart" />
                </div>
              </div>
            </div>
          </StyledDrinksCard>
        </div>
      </div>
    </Section>
  );
};

export default Drinks;
