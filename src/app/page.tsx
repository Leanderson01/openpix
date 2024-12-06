"use client";

import { useState, useEffect } from "react";
import { createNewCharge, getCharges } from "./api";
import { Charge, ListResponse } from "./types";

export default function Home() {
  const [charges, setCharges] = useState<Charge[]>([]);
  const [formData, setFormData] = useState({
    value: "",
    customerName: "",
    customerEmail: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCharges();
  }, []);

  const loadCharges = async () => {
    try {
      const response = await getCharges();
      const data = response as ListResponse;
      setCharges(data.charges || []);
    } catch (error) {
      console.error("Erro ao carregar cobranças:", error);
      setCharges([]);
    }
  };

  console.log(charges);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createNewCharge(
        Number(formData.value) * 100,
        formData.customerName,
        formData.customerEmail
      );

      setFormData({
        value: "",
        customerName: "",
        customerEmail: "",
      });

      await loadCharges();
    } catch (error) {
      console.error("Erro ao criar cobrança:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Sistema de Cobranças PIX</h1>

      <div className="grid grid-cols-2 gap-4 justify-center w-full">
        <div className="sticky top-8 mb-12 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Nova Cobrança</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Valor (R$)
              </label>
              <input
                type="number"
                step="0.01"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Nome do Cliente
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email do Cliente
              </label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {loading ? "Criando..." : "Criar Cobrança"}
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cobranças Recentes</h2>
          <div className="space-y-4">
            {Array.isArray(charges) && charges.length > 0 ? (
              charges.map((charge) => (
                <div
                  key={charge.correlationID}
                  className="border p-4 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        Cliente: {charge.customer.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Email: {charge.customer.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        Valor: R$ {(charge.value / 100).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status: {charge.status}
                      </p>
                    </div>

                    {charge.qrCodeImage && (
                      <div className="flex flex-col items-center space-y-2">
                        <img
                          src={charge.qrCodeImage}
                          alt="QR Code PIX"
                          className="w-32 h-32"
                        />
                        {charge.brCode && (
                          <div className="flex flex-col items-center">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                // @ts-ignore
                                navigator.clipboard.writeText(charge.brCode!);                                
                                alert("Código PIX copiado!");
                              }}
                              className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              Copiar código PIX
                            </button>
                            {charge.paymentLinkUrl && (
                              <a
                                href={charge.paymentLinkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:underline mt-1"
                              >
                                Abrir link de pagamento
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Nenhuma cobrança encontrada.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
