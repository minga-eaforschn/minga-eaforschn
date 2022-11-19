import 'package:dio/dio.dart';

import '../logger.dart';

class LoggingInterceptor with LoggerProvider implements Interceptor {
  @override
  void onError(final DioError err, final ErrorInterceptorHandler handler) {
    logger.e(
      'Error occurred in request: ${err.response}',
      err.error,
      err.stackTrace,
    );
    handler.next(err);
  }

  @override
  void onRequest(
    final RequestOptions options,
    final RequestInterceptorHandler handler,
  ) {
    logger.i(
      'Sending request to ${options.path}\nbody: ${options.data}\nheaders: ${options.headers}',
    );
    handler.next(options);
  }

  @override
  void onResponse(
    final Response response,
    final ResponseInterceptorHandler handler,
  ) {
    logger.i(
      'Received response from ${response.requestOptions.path}: ${response.data}',
    );
    handler.next(response);
  }
}

abstract class AuthHeaderInterceptor extends Interceptor with LoggerProvider {
  Future<String?> getAccessToken();

  @override
  void onRequest(
    final RequestOptions options,
    final RequestInterceptorHandler handler,
  ) async {
    final accessToken = await getAccessToken();
    if (accessToken == null) {
      logger.w('Sending request to backend without an access token');
    } else {
      options.headers['Authorization'] = 'Bearer $accessToken';
    }
    handler.next(options);
  }
}

class BackendAuthHeaderInterceptor extends AuthHeaderInterceptor {
  BackendAuthHeaderInterceptor();

  @override
  Future<String?> getAccessToken() async => null;
}
