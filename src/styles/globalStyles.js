import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './transitionStyles';

const GlobalStyles = createGlobalStyle`

${Fonts};

:root {
    //colors
    --black:#1a1a2e;
    --navy:#16213e;
    --blue-inside:#0f3460;
    --blue:#00adb5;
    --blue-hover:#00dea1;
    --white-dark: #8892b0;
    --white: #a8b2d1;
    --white-light: #ccd6f6;
    --white-lightest: #e6f1ff;
    --line-color:#b0b5b1;
    --loader-color:#0f4c75;
    --danger:red;
    --red-dark:#fc5664;
    --yellow-dark:#ffc371;
    

    //font-size
    --fs-vxs:10px;
    --fs-xxs:12px;
    --fs-xs:14px;
    --fs-s:16px;
    --fs-m:18px;
    --fs-l:20px;
    --fs-xl:22px;
    --fs-xxl:24px;
    --fs-heavy:128px;
    --fs-heavy-more:140px;
    --fs-heavy-less:100px;

    //heading font-size
    --heading-fs:32px;

    //border-radius
    --border-radius:6px;
    --circle-border:50%;

    //nav-height
    --nav-height:10vh;

    --nav-scroll-height: 10vh;

    //fonts
    --font-rob:'roboto',sans-serif;//heading
    --font-bit:'bitter',monospace;//text
    --font-lob:'lobster',monospace;//other stuff

    //transition
    --transition: all 0.5s ease;
    --cubic:cubic-bezier(.06,.07,.03,1);
   
}

html{
    box-sizing:border-box;
    width:100%;
    scroll-behavior:smooth;
}

*,
*:before,
*:after{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

::selection {
    background-color: var(--blue);
    color: var(--white-lightest);
  }

body{
    min-height: 100%;
    width:100%;
    overflow-x:hidden;
    background-color: var(--black);
    color: var(--white-dark);
    font-size:Var(--fs-s);
    line-height:1.3;
    font-family:var(--font-bit);
    line-height: 1.3;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    
    @media(max-width:480px){
        font-size:var(--fs-m);
    }
}

h1,h2,h3,h4,h5,h6{
    color:var(--white-lightest);
    margin:0 0 10px 0;
    font-weight:600;
    font-family: var(--font-rob);
}

.big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
}

.medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
}

.gradient-huge-heading {
  margin: 0;
  font-size:clamp(160px,50vw,320px);
  background: linear-gradient(to top,var(--red-dark),var(--yellow-dark));
  background-clip: text;
  -webkit-text-fill-color:transparent;
}

a{
    display:inline-block;
    color:var(--blue);
    text-decoration:none;
    text-decoration-skip-ink: auto;
    position:relative;
    cursor:pointer;
    transition:var(--transition);

   &:hover,
   &:focus {
       color:var(--blue-hover)
   }

   &.inline-link {
      ${({ theme }) => theme.mixin.inlineLink};
    }
}

ul {
  list-style: none;
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fs-l);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
      }
    }
  }

p{
    color:var(--white);
}

button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
}

input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixin.inlineLink};
    }

    & > code {
      background-color: var(--blue-inside);
      color: var(--white-lightest);
      font-size: var(--fs-s);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
}

img[alt=""],
img:not([alt]) {
filter: blur(5px);
}

svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}

main{
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  max-width: 1600px;
  padding:200px 150px;

  @media (max-width: 1080px) {
      padding: 200px 100px;
  }
  @media (max-width: 768px) {
      padding: 150px 50px;
  }
  @media (max-width: 480px) {
      padding: 125px 25px;
  }

  &.insideAdjust {
      padding: 10vh 150px;

      @media (max-width: 1080px) {
        padding: 10vh 100px;
      }
      @media (max-width: 768px) {
        padding: 10vh 50px;
      }
      @media (max-width: 480px) {
        padding: 10vh 25px;
      }
    }
}



${TransitionStyles}

`;

export default GlobalStyles;
