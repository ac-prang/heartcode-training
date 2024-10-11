import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["Blue Sky", "some Grass", "that good shit"];

  return (
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl">Are you here for
      	<FlipWords words={words}/>
    	</h1>
      <p className = "text-sm text-center">Then you are at the right place</p>
  	</div>
	</div>
  )
}
