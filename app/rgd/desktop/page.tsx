"use client"
import { Rgd } from "@branding/rgd/src/desktop/Rgd";
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