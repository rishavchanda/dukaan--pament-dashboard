import { NavLink } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Avatar } from "@mui/material";
import DownIcon from "../utils/Icons/ChevronDown.svg";
import WalletIcon from "../utils/Icons/wallet.svg";
import HomeIcon from "../utils/Icons/Home.svg";
import OrderIcon from "../utils/Icons/OrdersIcon.svg";
import ProductsIccon from "../utils/Icons/ProductsIcon.svg";
import DeliveryIcon from "../utils/Icons/DeliveryIcon.svg";
import MarketingIon from "../utils/Icons/MarketingIon.svg";
import AnalyticsIon from "../utils/Icons/AnalyticsIon.svg";
import PaymentsIcon from "../utils/Icons/PaymentsIcon.svg";
import ToolsIcon from "../utils/Icons/ToolsIcon.svg";
import DisountIcon from "../utils/Icons/DisountIcon.svg";
import AudienceIcon from "../utils/Icons/AudienceIcon.svg";
import Appearenceicon from "../utils/Icons/Appearenceicon.svg";
import PluginsIcon from "../utils/Icons/PluginsIcon.svg";
import { UserData } from "../utils/Data";
import { CloseRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  max-width: 224px;
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.menubar};
  color: ${({ theme }) => theme.menu_secondary_text};
  @media (max-width: 1100px) {
    position: fixed;
    height: 96vh;
    z-index: 1000;
    width: 100%;
    max-width: 224px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;

const FlexTopDown = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavLinkItem = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.menu_primary_text};
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.menu_hover};
  }
  &.active {
    background-color: ${({ theme }) => theme.menu_hover};
  }
`;

const NavLinkItemIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0px 6px;
`;

const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.menu_primary_text};
`;

const TextButton = styled.div`
  color: ${({ theme }) => theme.menu_primary_text};
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.8;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.menu_card};
  gap: 12px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  padding: 6px;
  background-color: ${({ theme }) => theme.menu_hover};
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 13px;
  line-height: 16px;
`;

const Span = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.menu_primary_text};
`;

const SidebarItems = [
  {
    name: "Home",
    icon: <NavLinkItemIcon src={HomeIcon} />,
    link: "/",
  },
  {
    name: "Orders",
    icon: <NavLinkItemIcon src={OrderIcon} />,
    link: "/orders",
  },
  {
    name: "Products",
    icon: <NavLinkItemIcon src={ProductsIccon} />,
    link: "/products",
  },
  {
    name: "Delivery",
    icon: <NavLinkItemIcon src={DeliveryIcon} />,
    link: "/delivery",
  },
  {
    name: "Marketing",
    icon: <NavLinkItemIcon src={MarketingIon} />,
    link: "/marketing",
  },
  {
    name: "Analytics",
    icon: <NavLinkItemIcon src={AnalyticsIon} />,
    link: "/analytics",
  },
  {
    name: "Payments",
    icon: <NavLinkItemIcon src={PaymentsIcon} />,
    link: "/payments",
  },
  {
    name: "Tools",
    icon: <NavLinkItemIcon src={ToolsIcon} />,
    link: "/tools",
  },
  {
    name: "Discounts",
    icon: <NavLinkItemIcon src={DisountIcon} />,
    link: "/discounts",
  },
  {
    name: "Audience",
    icon: <NavLinkItemIcon src={AudienceIcon} />,
    link: "/audience",
  },
  {
    name: "Appearance",
    icon: <NavLinkItemIcon src={Appearenceicon} />,
    link: "/appearance",
  },
  {
    name: "Plugins",
    icon: <NavLinkItemIcon src={PluginsIcon} />,
    link: "/plugins",
  },
];

const Sidebar = ({ setMenuOpen }) => {
  // Hooks
  const theme = useTheme();

  return (
    <Container setMenuOpen={setMenuOpen}>
      <FlexTopDown>
        <Flex>
          <User>
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: theme.menu_secondary_text,
                borderRadius: "4px",
              }}
              src={UserData.img}
            />
            <ProfileDetails>
              {UserData.name}
              <TextButton>Visit store</TextButton>
            </ProfileDetails>
            <NavLinkItemIcon src={DownIcon} />
            <Close>
              <CloseRounded
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              />
            </Close>
          </User>
          <ContainerWrapper>
            {SidebarItems.map((item, index) => (
              <NavLinkItem
                key={index}
                to={item.link}
                exact
                style={{ textDecoration: "none" }}
              >
                {item.icon}
                {item.name}
              </NavLinkItem>
            ))}
          </ContainerWrapper>
        </Flex>
        <Card>
          <Image src={WalletIcon} />
          <Details>
            Available credits
            <Span>222.10</Span>
          </Details>
        </Card>
      </FlexTopDown>
    </Container>
  );
};

export default Sidebar;
