export interface Charge {
  correlationID: string;
  value: number;
  status: string;
  customer: {
    name: string;
    email: string;
  };
  qrCodeImage?: string;
  brCode?: string;
  paymentLinkUrl?: string;
}

export interface ListResponse {
  pageInfo: {
    skip: number;
    limit: number;
    totalCount: number;
    hasNextPage: boolean;
  };
  charges: Charge[];
}

export interface ChargeResponse {
  pageInfo: {
    skip: number;
    limit: number;
    totalCount: number;
    hasNextPage: boolean;
  };
  charges: Charge[];
}

export interface WooviCharge {
  correlationID: string;
  value: number;
  status: string;
  customer: {
    name: string;
    email: string;
  };
}

export interface WooviResponse extends ListResponse {
  items: WooviCharge[];
}
