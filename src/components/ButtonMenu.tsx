import useControlModal from "@/hook/useControlModal";
import { FaArrowRight } from "react-icons/fa";

export function ButtonMenu() {
  const setModal = useControlModal((state) => state.setValueModal);
  return (
    <button
      className="hidden items-center gap-1 text-sm p-2 rounded  transition duration-300 ease-in-out hover:bg-slate-800 lg:flex"
      onClick={() => setModal()}
    >
      Press <span className="bg-slate-500 rounded px-2">control</span>{" "}
      <span className="bg-slate-500 rounded px-2">M</span> to begin
      <FaArrowRight />
    </button>
  );
}
