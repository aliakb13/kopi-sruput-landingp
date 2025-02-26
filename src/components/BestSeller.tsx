import { useData } from "@/App";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "./ui/card";

import CarouselProduct from "./CarouselProduct";

const BestSeller = () => {
  const data = useData();
  const coffeData = data?.filter((food) => food.tag === "kopi sruput");
  const teaData = data?.filter((food) => food.tag === "teh sruput");
  const chickenData = data?.filter((food) => food.tag == "ayam d kremes");

  return (
    <section className="bg-black py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-lg font-bold text-white tracking-widest">
          PRODUCTS
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3">
          OUR <span className="text-yellow-500">SPECIAL MENU</span>
        </h3>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iure velit dolore mollitia, corporis quaerat.
        </p>
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="coffe" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-3 gap-3">
            <TabsTrigger
              value="coffe"
              className="data-[state=active]:bg-yellow-500"
            >
              Coffe Shop
            </TabsTrigger>
            <TabsTrigger
              value="teh"
              className="data-[state=active]:bg-yellow-500"
            >
              Teh Seruput
            </TabsTrigger>
            <TabsTrigger
              value="ayam"
              className="data-[state=active]:bg-yellow-500"
            >
              Ayam Kremes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="coffe" className="flex justify-center">
            <CarouselProduct data={coffeData} />
          </TabsContent>
          <TabsContent value="teh" className="flex justify-center">
            <CarouselProduct data={teaData} />
          </TabsContent>
          <TabsContent value="ayam" className="flex justify-center">
            <CarouselProduct data={chickenData} />
          </TabsContent>
        </Tabs>
        {/* <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name">Name</label>
                  <input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="username">Username</label>
                  <input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <button>Save changes</button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="current">Current password</label>
                  <input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="new">New password</label>
                  <input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <button>Save password</button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs> */}
      </div>
    </section>
  );
};

export default BestSeller;
