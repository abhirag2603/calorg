import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function onBoardingRoute(){
    return(
        <div className="min-h-screen w-screen flex items-center justify-center">
        <Card>
            <CardHeader>
            <CardTitle>
                Welcome to Cal<span className="text-primary">Org</span>
            </CardTitle>
            <CardDescription>We need some information to setup your profile!</CardDescription>
            </CardHeader>
             <form>
             <CardContent className="grid gap-y-5">
                <div className="grid gap-y-2">
                    <Label>FullName</Label>
                    <Input placeholder="john doe"/>
                </div>
                <div className="grid gap-y-2">
                <Label>Username</Label>
                <div className="flex rounded-md">
                    <span className="inline-flex items center p-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">CalOrg.com/</span>
                    <Input placeholder="example-user1" className="rounded-l-none"/>
                </div>
                </div>

            </CardContent>
            <CardFooter>
                <Button className="w-full">Submit</Button>
            </CardFooter>
             </form>
        </Card>
        </div>
    )
}