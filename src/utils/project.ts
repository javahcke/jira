import { useEffect } from "react"
import { Project } from "screens/projectList/list"
import { cleanObject } from "utils"
import { useHttp } from "./http"
import { useAsync } from "./use-async"

export const useProjects = (param?: Partial<Project>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<Project[]>()

    useEffect(() => {
        run(client('projects', {data: cleanObject(param || {})}))
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