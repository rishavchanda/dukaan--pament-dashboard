import React from "react";
import styled, { useTheme } from "styled-components";
import SearchIcon from "../utils/Icons/search.svg";
import SortIcon from "../utils/Icons/Sort.svg";
import DownloadIcon from "../utils/Icons/Download.svg";
import InfoIcon from "../utils/Icons/Info.svg";
import Dropdown from "../utils/Icons/Triangle-Icon.svg";
import Paginator from "../components/Paginator";
import { TableData } from "../utils/Data";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-y: scroll;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.text_primary};
`;

const OutlineWrapper = styled.div`
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.navbar_border};
  background: transparent;
  outline: none;
`;

const Select = styled.select`
  background: transparent;
  padding-right: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Option = styled.option`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Card = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CardValue = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: ${({ theme }) => theme.text_primary};
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 12px 24px 12px;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
`;

const TableTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.navbar_border};
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.tableSearchBar_text};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OutlinedButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.navbar_border};
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TableItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TableHeading = styled.div`
  display: flex;
  padding: 10px 12px;
  align-items: center;
  gap: 40px;
  border-radius: 4px;
  background: ${({ theme }) => theme.tableHeading_bg};
`;

const TableHeadingItem = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const TableColumn = styled.div`
  flex: 1;
  display: flex;
  padding: 14px 12px;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.tableDivider};
  cursor: pointer;
`;

const TableColumnItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Payments = () => {
  const theme = useTheme();
  return (
    <Container>
      {/* Overview Section */}
      <Section>
        <FlexBetween>
          <SectionTitle>Overview</SectionTitle>
          <OutlineWrapper>
            <Select value="last month">
              <Option value="this month">This Month</Option>
              <Option value="last month">Last Month</Option>
            </Select>
          </OutlineWrapper>
        </FlexBetween>
        <FlexBetween stle={{ gap: "20px" }}>
          <Card>
            <CardTitle>Online orders</CardTitle>
            <CardValue>231</CardValue>
          </Card>
          <Card>
            <CardTitle>Amount received</CardTitle>
            <CardValue>₹23,92,312.19</CardValue>
          </Card>
        </FlexBetween>
      </Section>
      {/* Transactions Section */}
      <Section
        style={{
          gap: "20px",
        }}
      >
        <SectionTitle>Transactions | This Month</SectionTitle>
        <Table>
          <TableTop>
            <SearchBar>
              <Icon src={SearchIcon} />
              <Input placeholder="Search by order ID..." />
            </SearchBar>
            <Buttons>
              <OutlinedButton>
                Sort{" "}
                <Icon
                  style={{ width: "16px", height: "16px" }}
                  src={SortIcon}
                />
              </OutlinedButton>
              <OutlinedButton style={{ padding: "8px" }}>
                <Icon
                  style={{ width: "20px", height: "20px" }}
                  src={DownloadIcon}
                />
              </OutlinedButton>
            </Buttons>
          </TableTop>
          <TableItems>
            <TableHeading>
              <TableHeadingItem>Order ID</TableHeadingItem>
              <TableHeadingItem>
                Order Date{" "}
                <Icon style={{ width: "8px", height: "8px" }} src={Dropdown} />
              </TableHeadingItem>
              <TableHeadingItem style={{ justifyContent: "end" }}>
                Order amount
              </TableHeadingItem>
              <TableHeadingItem style={{ justifyContent: "end" }}>
                Transaction fees <Icon src={InfoIcon} />
              </TableHeadingItem>
            </TableHeading>
            {TableData.map((item) => (
              <TableColumn key={item.id}>
                <TableColumnItem
                  style={{ color: theme.primary, fontWeight: "500" }}
                >
                  #{item.id}
                </TableColumnItem>
                <TableColumnItem>{item.order_date}</TableColumnItem>
                <TableColumnItem style={{ justifyContent: "end" }}>
                  {item.order_amount}
                </TableColumnItem>
                <TableColumnItem style={{ justifyContent: "end" }}>
                  {item.transaction_fees}
                </TableColumnItem>
              </TableColumn>
            ))}
          </TableItems>
          <Paginator />
        </Table>
      </Section>
    </Container>
  );
};

export default Payments;
