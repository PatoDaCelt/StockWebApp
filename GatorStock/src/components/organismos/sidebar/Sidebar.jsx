import styled from "styled-components";
import { LinksArray, SecondarylinksArray, SidebarCard, ToggleTema, } from "../../../index";
import { variables } from "../../../styles/variables"
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
  return (
    <Main $isopen={state.toString()}>
      {/* Boton de despliqgue */}
      <span className="Sidebarbutton" onClick={() => setState(!state)}>
        {<variables.iconoflechaderecha />}
      </span>

      <Container $isopen={state.toString()} className={state ? "active" : ""}>
        {/* Logo y nombre superiores */}
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={variables.logo} />
          </div>
          <h2>Gator Stock</h2>
        </div>

        {/* Home / Kardex / Reportes */}
        {LinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              <span className={state ? "label_ver" : "label_oculto"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}

        {/* Linea division */}
        <Divider />

        {/* Config / TaggleTema */}
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              <span className={state ? "label_ver" : "label_oculto"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}

        {/* Cambio de tema oscuro Claro */}
        <ToggleTema />

        {/* Linea division */}
        <Divider />

        {state && <SidebarCard />}

      </Container>
    </Main>
  );
}
const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin: 5px
      cursor: pointer;
      transition: 0.3s ease;
      img {
        width: 100%;
      }
    }
    h2 {
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)};
      margin: 5px
    }
  }
  
  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${({ theme }) => theme.bgAlpha};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => variables.smSpacing} - 2px) 0;
      color: ${({ theme }) => theme.text};
      height: 60px;
      .Linkicon {
        padding: ${() => variables.smSpacing} ${() => variables.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
      .label_oculto {
        opacity: 0;
      }
      &.active {
        color: ${({theme}) => theme.bg5};
        font-weight:600;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${({theme}) => theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
    &.active {
      padding: 0;
    }
  }
`;
const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bgtgderecha};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ $isopen }) =>
    $isopen === "true" ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${({ theme }) => theme.text};
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${() => variables.lgSpacing} 0;
`;