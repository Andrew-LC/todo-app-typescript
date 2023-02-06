import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from './api';

const queryClient = useQueryClient();

export const deleteMutation = useMutation({
    mutationFn: (id: any) => {
        return deleteTodo(id)
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
})
