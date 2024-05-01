import { Box, Flex, Text, Heading, VStack, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Heading mb={4}>John Doe</Heading>
        <Text fontSize="lg" mb={6}>Full Stack Developer | React & Node Specialist</Text>
        <VStack spacing={5}>
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </VStack>
      </Flex>
      <Box id="about" p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={4}>About Me</Heading>
        <Text fontSize="md">I am a passionate Full Stack Developer with a focus on creating engaging and efficient user experiences. With a background in both front-end and back-end technologies, I bring a comprehensive approach to web development.</Text>
      </Box>
      <Box id="portfolio" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Portfolio</Heading>
        <VStack spacing={5}>
          <Text>Project 1: E-commerce Site</Text>
          <Text>Project 2: Social Media App</Text>
          <Text>Project 3: Analytics Dashboard</Text>
        </VStack>
      </Box>
      <Box id="contact" p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={4}>Contact</Heading>
        <VStack spacing={5}>
          <Button leftIcon={<FaEnvelope />} variant="outline">Email</Button>
          <Button leftIcon={<FaGithub />} variant="outline">GitHub</Button>
          <Button leftIcon={<FaLinkedin />} variant="outline">LinkedIn</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;