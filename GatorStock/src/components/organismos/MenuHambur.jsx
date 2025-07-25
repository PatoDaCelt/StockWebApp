import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../index";
import { variables } from "../../styles/variables";

export function MenuHambur() {
    const [click, setClick] = useState(false);

    return (
        <Container>
            <NavBar>
                <section>
                    <HamburgerMenu onClick={() => setClick(!click)}>
                        <label
                            className={click ? "toggle active" : "toggle"}
                            htmlFor="checkbox"
                        >
                            <div className="bars" id="bar1" />
                            <div className="bars" id="bar2" />
                            <div className="bars" id="bar3" />
                        </label>
                    </HamburgerMenu>
                </section>
                <Menu $click={click.toString()}>
                    {LinksArray.map(({ icon, label, to }) => (
                        <div
                            onClick={() => setClick(!click)}
                            className="LinkContainer"
                            key={label}
                        >
                            <NavLink to={to} className="Links">
                                <div className="Linkicon">{icon}</div>
                                <span>{label}</span>
                            </NavLink>
                        </div>
                    ))}

                    <Divider />

                    {SecondarylinksArray.map(({ icon, label, to }) => (
                        <div
                            onClick={() => setClick(!click)}
                            className="LinkContainer"
                            key={label}
                        >
                            <NavLink to={to} className="Links">
                                <div className="Linkicon">{icon}</div>
                                <span>{label}</span>
                            </NavLink>
                        </div>
                    ))}

                    <ToggleTema />

                    <Divider />
                </Menu>
            </NavBar>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.body};
`;

const NavBar = styled.nav`
    display: flex;
    jutify-content: space-between;
    align-items: center;
    height: 100vh;
`;

const HamburgerMenu = styled.span`
    position: fixed;
    top: 1rem;
    z-index: 100;

    #checkbox {
        display: none;
    }

    .toggle {
        position: relative;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition-duration: .3s;
    }

    .bars {
        width: 100%;
        height: 4px;
        background-color: ${({ theme }) => theme.text};
        border-radius: 5px;
        transition-duration: .3s;
    }

    #checkbox:checked + .toggle .bars {
        margin-left: 13px;
    }

    #checkbox:checked + .toggle #bar2 {
        transform: rotate(135deg);
        margin-left: 0;
        transform-origin: center;
        transition-duration: .3s;
    }

    #checkbox:checked + .toggle #bar1 {
        transform: rotate(45deg);
        transition-duration: .3s;
        transform-origin: left center;
    }

    #checkbox:checked + .toggle #bar3 {
        transform: rotate(-45deg);
        transition-duration: .3s;
        transform-origin: left center;
    }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: ${({ theme }) => `rgba(${theme.bodyRgba},0.85)`};
  backdrop-filter: blur(3px);
  transform: ${(props) => props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
  transition: all 0.3s ease;

  .LinkContainer {
    &:hover {
      background: ${({ theme }) => theme.bgAlpha};
    }
    
    .Links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      height: 80px;
      .Linkicon {
        padding: ${variables.smSpacing} ${variables.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => variables.lgSpacing} 0;
`;