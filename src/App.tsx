import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/main';
import TodoContainer from './components/todoContainer';
import TodoBox from './components/todoBox';
import Navbar from './components/navbar';
import Spinner from './components/spinner';
import ErrorPage from './components/errpage';
import { getTodos, postTodo } from './api';
import { TodoInterface, PostDataInterface } from './interfaces/global-interfaces';
import {
    useQuery,
    useMutation,
    useQueryClient,
} from 'react-query'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [temp, setTemp] = useState("");
    const [isRefetch, setRefetch] = useState(false);

    const queryClient = useQueryClient()

    const { isLoading, error, data, refetch } = useQuery('todos', getTodos);

    useEffect(() => {
        console.log("Do nothing")
        refetch()
    }, [isRefetch])


    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries('todos')
            setRefetch(!isRefetch)
        },
    })

    const handleSubmit = () => {
        if (temp) {
            const data: PostDataInterface = {
                data: {
                    todo: temp,
                    status: false
                }
            }
            mutation.mutate(data)
            setTemp("");
        } else {
            toast.error("The innput field is empty", {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTemp(e.currentTarget.value);
    }

    if (isLoading) {
        return <Spinner />
    }


    if (error) {
        return <ErrorPage />
    }


    return (
        <Main>
            <Navbar />
            <ToastContainer className="text-center" />
            <div className="bg-darker-bg mt-20 flex shadow-lg rounded-md w-[400px] h-[50px] mb-4">
                <input value={temp || ""} className="bg-[#41106b] text-white flex-1 ml-3 outline-0"
                    type="text"
                    placeholder="Enter a todo"
                    onChange={handleChange}
                />
                <button
                    className="bg-dark-orange text-white rounded-md text-center pr-2 pl-2"
                    onClick={handleSubmit}>
                    Add a todo
                </button>
            </div>
            <TodoContainer>
                {
                    isLoading ? <span>Updating...</span> :
                        data.map((todo: TodoInterface) => {
                            return <TodoBox todo={todo.todo} status={todo.status} _id={todo._id} callback={setRefetch} />
                        })
                }
            </TodoContainer>
        </Main>
    );
}




export default App;
