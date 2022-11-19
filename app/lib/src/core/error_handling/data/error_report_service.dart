import 'package:graphql/client.dart';
import 'package:injectable/injectable.dart';

import '../../logger.dart';
import '../domain/app_error.dart';
import '../domain/app_exception.dart';

@lazySingleton
class ErrorReportService with LoggerProvider {
  const ErrorReportService();

  Future<void> reportAppException(
    AppException exception, {
    StackTrace? stackTrace,
  }) async =>
      reportError(
        message: exception.message,
        error: exception,
        stackTrace: stackTrace,
      );

  Future<void> reportAppError(AppError error) async => reportError(
        message: error.message,
        error: error,
        stackTrace: error.stackTrace,
      );

  Future<void> reportGraphQLError(GraphQLError error,
          {required StackTrace stackTrace}) async =>
      reportError(
        message: error.message,
        error: error,
        stackTrace: stackTrace,
      );

  Future<void> reportError({
    required String message,
    required Object error,
    StackTrace? stackTrace,
  }) async {
    logger.e(
      message,
      error,
      stackTrace,
    );
  }
}
