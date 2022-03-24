/* eslint-disable react/jsx-no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from "screens/projectList"
import { TsReactTest } from "tryUseArray"
import { LoginScreen } from "screens/login"
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated-app'
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallback } from 'components/lib';

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      {/* <TsReactTest></TsReactTest> */}
      {/* <LoginScreen></LoginScreen> */}
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      { user ? <AuthenticatedApp></AuthenticatedApp> : <UnauthenticatedApp></UnauthenticatedApp> }
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
