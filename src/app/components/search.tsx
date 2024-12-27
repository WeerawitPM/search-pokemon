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
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Pokémon"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
