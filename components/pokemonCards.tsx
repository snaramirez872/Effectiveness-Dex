import Link from "next/link";

interface PokemonCardProps {
    name: string
}

export function PokemonCard({ name } : PokemonCardProps) {
    return (
        <Link
            href={name.toLowerCase()}
            className="group rounded-lg border border-transparent px-8 py-4 text-center w-fit transition-colors hover:border-red-300"
            key={name + "Card"}
        >
            <h2 className="mb-3 text-2xl font-semibold">
                {name}
            </h2>
        </Link>
    );
}