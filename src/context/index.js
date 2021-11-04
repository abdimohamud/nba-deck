import React from "react";
const TeamContext = React.createContext({});
export const TeamProvider = TeamContext.Provider;
export const TeamConsumer = TeamContext.Consumer;
export default TeamContext;