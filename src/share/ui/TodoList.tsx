import React from 'react';
export function TodoList() {
    return (
<div className="flex flex-col">
                <h1 className="text-center text-[#b83f45] dark:text-cyan-500 hover:text-cyan-500 text-[80px] my-[40px] font-extralight">
                    todos</h1>
                <div className="flex relative ">
                    <div className="absolute left-[20px] top-[20px] cursor-pointer" id="toggle">
                    </div>
                    <input id="input" placeholder="What needs to be done?"
                        className="hover:border-[2px] dark:text-white dark:bg-slate-600 border-[#b83f45] italic py-4 bg-white w-[550px]  shadow-2xl h-[65px] rounded-[5px] pl-[60px] font-extralight text-2xl outline-none "/>
                    
                </div>
                <ul
                    className=" shadow-2xl bg-white dark:bg-slate-600 border-t border-[#e6e6e6] text-2xl text-[#484848] dark:text-[#e6e6e6] font-extralight"
                    id="list">
                </ul>
                <footer id="footer"
                    className="hidden dark:bg-slate-600 dark:text-white flex px-[15px] py-[10px] bg-white shadow-2xl justify-between">
                    <div id="counter">item left</div>
                    <div className="flex gap-2.5" id="filter">
                        <a href="#/" className="p-1 border-pink-500 dark:border-cyan-500">All</a>
                        <a href="#/active" className="p-1 border-pink-500 dark:border-cyan-500">Active</a>
                        <a href="#/completed" className="p-1 border-pink-500 dark:border-cyan-500">Completed</a>
                    </div>
                    <button className="hover:underline" id="clear-completed">Clear completed</button>
                </footer>
            
            </div>
    );
}