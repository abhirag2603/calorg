import { nylas } from "@/app/lib/nylas";

export async function GET(){
    const authUrl= nylas.auth.urlForOAuth2({
        clientId:"",
        redirectUri:"",

    })
}