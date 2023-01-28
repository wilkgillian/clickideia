import Link from 'next/link';
import Image from 'next/image';
import { VStack } from '@chakra-ui/react';
import Logo from '../../../public/assets/logo.svg';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { VscGraph } from 'react-icons/vsc';
import BoxLinks from './BoxLinks';

export default function Sidebar() {
  const navLinks = {
    categories: {
      title: 'Categorias',
      navLinks: [
        {
          link: '/Homepage',
          title: 'Home',
          icon: AiOutlineHome
        },
        {
          link: '/Users',
          title: 'Usuários',
          icon: AiOutlineUser
        },
        {
          link: '/Mytasks',
          title: 'Minhas Tarefas',
          icon: BiTask
        },
        {
          link: '/Tasks',
          title: 'Todas as Tarefas',
          icon: FaTasks
        }
      ]
    },
    analytics: {
      title: 'Analytics',
      navLinks: [
        {
          link: '/Homepage',
          title: 'Gráfico',
          icon: BsGraphUp
        },
        {
          link: '/Homepage',
          title: 'Estatísticas',
          icon: VscGraph
        }
      ]
    }
  };

  return (
    <VStack
      left={0}
      w={300}
      h="100vh"
      gap={10}
      bg="gray.800"
      padding="2rem 1.5rem"
      alignItems="left"
    >
      <Link passHref href={'/Homepage'}>
        <Image src={Logo} width="100" height="100" alt="logo"></Image>
      </Link>
      <BoxLinks
        title={navLinks.categories.title}
        data={navLinks.categories.navLinks}
      />
      <BoxLinks
        title={navLinks.analytics.title}
        data={navLinks.analytics.navLinks}
      />
    </VStack>
  );
}
