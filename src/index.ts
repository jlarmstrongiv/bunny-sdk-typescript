import { ApiKeyAuthenticationProvider, ApiKeyLocation } from "@microsoft/kiota-abstractions"
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary"
import { createBunnyApiClient as createBunnyApiClientKiota } from "./bunnyApiClient/bunnyApiClient"
import type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient"
import { createEdgeStorageApiClient as createEdgeStorageApiClientKiota } from "./edgeStorageApiClient/edgeStorageApiClient"
import type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient"
import { createStreamApiClient as createStreamApiClientKiota } from "./streamApiClient/streamApiClient"
import type { StreamApiClient } from "./streamApiClient/streamApiClient"
import { createLoggingApiClient as createLoggingApiClientKiota } from "./loggingApiClient/loggingApiClient"
import type { LoggingApiClient } from "./loggingApiClient/loggingApiClient"

export type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient"
export type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient"
export type { StreamApiClient } from "./streamApiClient/streamApiClient"
export type { LoggingApiClient } from "./loggingApiClient/loggingApiClient"

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

export type CreateLoggingApiClientParameters = {
  accessKey: string
}
export function createLoggingApiClient({ accessKey }: CreateLoggingApiClientParameters): LoggingApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(accessKey, "AccessKey", ApiKeyLocation.Header)
  const fetchAdapter = new FetchRequestAdapter(authenticationProvider)
  return createLoggingApiClientKiota(fetchAdapter)
}
