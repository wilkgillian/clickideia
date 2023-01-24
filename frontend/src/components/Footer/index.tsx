import {
  Box,
  defineStyle,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';

export function Footer() {
  const dados = [
    'Perguntas frequentes',
    'Relações com investidores',
    'Formas de assistir',
    'Informações corporativas',
    'Só no Filimo',
    'Central de ajuda',
    'Carreiras',
    'Termos de uso',
    'Entre em contato',
    'Conta',
    'Resgatar cartão pré-pago',
    'Privacidade',
    'Teste de velocidade',
    'Media center',
    'Comprar cartão pré-pago',
    'Preferências de cookies',
    'Avisos legais'
  ];

  return (
    <Box width="100%" mt={20} textAlign="center">
      <Divider orientation="horizontal" variant="thick" bgColor="gray.600" />
      <Flex alignItems="center" justifyContent="center">
        <SimpleGrid templateColumns="repeat(4, 1fr)" gap={2} mt={20}>
          {dados.map(item => (
            <Box width={300} key={item} textAlign="left">
              <Link href={`/${item}`}>
                <Text>{item}</Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Text as="footer" mt={10}>
        © All rights reserved for Vexti tecnologies
      </Text>
    </Box>
  );
}
