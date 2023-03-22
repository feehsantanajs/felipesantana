import { create } from "zustand"

type ControlModalProps = {
  valueModal: boolean;
  setValueModal: () => void;
 
}
const useControlModal = create<ControlModalProps>(
  (set)=> ({
    valueModal:false,
    setValueModal: () =>{
      set((state) =>({ valueModal: !state.valueModal }))
    },
  })
)

export default useControlModal