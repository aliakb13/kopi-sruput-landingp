import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

import { Data } from "@/types/types";

import { Flame } from "lucide-react";

const CardMenu = ({ menu }: { menu: Data }) => {
  return (
    <div className="p-1">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <p className="text-yellow-500 font-extrabold">{menu.name}</p>
          </CardTitle>
          <CardDescription>
            <div className="flex gap-2 text-xs text-red-500 font-bold">
              <span>BEST SELLER</span> <Flame size={18} />
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col aspect-square p-6 gap-5 min-h-[350px]">
          <img
            src={menu.image}
            alt={menu.name}
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <span className="font-semibold">{menu.description}</span>
        </CardContent>
        <CardFooter>
          <p className="text-blue-500">RP{menu.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardMenu;
