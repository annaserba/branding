"use client"
import { RgdL as Rgd } from "@branding/rgd/src/common/screens/RgdL/RgdL";
import Layout from "../../layout";
import styled from "styled-components";
const Container = styled.div`
  max-width: 1444px;
  margin:0 auto;
  width: 100%;
  position: relative;
`;
export default function PSB() {
    
    return <Layout>
        <Container id="rgd">
            <Rgd />
        </Container>
    </Layout>
}