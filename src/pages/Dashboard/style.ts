import styled from "styled-components";
export const StyleHeader = styled.header`
  width: 100%;
  min-height: 80px;
  padding: 0 80px 0 80px;
  background: var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 584px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 584px) {
      width: 100%;
      justify-content: space-evenly;
    }
    a {
      font-size: 24px;
      font-weight: bold;
      :hover {
        color: var(--color-primary);
      }
    }
  }
  .btnLogout {
    background-color: var(--color-primary);
    color: var(--gray-1);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;

    :hover {
      background-color: var(--color-primary-50);
    }
  }
`;

export const StyledMain = styled.main`
  min-height: 100vh;

  display: flex;

  gap: 100px;
  padding-top: 100px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  .sectionContacts {
    width: 100%;
    max-width: 1000px;

    display: flex;
    justify-content: center;

    padding: 50px;
  }
`;
