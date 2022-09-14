import { ApiModule } from "../../../../api"

class CharacterApi extends ApiModule {
	readonly moduleName = "characters"
	readonly create = this.url(this.moduleName, "/createCharacter")
	readonly getAll = this.url(this.moduleName, "/getAllCharacters")
	readonly deleteAll = this.url(this.moduleName, "/deleteAllCharacter")
}

export const characterApi = new CharacterApi()