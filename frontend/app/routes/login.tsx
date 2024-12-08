import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { createUserSession } from "~/lib/utils/auth.servers";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const password = formData.get("password");

    const response = await fetch("http://localhost:1337/api/gallery-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
    });

    if (!response.ok) {
        return json({ error: "Nieprawidłowe hasło" });
    }

    return createUserSession(true, "/parentsGallery");
};

export default function Login() {
    const actionData = useActionData<typeof action>();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Form method="post" className="w-full max-w-xs flex flex-col gap-4">
                <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 rounded border"
                    placeholder="Wprowadź hasło"
                />
                {actionData?.error && (
                    <p className="text-red-500 mt-2">{actionData.error}</p>
                )}
                <button
                    type="submit"
                    className="items-center justify-between gap-6 rounded-full bg-green-500 py-2 p-8 text-white 2xl:text-xl hover:bg-green-600"
                >
                    Dalej
                </button>
            </Form>
        </div>
    );
}