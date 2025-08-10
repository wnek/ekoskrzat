import React from "react";

type StrapiImageFormat = {
    url: string;
    width: number;
    height: number;
    mime?: string;
};

export type StrapiImage = {
    url: string;
    width?: number | null;
    height?: number | null;
    alternativeText?: string | null;
    formats?: Record<string, StrapiImageFormat | undefined> | null;
};

export type ResponsiveImageProps = {
    image?: StrapiImage | null;
    baseUrl?: string;
    className?: string;
    alt?: string;
    sizes?: string;
    loading?: "lazy" | "eager";
    decoding?: "async" | "sync" | "auto";
    fallbackSrc?: string;
};

function toAbsoluteUrl(url: string, baseUrl?: string): string {
    if (!url) return url;
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) {
        return url;
    }
    const normalizedBase = (baseUrl || "").replace(/\/$/, "");
    return `${normalizedBase}${url}`;
}

export function ResponsiveImage({
    image,
    baseUrl,
    className,
    alt,
    sizes,
    loading = "lazy",
    decoding = "async",
    fallbackSrc,
}: ResponsiveImageProps) {
    const candidateMapByWidth: Map<number, StrapiImageFormat> = new Map();

    if (image?.formats) {
        for (const maybeFormat of Object.values(image.formats)) {
            if (!maybeFormat || !maybeFormat.url || typeof maybeFormat.width !== "number") continue;
            if (!candidateMapByWidth.has(maybeFormat.width)) {
                candidateMapByWidth.set(maybeFormat.width, maybeFormat);
            }
        }
    }

    // Include original only if width is known; otherwise keep it as fallback src, not in srcSet
    if (image?.url && typeof image.width === "number") {
        if (!candidateMapByWidth.has(image.width)) {
            candidateMapByWidth.set(image.width, {
                url: image.url,
                width: image.width,
                height: typeof image.height === "number" ? image.height : 0,
            });
        }
    }

    const availableCandidates: Array<StrapiImageFormat> = Array.from(candidateMapByWidth.values()).sort(
        (a, b) => a.width - b.width
    );

    const srcSet = availableCandidates
        .map((c) => `${toAbsoluteUrl(c.url, baseUrl)} ${c.width}w`)
        .join(", ");

    const selected = availableCandidates[availableCandidates.length - 1];
    let src: string | undefined;
    let width: number | undefined;
    let height: number | undefined;

    if (selected) {
        src = toAbsoluteUrl(selected.url, baseUrl);
        width = selected.width;
        height = selected.height;
    } else if (fallbackSrc) {
        src = toAbsoluteUrl(fallbackSrc, baseUrl);
    } else if (image?.url) {
        // Fallback to original even if width is unknown (no srcSet in that case)
        src = toAbsoluteUrl(image.url, baseUrl);
    }

    const resolvedAlt = alt ?? image?.alternativeText ?? "";
    const resolvedSizes = sizes ?? "100vw";

    if (!src) {
        return (
            <div
                className={
                    className ? `${className} bg-stone-200` : "bg-stone-200 w-full h-full rounded-md"
                }
                aria-hidden="true"
            />
        );
    }

    return (
        <img
            className={className}
            src={src}
            srcSet={srcSet || undefined}
            sizes={srcSet ? resolvedSizes : undefined}
            alt={resolvedAlt}
            loading={loading}
            decoding={decoding}
            width={width}
            height={height}
        />
    );
}

export default ResponsiveImage;


