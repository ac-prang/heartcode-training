import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Homu from "@/app/assets/inucurry_homu.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Preston
                </CardTitle>
                <CardDescription>
                    I like music & art
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Image src={Homu} width={300} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Preston
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems(?)</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Music</div>
            </CardContent>
        </Card>
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>I have added an alert</AlertDescription>
        </Alert>
    </div>
  );
}