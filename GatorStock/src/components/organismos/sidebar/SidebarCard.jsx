/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { variables, Btnsave } from "../../../index";
export function SidebarCard() {

  return (
    <Container>
      <div className="contentBtn">
        <Btnsave titulo="Cerrar Sesión" bgcolor="#f94d4a" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  .contentBtn {
    position: absolute;
    overflow: hidden;
   }
`;