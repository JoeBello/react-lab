import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client"
import { Router } from "./routes"

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</ApolloProvider>
)
