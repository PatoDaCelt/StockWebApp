import styled from "styled-components";

export function BtnCircular({
    // Parametros
    icono,
    width,
    height,
    bgcolor,
    textcolor,
    fontsize,
    translatex,
    translatey,
}) {
    return (
        <Container
            $bgcolor={bgcolor}
            $textcolor={textcolor}
            height={height}
            width={width}
            $fontsize={fontsize}
            $translatex={translatex}
            $translatey={translatey}
        >
            <span>{icono}</span>
        </Container>
    );
}

const Container = styled.div`
  background: ${({ $bgcolor }) => $bgcolor};
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${({ $translatex }) => $translatex})
    translateY(${({ $translatey }) => $translatey});

  span {
    font-size: ${({ $fontsize }) => $fontsize};
    text-align: center;
    color: ${({ $textcolor }) => $textcolor};
  }
`;