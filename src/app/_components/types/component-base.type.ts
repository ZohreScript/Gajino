import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase={
    isDisabled?:boolean;
    clasName?:string;
    variant?:Variant;
    size?:Size;
}