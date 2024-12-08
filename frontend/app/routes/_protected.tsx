import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { requireAuth } from "~/lib/utils/auth.servers";

export const loader: LoaderFunction = async ({ request }) => {
    await requireAuth(request);
    return null;
};

export default function ProtectedLayout() {
    return <Outlet />;
}