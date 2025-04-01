"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamsHandler({ setQuery }: { setQuery: (q: string) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setQuery(initialQuery);
  }, [searchParams, setQuery]);

  return null; // This component only updates state, no need to render anything
}
