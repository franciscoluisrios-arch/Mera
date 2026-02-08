
export interface Product {
  id: string;
  name: string;
  averageCost: number;
}

export interface ProductEntry {
  id: string;
  date: string; // YYYY-MM-DD
  productId: string;
  quantity: number;
  unitValue: number;
  total: number;
}

export interface ProductSale {
  id: string;
  date: string; // YYYY-MM-DD
  productId: string;
  quantity: number;
  unitPrice: number;
  totalSale: number;
}

export type CashFlowTransactionType = 'Aporte Sócio' | 'Aluguel' | 'Retirada' | 'Outra Receita' | 'Outra Despesa';

export interface CashFlowTransaction {
  id: string;
  date: string; // YYYY-MM-DD
  type: CashFlowTransactionType;
  description: string;
  amount: number; // Positive for income, negative for expense/withdrawal
}

export interface BalanceSheetRow {
  label: string;
  january: number;
  february: number;
  totalYear: number;
  isTotal?: boolean;
  chartDataKey?: string; // For identifying data to chart
}

// For UI selection
export interface SelectOption {
  value: string;
  label: string;
}

// For CSV export
export interface ExportColumn<T> {
  header: string;
  accessor: keyof T | ((item: T) => string | number | undefined | null);
  isCurrency?: boolean;
}