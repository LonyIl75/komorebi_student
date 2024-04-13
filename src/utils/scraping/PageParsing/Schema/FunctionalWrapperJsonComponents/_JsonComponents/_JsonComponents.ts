import { t_indexable_key } from "@shared/type.js";
import { _IComponent } from "../../_Component/_Component.js";

export type _IJsonComponents<UnionString extends  string  >  = {
    [key in UnionString ] :_IComponent
}