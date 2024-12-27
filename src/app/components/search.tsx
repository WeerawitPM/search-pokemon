'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/?name=${search}`);
        }
    };

    return (
        <div>
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Search for a Pokémon"
                    className="w-full grow"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
        </div>
    );
};

export default Search;
