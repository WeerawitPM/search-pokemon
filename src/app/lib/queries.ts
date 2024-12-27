import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
    query GetPokemon($name: String!) {
        pokemon(name: $name) {
            id
            number
            name
            weight {
                minimum
                maximum
            }
            height{
                minimum
                maximum
            }
            classification
            types
            resistant
            weaknesses
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
            image
            evolutions {
                id
                number
                name
                types
                image
            }
        }
    }
`;
