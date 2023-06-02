import styled from "styled-components";

export const StyleAddContacts = styled.form`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-left: 50px;

  padding: 20px 40px;

  height: 100%;

  background-color: var(--gray-1);

  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .divheader {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-weight: 700;
      font-size: 38px;
      line-height: 58px;
      color: var(--gray-5);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .btnConfirm {
    height: 71px;
    background: var(--color-primary);
    border-radius: 8px;
    color: var(--gray-1);

    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    :hover {
      background-color: var(--color-primary-50);
    }
  }
  a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: var(--gray-5);

    text-align: center;
  }
`;
