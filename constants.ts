
import { SelectOption, CashFlowTransactionType } from './types';

export const NAV_ITEMS = [
  { name: 'Início', path: '/' },
  { name: 'Cadastro de Produtos', path: '/cadastro-produtos' },
  { name: 'Entradas e Investimentos', path: '/entradas-investimentos' },
  { name: 'Vendas', path: '/vendas' },
  { name: 'Balancete', path: '/balancete' },
];

export const CASH_FLOW_TRANSACTION_TYPES: SelectOption[] = [
  { value: 'Aporte Sócio', label: 'Aporte Sócio' },
  { value: 'Aluguel', label: 'Aluguel' },
  { value: 'Retirada', label: 'Retirada' },
  { value: 'Outra Receita', label: 'Outra Receita' },
  { value: 'Outra Despesa', label: 'Outra Despesa' },
];

export const MONTH_NAMES: string[] = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
