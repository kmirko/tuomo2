import UserInformation from "./user-information"

export default function AppDescription(){
    console.log('server 2')
    return(
        <div>
            <h1>AppDescription Page</h1>
            <div>
                This is the application description component (server component).
            </div>
            <UserInformation/>
        </div>
    )
}