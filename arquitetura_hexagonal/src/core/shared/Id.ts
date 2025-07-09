import { v4 as uuid } from "uuid" // dependencia dentro do core com impacto baixo

export default class Id {
    static gerarHash(): string {
        return uuid() // id unico universal
    }
}
