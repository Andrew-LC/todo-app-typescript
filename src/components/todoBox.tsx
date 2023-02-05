import { TodoInterface } from '../interfaces/global-interfaces'
import { deleteTodo, updateTodo } from '../api';

import 'react-toastify/dist/ReactToastify.css';

export default function TodoBox({ todo, status, _id, callback }: any) {

    const handleDelete = (e: React.FormEvent<HTMLInputElement>) => {
        const id: string = e.target.parentElement.id;
        deleteTodo(id);
        callback([]);
    }

    const handleUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        const id: string = e.target.parentElement.id;
        updateTodo(id, !status)
        callback([]);
    }

    return (
        <div id={_id} className="bg-[#845c8e] shadow-none border-none flex border-2 rounded-md w-[90%] h-[50px] gap-4  items-center justify-between flex-wrap">
            <input
                className="ml-2 rounded-full w-[25px] h-[25px] rounded-md"
                type="checkbox"
                checked={status || undefined}
                onClick={handleUpdate} />
            <span className="text-[#d9c8dc]">{todo}</span>
            <i onClick={handleDelete} className="fa fa-trash pr-4 text-zinc-600 cursor-pointer hover:text-red-400" aria-hidden="true"></i>
        </div>);
}
