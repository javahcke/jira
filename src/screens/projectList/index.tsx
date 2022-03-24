import React from 'react'
import { SearchPanel } from "./searchPanel"
import { List } from "./list"
import { useState, useEffect } from "react"
import { cleanObject, useMount, useDebounce, useDocumentTitle } from "../../utils"
import { useHttp } from 'utils/http'
import styled from "@emotion/styled";
import { Typography } from 'antd'
import { useAsync } from 'utils/use-async'
import { Project } from 'screens/projectList/list'
import { useProjects } from 'utils/project'
import { useUsers } from 'utils/user'
import { useUrlQueryParam } from 'utils/url'
import { useProjectsSearchParams } from './util'

export const ProjectListScreen = () => {

  useDocumentTitle('项目列表', false)

  // const [, setParam] = useState({
  //   name:'',
  //   personId:''
  // })
  // const [keys] = useState<('name' | 'personId')[]>(['name','personId'])
  
  const [param, setParam] = useProjectsSearchParams()

  const { isLoading, error, data:list } = useProjects( useDebounce(param, 1000))

  const { data: users } = useUsers()

  return <Container>
    <h1>项目列表</h1>
    <SearchPanel users={ users || [] } param={ param } setParam={setParam}></SearchPanel>
    { error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
    <List loading={ isLoading } users={ users || [] } dataSource={ list || [] }></List>
  </Container>
}
 
ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
padding: 3.2rem;
`