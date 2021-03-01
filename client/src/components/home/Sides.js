import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import sides1 from "../../assets/images/sides1.png";
import sides2 from "../../assets/images/sides2.png";
import sides3 from "../../assets/images/sides3.png";
import sides4 from "../../assets/images/sides4.png";
import sides5 from "../../assets/images/sides5.png";
import sides6 from "../../assets/images/sides6.png";
import Button from "../Button";

const StyledSidesCard = styled.div`
  flex: 0 0 0 50%;
  .inner-card {
    min-height: 400px;
    border-radius: var(--border-radius);
    width: 300px;
    height: 100%;
  }
  .blu {
    height: 6px;
    width: 60%;
  }

  .burgerImageCont {
    width: 120px;
    height: 120px;
  }
`;

const Sides = (props) => {
  return (
    <Section id="sides">
      <SectionHeader title="Sides" />
      <div className="container">
        <div className="flex flex-wrap justify-center items-stretch">
          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col ">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides1} alt="sides1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Algorithm Fries
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>

          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides2} alt="burger1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center  flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Compiling Garlic Bread
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>

          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides3} alt="burger1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Binary Wings
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>

          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides4} alt="burger1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Linear Sphagetti
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>

          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides5} alt="burger1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Recursive Salad
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>

          <StyledSidesCard className="p-10 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex flex-col">
              <div className="burgerImageCont -mt-16 ml-12">
                <img src={sides6} alt="burger1" className="burgerImage" />
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                  Radix Chess Rolls
                </h1>{" "}
                <hr className="blu bg-primary  w-full" />
                <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
                <p className="text-danger font-bold text-center text-2xl mb-5">
                  Rp 35.000
                </p>
                <Button title="Add To Cart" className="mt-auto" />
              </div>
            </div>
          </StyledSidesCard>
        </div>
      </div>
    </Section>
  );
};

export default Sides;
