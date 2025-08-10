import React from "react";

type StrapiImageFormat = {
    url: string;
    width: number;
    height: number;
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
    const availableCandidates: Array<StrapiImageFormat> = [];

    if (image?.formats) {
        Object.values(image.formats)
            .filter((f): f is StrapiImageFormat => Boolean(f && f.url && typeof f.width === "number"))
            .forEach((format) => availableCandidates.push(format));
    }

    if (image?.url) {
        availableCandidates.push({
            url: image.url,
            width: typeof image.width === "number" ? image.width : 99999,
            height: typeof image.height === "number" ? image.height : 0,
        });
    }

    availableCandidates.sort((a, b) => a.width - b.width);

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


