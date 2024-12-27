type Props = {
    pokemon: {
        id: string;
        number: string;
        name: string;
        weight: {
            minimum: string;
            maximum: string;
        }
        height: {
            minimum: string;
            maximum: string;
        }
        classification: string;
        types: string[];
        resistant: string[];
        weaknesses: string[];
        attacks: {
            fast: [
                {
                    name: string;
                    type: string;
                }
            ];
            special: [
                {
                    name: string;
                    type: string;
                }
            ];
        };
        image: string;
        evolutions: [
            {
                id: string;
                number: string;
                name: string;
                types: string[];
                image: string;
            }
        ];
    }
};