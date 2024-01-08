import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SearchIcon from "../utils/Icons/search.svg";
import HelpIcon from "../utils/Icons/Help.svg";
import NotificationIcon from "../utils/Icons/NotifyIcon.svg";
import DropdownIcon from "../utils/Icons/MenuDropdown.svg";

const Container = styled.div`
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  border-bottom: 1px solid ${({ theme }) => theme.navbar_border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  gap: 16px;
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Path = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.text_primary};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
`;

const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 9px 16px;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.searchBar};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.searchBar_text};
`;

const MenuItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const IconButton = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Navbar = ({ setMenuOpen, menuOpen }) => {
  // Hooks
  const location = useLocation();

  // get the main path from the location
  let path = location.pathname.split("/")[1];
  if (path === "") path = "Home";
  else if (path === "orders") path = "Orders";
  else if (path === "products") path = "Products";
  else if (path === "delivery") path = "Delivery";
  else if (path === "marketing") path = "Marketing";
  else if (path === "analytics") path = "Analytics";
  else if (path === "payments") path = "Payments";
  else if (path === "tools") path = "Tools";
  else if (path === "discounts") path = "Discounts";
  else if (path === "audience") path = "Audience";
  else if (path === "appearence") path = "Appearence";
  else if (path === "plugins") path = "Plugins";
  else path = "";

  return (
    <Container>
      <Flex>
        <Path>{path}</Path>
        <Info>
          <Icon style={{ width: "14px", height: "14px" }} src={HelpIcon} />
          How it works
        </Info>
      </Flex>
      <Search>
        <Icon src={SearchIcon} />
        <Input placeholder="Search features, tutorials, etc." />
      </Search>
      <MenuItems>
        <IconButton src={NotificationIcon} />
        <IconButton src={DropdownIcon} />
      </MenuItems>
    </Container>
  );
};

export default Navbar;
