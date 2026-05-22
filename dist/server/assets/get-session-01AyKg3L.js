import { i as getRequest } from "../server.js";
import { t as authConfig } from "./auth-z6bPHT1_.js";
import { getSession } from "start-authjs";
//#region src/lib/get-session.ts
async function getCurrentSession() {
	return getSession(getRequest(), authConfig);
}
//#endregion
export { getCurrentSession as t };
