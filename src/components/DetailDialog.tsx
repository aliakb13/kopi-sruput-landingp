import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Data } from "@/types/types";

const DetailDialog = ({ data }: { data: Data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:opacity-50 cursor-pointer p-5 rounded-xl">
          <img
            className="w-full max-w-[150px] md:max-w-[250px] object-cover rounded-xl"
            src={data.image}
            alt={data.name}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[345px] md:max-w-[500px] backdrop-blur-sm border-yellow-500 border-2 ">
        <div className="flex flex-col gap-3 items-center">
          <img
            className="w-full max-h-[250px] object-cover rounded-xl"
            src={data.image}
            alt="something"
          />
        </div>
        <DialogHeader className="mt-5">
          <DialogTitle className="text-yellow-500 font-extrabold text-xl">
            {data.name}
          </DialogTitle>
          <DialogDescription>{data.description}</DialogDescription>
          <DialogDescription>RP{data.price}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="text-red-500 font-extrabold">
          {data.tag}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
