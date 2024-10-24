'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useActionState } from "react";
import { onBoardingAction } from "../actions";
import { useForm } from '@conform-to/react';
import { parseWithZod } from "@conform-to/zod";
import { onBoardingSchema } from "../lib/zodSchemas";
import { SubmitButton } from "../components/SubmitButton";

export default function onBoardingRoute() {
  const [lastResult, action] = useActionState(onBoardingAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onBoardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to Cal<span className="text-primary">Org</span>
          </CardTitle>
          <CardDescription>We need some information to set up your profile!</CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <CardContent className="grid gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue}
                key={fields.fullName.key}
                placeholder="John Doe"
                id="fullName"
              />
            </div>
            <p className="text-red-500 text-sm">{fields.fullName.errors}</p>

            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center p-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">CalOrg.com/</span>
                <Input
                  name={fields.userName.name}
                  defaultValue={fields.userName.initialValue}
                  key={fields.userName.key}
                  placeholder="example-user1"
                  className="rounded-l-none"
                  id="userName"
                />
              </div>
              <p className="text-red-500 text-sm">{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" className="w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
