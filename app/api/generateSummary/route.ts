import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
	const { todos } = await request.json();
	console.log(todos);

	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		temperature: 0.8,
		n: 1,
		stream: false,
		messages: [
			{
				role: "system",
				content: "Bem vindo ao Todo app! Limite de resposta de 200 caracteres!",
			},
			{
				role: "user",
				content: `Tudo bom? Estou fornecendo um resumo de todos. ${JSON.stringify(
					todos
				)}`,
			},
		],
	});

	const { data } = response;

	return NextResponse.json(data.choices[0].message);
}
