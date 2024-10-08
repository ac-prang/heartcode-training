import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Preston
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems(?)</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Music</div>
            </CardContent>
        </Card>
    </div>
  );
}