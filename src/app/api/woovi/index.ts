import { createClient } from "@woovi/node-sdk";
import { config } from "dotenv";
import { ChargeResponse, ListResponse } from "../../types";

config();

const woovi = createClient({
  appId: "Q2xpZW50X0lkX2Y5YjNlZjJkLTIzZDQtNDRkOS1iYTAzLTdlMjA0N2FiNDU3ODpDbGllbnRfU2VjcmV0X2lxWGFLZkNZaFV2WEU1OXpCbzAwcWZxSWt3eGZKME9FVDgyK0VVNS91MUE9",
});

export async function createCharge(
  value: number,
  customerName: string,
  customerEmail: string
): Promise<ChargeResponse> {
  try {
    const charge = await woovi.charge.create({
      correlationID: new Date().getTime().toString(),
      value,
      comment: "Pagamento via PIX",
      customer: {
        name: customerName,
        email: customerEmail,
      },
    });

    return charge as unknown as ChargeResponse;
  } catch (error) {
    console.error("Erro ao criar cobrança:", error);
    throw error;
  }
}

export async function listCharges(): Promise<ListResponse> {
  try {
    const response = await woovi.charge.list({
      limit: 10,
      skip: 0,
    });

    return response as unknown as ListResponse;
  } catch (error) {
    console.error("Erro ao listar cobranças:", error);
    throw error;
  }
}

const webhookHandler = woovi.webhook.handler({
  onChargeCompleted: async (payload) => {
    console.log("Cobrança completada:", payload);
  },
  onChargeExpired: async (payload) => {
    console.log("Cobrança expirada:", payload);
  },
});

export const POST = webhookHandler.POST;
