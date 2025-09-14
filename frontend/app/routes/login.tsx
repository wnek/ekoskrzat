import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, MetaFunction } from "@remix-run/react";
import { createUserSession } from "~/lib/utils/auth.servers";
import { API_BASE_URL } from "~/lib/config";

export const meta: MetaFunction = () => {
    return [
        {
            name: "robots",
            content: "index, no-follow",
        },
    ];
};


export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const password = formData.get("password");

    const response = await fetch(`${API_BASE_URL}/api/gallery-auth`, {
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
                    className="items-center justify-between gap-6 rounded-full bg-green-600 py-2 p-8 text-white 2xl:text-xl hover:bg-green-800"
                >
                    Dalej
                </button>
            </Form>
        </div>
    );
}