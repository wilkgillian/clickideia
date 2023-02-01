import { VStack, Input, Textarea, Select, Button } from '@chakra-ui/react';
import { useState, FormEvent } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { useUser } from '../../hooks/useUser';

interface FormCreateTaskProps {
  onClose: () => void;
  id: string;
}

function FormEditTask({ id, onClose }: FormCreateTaskProps) {
  const { user } = useUser();
  const { handleEditTask } = useTasks();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState('');
  const [status, setStatus] = useState('');

  const data = {
    title: title,
    content: content,
    list: list,
    status: status
  };
  async function createTask(e: FormEvent) {
    e.preventDefault();
    await handleEditTask(id, data);
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

        <Select
          placeholder="Selecione o status da tarefa"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="making">Fazendo</option>
          <option value="completed">Completa</option>
          <option value="to_do">A Fazer</option>
          <option value="to_define">A Definir</option>
        </Select>

        <Button width="100%" colorScheme="teal" fontWeight="bold" type="submit">
          Salvar
        </Button>
      </VStack>
    </VStack>
  );
}

export default FormEditTask;
