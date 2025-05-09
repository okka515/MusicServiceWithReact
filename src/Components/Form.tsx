import React, { ChangeEvent, FormEvent, useState } from "react";

type FormProps = {
    onSearch: (query: string) => void;
};

const Form: React.FC<FormProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="曲名・アーティスト名を検索"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-sm"
            >
                検索
            </button>
        </form>
    );
};

export default Form;
