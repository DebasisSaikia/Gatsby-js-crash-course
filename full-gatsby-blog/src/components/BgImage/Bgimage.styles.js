import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image'

export const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
`

export const MainImage = styled(GatsbyImage)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 500px;
  z-index: 0;
  border-radius: 10px;
`

export const Content = styled.div`
  position: relative;
  top: -100px;
  top: auto;
  bottom: auto;
  height: 100%;
  width: 100%;
  z-index: 2;
`