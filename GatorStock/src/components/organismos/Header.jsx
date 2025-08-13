import styled from "styled-components";
import { variables, UserAuth, useAuthStore, BtnCircular, ListaMenuDesplegable, DesplegableUser } from "../../index";
import fotoProfile from "../../assets/profile.png"

export function Header({ stateConfig }) {
    const { signOut } = useAuthStore()
    const { user } = UserAuth();
    // Funcion para cerrar sesión
    const funcionXtipo = async (p) => {
        if (p.tipo === "cerrarsesion") {
            await signOut();
        }
    };
    return (
        <Container>
            <Datauser onClick={stateConfig.setState}>
                <div className="imgContainer">
                    <img src={fotoProfile} />
                </div>
                
                <BtnCircular
                    icono={<variables.iconocorona />}
                    width= "20px"
                    height= "20px"
                    bgcolor= "#f8bf5b"
                    textcolor= "#FFFFFF"
                    fontsize= "11px"
                    translatex= "-58px"
                    translatey= "-12px"
                />

                <span className="nombre">{user.email}</span>

                {stateConfig.state && (
                    <ListaMenuDesplegable
                        data={DesplegableUser}
                        top="62px"
                        funcion={(p) => funcionXtipo(p)}
                    />
                )}
            </Datauser>
        </Container>
    );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;

`;
const Datauser = styled.div`
  z-index: 10;
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 50px;
    width: 50px;
    min-height: 40px;
    min-width: 40px;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;