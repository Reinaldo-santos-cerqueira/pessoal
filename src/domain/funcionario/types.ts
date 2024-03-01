export interface Funcionario {
    id: number;
    ativo: boolean,
    nome: string;
    cpf: number;
    carteira_trabalho: number;
    nascimento: string;
    empresa_id: number;
    cargo: string;
    registrado: boolean,
    centro_resultado_id: number
}