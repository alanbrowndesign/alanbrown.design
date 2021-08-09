import Head from 'next/head'
import Image from 'next/image'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { FaTwitter, FaBehance, FaCodepen, FaLinkedin, FaVimeo } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";

const IconLink = styled("a")`
  width: 48px;
  height: 48px;
  /* background: #fff; */
  display: block;
  padding: 8px;
  border-radius: 4px;


  > svg {
    width: 100%;
    height: 100%;
    fill: #00C6BA;
  }
`

const StyledSocialIcon = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .social-label{
    background: #007D76;
    padding: 4px 8px;
    border-radius: 2px;
    position: absolute;
    top: -20px;
    align-self: flex-start;
    transition: 0.2s opacity ease, 0.2s transform ease;
    transform: translateY(10px);
    color: #fff;
    opacity: 0;
  }


  @media(hover: hover){

    &:hover {
      .social-label {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

`

function SocialIcon(props) {
  const {children, linkUrl, label} = props;
  return (
    <StyledSocialIcon>
      <IconLink href={linkUrl} target="_blank">
        {children}
      </IconLink>
      <div className={"social-label"}>{label}</div>
    </StyledSocialIcon>
  )
}


const GlobalStyles = () => <Global
styles={css`
  html {
    box-sizing: border-box;
    min-height: -webkit-fill-available;
  }

  h2 {
    margin-top: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: #1D202B;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`}
/>

const StyledLinks = styled.div`
  display: flex;
  gap: 8px;
`

const StyledContainer = styled.main`
  margin: auto;
  width: 100%;
  max-width: 640px;
`

const StyledHeading = styled.div`
  font-size: 40px;
  /* font-family: skippy-sharp, sans-serif; */
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-style: normal;
  color: #fff;
`

const StyledSubHeading = styled.div`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 40px;
  color: #fff;
  margin-bottom: 40px;
`

const StyledPara = styled.div`
  font-size: 32px;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-style: normal;
  color: #fff;
  letter-spacing: 1px;
  a {
    text-decoration: underline;
    font-weight: 500;
    white-space: nowrap;
  }
`

const StyledAnnotation = styled.div`
   font-family: skippy-sharp, sans-serif;
   font-weight: 400;
   font-style: normal;
   font-size: 40px;
   color: #00C6BA;
   width: fit-content;
   @media(min-width: 730px) {
    transform-origin: 50% 50%;
    transform: rotate(-10deg) translate(-60px, -10px);
   }

`

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Alan Brown | Lead UI/UX Digital Product Designer and Developer</title>
        <meta name="description" content="Highly skilled Lead Designer with 17 years experience designing and delivering digital products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bmt5egn.css" />
      </Head>

      <StyledContainer>
       <h2>
         <StyledHeading>Alan Brown</StyledHeading>
         <StyledSubHeading>Lead UI/UX Designer</StyledSubHeading>
         <StyledAnnotation>Working on it...</StyledAnnotation>
         <StyledPara>Currently building a new site. In the meantime, <a href="mailto:hello@alanbrown.design">say hello</a> or check me out on these links:</StyledPara>
      </h2>
      <StyledLinks>
        <SocialIcon
          label={"Twitter"}
          linkUrl={"https://twitter.com/alanbrowndesign"}
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon
          label={"Behance"}
          linkUrl={"https://behance.net/alanbrowndesign"}
        >
          <FaBehance />
        </SocialIcon>
        <SocialIcon
          label={"LinkedIn"}
          linkUrl={"https://www.linkedin.com/in/alanbrowndesign/"}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          label={"Vimeo"}
          linkUrl={"https://vimeo.com/alanbrowndesign"}
        >
          <FaVimeo />
        </SocialIcon>
        {/* <IconLink href="https://behance.net/alanbrowndesign" target="_blank"><FaCodepen /></IconLink>
        <IconLink href="https://behance.net/alanbrowndesign" target="_blank"><SiCodesandbox /></IconLink> */}
      </StyledLinks>
      </StyledContainer>

    </div>
  )
}
