"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="container mx-auto px-4 py-32 text-center max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight">Something broke.</h1>
            <p className="mt-4 text-muted-foreground">
                We hit an unexpected error. Try again, or head back home.
            </p>
            <div className="mt-8 flex gap-3 justify-center">
                <Button onClick={reset}>Try again</Button>
                <Button variant="outline" onClick={() => router.push("/")}>
                    Go home
                </Button>
            </div>
        </section>
    );
}