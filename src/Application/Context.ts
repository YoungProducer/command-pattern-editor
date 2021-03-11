import { createContext } from "react";
import { Application } from ".";

interface IApplicationContext {
  application: Application;
}

export const ApplicationContext = createContext<IApplicationContext>({
  application: {} as Application
});

export const ApplicationProvider = ApplicationContext.Provider;
