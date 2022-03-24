import { useEffect } from "react";
import { User } from "screens/projectList/searchPanel";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (param?: Partial<User>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<User[]>()

    useEffect(() => {
        run(client('users', {data: cleanObject(param || {})}))
        // setIsLoading(true)
        // client('projects', {data: cleanObject(debouncedParam)}).then(setList).catch(error => {
        //   setList([])
        //   setError(error)
        // }).finally( () => setIsLoading(false))
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            
        //   if(response.ok) {
        //     setList(await response.json())
        //   }
        // })
    }, [param])
    return result
}