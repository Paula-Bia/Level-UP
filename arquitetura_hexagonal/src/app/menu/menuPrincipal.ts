import TerminalUtil from "@/app/util/TerminalUtil"
import menuFundamentos from "./menuFundamentos"
import menuUsuario from "./menuUsuario"

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal") // TerminalUtil criado em util

    const [indice] = await TerminalUtil.menu([
        //Itens do menu
        "1. Fundamentos",
        "2. Usuário",
        "Sair",
    ])


    // switch para identificar a seleção do item do menu
    switch (indice) {
        case 0:
            await menuFundamentos()
            break
        case 1:
            await menuUsuario()
            break
        default:
            process.exit(0)
    }

    menuPrincipal()
}
