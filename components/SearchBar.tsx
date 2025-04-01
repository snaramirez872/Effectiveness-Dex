"use client"
import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchParamsHandler from "./SearchParamsHandler";

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
        if (query) performSearch(query); // if user goes back from types page
    }, [query, performSearch]);

    return (
        <Suspense fallback={<p>Loading search...</p>}>
            <SearchParamsHandler setQuery={setQuery} />
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    performSearch(query.trim().toLowerCase());
                }} 
                className='flex gap-2 p-4'
            >
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
        </Suspense>
    );
}
