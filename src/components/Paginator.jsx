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

const Span = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const BackButton = () => {
  return (
    <OutlinedButton>
      <Icon src={Back} alt="back" /> <Span>Previous</Span>
    </OutlinedButton>
  );
};
const NextButton = () => {
  return (
    <OutlinedButton>
      <Span>Next</Span>
      <Icon src={Next} alt="next" />
    </OutlinedButton>
  );
};

const Paginator = ({ size, itemsPerPage, currentPage, handleChangePage }) => {
  return (
    <Container>
      <Pagination
        shape="rounded"
        color="primary"
        count={Math.ceil(size / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
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
