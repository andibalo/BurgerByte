import React from "react";
import styled from "styled-components";
import Burger2 from "../../assets/images/burger-2.png";
import Andi from "../../assets/images/andi.jpg";
import Vincent from "../../assets/images/vincent.jpg";
import Charoline from "../../assets/images/charoline.jpg";
import Martin from "../../assets/images/martin.jpg";

const StyledTeamCard = styled.div`
  flex: 0 0 35%;
  min-height: 650px;

  .teamSection {
    padding-top: 75px;
    padding-bottom: 0px;
  }
`;
const StyledTeamsCard = styled.div`
  flex: 0 0 50%;
  min-height: 250px;
  margin-top: 25px;

  .burgerImage {
    max-height: 250px;
    margin: auto;
    border-radius: var(--border-radius);
  }
`;

const Team = (props) => {
  return (
    <div className="teamSection bg-secondary-light">
      <div className="flex">
        <StyledTeamCard className="flex items-center bg-primary p-3 shadow-xl ">
          <div>
            <h1 className="tulisan text-white text-left text-6xl mb-2 ml-24">
              Meet The
              <br />
              Founders !
            </h1>
          </div>
        </StyledTeamCard>

        <div className="container">
          <div className="flex flex-wrap">
            <StyledTeamsCard className="p-7 shadow-none">
              <div className="bg-secondary-light p-3 items-center">
                <div className="burgerImageCont h-full ml-auto">
                  <img src={Andi} alt="Andi" className="burgerImage" />
                </div>
                <div>
                  <p className="text-primary text-center mt-3 font-bold text-xl">
                    Andi Usman Balo
                  </p>
                </div>
              </div>
            </StyledTeamsCard>
            <StyledTeamsCard className="p-7 shadow-none">
              <div className="bg-secondary-light h-full p-3 items-center">
                <div className="burgerImageCont ml-auto">
                  <img src={Vincent} alt="Vincent" className="burgerImage" />
                </div>
                <div>
                  <p className="text-primary text-center mt-3 font-bold text-xl">
                    Vincent
                  </p>
                </div>
              </div>
            </StyledTeamsCard>
            <StyledTeamsCard className="p-7 shadow-none ">
              <div className="bg-secondary-light h-full p-3 items-center">
                <div className="burgerImageCont ml-auto">
                  <img
                    src={Charoline}
                    alt="Charoline"
                    className="burgerImage"
                  />
                </div>
                <div>
                  <p className="text-primary text-center mt-3 font-bold text-xl">
                    Charoline Kandoko
                  </p>
                </div>
              </div>
            </StyledTeamsCard>
            <StyledTeamsCard className="p-7 shadow-none ">
              <div className="bg-secondary-light h-full p-3 items-center">
                <div className="burgerImageCont ml-auto">
                  <img src={Martin} alt="Martin" className="burgerImage" />
                </div>
                <div>
                  <p className="text-primary text-center mt-3 font-bold text-xl">
                    Hernando Martin
                  </p>
                </div>
              </div>
            </StyledTeamsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
