"use client"
import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");

    const performSearch = useCallback((searchQuery: string) => {
        if (searchQuery) {
            router.replace(`/?query=${searchQuery}`, {scroll: false}); // update URL
            onSearch(searchQuery);
        }
    }, [router, onSearch]);

    useEffect(() => {
        if (query) onSearch(query); // if user goes back from types page
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const formatQuery = query.trim().toLowerCase();
        if (formatQuery) performSearch(formatQuery);
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
