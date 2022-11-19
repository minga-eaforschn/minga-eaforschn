import 'package:logto_dart_sdk/logto_dart_sdk.dart';

import 'env.dart';

LogtoClient getLogtoClient(final Env env) => LogtoClient(
      config: LogtoConfig(
        appId: env.logtoAppId,
        endpoint: env.authEndpoint,
        resources: [env.hasuraUrl, env.backendUrl],
      ),
    );
