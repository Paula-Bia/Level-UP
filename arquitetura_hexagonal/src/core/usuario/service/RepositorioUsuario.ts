import Usuario from "../model/Usuario"

//Exemplo de necessidade de negocio: Persistir que
// os dados dos clientes estejam em algum lugar
export default interface RepositorioUsuario {
    inserir(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
}
// percebe-se que não existe nenhuma demanda nesse caso que especifique
// onde esses dados devem ser persistidos (oracle por exemplo)
