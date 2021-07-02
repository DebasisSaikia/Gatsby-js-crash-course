import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Image = styled(GatsbyImage)`
  border-radius: 10px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  max-height: 300;
`

export default Image;