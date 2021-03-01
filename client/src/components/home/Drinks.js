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
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Drinks = (props) => {
  return (
    <Section id="drinks">
      <SectionHeader title="Drinks" />
      <div className="container flex justify-center">
        <div className="flex flex-wrap ">
          <StyledDrinksCard className="p-8 shadow-xl ">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 22.000
                </p>
                <Button title="Add To Cart" className="mx-auto" />
              </div>
            </div>
          </StyledDrinksCard>
          <StyledDrinksCard className="p-8 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card">
              <div className="drinksImageCont -mt-16 ml-12">
                <img src={sweettea} alt="drink2" className="drinksimage" />
              </div>
              <div>
                <h1 className="text-white text-center text-dosis text-bold  text-2xl mt-8 mb-2">
                  Prims Sweet Tea
                </h1>
                <hr className="blu bg-primary" />
                <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 12.000
                </p>
                <Button title="Add To Cart" className="mx-auto" />
              </div>
            </div>
          </StyledDrinksCard>
          <StyledDrinksCard className="p-8 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card">
              <div className="drinksImageCont -mt-16 ml-12">
                <img src={sweettea} alt="drink3" className="drinksImage" />
              </div>
              <div>
                <h1 className="text-white text-center text-dosis text-bold  text-2xl mt-8 mb-2">
                  Dynamic Boba
                </h1>
                <hr className="blu bg-primary" />
                <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 18.000
                </p>

                <Button title="Add To Cart" className="mx-auto" />
              </div>
            </div>
          </StyledDrinksCard>
        </div>
      </div>
    </Section>
  );
};

export default Drinks;
