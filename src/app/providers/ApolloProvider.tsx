"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import client from "../lib/apollo-client";

const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;