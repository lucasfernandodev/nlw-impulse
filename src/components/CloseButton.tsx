import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
export function CloseButton(){
  return (
    <Popover.Button className="absolute top-1 right-1 text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
      <X className="m-4 h-4" weight="bold"/>
    </Popover.Button>
  )
}