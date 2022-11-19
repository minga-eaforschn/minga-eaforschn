import 'dart:async';

import '../get_it/get_it.dart';
import 'data/error_report_service.dart';

void reportError({
  required String message,
  required Object error,
  StackTrace? stackTrace,
}) {
  final errorReportService = getIt<ErrorReportService>();
  unawaited(
    errorReportService.reportError(
      message: message,
      error: error,
      stackTrace: stackTrace,
    ),
  );
}
