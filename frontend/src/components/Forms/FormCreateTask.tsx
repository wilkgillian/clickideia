import { VStack, Input, Textarea, Button } from '@chakra-ui/react';
import { useState, FormEvent } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { useUser } from '../../hooks/useUser';

interface FormCreateTaskProps {
  onClose: () => void;
}

function FormCreateTask({ onClose }: FormCreateTaskProps) {
  const { user } = useUser();
  const { handleCreateTask } = useTasks();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState('');

  const data = {
    title: title,
    content: content,
    list: list,
    userId: user.id
  };
  async function createTask(e: FormEvent) {
    e.preventDefault();
    await handleCreateTask(data);
    setTitle('');
    setContent('');
    setList('');
    onClose();
  }
  return (
    <VStack as="form" onSubmit={e => createTask(e)}>
      <VStack gap={4} w="100%" padding="0 3rem">
        <Input
          type="text"
          value={title}
          placeholder="Titulo da tarefa"
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Lista"
          value={list}
          onChange={e => setList(e.target.value)}
        />
        <Textarea
          placeholder="Conteudo"
          color="#fff"
          maxH={12}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button width="100%" colorScheme="teal" fontWeight="bold" type="submit">
          Salvar
        </Button>
      </VStack>
    </VStack>
  );
}

export default FormCreateTask;
