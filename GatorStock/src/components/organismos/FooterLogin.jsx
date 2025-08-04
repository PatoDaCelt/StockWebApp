import styled from "styled-components";

export function FooterLogin() {
    return (
        <Container>
            <section className="derechos">
                <span>GatorStock S.A - 2739462892689 -</span>
                <div className="separador"></div>
                <span>Sistema de almacén </span>
                <div className="separador"></div>
                <span>©2025</span>
            </section>
        </Container>
    );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: ${({ theme }) => theme.whiteBg};
  gap:5px;
  .lock {
    border-bottom: 1px solid rgba(145, 164, 183,0.3);
    gap:5px;
    display:flex;
    align-items:center;
  }
  .derechos {
    display: flex;
    justify-content: space-between;
   .separador{
    width:1px;
    background-color:rgba(145, 164, 183,0.3);
    margin-top:4px;
    height:80%;
    align-items:center;
    display:flex;
   }
    span{
      margin-top:5px;
    }
  }
`;