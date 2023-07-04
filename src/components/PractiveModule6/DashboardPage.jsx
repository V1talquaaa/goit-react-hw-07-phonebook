import { useFetchContacts } from "./contactsApi"
export const DashBoardPage = () => {
    const { data: contacts } = useFetchContacts();

    return (
        <div>{contacts}</div>
    )
}