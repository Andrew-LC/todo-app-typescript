function TodoContainer({ children }: any) {
    return (
        <div className="backdrop-sepia-0 bg-white/30 p-4 w-full flex flex-col gap-4 rounded-md items-center lg:w-5/12 md:w-8/12">
            {children}
        </div>
    );
}

export default TodoContainer;
