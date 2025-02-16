// src/types/next.d.ts
import "next";

declare module "next" {
  export interface PageProps {
    params: {
      username: string;
      eventName: string;
    };
    searchParams: { 
      [key: string]: string | string[] | undefined 
    };
  }
}