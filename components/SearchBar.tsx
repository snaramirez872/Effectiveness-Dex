import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const formatQUery = query.trim().toLowerCase();
        if (formatQUery) {
            onSearch(formatQUery);
        }
    };

    return (
        <form onSubmit={handleSearch} className='flex gap-2 p-4'>
            <input 
                type='text'
                placeholder='Enter Pokémon name...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='border rounded p-2 text-black'
            />
            <button
                type='submit'
                className='bg-blue-500 text-white p-2 rounded'
            >
                Search
            </button>
        </form>
    );
}
