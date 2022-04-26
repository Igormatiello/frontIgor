import {
    Accordion,
    AccordionButton,
    Flex,
    Text,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    BreadcrumbItem,
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbSeparator
  } from "@chakra-ui/react";
  
  import pic from "../../../assets/images/home.png";
  
  

  
  import { useForm } from "react-hook-form";
  import { Image, Box } from '@chakra-ui/react'
import { Route } from "react-router-dom";
import Login from "pages/auth/Login";
  
  
  
  const Home = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      localStorage.setItem("USER", data);
  
      window.location.reload();
    };
  
    return (
      <Flex height="100vh" width="100%" align="center" justify="center">
        
     
     <Text>
     Sistema de gerenciamento do laboratório de química  
     </Text>

     <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Cadastros
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    
    
    <Box>


  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink >
   
      <Route path="/login" element={<Login />}></Route>
        Pessoas</BreadcrumbLink>
    </BreadcrumbItem>
   
  </Breadcrumb>

  {/* preferred solution: */}
  <Breadcrumb pt="3">
    <BreadcrumbItem>
      <BreadcrumbLink href="">Cidades</BreadcrumbLink>
    </BreadcrumbItem>
    {/* this creates the exact same HTML as for page 1 */}
 
  </Breadcrumb>

  
</Box>



  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Formulários
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <Box>


  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink href="">Formulários em espera</BreadcrumbLink>
    </BreadcrumbItem>
   
  </Breadcrumb>

  {/* preferred solution: */}
  <Breadcrumb pt="3">
    <BreadcrumbItem>
      <BreadcrumbLink href="">Formulários em análise</BreadcrumbLink>
    </BreadcrumbItem>
    {/* this creates the exact same HTML as for page 1 */}
 
  </Breadcrumb>

  
</Box>
  </AccordionItem>
</Accordion>


            <Box p='10' bg='gray.100'>
              <Box boxSize='sm'>
                <Image img src={pic}>
  
                </Image>
  
              </Box>
            </Box>
        

  
    
      </Flex>
    );
  };
  
  export default Home;