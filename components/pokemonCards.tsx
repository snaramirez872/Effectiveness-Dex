import Link from "next/link";

interface PokemonCardProps {
    name: string
}

export function PokemonCard({ name } : PokemonCardProps) {
    return (
        <Link
            href={name.toLowerCase()}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-transparent m-3 px-5 py-4 text-center w-fit transition-colors dark:border-red-300"
            key={name + "Card"}
        >
            <h2 className="text-2xl font-semibold">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
        </Link>
    );
}