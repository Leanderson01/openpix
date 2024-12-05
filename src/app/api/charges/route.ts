import { NextResponse } from "next/server";
import { createCharge, listCharges } from "../woovi";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { value, customerName, customerEmail } = body as {
      value: number;
      customerName: string;
      customerEmail: string;
    };

    const charge = await createCharge(value, customerName, customerEmail);
    return NextResponse.json(charge);
  } catch (error) {
    console.error("Erro na rota POST /api/charges:", error);
    return NextResponse.json(
      { error: "Erro ao criar cobrança", message: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const charges = await listCharges();
    return NextResponse.json(charges);
  } catch (error) {
    console.error("Erro na rota GET /api/charges:", error);
    return NextResponse.json(
      { error: "Erro ao listar cobranças", message: error },
      { status: 500 }
    );
  }
}
