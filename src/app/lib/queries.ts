import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
    query GetPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            types
            attacks {
                fast {
                    name
                    type
                }
                special {
                    name
                    type
                }
            }
            evolutions {
                id
                name
                types
            }
        }
    }
`;
