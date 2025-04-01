"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { PokemonListByType } from "@/components/PokemonList";

export default function TypePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const lastSearch = searchParams.get("query") || "";
    const { type } = useParams<{ type : string }>();

    return (
        <>
            <button onClick={() => router.replace(`/?query=${lastSearch}`)}>Back</button>
            <PokemonListByType type={type} />
        </>
    );
}
