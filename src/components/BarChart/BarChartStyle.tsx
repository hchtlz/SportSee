import styled from 'styled-components';

const Wrapper = styled.div`
	border-radius: 0.5rem;
	box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.0212249);
	height: 32rem;
	padding: 2.5rem;
  background: #FBFBFB;
  margin-bottom: 2em;
  width: 83.5rem;
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  margin-right: 1.5rem;
	`

const Title= styled.h2`
  color: #20253A;
  font-size: 1.5rem;
  line-height: 2.4rem;
`

const Text = styled.p`
	color: #74798c;
	font-size: 1.4rem;
	font-weight: 500;
	margin-left: 1rem;
`

const Icon = styled.div`
	align-self: center;
  background-color: ${(props) => props.color};
	border-radius: 50%;
	height: 0.8rem;
	margin-left: 3rem;
	width: 0.8rem
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
  align-items:center;
  display: flex;
`

export { Wrapper, Head, Title, Text, Icon, Legend, Info };