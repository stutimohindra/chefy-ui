import { NextRequest, NextResponse } from "next/server";

type Row = {
  id?: string;
  name: string;
  cuisine?: string;
  ratings: number;
  orders: number;
  price: number;
};

function retrieveChunks(): Row[] {
  return [
    {
      name: "Ricardi",
      cuisine: "Italian",
      ratings: 1.5,
      orders: 100,
      price: 20,
    },
    {
      name: "Sita",
      cuisine: "Indian",
      ratings: 6.5,
      orders: 10,
      price: 20,
    },
    {
      name: "Geeta",
      cuisine: "Indian",
      ratings: 6.5,
      orders: 10,
      price: 20,
    },
    {
      name: "Manila",
      cuisine: "Colombian",
      ratings: 5.5,
      orders: 10,
      price: 20,
    },
  ];
}

function rowsToContext(rows: Row[]): { contextText: string; ids: string[] } {
  const passages: string[] = [];
  const ids: string[] = [];

  rows.forEach((r, idx) => {
    const id = r.id ?? `cook#${idx + 1}`;
    const cuisine = r.cuisine ?? "";
    passages.push(
      `id: ${id}
       Name: ${r.name}
       Cuisine: ${cuisine}
       Rating: ${r.ratings}
       Orders: ${r.orders}
       Price: ${r.price}`
    );
    ids.push(id);
  });

  const contextText = passages.join("\n---\n");
  return { contextText, ids };
}

const SYSTEM = `
You are a strict QA bot.
You must answer ONLY using the passages inside <context>.
If the answer is not fully supported by the passages, reply exactly: "I don't know."
Do NOT use prior knowledge. Do NOT infer beyond the passages.
Return a SINGLE concise sentence in plain English, no JSON.
Do NOT add extra commentary or formatting.
`;

export async function POST(req: NextRequest) {
  const raw = await req.text();

  let body = raw ? JSON.parse(raw) : {};

  const input: string = typeof body?.input === "string" ? body.input : "";

  if (!input.trim()) {
    return NextResponse.json(
      { error: "Missing 'input' in JSON body" },
      { status: 400 }
    );
  }

  const rows = retrieveChunks();

  const { contextText, ids } = rowsToContext(rows);

  const SYSTEM = `
  <context>
  ${contextText || "(no results)"}
  </context>
  
  Question: ${input}
  
 Write ONE fluent sentence. If unknown, reply exactly: "I don't know."
 IMPORTANT: Use the noun/verb "cook" to describe entities. Do NOT use "restaurant", "eatery", or synonyms.Return the name of cook with ratings,cuisine and price
  `;

  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MISTRAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-large-latest",
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: input },
      ],
    }),
  });

  const data = await response.json();

  const reply =
    data.choices[0]?.message?.content || "⚠️ No response from model";

  return NextResponse.json({ message: reply });
}
