import styled from "styled-components";

export const StyleUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 25px;

  @media (max-width: 500px) {
    justify-content: center;
  }

  li {
    width: 25rem;
    height: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    border-radius: 8px;
    border: 0.5px solid var(--gray-3);

    :hover {
      transition: all 0.5s ease;
      transform: scale(1.1);

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    animation: slideInUp;
    animation-duration: 0.8s;

    background: var(--white);

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 29px;
      color: var(--gray-5);
      width: 100%;

      text-align: center;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
