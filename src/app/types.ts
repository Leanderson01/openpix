export type Customer = {
  name: string;
  email: string;
  correlationID: string;
}

export type Charge = {
  customer: Customer;
  value: number;
  comment: string;
  identifier: string;
  correlationID: string;
  transactionID: string;
  status: string;
  additionalInfo: any[];
  fee: number;
  discount: number;
  valueWithDiscount: number;
  expiresDate: string;
  type: string;
  paymentLinkID: string;
  createdAt: string;
  updatedAt: string;
  brCode: string;
  expiresIn: number;
  pixKey: string;
  paymentLinkUrl: string;
  qrCodeImage: string;
  globalID: string;
  paymentMethods: {
    pix: any; // você pode tipar isso mais especificamente se precisar
  };
}

export type ChargeResponse = {
  charge: Charge;
  correlationID: string;
  brCode: string;
}

export type ListResponse = {
  pageInfo: {
    skip: number;
    limit: number;
    totalCount: number;
    hasNextPage: boolean;
  };
  charges: Charge[];
}
