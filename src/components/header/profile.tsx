import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Amora</Text>
          <Text color="gray.300" fontSize="small">
            pedro.amora@berrytech.com.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Amora"
        src="https://github.com/pbamora.png"
      />
    </Flex>
  );
}
