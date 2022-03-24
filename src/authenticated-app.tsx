import React from "react";
import { ProjectListScreen } from "screens/projectList";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg"
import { Dropdown, Menu, Button } from "antd";
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter as Router} from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";

export const AuthenticatedApp = () => {
    
    // const value: any = undefined
    return <Container>
        {/* {value.notExist} */}
        <PageHeader></PageHeader>
        <Main>
            {/* <ProjectListScreen></ProjectListScreen> */}
            <Router>
                <Routes>
                    <Route path={'/projects'} element={<ProjectListScreen></ProjectListScreen>}></Route>
                    <Route path={'/projects/:projectId/*'} element={<ProjectScreen></ProjectScreen>}></Route>
                    {/* <Navigate to={"/projects"} /> */}
                    <Route path='*' element={<Navigate to={"/projects"}></Navigate>}></Route>
                </Routes>
            </Router>
            
        </Main>
        
    </Container>
} 

const PageHeader = () => {
    const { logout, user } = useAuth()
    return <Header between={true}>
    <HeaderLeft gap={true}>
        <Button type="link" onClick={resetRoute}>
            <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'}/>
        </Button>
        
        <h2>项目</h2>
        <h2>用户</h2>
    </HeaderLeft>
    <HeaderRight>
        {/* <button onClick={logout}>登出</button>     */}
        <Dropdown overlay={
            <Menu>
                <Menu.Item key={'logout'}>
                    <Button type={'link'} onClick={logout}>登出</Button>
                </Menu.Item>
            </Menu>
        }>
            <Button type={'link'} onClick={e => e.preventDefault()}>
                Hi, {user?.name}
            </Button>
        </Dropdown>
    </HeaderRight>
    
</Header> 
}

const HeaderItem = styled.h3`
margin-right: 3rem;
`

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr;
height: 100vh;
`

const Header = styled(Row)`
padding: 3.2rem;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
z-index: 1;
`

const HeaderLeft = styled(Row)``

const HeaderRight = styled(Row)``

const Main = styled.main`
`