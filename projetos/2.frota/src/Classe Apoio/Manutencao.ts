class Manutencao {
    public id: string;
    public veiculo: Veiculos;
    public tipo: TipoManutencao;
    public dataManutencao: Date;
    public custo: number;
    public descricao: string;
    public quilometragemManutencao: number;

    constructor(
        id: string,
        veiculo: Veiculos,
        tipo: TipoManutencao,
        dataManutencao: Date,
        custo: number,
        descricao: string,
        quilometragemManutencao: number
    ) {
        this.id = id;
        this.veiculo = veiculo;
        this.tipo = tipo;
        this.dataManutencao = dataManutencao;
        this.custo = custo;
        this.descricao = descricao;
        this.quilometragemManutencao = quilometragemManutencao;
    }
    calcularProximaManutencao(): Date {
        const intervaloDias = this.tipo === TipoManutencao.
    }
}