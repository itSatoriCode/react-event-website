import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
 } 
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 960px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Section = styled.div`
	color: #fff;
	padding: 160px 0;
	background: ${({ inverse }) => (inverse ? '#fff' : '#020305')};
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-weight: 600;
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid #d12d2d;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: #d12d2d;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 102%;
		height: 0%;
	}

	&:hover:before {
		height: 200%;
	}

	&:hover {
		color: black;
	}
`;

export default GlobalStyle;
