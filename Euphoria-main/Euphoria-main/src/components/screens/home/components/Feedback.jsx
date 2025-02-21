import React from "react";
import styled from "styled-components";

const Feedback = () => {
  const feedback = [
    {
      id: 1,
      image: "../../../../assets/images/span-1.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "Floyd Miles",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      image: "../../../../assets/images/span-2.svg",
      starimg: "../../../../assets/images/star2.svg",
      name: "Ronald Richards",
      review:
        "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      image: "../../../../assets/images/span-3.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "Savannah Nguyen",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit/b non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <>
      <Wrapper>
        <MainContainer>
          <Container>
            <Bullet></Bullet>
            <Heading>Feedback</Heading>
          </Container>
          <ContentMainContainer>
            {feedback.map((item) => {
              const [part1, part2] = item.review.split("/b");
              return (
                <ContentContainer key={item.id}>
                  <HeadContainer>
                    <ProfileContainer>
                      <ProfileImage
                        src={item.image}
                        alt={`${item.name}'s profile`}
                      />
                    </ProfileContainer>
                    <RatingContainer>
                      <RatingImage src={item.starimg} alt="star rating" />
                    </RatingContainer>
                  </HeadContainer>
                  <Name>{item.name}</Name>
                  <Review>
                    <p>{part1}</p>
                    {part2 && <p>{part2}</p>}
                  </Review>
                </ContentContainer>
              );
            })}
          </ContentMainContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Feedback;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 30px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Heading = styled.h3`
  font-size: 32px;
  font-family: "poppinsregular";
  font-weight: 600;
  color: #3c4242;
  margin-top: 38px;
  @media all and (max-width: 980px) {
    font-size: 26px;
  }
  @media all and (max-width: 540px) {
    margin-top: 30px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;

const ContentMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px 0;
  margin-bottom: 70px;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
  @media all and (max-width: 768px) {
    padding-top: 0;
  }
`;

const ContentContainer = styled.div`
  border: 1px solid #bebcbd;
  width: 27%;
  border-radius: 10px;
  padding: 23px 23px;
  @media all and (max-width: 980px) {
    width: 41%;
  }
  @media all and (max-width: 768px) {
    width: 40%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
    padding: 12px 15px;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media all and (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

const ProfileContainer = styled.div`
  @media all and (max-width: 640px) {
    width: 35px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  display: block;
`;

const RatingContainer = styled.div``;

const RatingImage = styled.img`
  display: block;
  width: 100%;
`;

const Name = styled.div`
  text-align: left;
  font-size: 18px;
  font-family: "poppinsmedium";
  font-weight: 500;
  color: #3c4242;
`;

const Review = styled.p`
  text-align: left;
  font-size: 14px;
  color: #807d7e;
  width: 92%;
  @media all and (max-width: 640px) {
    font-size: 11px;
  }
  & > p {
    margin: 0;
  }
`;
