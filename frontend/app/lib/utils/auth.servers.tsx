import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "site_auth",
        secure: process.env.NODE_ENV === "production",
        secrets: [process.env.SESSION_SECRET || "default-secret"],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
    },
});

export async function requireAuth(request: Request) {
    const session = await getSession(request);
    if (!session.has("authenticated")) {
        throw redirect("/login");
    }
    return session;
}

export async function getSession(request: Request) {
    const cookie = request.headers.get("Cookie");
    return sessionStorage.getSession(cookie);
}

export async function createUserSession(authenticated: boolean, redirectTo: string) {
    const session = await sessionStorage.getSession();

    session.set("authenticated", authenticated);

    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session),
        },
    });
}