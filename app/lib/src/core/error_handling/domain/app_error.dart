class AppError extends Error {
  AppError(this.message, {this.stackTrace});

  final String message;
  @override
  final StackTrace? stackTrace;

  @override
  String toString() => '$runtimeType: $message';
}
