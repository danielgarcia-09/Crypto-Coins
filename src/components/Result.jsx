import styled from "@emotion/styled";

const Container = styled.div`
    margin-top: 0.8rem;
    color: #FFF;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.7rem;
`;

const Image = styled.img`
    display: block;
    width: 120px;
`;

const Text = styled.p`
    font-size: 16px;
    span {
        font-weight: 700;
    }
`;
const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const Result = ({result}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

    return (
        <Container>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto image"/>
            <div>
            <Price>Price is: <span>{PRICE}</span></Price>
            <Text>Highest Price of the day is: <span>{HIGHDAY}</span></Text>
            <Text>Lowest Price of the day is: <span>{LOWDAY}</span></Text>
            <Text>24h Variation: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Last Updated Price: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    );
}
 
export default Result;