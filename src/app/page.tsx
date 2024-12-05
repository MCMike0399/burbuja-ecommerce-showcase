import Image from "next/image";

export default function Home() {
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <div className="row-span-2">
            <Image src="/images/logo.svg" alt="Burbuja Ecommerce" width={200} height={200} />
         </div>
         <h1 className="text-4xl font-bold text-center">Burbuja Ecommerce</h1>
         <p className="text-center">A template for building an e-commerce site with Next.js</p>
      </div>
   );
}
