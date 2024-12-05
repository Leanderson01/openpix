export async function createNewCharge(
  value: number,
  customerName: string,
  customerEmail: string
) {
  try {
    const response = await fetch("/api/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, customerName, customerEmail }),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar cobrança:", error);
    throw error;
  }
}

export async function getCharges() {
  try {
    const response = await fetch("/api/charges");
    return await response.json();
  } catch (error) {
    console.error("Erro ao listar cobranças:", error);
    throw error;
  }
}
