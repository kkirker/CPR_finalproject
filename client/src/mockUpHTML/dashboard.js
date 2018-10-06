import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
    <DashboardWrapper>
        <NavBar>
            <Logo />
            <DashBoardLinks>
                <Switch>
                    <Link to="/">Dashboard</Link>
                    <Link to="/Quizzes" >Quizzes</Link>
                    <Link to="/Resources" >Resources</Link>
                    <Link to="/???" >???</Link>
                </Switch>
            </DashBoardLinks>
        </NavBar>
        <Content>
            <Intro />
            <Quizzes />
            <Resources>
            </Resources>
        </Content>
    </DashboardWrapper>
)

export default Dashboard;