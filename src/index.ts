// see also "packages/third-party-apis/bunny/src/index.ts"

import {
  ApiKeyAuthenticationProvider,
  ApiKeyLocation,
} from "@microsoft/kiota-abstractions";
import {
  FetchRequestAdapter,
  HeadersInspectionHandler,
  KiotaClientFactory,
  ParametersNameDecodingHandler,
  RedirectHandler,
  RetryHandler,
  UserAgentHandler,
} from "@microsoft/kiota-http-fetchlibrary";
import type { Middleware } from "@microsoft/kiota-http-fetchlibrary";

import { createBunnyApiClient as createBunnyApiClientKiota } from "./bunnyApiClient/bunnyApiClient.js";
import type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient.js";
import { createEdgeStorageApiClient as createEdgeStorageApiClientKiota } from "./edgeStorageApiClient/edgeStorageApiClient.js";
import type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient.js";
import { createLoggingApiClient as createLoggingApiClientKiota } from "./loggingApiClient/loggingApiClient.js";
import type { LoggingApiClient } from "./loggingApiClient/loggingApiClient.js";
import { createStreamApiClient as createStreamApiClientKiota } from "./streamApiClient/streamApiClient.js";
import type { StreamApiClient } from "./streamApiClient/streamApiClient.js";

export type { BunnyApiClient } from "./bunnyApiClient/bunnyApiClient.js";
export type { EdgeStorageApiClient } from "./edgeStorageApiClient/edgeStorageApiClient.js";
export type { LoggingApiClient } from "./loggingApiClient/loggingApiClient.js";
export type { StreamApiClient } from "./streamApiClient/streamApiClient.js";

function createFetchRequestAdapter(
  authenticationProvider: ApiKeyAuthenticationProvider,
): FetchRequestAdapter {
  // reference
  // - https://github.com/microsoft/kiota-typescript/blob/main/packages/http/fetch/src/middlewares/middlewareFactory.ts#L28
  // - https://github.com/microsoft/kiota-typescript/blob/main/packages/http/fetch/src/middlewares/middlewareFactory.ts#L28
  // - https://github.com/microsoft/kiota-typescript/blob/main/packages/http/fetch/src/middlewares/browser/middlewareFactory.ts#L27
  const middleware: Middleware[] = [
    new RetryHandler(),
    new RedirectHandler(),
    new ParametersNameDecodingHandler(),
    new UserAgentHandler(),
    new HeadersInspectionHandler(),
  ];
  const httpClient = KiotaClientFactory.create(undefined, middleware);
  const fetchAdapter = new FetchRequestAdapter(
    authenticationProvider,
    undefined,
    undefined,
    httpClient,
  );
  return fetchAdapter;
}

export type CreateBunnyApiClientParameters = {
  accessKey: string;
};
export function createBunnyApiClient({
  accessKey,
}: CreateBunnyApiClientParameters): BunnyApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(
    accessKey,
    "accesskey",
    ApiKeyLocation.Header,
  );
  const fetchAdapter = createFetchRequestAdapter(authenticationProvider);
  return createBunnyApiClientKiota(fetchAdapter);
}

export type CreateEdgeStorageApiClientParameters = {
  accessKey: string;
  baseUrl: string;
};
export function createEdgeStorageApiClient({
  accessKey,
  baseUrl,
}: CreateEdgeStorageApiClientParameters): EdgeStorageApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(
    accessKey,
    "accesskey",
    ApiKeyLocation.Header,
  );
  const fetchAdapter = createFetchRequestAdapter(authenticationProvider);
  fetchAdapter.baseUrl = baseUrl;
  return createEdgeStorageApiClientKiota(fetchAdapter);
}

export type CreateStreamApiClientParameters = {
  accessKey: string;
};
export function createStreamApiClient({
  accessKey,
}: CreateStreamApiClientParameters): StreamApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(
    accessKey,
    "accesskey",
    ApiKeyLocation.Header,
  );
  const fetchAdapter = createFetchRequestAdapter(authenticationProvider);
  return createStreamApiClientKiota(fetchAdapter);
}

export type CreateLoggingApiClientParameters = {
  accessKey: string;
};
export function createLoggingApiClient({
  accessKey,
}: CreateLoggingApiClientParameters): LoggingApiClient {
  const authenticationProvider = new ApiKeyAuthenticationProvider(
    accessKey,
    "accesskey",
    ApiKeyLocation.Header,
  );
  const fetchAdapter = createFetchRequestAdapter(authenticationProvider);
  return createLoggingApiClientKiota(fetchAdapter);
}
