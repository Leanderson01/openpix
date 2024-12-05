import { createClient } from "@woovi/node-sdk";
import { config } from "dotenv";
import { ChargeResponse } from "../../types";

config();

// Inicializa o cliente OpenPix usando o APP_ID do .env
const woovi = createClient({
  appId:
    "Q2xpZW50X0lkX2Y5YjNlZjJkLTIzZDQtNDRkOS1iYTAzLTdlMjA0N2FiNDU3ODpDbGllbnRfU2VjcmV0X2lxWGFLZkNZaFV2WEU1OXpCbzAwcWZxSWt3eGZKME9FVDgyK0VVNS91MUE9",
});

// Função para criar uma cobrança
export async function createCharge(
  value: number,
  customerName: string,
  customerEmail: string
) {
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

    console.log("Cobrança criada:", charge);
    return charge;
  } catch (error) {
    console.error("Erro ao criar cobrança:", error);
    throw error;
  }
}

// Função para listar cobranças
export async function listCharges(): Promise<ChargeResponse> {
  try {
    const response = await woovi.charge.list({
      limit: 10,
      skip: 0,
    });

    return {
      pageInfo: {
        skip: response.pageInfo?.skip || 0,
        limit: response.pageInfo?.limit || 10,
        totalCount: response.pageInfo?.totalCount || 0,
        hasNextPage: response.pageInfo?.hasNextPage || false,
      },
      charges: (response.charges || []).map((charge) => ({
        correlationID: charge.correlationID,
        value: charge.value,
        status: charge.status || "ACTIVE",
        customer: {
          name: charge.customer?.name || "",
          email: charge.customer?.email || "",
        },
        qrCodeImage: charge.qrCodeImage,
        brCode: charge.brCode,
        paymentLinkUrl: charge.paymentLinkUrl,
      })),
    };
  } catch (error) {
    console.error("Erro ao listar cobranças:", error);
    throw error;
  }
}

// Configuração do webhook para receber notificações
const webhookHandler = woovi.webhook.handler({
  onChargeCompleted: async (payload) => {
    console.log("Cobrança completada:", payload);
    // Implemente aqui a lógica quando uma cobrança for paga
  },
  onChargeExpired: async (payload) => {
    console.log("Cobrança expirada:", payload);
    // Implemente aqui a lógica quando uma cobrança expirar
  },
});

export const POST = webhookHandler.POST;
