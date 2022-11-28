import { Box, Input, Center, Image, Flex, Badge, Text, Button, Spacer,Select,Heading,FormControl} from "@chakra-ui/react";
import React from 'react'
import { useState,useRef } from "react";
import "../style/signin.css";
import { BsGoogle } from "react-icons/bs";
            
export default function Auth() {
//shout out to my nigga Turan
  const [clicked, setClicked] = useState(false)
  const onClick  = () =>
  {
    setClicked(!clicked);    
  }

  if (!clicked) {
    return (
  <Flex className="main-wrapper"  >
    <Flex className={clicked ? "left  left-on-click" : "left"}>
          <Box  w={"80%"} >
      <Heading>Sign in to The mind</Heading>
      <a className="icon" href="#"><BsGoogle /></a>
      <form method="POST" action="/">
      <FormControl lineHeight={"3em"}  >
        <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='text' placeholder="username" required w={"55%"} />
        <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='password' placeholder="password" required w={"55%"} />
        <Text><a href="#">Forgot your password?</a></Text>
        <Button type="submit"   transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid #010E1F"} w={"45%"} p={5} borderRadius={18} bg={"#010E1F"} color={"white"} >Sign In</Button>
      </FormControl>
      </form>
      
      </Box>
    </Flex>
    <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Hello Friend!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >Enter your personal details and start journey with us</Text>
            <Button onClick={onClick} transitionDuration={"0.7s"} _hover={{bg:"white", color:"black" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={18} bg={"transparent"} color={"white"} >Sign Up</Button>
            </Box>  
    </Flex>
        
  </Flex>
    )
  }
    else 
    {
      return (
        <Flex   className="main-wrapper" w={"80%"} margin={"auto"} marginTop={"5%"} h={"35em"}  borderRadius={"2em"} boxShadow={" 0.2em 0.6em 2em"} >
         <Flex className={clicked ? "left  left-on-click" : "left"} color={"black"} bg={"white"} w={"70%"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}  >
          <Box w={"50%"} gap={2} >
          <Heading >Create Account</Heading>
          <form method="POST" action='/'>
          <FormControl lineHeight={"3em"} paddingTop={"2em"} className="create-account">
            <Box>
                <Input w={"50%"} bg={"#F4F8F7"} borderRadius={20} border={"none"} type="text" placeholder="name" required />
                <Input w={"50%"} bg={"#F4F8F7"} borderRadius={20} border={"none"} type="text" placeholder="surname" required />
                <Input  bg={"#F4F8F7"} borderRadius={20} border={"none"} type="date" required />
                <Input  bg={"#F4F8F7"} borderRadius={20} border={"none"} type="email" placeholder="email" />
            <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='password' placeholder="password" required  />
            <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='password' placeholder=" confirm password" required  />
            <Select placeholder='Select gender' bg={"#F4F8F7"} borderRadius={20} border={"none"}  >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>
            </Box>
            <a  href="#" className="icon-register" ><BsGoogle /></a>
            <Button type="submit" transitionDuration={"0.7s"} _hover={{bg:"white", color:"#46230D" }} border={"1px solid #46230D"} w={"45%"} p={5} borderRadius={18} bg={"#46230D"} color={"white"} >Sign Up</Button>

          </FormControl>
          </form>
          
          </Box>
          
        </Flex>
        <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Welcome Back!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >To keep connected with us please
login with your personal info </Text>
            <Button onClick={onClick} transitionDuration={"0.7s"} _hover={{bg:"white", color:"#46230D" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={18} bg={"transparent"} color={"white"} >Sign In</Button>
            </Box>  
        </Flex>
        
      </Flex>
      )
    }


      

   
}
  
