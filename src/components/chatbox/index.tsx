'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MDXEditor, toolbarPlugin, BoldItalicUnderlineToggles } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
export const ChatBox: React.FC = () => {
    const [text, setText] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            // Reset height to auto to get the correct scroll height
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            // Ensure the textarea doesn't exceed the maximum height
            if (textareaRef.current.scrollHeight > 160) {
                textareaRef.current.style.height = '160px';
                textareaRef.current.style.overflowY = 'auto';
            } else {
                textareaRef.current.style.overflowY = 'hidden';
            }
        }
    }, [text]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div suppressHydrationWarning className="flex flex-col w-full h-full px-4 pb-3 pt-2 bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex flex-row w-full h-full ">
                {isClient && <MDXEditor

                    markdown="Hello world"
                    className='scroll-bar w-full max-h-[150px] overflow-y-auto p-0 m-0 bg-transparent'
                    plugins={[
                        toolbarPlugin({
                            toolbarContents: () => (
                                <div className='flex items-center justify-start gap-2 p-0 m-0 bg-gray-100'>
                                    <BoldItalicUnderlineToggles />
                                </div>
                            )
                        })
                    ]}
                />}
                {/* <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={handleChange}
                    rows={1}
                    dir='auto'
                    tabIndex={0}
                    className="scroll-bar outline-none flex-grow resize-none border-0 bg-transparent text-gray-800 focus:ring-0 overflow-hidden mb-2"
                    placeholder="Type your message..."
                /> */}
                <div className="flex items-end justify-end">
                    <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>


            <div className="flex flex-row items-center gap-2">
                <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                </button>
            </div>

        </div>
    );
};
