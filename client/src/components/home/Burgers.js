import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import Burger1 from "../../assets/images/burger-1.png";
import Burger2 from "../../assets/images/burger-2.png";
import Burger3 from "../../assets/images/burger-3.png";
import Burger4 from "../../assets/images/burger-4.png";
import Button from "../Button";

const StyledBurgerCard = styled.div`
  flex: 0 0 50%;

  .inner-card {
    min-height: 300px;
    border-radius: var(--border-radius);
  }

  .burgerImageCont {
    width: 250px;
  }
`;

const Burgers = (props) => {
  return (
    <Section id="burgers">
      <SectionHeader title="Burgers" />
      <div className="container">
        <div className="flex flex-wrap">
          <StyledBurgerCard className="p-3 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex items-center">
              <div>
                <h1 className="text-white text-5xl mb-2">
                  VSCode <br />
                  <span className="text-primary">Burger</span>
                </h1>
                <p className="text-danger font-bold text-2xl mb-5">Rp 35.000</p>
                <Button title="Add To Cart" />
              </div>
              <div className="burgerImageCont ml-auto">
                <img src={Burger1} alt="burger1" className="burgerImage" />
              </div>
            </div>
          </StyledBurgerCard>
          <StyledBurgerCard className="p-3 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex items-center">
              <div>
                <h1 className="text-white text-5xl mb-2">
                  Xampp <br />
                  <span className="text-primary">Burger</span>
                </h1>
                <p className="text-danger font-bold text-2xl mb-5">Rp 60.000</p>
                <Button title="Add To Cart" />
              </div>

              <div className="burgerImageCont ml-auto">
                <img src={Burger2} alt="burger2" className="burgerImage" />
              </div>
            </div>
          </StyledBurgerCard>
          <StyledBurgerCard className="p-3 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex items-center">
              <div>
                <h1 className="text-white text-5xl mb-2">
                  Rstudio <br />
                  <span className="text-primary">Burger</span>
                </h1>
                <p className="text-danger font-bold text-2xl mb-5">Rp 40.000</p>
                <Button title="Add To Cart" />
              </div>

              <div className="burgerImageCont ml-auto">
                <img src={Burger3} alt="burger3" className="burgerImage" />
              </div>
            </div>
          </StyledBurgerCard>
          <StyledBurgerCard className="p-3 shadow-xl ">
            <div className="bg-secondary-light p-8 inner-card flex items-center">
              <div>
                <h1 className="text-white text-5xl mb-2">
                  Eclipse <br />
                  <span className="text-primary">Burger</span>
                </h1>
                <p className="text-danger font-bold text-2xl mb-5">Rp 50.000</p>
                <Button title="Add To Cart" />
              </div>

              <div className="burgerImageCont ml-auto">
                <img src={Burger4} alt="burger4" className="burgerImage" />
              </div>
            </div>
          </StyledBurgerCard>
        </div>
      </div>
    </Section>
  );
};

export default Burgers;
