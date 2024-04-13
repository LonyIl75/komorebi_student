import { exec } from "child_process"
import util from "util"

export const execPromisify = util.promisify(exec)
