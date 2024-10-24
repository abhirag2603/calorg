
import Nylas from "nylas";  

export const nylas= new Nylas({
apiKey:process.env.NYLAS_API_KEY!,
apiUri:process.env.NYLAS_API_URI!,
})


export const nylasConfig={
    clientId:"",
    redirectUri:"",
    apiKey:process.env.NYLAS_API_KEY!,
    apiUri:process.env.NYLAS_API_URI!
}