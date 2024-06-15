import { ApiKeyAuthenticationProvider, ApiKeyLocation } from "@microsoft/kiota-abstractions"
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary"
import { createBunnyApiClient as createBunnyApiClientKiota } from "./generated/BunnyApiClient/bunnyApiClient"
import type { BunnyApiClient } from "./generated/BunnyApiClient/bunnyApiClient"
import { createEdgeStorageApiClient as createEdgeStorageApiClientKiota } from "./generated/EdgeStorageApiClient/edgeStorageApiClient"
import type { EdgeStorageApiClient } from "./generated/EdgeStorageApiClient/edgeStorageApiClient"
import { createStreamApiClient as createStreamApiClientKiota } from "./generated/StreamApiClient/streamApiClient"
import type { StreamApiClient } from "./generated/StreamApiClient/streamApiClient"


export type CreateBunnyApiClientParameters = {
  accessKey: string
}
export function createBunnyApiClient({ accessKey }: CreateBunnyApiClientParameters): BunnyApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  return createBunnyApiClientKiota(fetchAdapter)
}

export type CreateEdgeStorageApiClientParameters = {
  accessKey: string
}
export function createEdgeStorageApiClient({ accessKey }: CreateEdgeStorageApiClientParameters): EdgeStorageApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  return createEdgeStorageApiClientKiota(fetchAdapter)
}

export type CreateStreamApiClientParameters = {
  accessKey: string
}
export function createStreamApiClient({ accessKey }: CreateStreamApiClientParameters): StreamApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  return createStreamApiClientKiota(fetchAdapter)
}
