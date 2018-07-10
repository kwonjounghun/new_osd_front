import React, { Component } from "react";
import { Loader, Segment, Dimmer } from "semantic-ui-react";
import styled from "styled-components";

const DimmerContainer = styled.div`
  & .ui.loader {
    position: fixed;
  }
`;

class Loading extends Component {
  render(){
    return(
      <DimmerContainer>
        <Loader size="huge" active/>
      </DimmerContainer>
    );
  }
}

export default Loading;