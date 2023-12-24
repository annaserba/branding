"use client"
import { Example } from "@branding/example/src/mobile/Example";
import Layout from "../../layout";
import styled from "styled-components";
const Container = styled.div`
  max-width: 768px;
  margin:0 auto;
  width: 100%;
  position: relative;
`;

export default function PSB() {
    
    return <Layout>
        <Container id="rgd">
            <Example />
        </Container>
    </Layout>
}