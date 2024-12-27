'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../lib/queries';

const Result = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name },
        skip: !name,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.pokemon) return <p>Pokemon not found</p>;

    const { pokemon } = data;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>Types: {pokemon.types.join(', ')}</p>

            <h3>Fast Attacks:</h3>
            <ul>
                {pokemon.attacks.fast.map((attack: any, idx: number) => (
                    <li key={idx}>{attack.name} ({attack.type})</li>
                ))}
            </ul>

            <h3>Special Attacks:</h3>
            <ul>
                {pokemon.attacks.special.map((attack: any, idx: number) => (
                    <li key={idx}>{attack.name} ({attack.type})</li>
                ))}
            </ul>

            <h3>Evolutions:</h3>
            <ul>
                {pokemon.evolutions?.map((evolution: any) => (
                    <li
                        key={evolution.id}
                        onClick={() => router.push(`/?name=${evolution.name}`)}
                        style={{ cursor: 'pointer', color: 'blue' }}
                    >
                        {evolution.name}
                    </li>
                )) || <p>No evolutions</p>}
            </ul>
        </div>
    );
};

export default Result;
