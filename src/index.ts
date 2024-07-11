import { ApiKeyAuthenticationProvider, ApiKeyLocation } from "@microsoft/kiota-abstractions"
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary"
import { createBunnyApiClient as createBunnyApiClientKiota } from "./bunnyApiClient/bunnyApiClient.js"
import type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient.js"
import { createEdgeStorageApiClient as createEdgeStorageApiClientKiota } from "./edgeStorageApiClient/edgeStorageApiClient.js"
import type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient.js"
import { createStreamApiClient as createStreamApiClientKiota } from "./streamApiClient/streamApiClient.js"
import type { StreamApiClient } from "./streamApiClient/streamApiClient.js"
import { createLoggingApiClient as createLoggingApiClientKiota } from "./loggingApiClient/loggingApiClient.js"
import type { LoggingApiClient } from "./loggingApiClient/loggingApiClient.js"

export type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient.js"
export type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient.js"
export type { StreamApiClient } from "./streamApiClient/streamApiClient.js"
export type { LoggingApiClient } from "./loggingApiClient/loggingApiClient.js"

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
  baseUrl: string
}
export function createEdgeStorageApiClient({ accessKey, baseUrl }: CreateEdgeStorageApiClientParameters): EdgeStorageApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  fetchAdapter.baseUrl = baseUrl
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

export type CreateLoggingApiClientParameters = {
  accessKey: string
}
export function createLoggingApiClient({ accessKey }: CreateLoggingApiClientParameters): LoggingApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  return createLoggingApiClientKiota(fetchAdapter)
}
