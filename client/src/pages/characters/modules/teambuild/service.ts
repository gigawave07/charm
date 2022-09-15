import { sendRequest, url } from "../../../../api"
import { Character } from "@server/modules/characters/models"

const moduleName = "characters"

export namespace CharacterService {
	export function create(data: Character): Character {
		return sendRequest(url(moduleName, "/createCharacter"), data) as unknown as Character
	}
	export function getAll() {
		return sendRequest(url(moduleName, "/getAllCharacters"))
	}
	export function deleteAll() {
		return sendRequest(url(moduleName, "/deleteAllCharacter"))
	}
}