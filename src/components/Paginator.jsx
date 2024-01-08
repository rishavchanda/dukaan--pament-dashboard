import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Back from "../utils/Icons/ChevronLeftIcon.svg";
import Next from "../utils/Icons/ChevronRightIcon.svg";

const Container = styled.div`
  width: 100%;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlinedButton = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.navbar_border};
  color: ${({ theme }) => theme.text_secondary};
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const BackButton = () => {
  return (
    <OutlinedButton>
      <Icon src={Back} alt="back" /> Previous
    </OutlinedButton>
  );
};
const NextButton = () => {
  return (
    <OutlinedButton>
      Next
      <Icon src={Next} alt="next" />
    </OutlinedButton>
  );
};

const Paginator = () => {
  return (
    <Container>
      <Pagination
        shape="rounded"
        color="primary"
        count={18}
        defaultPage={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: BackButton,
              next: NextButton,
            }}
            {...item}
          />
        )}
      />
    </Container>
  );
};

export default Paginator;
