import Usuario from "../../core/usuario/model/Usuario"

// moc para banco de dados em memoria para continuar testando sem depender
// da infraestrutura do projeto. Ou seja caso algum serviço caia,
// será possivel testar a aplicação, um dos principios de SOLID, que é a inversão de dependencias
export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario) {
        const items = RepositorioUsuarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(
            usuario.email
        )
        if (usuarioExistente) return
        items.push(usuario)
    }

    async buscarPorEmail(
        email: string
    ): Promise<Usuario | null> {
        const items = RepositorioUsuarioEmMemoria.items
        return items.find((u) => u.email === email) ?? null
    }
}
