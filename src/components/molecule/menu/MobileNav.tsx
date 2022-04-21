import React from "react";
import {
  IconButton,
  Flex,
  HStack,
  useColorModeValue,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  NavLink as ReachLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import ProfileButton from "../../atoms/profile/ProfileButton";
import SearchInput from "../../atoms/track/SearchInput";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setAuth, setToken } from "../../../store/Auth";
import { deleteStorage } from "../../../utils/storage";
import InputSong from "../../atoms/createPlaylist/InputSong";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const me = useAppSelector((state) => state.User.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    deleteStorage();
    dispatch(setToken(""));
    dispatch(setAuth(false));
    navigate("/login");
  };

  const input =
    location.pathname === "/search" ? (
      <SearchInput />
    ) : location.pathname === "/" ? (
      <InputSong />
    ) : (
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SpotifyHealvi
      </Text>
    );
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      {/* Input Or Title Navbar */}
      {input}
      {/* Input Or Title Navbar */}
      <HStack spacing={{ base: "0", md: "10" }}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              {/* btn profile */}
              <ProfileButton me={me} />
              {/* end btn profile */}
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem as={ReachLink} to="/profile">
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => Logout()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
