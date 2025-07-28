import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { Btnsave, useUserStore } from "../../index"
import { useMutation } from "@tanstack/react-query"

export function LoginTemplate() {
  const navigate = useNavigate();
  const { InsertAdminUser } = useUserStore();
  const mutationInsertUser = useMutation({
    mutationKey: ["Insertar usurio admin"],
    mutationFn: async () => {
      const p = {
        correo: "pruebas@correo.com",
        pass: "admin123"
      }

      const dt = await InsertAdminUser(p)

      if (dt) {
        navigate("/")
      }
    }
  });

  return (
    <Container>
      <Btnsave titulo="Crear cuenta" bgcolor="#ffffff" funcion={mutationInsertUser.mutateAsync} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`
// 3:39:30