import { BsFillCalendar2DayFill } from "react-icons/bs";
import { Box, Text, Spacer, Tag, Flex, Button, Icon } from "@chakra-ui/react";

export function LaunchItem(launch) {
    return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        <Box display="flex">
        <Text fontSize="2x1">
            Mission{" "}
            <strong>
            {launch.mission_name} ({launch.launch_year})
            </strong>
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failure"}
        </Tag>
        </Box>
        <Flex>
        <Icon as={BsFillCalendar2DayFill} mt={1} color="gray.500" />
        <Text fontSize="sm" ps="2" color="gray.500">
            {launch.launch_date_local.split("T")[0]}
        </Text>
        </Flex>
        <Button display="flex" mt={2} colorScheme="blue">More Details</Button>
    </Box>
    );
}
