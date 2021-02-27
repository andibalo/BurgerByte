import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";

const StyledTeamCard = styled.div`
    flex: 0 0 35%;
    min-height: 650px;

    .teamSection{
        padding-top: 75px;
        padding-bottom: 0px;
    }
`;

const Team = (props) => {
    return (
        <div className="teamSection bg-secondary-light">
            
            <div className="flex">
                <StyledTeamCard className="flex items-center bg-primary p-3 shadow-xl ">
    
                        <div>
                            <h1 className="tulisan text-white text-left text-6xl mb-2 ml-28">
                            Meet The<br/>
                            Founders !
                            </h1>   
                        </div>
                    
                </StyledTeamCard>
            </div>
        
        </div>
    );
  };
  
  export default Team;